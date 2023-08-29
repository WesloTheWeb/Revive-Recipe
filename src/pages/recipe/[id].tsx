import React from 'react';
import { fetchRecipeByUri } from '@/helpers/apiHelpers';

// This is your actual page component
const RecipePage = ({ recipe }) => {
  // Render your page using the recipe prop
  return <div>{recipe.name}</div>; // For example
};

export default RecipePage;

export const getServerSideProps = async (context) => {
  const uri = decodeURIComponent(context.params.id);
  // Fetch your data based on the URI here
  const recipeData = await fetchRecipeByUri(uri);

  return {
    props: {
      recipe: recipeData,
    },
  };
};
