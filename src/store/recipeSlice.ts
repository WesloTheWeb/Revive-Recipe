import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RecipeData } from '@/interfaces/recipeTypes';

interface RecipeState {
  recipes: {
    [hash: string]: RecipeData;
  };
}

const initialState: RecipeState = {
  recipes: {},
};

const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    storeRecipe: (state, action: PayloadAction<{ hash: string; recipe: RecipeData }>) => {
      const { hash, recipe } = action.payload;
      state.recipes[hash] = recipe;
    },
  },
});

export const { storeRecipe } = recipeSlice.actions;

export default recipeSlice.reducer;
