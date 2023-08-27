import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { RecipeData } from '@/interfaces/recipeTypes';
import RecipeCard from '@/components/RecipeCard/RecipeCard';

import classes from './QueryResults.module.scss';

const { queryHeader } = classes;

const QueryResults = ({ }) => {

    const searchResults = useSelector((state: RootState): RecipeData[] => state.search.results);
    const loading = useSelector((state: RootState) => state.search.loading);
    const error = useSelector((state: RootState) => state.search.error);

    return (
        <>
            <section className={queryHeader}>
                <label>Results {searchResults.length}</label>
            </section>
            <section>
                {loading && <div>Loading...</div>}
                {error && <div>Error: {error}</div>}

                {searchResults.slice(0, 5).map((recipe, index) => (
                    <RecipeCard
                        key={index}
                        image={recipe.image}
                        recipeName={recipe.label}
                        description=""
                        showModal={() => {
                            setSelectedRecipeIngredients(recipe.ingredientLines); // Adjusted to 'ingredientLines'
                            showModal();
                        }}
                        calories={recipe.calories}
                        servingSize={recipe.yield}
                        macros={{
                            protein: recipe.totalNutrients.PROCNT,
                            fats: recipe.totalNutrients.FAT,
                            carbs: recipe.totalNutrients.CHOCDF
                        }}
                        minerals={{
                            cholesterol: recipe.totalNutrients.CHOLE,
                            sodium: recipe.totalNutrients.NA,
                            calcium: recipe.totalNutrients.CA,
                            magnesium: recipe.totalNutrients.MG,
                            potassium: recipe.totalNutrients.K,
                            iron: recipe.totalNutrients.FE
                        }}
                    />
                ))}

            </section>
        </>
    );
};

export default QueryResults;