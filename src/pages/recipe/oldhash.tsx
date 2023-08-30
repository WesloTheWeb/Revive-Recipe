import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const RecipeDetails = () => {
  const router = useRouter();
  const { id } = router.query; // This grabs the "id" (or "uri") from the URL

  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      // Fetch the detailed information for this recipe
      fetch(`/api/recipeDetails/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setRecipe(data.recipe); // This assumes the returned data has a "recipe" field.
          setIsLoading(false);
        })
        .catch(() => setIsLoading(false)); // In real use, you might want to set an error state here too
    }
  }, [id]);

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
      {/* Render other recipe details as needed */}
    </div>
  );
};

export default RecipeDetails;
