import React from 'react';
import Image from 'next/image';
import classes from './RecipeCard.module.scss';
import Button, { ButtonTypes } from '@/containers/Button/Button';
import { RecipeRandomCardProps } from '@/interfaces/recipeTypes';

const { recipeCardContainer, recipeCardActionsContainer, recipeNutritionContainer, recipeNutritionDetails, macroGrid } = classes;

const RecipeCard = ({ showModal, image, recipeName, description, servingSize, calories, macros, minerals }: RecipeRandomCardProps) => {

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
            <section className={recipeCardContainer}>
                <Image src={image} alt={description} width={250} height={350} />
                <h3>{recipeName}</h3>
                <section className={recipeNutritionContainer}>
                    <div className={recipeNutritionDetails}>
                        <section className={recipeCardActionsContainer}>
                            <Button
                                buttonType={ButtonTypes.VIEWINGREDIENTS}
                                handleClick={showModal}
                            />
                                      <Button
                                buttonType={ButtonTypes.VIEWINGREDIENTS}
                                handleClick={showModal}
                            />
                                      <Button
                                buttonType={ButtonTypes.VIEWINGREDIENTS}
                                handleClick={showModal}
                            />
                        </section>
                    </div>
                    <section>
                        <h5>Macros</h5>
                        {renderMacros()}
                    </section>
                    <section>
                        <h5>Minerals &amp; Electrolytes</h5>
                        {renderMinerals()}
                    </section>

                </section>
            </section>

        </div>
    );
};

export default RecipeCard;