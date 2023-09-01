import React from 'react';
import { Nutrient } from '@/interfaces/recipeTypes';
import classes from './DetailsNutrition.module.scss';

// Takes in calories macros nutirtion

interface DetailsNutritionProps {
    calories: number;
    servings: number;
    minerals: {
        cholesterol: Nutrient;
        sodium: Nutrient;
        calcium: Nutrient;
        magnesium: Nutrient;
        potassium: Nutrient;
        iron: Nutrient;
    };
    macros: {
        protein: Nutrient;
        fats: Nutrient;
        carbs: Nutrient;
    };
};


const { nutritionLabelContainer, nutritionDividerGrid } = classes;

const DetailsNutrition = ({ servings, calories, minerals, macros }: DetailsNutritionProps) => {

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
            <div />
            <h3>Macros</h3>
            <h3>Minerals &amp; Electrolytes</h3>
            <div className={nutritionDividerGrid}>
                <label>Proteins</label>
                <div>{convertNumber(macros.protein.quantity)}{macros.protein.unit}</div>
                <label>Fats</label>
                <div>{convertNumber(macros.fats.quantity)}{macros.fats.unit}</div>
                <label>Carbs</label>
                <div>{convertNumber(macros.carbs.quantity)}{macros.carbs.unit}</div>
            </div>
            <div className={nutritionDividerGrid}>
                <label>Cholesterol</label>
                <div>{convertNumber(minerals.cholesterol.quantity)}{minerals.cholesterol.unit}</div>
                <label>Sodium</label>
                <div>{convertNumber(minerals.sodium.quantity)}{minerals.sodium.unit}</div>
                <label>Calcium</label>
                <div>{convertNumber(minerals.calcium.quantity)}{minerals.calcium.unit}</div>
                <label>Magnesium</label>
                <div>{convertNumber(minerals.magnesium.quantity)}{minerals.magnesium.unit}</div>
                <label>Potassium</label>
                <div>{convertNumber(minerals.potassium.quantity)}{minerals.potassium.unit}</div>
                <label>Iron</label>
                <div>{convertNumber(minerals.iron.quantity)}{minerals.iron.unit}</div>
            </div>
        </section>
    );
};

export default DetailsNutrition;