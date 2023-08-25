import Image from 'next/image';
import classes from './RecipeRandomCard.module.scss';

const { recipe, recipeDetails } = classes;

interface RecipeRandomCardProps {
    image: string;
    recipeName: string;
    description: string;
    proteinQuantity: number;
    proteinUnit: string;
};

const RecipeRandomCard = ({ image, recipeName, description, proteinQuantity, proteinUnit }: RecipeRandomCardProps) => {

    const convertNumber = (num: number) => Math.ceil(num);

    return (
        <div>
            <section className={recipe}>
                <Image src={image} alt={description} width={250} height={300} />
                <h3>{recipeName}</h3>
            </section>
            <section className={recipeDetails}>
                <p><b>Protein</b>: {convertNumber(proteinQuantity)}{proteinUnit}</p>
            </section>
        </div>
    );
};

export default RecipeRandomCard;