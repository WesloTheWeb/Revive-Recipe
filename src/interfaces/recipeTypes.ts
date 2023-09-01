// * Used for consistent interfaces all in one places should I need to update.

export interface Nutrient {
    quantity: number;
    unit: string;
};

export interface Macros {
    protein: Nutrient;
    fats: Nutrient;
    carbs: Nutrient;
};

export interface MineralsElectrolytes {
    cholesterol: Nutrient;
    sodium: Nutrient;
    calcium: Nutrient;
    magnesium: Nutrient;
    potassium: Nutrient;
    iron: Nutrient;
};

// Actual raw keys and values from the api
export interface RecipeData {
    image: string;
    uri: string;
    label: string;
    yield?: number; // but technically named it to servings.
    calories: number;
    totalNutrients: RecipeTotalNutrients;
    ingredientLines: string;
    mealType: string
};
// TODO: Might can use an extend of recipeData for mealType

export interface ExtendedRecipeData extends RecipeData {
    description: string;
    servings: number;
    macros: Macros;
    minerals: MineralsElectrolytes;
}

export interface RecipeHit {
    recipe: RecipeData;
}

export interface RandomRecipesType {
    hits: RecipeHit[];
}

export interface RecipeRandomCardProps {
    recipe: ExtendedRecipeData;
    showModal: () => void;
    setSelectedRecipeIngredients?: (ingredientLines: string[]) => void;
    // ... any other props you may have
};


// Kept these as they are since they're consistent.
export interface RecipeTotalNutrients {
    PROCNT: Nutrient;
    FAT: Nutrient;
    CHOCDF: Nutrient;
    CHOLE: Nutrient;
    NA: Nutrient;
    CA: Nutrient;
    MG: Nutrient;
    K: Nutrient;
    FE: Nutrient;
};


export interface CarouselRecipe {
    recipe: RecipeData;
};

export interface RecipeCarouselProps {
    recipes: CarouselRecipe[];
    showModal: () => void;
    setSelectedRecipeIngredients: (ingredientLines: string[]) => void;
};
