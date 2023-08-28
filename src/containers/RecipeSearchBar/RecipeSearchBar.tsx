import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { setQuery, searchRecipes } from '@/store/searchSlice';
import { useForm, SubmitHandler } from "react-hook-form";
import classes from './RecipeSearchBar.module.scss';
import Button, { ButtonTypes } from '../Button/Button';

const { recipeSearch, searchBarFlex } = classes;

interface searchInputs {
    recipe: string;
};

const RecipeSearchBar = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { register, handleSubmit } = useForm<searchInputs>();

    const onSubmit: SubmitHandler<searchInputs> = data => {
        dispatch(setQuery(data.recipe));
        dispatch(searchRecipes(data.recipe));  // This will fetch the data based on the query and update the `results` in state.
    };

    return (
        <>
            <section>
                <h2>Recipe Finder</h2>
                <span>Enter any food below to query for the nutritional data for up to 20 entries.</span>
            </section>
            <form
                className={recipeSearch}
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className={searchBarFlex}>
                    <input placeholder="Recipe name"{...register("recipe", { required: true })} />
                    {/* <button type="submit">Search</button> */}
                    <Button buttonType={ButtonTypes.RECIPESEARCH} />
                </div>
            </form>
        </>
    );
};

export default RecipeSearchBar;