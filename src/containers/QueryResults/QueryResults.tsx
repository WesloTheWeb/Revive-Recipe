import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';
import { storeRecipe } from '@/store/recipeSlice';
import { RecipeData } from '@/interfaces/recipeTypes';
import RecipeCard from '@/components/RecipeCard/RecipeCard';
import { generateRecipeHash } from '@/helpers/hashHelpers';
import Loading from '@/components/Loading/Loading';
import Button, { ButtonTypes } from '../Button/Button';
import classes from './QueryResults.module.scss';

const { queryHeader, paginationContainer } = classes;

interface QueryResultsProps {
    setSelectedRecipeIngredients: (ingredients: string[] | null) => void;
    showModal: () => void;
};

const QueryResults = ({ showModal, setSelectedRecipeIngredients }: QueryResultsProps) => {
    // Redux States
    const query = useSelector((state: RootState) => state.search.query);
    const searchResults = useSelector((state: RootState): RecipeData[] => state.search.results);
    const loading = useSelector((state: RootState) => state.search.loading);
    const error = useSelector((state: RootState) => state.search.error);

    const dispatch = useDispatch<AppDispatch>();

    // component state for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    // index numbers of last, first and current:
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem);

    // useEffect(() => {
    //     setCurrentPage(1);
    // }, [query]);
    // ? New Bit
    useEffect(() => {
        searchResults.forEach(recipe => {
            const recipeHash = generateRecipeHash(recipe);
            // TODO: Check if the recipe already exists in the store to avoid unnecessary dispatches
            dispatch(storeRecipe({ recipe }));
        });
    }, [searchResults, dispatch]);
    


    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <section className={queryHeader}>
                        {searchResults.length === 0 && query ? (
                            <>No results found for <span>{query}</span></>
                        ) : searchResults.length > 0 ? (
                            <>Results for <span>{query}</span> showing {indexOfFirstItem + 1} - {Math.min(indexOfLastItem, searchResults.length)} entries</>
                        ) : (
                            null
                        )}
                    </section>
                    <section>
                        {error && <div>Error: {error}</div>}
                        {currentItems.map((recipe, index) => {
                            const recipeHash = generateRecipeHash(recipe);  // Generate hash for the recipe key
                            
                            return (
                                <RecipeCard
                                    key={recipeHash}
                                    uri={recipe.uri}
                                    image={recipe.image}
                                    label={recipe.label}
                                    description=""
                                    ingredients={recipe.ingredientLines}
                                    setSelectedRecipeIngredients={setSelectedRecipeIngredients}
                                    showModal={showModal}
                                    calories={recipe.calories}
                                    servings={recipe.yield}
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
                            )
                        })}
                    </section>
                    <section className={paginationContainer}>
                        <Button
                            buttonType={ButtonTypes.FIRSTPAGE}
                            disabled={currentPage === 1}
                            handleClick={() => {
                                setCurrentPage(1);
                                window.scrollTo(0, 0);
                            }}
                        />

                        <Button
                            buttonType={ButtonTypes.PREVPAGE}
                            disabled={currentPage === 1}
                            handleClick={() => {
                                setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
                                window.scrollTo(0, 0);
                            }}
                        />

                        <Button
                            buttonType={ButtonTypes.NEXTPAGE}
                            disabled={currentPage === Math.ceil(searchResults.length / itemsPerPage)}
                            handleClick={() => {
                                setCurrentPage(nextPage => Math.min(nextPage + 1, Math.ceil(searchResults.length / itemsPerPage)));
                                window.scrollTo(0, 0);
                            }}
                        />

                        <Button
                            buttonType={ButtonTypes.LASTPAGE}
                            disabled={currentPage === Math.ceil(searchResults.length / itemsPerPage)}
                            handleClick={() => {
                                setCurrentPage(Math.ceil(searchResults.length / itemsPerPage));
                                window.scrollTo(0, 0);
                            }}
                        />
                    </section>
                </>
            )
            }
        </>
    );
};

export default QueryResults;