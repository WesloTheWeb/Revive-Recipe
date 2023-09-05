import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import RecipeRandomCard from '@/components/RecipeRandomCard/RecipeRandomCard';
import { RecipeCarouselProps, ExtendedRecipeData } from "@/interfaces/recipeTypes";

const RecipeCarousel = ({ recipes, showModal, setSelectedRecipeIngredients }: RecipeCarouselProps) => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3  // Adjust the number of items as per your requirement
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <Carousel responsive={responsive}>
            {recipes.map((hit, index) => {
                const recipeData: ExtendedRecipeData = {
                    image: hit.recipe.image,
                    uri: hit.recipe.uri,
                    label: hit.recipe.label,
                    description: hit.recipe.label, // You've used label as description here, adjust if needed
                    servings: hit.recipe.yield || 0,
                    calories: hit.recipe.calories,
                    totalNutrients: hit.recipe.totalNutrients,
                    ingredientLines: hit.recipe.ingredientLines,
                    mealType: hit.recipe.mealType,
                    macros: {
                        protein: hit.recipe.totalNutrients.PROCNT,
                        fats: hit.recipe.totalNutrients.FAT,
                        carbs: hit.recipe.totalNutrients.CHOCDF
                    },
                    minerals: {
                        cholesterol: hit.recipe.totalNutrients.CHOLE,
                        sodium: hit.recipe.totalNutrients.NA,
                        calcium: hit.recipe.totalNutrients.CA,
                        magnesium: hit.recipe.totalNutrients.MG,
                        potassium: hit.recipe.totalNutrients.K,
                        iron: hit.recipe.totalNutrients.FE
                    }
                };

                return (
                    <div key={index}>
                        <RecipeRandomCard
                            recipe={recipeData}
                            showModal={() => {
                                setSelectedRecipeIngredients(hit.recipe.ingredientLines);
                                showModal();
                            }}
                        />
                    </div>
                );
            })}
        </Carousel>
    );
};

export default RecipeCarousel;