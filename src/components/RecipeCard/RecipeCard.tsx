import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classes from './RecipeCard.module.scss';
import Button, { ButtonTypes } from '@/containers/Button/Button';
import { RecipeRandomCardProps } from '@/interfaces/recipeTypes';
import { generateRecipeHash } from '@/helpers/hashHelpers';

const { recipeCardContainer, recipeCardActionsContainer, recipeNutritionContainer, recipeNutritionDetails,
    macroGrid, macroHighlight, calorieProperties } = classes;

const RecipeCard = ({ setSelectedRecipeIngredients, ingredients, showModal, image, recipeName, description, servingSize, calories, macros, minerals, uri }: RecipeRandomCardProps) => {

    const recipeHash = generateRecipeHash({ uri, recipeName, image, description });
    const convertNumber = (num: number) => Math.ceil(num);

    const getServingAmount = (quantity: number, servings: number) => {
        return convertNumber(quantity / servings);
    };

    // Render out macros:
    const renderMacros = () => (
        <div className={`${macroGrid}, ${macroHighlight}`}>
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
                <Image src={image} alt={description} width={250} height={360} />
                <h3>{recipeName}</h3>
                <section className={recipeNutritionContainer}>
                    <div className={recipeNutritionDetails}>
                        <section className={recipeCardActionsContainer}>
                            <div className={`${macroGrid} ${calorieProperties}`}>
                                <div>Calories</div>
                                <div>{Math.floor(calories)}</div>
                                <span>serving: </span>
                                <div>{getServingAmount(calories, servingSize)}</div>
                                <span>serves:</span>
                                <div>{servingSize}</div>
                            </div>
                            <Button
                                buttonType={ButtonTypes.VIEWINGREDIENTS}
                                handleClick={() => {
                                    if (setSelectedRecipeIngredients && ingredients) {
                                        setSelectedRecipeIngredients(ingredients);
                                    }
                                    showModal();
                                }}
                            />
                            <Link href={`/recipe/${recipeHash}`}>
                                View Recipe
                            </Link>
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