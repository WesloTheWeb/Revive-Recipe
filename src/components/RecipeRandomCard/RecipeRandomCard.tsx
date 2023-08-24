import Image from 'next/image';
import classes from './RecipeRandomCard.module.scss';

const { recipe } = classes;

interface RecipeRandomCardProps {
    image: string;
    recipeName: string;
    description: string;
}

const RecipeRandomCard = ({ image, recipeName, description }: RecipeRandomCardProps) => {
    return (
        <div>
            <section className={recipe}>
                <Image src={image} alt={description} />
                <h3>{recipeName}</h3>
            </section>
            <section>
                
            </section>
        </div>
    );
};

export default RecipeRandomCard;