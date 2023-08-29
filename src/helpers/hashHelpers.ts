import md5 from 'crypto-js/md5';
import { RecipeData } from '@/interfaces/recipeTypes';

export const generateRecipeHash = (recipe: RecipeData): string => {
  return md5(recipe.label + recipe.uri).toString();
};