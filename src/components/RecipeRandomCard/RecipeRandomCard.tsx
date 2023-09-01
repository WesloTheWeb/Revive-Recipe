import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';
import classes from './RecipeRandomCard.module.scss';
import { storeRecipe } from '@/store/recipeSlice';
import Button, { ButtonTypes } from '@/containers/Button/Button';
import { RecipeRandomCardProps } from '@/interfaces/recipeTypes';

const { recipe, recipeDetails, macroGrid } = classes;

const RecipeRandomCard = ({
    recipe: {
        uri,
        image,
        label,
        description,
        servings,
        calories,
        macros,
        minerals,
        totalNutrients,
        ingredientLines,
        mealType
        // ... add other properties as needed 
    },
    showModal
}: RecipeRandomCardProps) => {
    const dispatch = useDispatch();
    const convertNumber = (num: number) => Math.ceil(num);
    const getServingAmount = (quantity: number, servings: number) => {
        return convertNumber(quantity / servings);
    };

    useEffect(() => {
        dispatch(storeRecipe({
            recipe: {
                uri,
                image,
                label,
                description,
                servings,
                calories,
                macros,
                minerals,
                totalNutrients,
                ingredientLines,
                mealType
                // ... Add any other properties as needed
            }
        }));
    }, [uri, image, label, description, servings, calories, macros, minerals]);

    // Render out macros:
    const renderMacros = () => (
        <div className={macroGrid}>
            {Object.entries(macros).map(([key, nutrient]) => (
                <React.Fragment key={key}>
                    <div><b>{key.charAt(0).toUpperCase() + key.slice(1)}:</b></div>
                    <div>{getServingAmount(convertNumber(nutrient.quantity), servings)}{nutrient.unit}</div>
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
                        <div>{getServingAmount(convertNumber(nutrient.quantity), servings)}{nutrient.unit}</div>
                    </React.Fragment>
                ))}
            </div>
        )
    };

    return (
        <div>
            <section className={recipe}>
                <Image src={image} alt={description} width={250} height={300} />
                <h3>{label}</h3>
            </section>
            <section className={recipeDetails}>
                <div className={macroGrid}>
                    <div>Calories</div>
                    <div>{convertNumber(calories)}</div>
                    <div>
                        Serves:
                    </div>
                    <div>{servings}</div>
                    <div>per-serving: </div>
                    <div>{getServingAmount(calories, servings)}</div>
                </div>
                <h5>Macros</h5>
                {renderMacros()}
                <h5>Minerals &amp; Electrolytes</h5>
                {renderMinerals()}
                <Button
                    buttonType={ButtonTypes.VIEWINGREDIENTS}
                    handleClick={showModal}
                />
                <Link href={`/recipe/${encodeURIComponent(uri)}`}>
                    <Button buttonType={ButtonTypes.VIEWRECIPE} />
                </Link>
            </section>
        </div>
    );
};

export default RecipeRandomCard;