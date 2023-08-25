import { useState, useEffect } from 'react';
import PageLayout from '@/components/PageLayout/PageLayout';
import RecipeRandomCard from '@/components/RecipeRandomCard/RecipeRandomCard';
import RecipeSearchBar from '@/containers/RecipeSearchBar/RecipeSearchBar';

interface Nutrient {
  quantity: number;
  unit: string;
};

interface RecipeType {
  recipe: {
    label: string;
    image: string;
    ingredientLines: string[];
    source: string;
    totalTime: number;
    totalNutrients: {
      PROCNT: Nutrient;  // TODO: add FATS, CARBS etc. in similar fashion
      FAT: Nutrient;
      CHOCDF: Nutrient;
      // ... other nutrient types
    };
  };
};

interface RandomRecipesType {
  hits: RecipeType[];
};

export default function Home() {

  const QUERY = 'chicken';
  const URL = `/api/searchRecipe?query=${QUERY}`;
  const [randomRecipes, setRandomRecipes] = useState<RandomRecipesType | null>(null);

  const shuffleAndTakeThree = (arr: []) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    };

    return arr.slice(0, 3);  // This will return only the first 3 items
  };

  useEffect(() => {
    fetch(URL)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        data.hits = shuffleAndTakeThree(data.hits);
        setRandomRecipes(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error.message);
      });
  }, []);

  if (!randomRecipes) return null; // TODO Loading spinner or error.

  console.log(randomRecipes);

  return (
    <>
      <PageLayout>
        <section className='recipeSeachPageGridContainer'>
          <div className="left-placeholder"></div>
          <div className="recipe-content">
            <RecipeSearchBar />
            <h2>Recipes you may like...</h2>
            <section className='randomized-recipe-container'>
              {randomRecipes.hits && randomRecipes.hits.map((hit, index) => {
                // extract protein
                const proteinInfo = hit.recipe.totalNutrients.PROCNT;
                const fatInfo = hit.recipe.totalNutrients.FAT;
                const carbInfo = hit.recipe.totalNutrients.CHOCDF;

                return (
                  <RecipeRandomCard
                    key={index}
                    image={hit.recipe.image}
                    recipeName={hit.recipe.label}
                    description={hit.recipe.label} // Modify as needed.
                    macros={{
                      protein: {
                        quantity: proteinInfo.quantity,
                        unit: proteinInfo.unit
                      },
                      fats: {
                        quantity: fatInfo.quantity,
                        unit: fatInfo.unit
                      },
                      carbs: {
                        quantity: carbInfo.quantity,
                        unit: carbInfo.unit
                      }
                    }}
                  />
                );
              })
              }
            </section>
          </div>
          <div className="right-placeholder"></div>
        </section>
      </PageLayout>
    </>
  );
};