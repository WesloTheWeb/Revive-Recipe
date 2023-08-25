import Image from 'next/image';
import classes from './RecipeRandomCard.module.scss';

const { recipe, recipeDetails, macroGrid } = classes;

interface Nutrient {
    quantity: number;
    unit: string;
};

interface Macros {
    protein: Nutrient;
    fats: Nutrient;
    carbs: Nutrient;
};

interface RecipeRandomCardProps {
    image: string;
    recipeName: string;
    description: string;
    macros: Macros;
};

const RecipeRandomCard = ({ image, recipeName, description, macros }: RecipeRandomCardProps) => {

    const convertNumber = (num: number) => Math.ceil(num);

    return (
        <div>
            <section className={recipe}>
                <Image src={image} alt={description} width={250} height={300} />
                <h3>{recipeName}</h3>
            </section>
            <section className={recipeDetails}>
                <h5>Macros</h5>
                <div className={macroGrid}>
                    <div>
                        <b>Protein:</b>
                    </div>
                    <div>
                        {convertNumber(macros.protein.quantity)}{macros.protein.unit}
                    </div>
                    <div>
                        <b>Fat</b>:
                    </div>
                    <div>
                        {convertNumber(macros.fats.quantity)}{macros.fats.unit}
                    </div>
                    <div>
                        <b>Carb</b>:
                    </div>
                    <div>
                        {convertNumber(macros.carbs.quantity)}{macros.carbs.unit}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RecipeRandomCard;