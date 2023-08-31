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

// Renamed 'recipeName' to 'label' to match RecipeData.
export interface RecipeRandomCardProps {
    key: any,
    uri: string;
    showModal: () => void;
    setSelectedRecipeIngredients?: (ingredientLines: string[]) => void;
    ingredients?: string[];
    image: string;
    label: string;  // <-- Changed this from recipeName
    description: string;
    servings: number;  // <-- Changed this from servingSize to servings
    calories: number;
    macros: Macros;
    minerals: MineralsElectrolytes;
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

export interface RecipeData {
    image: string;
    uri: string;
    label: string;
    yield: number;  
    calories: number;
    totalNutrients: RecipeTotalNutrients;
    ingredientLines: string[];
};

export interface CarouselRecipe {
    recipe: RecipeData;
};

export interface RecipeCarouselProps {
    recipes: CarouselRecipe[];
    showModal: () => void;
    setSelectedRecipeIngredients: (ingredientLines: string[]) => void;
};
