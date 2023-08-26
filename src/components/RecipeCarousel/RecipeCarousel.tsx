import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import RecipeRandomCard from '@/components/RecipeRandomCard/RecipeRandomCard';
import { RecipeCarouselProps } from "@/interfaces/recipeTypes";

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

    const convertedCalorie = (num: number) => Math.ceil(num);

    return (
        <Carousel responsive={responsive}>
            {recipes.map((hit, index) => {
                // Extracting required values just like in the original
                const servingSize = hit.recipe.yield;
                const calorieCount = hit.recipe.calories;
                const proteinInfo = hit.recipe.totalNutrients.PROCNT;
                const fatInfo = hit.recipe.totalNutrients.FAT;
                const carbInfo = hit.recipe.totalNutrients.CHOCDF;
                const cholesterolInfo = hit.recipe.totalNutrients.CHOLE;
                const sodiumInfo = hit.recipe.totalNutrients.NA;
                const calciumInfo = hit.recipe.totalNutrients.CA;
                const magnesiumInfo = hit.recipe.totalNutrients.MG;
                const potassiumInfo = hit.recipe.totalNutrients.K;
                const ironInfo = hit.recipe.totalNutrients.FE;

                return (
                    <div key={index}>
                        <RecipeRandomCard
                            image={hit.recipe.image}
                            recipeName={hit.recipe.label}
                            showModal={() => {
                                setSelectedRecipeIngredients(hit.recipe.ingredientLines);
                                showModal();
                            }}
                            description={hit.recipe.label}
                            calories={convertedCalorie(calorieCount)}
                            servingSize={servingSize}
                            macros={{
                                protein: {
                                    quantity: proteinInfo.quantity,
                                    unit: proteinInfo.unit
                                },
                                fats: {
                                    quantity: fatInfo.quantity,
                                    unit: fatInfo.unit
                                },
                                carbs: {
                                    quantity: carbInfo.quantity,
                                    unit: carbInfo.unit
                                }
                            }}
                            minerals={{
                                cholesterol: {
                                    quantity: cholesterolInfo.quantity,
                                    unit: cholesterolInfo.unit
                                },
                                sodium: {
                                    quantity: sodiumInfo.quantity,
                                    unit: sodiumInfo.unit
                                },
                                calcium: {
                                    quantity: calciumInfo.quantity,
                                    unit: calciumInfo.unit
                                },
                                magnesium: {
                                    quantity: magnesiumInfo.quantity,
                                    unit: magnesiumInfo.unit
                                },
                                potassium: {
                                    quantity: potassiumInfo.quantity,
                                    unit: potassiumInfo.unit
                                },
                                iron: {
                                    quantity: ironInfo.quantity,
                                    unit: ironInfo.unit
                                }
                            }}
                        />
                    </div>
                );
            })}
        </Carousel>
    );
};

export default RecipeCarousel;
