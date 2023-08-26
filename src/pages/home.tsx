import { useState, useEffect } from 'react';
import PageLayout from '@/components/PageLayout/PageLayout';
import RecipeRandomCard from '@/components/RecipeRandomCard/RecipeRandomCard';
import RecipeSearchBar from '@/containers/RecipeSearchBar/RecipeSearchBar';
import Button, { ButtonTypes } from '@/containers/Button/Button';
import Link from 'next/link';

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
    yield: number;
    calories: number;
    totalNutrients: {
      PROCNT: Nutrient;
      FAT: Nutrient;
      CHOCDF: Nutrient;
      CHOLE: Nutrient;
      NA: Nutrient;
      CA: Nutrient;
      MG: Nutrient;
      K: Nutrient;
      FE: Nutrient;
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
          <div className="left-placeholder">
            <Link href="/">
              <Button buttonType={ButtonTypes.RETURN} />
            </Link>
          </div>
          <div className="recipe-content">
            <RecipeSearchBar />
            <h2>Recipes you may like...</h2>
            <section className='randomized-recipe-container'>
              {randomRecipes.hits && randomRecipes.hits.map((hit, index) => {
                const servingSize = hit.recipe.yield;
                // extract protein
                const calorieCount = hit.recipe.calories;
                const proteinInfo = hit.recipe.totalNutrients.PROCNT;
                const fatInfo = hit.recipe.totalNutrients.FAT;
                // others
                const carbInfo = hit.recipe.totalNutrients.CHOCDF;
                const sodiumInfo = hit.recipe.totalNutrients.NA;
                const calciumInfo = hit.recipe.totalNutrients.CA;
                const magnesiumInfo = hit.recipe.totalNutrients.MG;
                const potassiumInfo = hit.recipe.totalNutrients.K;
                const ironInfo = hit.recipe.totalNutrients.FE;

                const convertedCalorie = (num: number) => Math.ceil(num);

                const cholesterolInfo = hit.recipe.totalNutrients.CHOLE;

                return (
                  <RecipeRandomCard
                    key={index}
                    image={hit.recipe.image}
                    recipeName={hit.recipe.label}
                    description={hit.recipe.label} // Modify as needed.
                    calories={convertedCalorie(calorieCount)}
                    servingSize={servingSize}
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
                    minerals={{
                      cholesterol: {
                        quantity: cholesterolInfo.quantity,
                        unit: cholesterolInfo.unit
                      },
                      sodium: {
                        quantity: sodiumInfo.quantity,
                        unit: sodiumInfo.unit
                      },
                      calcium: {
                        quantity: calciumInfo.quantity,
                        unit: calciumInfo.unit
                      },
                      magnesium: {
                        quantity: magnesiumInfo.quantity,
                        unit: magnesiumInfo.unit
                      },
                      potassium: {
                        quantity: potassiumInfo.quantity,
                        unit: potassiumInfo.unit
                      },
                      iron: {
                        quantity: ironInfo.quantity,
                        unit: ironInfo.unit
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