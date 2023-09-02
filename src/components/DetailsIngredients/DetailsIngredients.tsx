import classes from './DetailsIngredients.module.scss';

const {container} = classes;

interface DetailsIngredientsProps {
    ingredients: string[];
};

const DetailsIngredients = ({ ingredients }: DetailsIngredientsProps) => {
    return (
        <div className={container}>
            <h3>Ingredients Needed</h3>
            <ul>
                {ingredients.map((ingredient: string) => {
                    return (
                        <li key={ingredient}>{ingredient}</li>
                    )
                })}
            </ul>
        </div>
    );
};

export default DetailsIngredients;