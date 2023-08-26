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

export interface RecipeRandomCardProps {
    showModal: () => void;
    ingredients?: string[];
    image: string;
    recipeName: string;
    description: string;
    servingSize: number;
    calories: number;
    macros: Macros;
    minerals: MineralsElectrolytes;
};

// * Used for consistent interfaces all in one places should I need to update.