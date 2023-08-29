import { useState, useEffect } from 'react';
import Link from 'next/link';
import useModal from '@/hooks/useModal';
import PageLayout from '@/components/PageLayout/PageLayout';
import RecipeRandomCard from '@/components/RecipeRandomCard/RecipeRandomCard';
import RecipeSearchBar from '@/containers/RecipeSearchBar/RecipeSearchBar';
import Button, { ButtonTypes } from '@/containers/Button/Button';
import Overlay from '@/components/Overlay/Overlay';
import Modal from '@/components/Modal/Modal';
import RecipeCarousel from '@/components/RecipeCarousel/RecipeCarousel';
import QueryResults from '@/containers/QueryResults/QueryResults';

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

  const { isVisible, showModal, hideModal } = useModal();
  const [selectedRecipeIngredients, setSelectedRecipeIngredients] = useState<string[] | null>(null);
  const [randomRecipes, setRandomRecipes] = useState<RandomRecipesType | null>(null);

  const suggestedRecipeQueries = () => {

    const foodKeywords = [
      // Common proteins
      "chicken", "beef", "salmon", "tofu", "turkey", "shrimp", "tempeh", "pork", "tuna", "lamb",

      // Vegetables
      "broccoli", "eggplant", "kale", "spinach", "peppers", "carrots", "zucchini", "cauliflower", "asparagus", "brussels sprouts",

      // Legumes and grains
      "lentils", "quinoa", "chickpeas", "mushroom", "rice", "barley", "oats", "beans", "peas", "corn",

      // Fruits
      "apple", "banana", "cherry", "date", "grape", "kiwi", "lemon", "mango", "orange", "pineapple",

      // Popular dishes and cuisines
      "pizza", "burger", "sushi", "taco", "curry", "pasta", "ramen", "sandwich", "stew", "omelette",

      // Dairy and alternatives
      "cheese", "yogurt", "milk", "butter", "cream", "almond milk", "soy milk", "ghee", "ice cream", "custard",

      // Sweets and desserts
      "chocolate", "cake", "cookie", "brownie", "pie", "tart", "pudding", "muffin", "pancake", "waffle",

      // Drinks
      "tea", "coffee", "smoothie", "cocktail", "juice", "shake", "latte", "cappuccino", "soda", "lemonade",

      // Misc.
      "bread", "egg", "salsa", "sauce", "dressing", "dip", "seasoning", "marinade", "snack", "breakfast"
    ];

    return foodKeywords[Math.floor(Math.random() * foodKeywords.length)];
  };
  let QUERY = suggestedRecipeQueries();
  const URL = `/api/searchRecipe?query=${QUERY}`;

  // Shuffle Algorithm - O(n) time
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

  if (!randomRecipes) return null;
  console.log(randomRecipes);

  return (
    <>
      {isVisible &&
        <>
          <Overlay closeOverlay={hideModal} />
          <Modal
            ingredients
            description={selectedRecipeIngredients}
            title="Ingredients"
            closeModal={hideModal} />
        </>
      }

      <PageLayout>
        <section className='recipeSeachPageGridContainer'>
          <div className="left-placeholder">
            <Link href="/">
              <Button buttonType={ButtonTypes.RETURN} />
            </Link>
          </div>
          <div className="recipe-content">
            <RecipeSearchBar />
            <QueryResults
              setSelectedRecipeIngredients={setSelectedRecipeIngredients}
              showModal={showModal}
            />
            <h2>Recipes you may like...</h2>
            <section className='recipe-carousel-mobile'>
              <RecipeCarousel
                recipes={randomRecipes.hits}
                showModal={showModal}
                setSelectedRecipeIngredients={setSelectedRecipeIngredients}
              />
            </section>
            <section className='random-recipe-list'>
              <section className='randomized-recipe-container'>
                {randomRecipes.hits && randomRecipes.hits.map((hit, index) => {
                  const servings = hit.recipe.yield;
                  const calorieCount = hit.recipe.calories;
                  const proteinInfo = hit.recipe.totalNutrients.PROCNT;
                  const fatInfo = hit.recipe.totalNutrients.FAT;
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
                      label={hit.recipe.label}
                      showModal={() => {
                        setSelectedRecipeIngredients(hit.recipe.ingredientLines); // here is where we query specific ingredients
                        showModal();
                      }}
                      description={hit.recipe.label} // Modify as needed.
                      calories={convertedCalorie(calorieCount)}
                      servings={servings}
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
            </section>
          </div>
          <div className="right-placeholder"></div>
        </section>
      </PageLayout>
    </>
  );
};