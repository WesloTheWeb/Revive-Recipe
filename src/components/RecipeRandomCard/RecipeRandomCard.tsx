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

interface MineralsElectrolytes {
    cholesterol: Nutrient;
    sodium: Nutrient;
    calcium: Nutrient;
    magnesium: Nutrient;
    potassium: Nutrient;
    iron: Nutrient;
};

interface RecipeRandomCardProps {
    image: string;
    recipeName: string;
    description: string;
    servingSize: number;
    calories: number;
    macros: Macros;
    minerals: MineralsElectrolytes;
};

const RecipeRandomCard = ({ image, recipeName, description, servingSize, calories, macros, minerals }: RecipeRandomCardProps) => {

    const convertNumber = (num: number) => Math.ceil(num);

    const calculateServingSize = (calories: number, servings: number) => {
        const calculatedServings = Math.floor((calories) / (servings));

        return calculatedServings;
    };

    return (
        <div>
            <section className={recipe}>
                <Image src={image} alt={description} width={250} height={300} />
                <h3>{recipeName}</h3>
            </section>
            <section className={recipeDetails}>
                <div className={macroGrid}>
                    <div>Calories</div>
                    <div>{calories}</div>
                    <div>per-serving: </div>
                    <div>{calculateServingSize(calories, servingSize)}</div>
                </div>
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
                <h5>Minerals &amp; Electrolytes</h5>
                <div className={macroGrid}>
                    <div>
                        Cholesterol:
                    </div>
                    <div>
                        {convertNumber(minerals.cholesterol.quantity)}{minerals.cholesterol.unit}
                    </div>
                    <div>
                        Sodium:
                    </div>
                    <div>
                        {convertNumber(minerals.sodium.quantity)}{minerals.sodium.unit}
                    </div>
                    <div>
                        calcium:
                    </div>
                    <div>
                        {convertNumber(minerals.calcium.quantity)}{minerals.calcium.unit}
                    </div>
                    <div>
                        magnesium:
                    </div>
                    <div>
                        {convertNumber(minerals.magnesium.quantity)}{minerals.magnesium.unit}
                    </div>
                    <div>
                        potassium:
                    </div>
                    <div>
                        {convertNumber(minerals.potassium.quantity)}{minerals.potassium.unit}
                    </div>
                    <div>
                        iron:
                    </div>
                    <div>
                        {convertNumber(minerals.iron.quantity)}{minerals.iron.unit}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RecipeRandomCard;