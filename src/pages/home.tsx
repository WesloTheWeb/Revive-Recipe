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
import { RecipeData, ExtendedRecipeData, RandomRecipesType } from '@/interfaces/recipeTypes';

export default function Home() {

  function convertToExtendedRecipeData(hit: { recipe: RecipeData }): ExtendedRecipeData {
    return {
      ...hit.recipe,
      description: '', // Placeholder or fetch from another source if you have one.
      servings: hit.recipe.yield,
      macros: {
        protein: hit.recipe.totalNutrients.PROCNT,
        fats: hit.recipe.totalNutrients.FAT,
        carbs: hit.recipe.totalNutrients.CHOCDF
      },
      minerals: {
        cholesterol: hit.recipe.totalNutrients.CHOLE,
        sodium: hit.recipe.totalNutrients.NA,
        calcium: hit.recipe.totalNutrients.CA,
        magnesium: hit.recipe.totalNutrients.MG,
        potassium: hit.recipe.totalNutrients.K,
        iron: hit.recipe.totalNutrients.FE
      }
    }
  };

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
                  const extendedData = convertToExtendedRecipeData(hit);
                  console.log("Hit Data:", hit);
                  console.log("Transformed Data:", extendedData);

                  return (
                    <RecipeRandomCard
                      key={hit.recipe.uri} // using URI as a unique identifier
                      recipe={convertToExtendedRecipeData(hit)}
                      showModal={() => {
                        setSelectedRecipeIngredients(hit.recipe.ingredientLines);
                        showModal();
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