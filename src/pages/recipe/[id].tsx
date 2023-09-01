import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { RecipeData } from '@/interfaces/recipeTypes';
import DetailsHeader from '@/components/DetailsHeader/DetailsHeader';
import PageLayout from '@/components/PageLayout/PageLayout';
import DetailsNutrition from '@/components/DetailsNutrition/DetailsNutrition';
import DetailsCuisineLabels from '@/components/DetailsCuisineLabels/DetailsCuisineLabels';

const RecipeDetails = () => {
  const router = useRouter();
  const { id } = router.query; // This grabs the "id" (or "uri") from the URL

  const [recipe, setRecipe] = useState<RecipeData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Use the useSelector hook to get the recipe from the Redux store
  const recipeFromStore = useSelector((state: RootState) => state.recipe.recipes[id as string]);

  // debug to check
  console.log('ID:', id, 'URI:', recipeFromStore?.uri);
  const actualId = Array.isArray(id) ? id[0] : id;
  console.log('Decoded URI:', id); // check

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
    return <p>Loading...</p>;
  }

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <PageLayout>
      <div className='detailed-recipe-page'>
        <DetailsHeader
          img={recipe.image}
          label={recipe.label}
        />
        <Link href="/home">Return</Link>
        {/* Render other recipe details as needed */}
        <section className='detailed-recipe-body'>
          <div>
            <DetailsCuisineLabels
              label={recipe.mealType}
            />
          </div>
          <div>
            <DetailsNutrition
              calories={recipe.calories}
              servings={recipe.yield}
            />
          </div>
        </section>
      </div>

    </PageLayout>
  );
};

export default RecipeDetails;
