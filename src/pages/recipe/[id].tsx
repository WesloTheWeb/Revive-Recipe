import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { RecipeData, RecipeTotalNutrients, MineralsElectrolytes, Macros } from '@/interfaces/recipeTypes';
import DetailsHeader from '@/components/DetailsHeader/DetailsHeader';
import PageLayout from '@/components/PageLayout/PageLayout';
import DetailsNutrition from '@/components/DetailsNutrition/DetailsNutrition';
import DetailsCuisineLabels from '@/components/DetailsCuisineLabels/DetailsCuisineLabels';
import DetailsIngredients from '@/components/DetailsIngredients/DetailsIngredients';
import Loading from '@/components/Loading/Loading';
import Button, { ButtonTypes } from '@/containers/Button/Button';

const RecipeDetails = () => {
  const router = useRouter();
  const { id } = router.query; // This grabs the "id" (or "uri") from the URL

  const [recipe, setRecipe] = useState<RecipeData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Use the useSelector hook to get the recipe from the Redux store
  const recipeFromStore = useSelector((state: RootState) => state.recipe.recipes[id as string]);

  // TODO: Unit test to debug to check URIs 
  // console.log('ID:', id, 'URI:', recipeFromStore?.uri);
  const actualId = Array.isArray(id) ? id[0] : id;
  // console.log('Decoded URI:', id); // check

  useEffect(() => {
    if (actualId && recipeFromStore?.uri) {
      fetch(`/api/recipeDetails/${encodeURIComponent(actualId)}?uri=${encodeURIComponent(recipeFromStore.uri)}`)
        .then((response) => {
          console.log("API Response:", response);
          return response.json();
        })
        .then((data) => {
          console.log("API Data:", data);
          setRecipe(data.recipe);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("API Error:", error);
          setIsLoading(false);
        });
    }
  }, [actualId, recipeFromStore]);

  if (isLoading) {
    return <Loading />;
  };

  if (!recipe) {
    return <p>Recipe not found.</p>;
  };

  // ? Mapping refactor
  const mapTotalNutrientsToMacros = (nutrients: RecipeTotalNutrients): Macros => ({
    protein: nutrients.PROCNT,
    fats: nutrients.FAT,
    carbs: nutrients.CHOCDF,
  });

  const mapTotalNutrientsToMinerals = (nutrients: RecipeTotalNutrients): MineralsElectrolytes => ({
    cholesterol: nutrients.CHOLE,
    sodium: nutrients.NA,
    calcium: nutrients.CA,
    magnesium: nutrients.MG,
    potassium: nutrients.K,
    iron: nutrients.FE,
  });

  return (
    <PageLayout>
      <div className='detailed-recipe-page'>
        <DetailsHeader
          img={recipe.image}
          label={recipe.label}
        />
        <Link href="/home">
          <Button buttonType={ButtonTypes.RETURN} />
        </Link>
        <Button
          buttonType={ButtonTypes.VIEWRECIPE}
          handleClick={() => window.open(recipe.url, "_blank")}
        />
        {/* Render other recipe details as needed */}
        <section className='detailed-recipe-body'>
          <div className='cuisine-labels'>
            {recipe.mealType &&
              <DetailsCuisineLabels
                meal
                title={recipe.mealType}
              />
            }
            {recipe.dishType &&
              <DetailsCuisineLabels title={recipe.dishType} dishType />
            }
          </div>
          <div className='nutrition-details'>
            <DetailsNutrition
              calories={recipe.calories}
              servings={recipe.yield || 1}
              minerals={mapTotalNutrientsToMinerals(recipe.totalNutrients)}
              macros={mapTotalNutrientsToMacros(recipe.totalNutrients)}
            />
          </div>
          <div className='ingredients-details'>
            <DetailsIngredients
              ingredients={recipe.ingredientLines}
            />
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default RecipeDetails;