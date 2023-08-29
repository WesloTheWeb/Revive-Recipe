import React from 'react';
import { store } from '@/store/store';
import { GetServerSidePropsContext } from 'next';

type Recipe = {
  name: string;
};

interface RecipePageProps {
  recipe: Recipe;
}

const RecipePage: React.FC<RecipePageProps> = ({ recipe }) => {
  if (!recipe) {
    return <div>Recipe not found</div>;
  }
  return <div>{recipe.name}</div>;
};

export default RecipePage;

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const hash = context.params?.hash as string; // ? example of a typecast to string since params can be string | string[]

  if (!hash) {
    return {
      notFound: true
    };
  }

  const reduxState = store.getState();

  const recipeData = reduxState.recipe.recipes[hash];

  if (!recipeData) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      recipe: recipeData,
    },
  };
};
