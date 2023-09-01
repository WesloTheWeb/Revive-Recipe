import React from 'react';
import { ExtendedRecipeData } from '@/interfaces/recipeTypes';
import classes from './DetailsNutrition.module.scss';

// Takes in calories macros nutirtion

interface DetailsNutritionProps extends ExtendedRecipeData {
    // If you have additional props specific to this component, add them here.
    calories: number;
    servings: number;
}

const { nutritionLabelContainer, nutritionDividerGrid } = classes;

const DetailsNutrition = ({ servings, calories }: DetailsNutritionProps) => {

    // Conversion functions
    const convertNumber = (num: number) => Math.ceil(num);

    const getServingAmount = (quantity: number, servings: number) => {
        return convertNumber(quantity / servings);
    };

    return (
        <section className={nutritionLabelContainer}>
            <div className={nutritionDividerGrid}>
                <h3>Total Calories:</h3>
                <div>{convertNumber(calories)}</div>
                <h4>(Per-Serving):</h4>
                <div>{getServingAmount(calories, servings)}</div>
                <h5>Serves:</h5>
                <div>{servings}</div>
            </div>
            <div>
                Reserved
            </div>
            <h3>Macros</h3>
            <h3>Minerals &amp; Electrolytes</h3>
            <div className={nutritionDividerGrid}>
                <label>Proteins</label>
                <div>uwu</div>
                <label>Fats</label>
                <div>uwu</div>
                <label>Carbs</label>
                <div>uwu</div>
            </div>
            <div className={nutritionDividerGrid}>
                <label>Cholesterol</label>
                <div>uwu</div>
                <label>Sodium</label>
                <div>uwu</div>
                <label>Calcium</label>
                <div>uwu</div>
                <label>Magnesium</label>
                <div>uwu</div>
                <label>Potassium</label>
                <div>uwu</div>
                <label>Iron</label>
                <div>uwu</div>
            </div>
        </section>
    );
};

export default DetailsNutrition;