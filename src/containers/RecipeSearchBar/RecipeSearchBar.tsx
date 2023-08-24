import { useForm, SubmitHandler, Controller } from "react-hook-form";
import classes from './RecipeSearchBar.module.scss';

const { recipeSearch } = classes;

interface searchInputs {
    recipe: string;
};

const RecipeSearchBar = () => {

    const { register, handleSubmit } = useForm<searchInputs>();
    const onSubmit: SubmitHandler<searchInputs> = data => console.log(data);

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
            </form>
        </>
    );
};

export default RecipeSearchBar;