import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { RecipeData } from '@/interfaces/recipeTypes';

const RecipeDetails = () => {
  const router = useRouter();
  const { id } = router.query; // This grabs the "id" (or "uri") from the URL

  const [recipe, setRecipe] = useState<RecipeData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Use the useSelector hook to get the recipe from the Redux store using the hash
  const recipeFromStore = useSelector((state: RootState) => state.recipe.recipes[id as string]);

  useEffect(() => {
    if (id && recipeFromStore?.uri) {
      // Fetch the detailed information for this recipe
      // fetch(`/api/recipeDetails/${id}?uri=${recipeFromStore.uri}`)
      fetch(`/api/recipeDetails/${encodeURIComponent(id)}?uri=${encodeURIComponent(recipeFromStore.uri)}`)
        .then((response) => response.json())
        .then((data) => {
          setRecipe(data.recipe); // This assumes the returned data has a "recipe" field.
          setIsLoading(false);
        })
        .catch(() => setIsLoading(false)); // In real use, you might want to set an error state here too
    }
  }, [id, recipeFromStore]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div>
      <h1>{recipe.label}</h1>
      <img src={recipe.image} alt={recipe.label} />
      I AM HERE
      {/* Render other recipe details as needed */}
    </div>
  );
};

export default RecipeDetails;
