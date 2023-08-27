import { useDispatch } from 'react-redux';
import { setQuery, searchRecipes } from '@/store/searchSlice';
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import classes from './RecipeSearchBar.module.scss';

const { recipeSearch } = classes;

interface searchInputs {
    recipe: string;
};

const RecipeSearchBar = () => {

    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm<searchInputs>();

    const onSubmit: SubmitHandler<searchInputs> = data => {
        console.log(data);
        dispatch(setQuery(data.recipe));
        dispatch(searchRecipes(data.recipe));  // This will fetch the data based on the query and update the `results` in state.
    };
    
    return (
        <>
            <section>
                <h2>Recipe Finder</h2>
                <span>Enter any food below to query for the nutritional data.</span>
            </section>
            <form
                className={recipeSearch}
                onSubmit={handleSubmit(onSubmit)}
            >
                <input placeholder="Recipe name"{...register("recipe", { required: true })} />
                <button type="submit">Search</button>
            </form>
        </>
    );
};

export default RecipeSearchBar;