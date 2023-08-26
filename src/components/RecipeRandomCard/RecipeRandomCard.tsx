import React from 'react';
import Image from 'next/image';
import classes from './RecipeRandomCard.module.scss';
import Button, { ButtonTypes } from '@/containers/Button/Button';

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
    showModal: () => void;
    image: string;
    recipeName: string;
    description: string;
    servingSize: number;
    calories: number;
    macros: Macros;
    minerals: MineralsElectrolytes;
};

const RecipeRandomCard = ({ showModal, image, recipeName, description, servingSize, calories, macros, minerals }: RecipeRandomCardProps) => {

    const convertNumber = (num: number) => Math.ceil(num);

    const getServingAmount = (quantity: number, servings: number) => {
        return convertNumber(quantity / servings);
    };

    // Render out macros:
    const renderMacros = () => (
        <div className={macroGrid}>
            {Object.entries(macros).map(([key, nutrient]) => (
                <React.Fragment key={key}>
                    <div><b>{key.charAt(0).toUpperCase() + key.slice(1)}:</b></div>
                    <div>{getServingAmount(convertNumber(nutrient.quantity), servingSize)}{nutrient.unit}</div>
                </React.Fragment>
            ))}
        </div>
    );

    // Render out Minerals
    const renderMinerals = () => {
        return (
            <div className={macroGrid}>
                {Object.entries(minerals).map(([key, nutrient]) => (
                    <React.Fragment key={key}>
                        <div>{key.charAt(0).toUpperCase() + key.slice(1)}:</div>
                        <div>{getServingAmount(convertNumber(nutrient.quantity), servingSize)}{nutrient.unit}</div>
                    </React.Fragment>
                ))}
            </div>
        )
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
                    <div>
                        Serves:
                    </div>
                    <div>{servingSize}</div>
                    <div>per-serving: </div>
                    <div>{getServingAmount(calories, servingSize)}</div>
                </div>
                <h5>Macros</h5>
                {renderMacros()}
                <h5>Minerals &amp; Electrolytes</h5>
                {renderMinerals()}
                <Button
                    buttonType={ButtonTypes.VIEWINGREDIENTS}
                    handleClick={showModal}
                />
            </section>
        </div>
    );
};

export default RecipeRandomCard;