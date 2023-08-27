import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { RecipeData } from '@/interfaces/recipeTypes';
import RecipeCard from '@/components/RecipeCard/RecipeCard';

import classes from './QueryResults.module.scss';

const { queryHeader } = classes;

interface QueryResultsProps {
    setSelectedRecipeIngredients: (ingredients: string[] | null) => void;
    showModal: () => void;
}


const QueryResults = ({ showModal, setSelectedRecipeIngredients }: QueryResultsProps) => {

    // Redux States
    const query = useSelector((state: RootState) => state.search.query);
    const searchResults = useSelector((state: RootState): RecipeData[] => state.search.results);
    const loading = useSelector((state: RootState) => state.search.loading);
    const error = useSelector((state: RootState) => state.search.error);

    // component state for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    // index numbers of last, first and current:
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <>
            <section className={queryHeader}>
                Results for {query} showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, searchResults.length)}
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
                        ingredients={recipe.ingredientLines}
                        setSelectedRecipeIngredients={setSelectedRecipeIngredients}
                        showModal={showModal}
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
            <div>
                <button onClick={() => setCurrentPage(1)}>First</button>
                <button onClick={() => setCurrentPage(prevPage => Math.max(prevPage - 1, 1))}>Prev</button>
                <button onClick={() => setCurrentPage(nextPage => Math.min(nextPage + 1, Math.ceil(searchResults.length / itemsPerPage)))}>Next</button>
                <button onClick={() => setCurrentPage(Math.ceil(searchResults.length / itemsPerPage))}>Last</button>
            </div>
        </>
    );
};

export default QueryResults;