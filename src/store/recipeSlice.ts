import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RecipeData } from '@/interfaces/recipeTypes';

interface RecipeState {
  recipes: {
    [uri: string]: RecipeData;
  };
}


const initialState: RecipeState = {
  recipes: {},
};

const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    storeRecipe: (state, action: PayloadAction<{ recipe: RecipeData }>) => {
      const { recipe } = action.payload;
      state.recipes[recipe.uri] = recipe;  // Use URI as the key.
    },
  },
});

export const { storeRecipe } = recipeSlice.actions;

export default recipeSlice.reducer;