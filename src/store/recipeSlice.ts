import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RecipeData, ExtendedRecipeData } from '@/interfaces/recipeTypes';

interface RecipeState {
  recipes: {
    [uri: string]: ExtendedRecipeData;
  };
};

const initialState: RecipeState = {
  recipes: {},
};

const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    storeRecipe: (state, action: PayloadAction<{ recipe: ExtendedRecipeData }>) => {
      const { recipe } = action.payload;
      state.recipes[recipe.uri] = recipe;  // Use URI as the key.
    },
    storeBasicRecipe: (state, action: PayloadAction<{ recipe: RecipeData }>) => {
      const { recipe } = action.payload;
      state.recipes[recipe.uri] = {
        ...recipe,
        description: '',
        servings: 1,
        macros: {
          protein: { quantity: 0, unit: "g" },
          fats: { quantity: 0, unit: "g" },
          carbs: { quantity: 0, unit: "g" },
        },
        minerals: {
          cholesterol: { quantity: 0, unit: "mg" },
          sodium: { quantity: 0, unit: "mg" },
          calcium: { quantity: 0, unit: "mg" },
          magnesium: { quantity: 0, unit: "mg" },
          potassium: { quantity: 0, unit: "mg" },
          iron: { quantity: 0, unit: "mg" },
        }
      };
    }
  },
});

export const { storeRecipe, storeBasicRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;