import React from 'react';
import { fetchRecipeByHash } from '@/helpers/apiHelpers';

// This is your actual page component
const RecipePage = ({ recipe }) => {
  // Render your page using the recipe prop
  return <div>{recipe.name}</div>; // For example
};

export default RecipePage;

export const getServerSideProps = async (context) => {
  const uri = context.params?.uri ? decodeURIComponent(decodeURIComponent(context.params.uri)) : undefined;

  if (!uri) {
      return {
          notFound: true
      };
  }

  const recipeData = await fetchRecipeByHash(uri);

  return {
      props: {
          recipe: recipeData,
      },
  };
};
