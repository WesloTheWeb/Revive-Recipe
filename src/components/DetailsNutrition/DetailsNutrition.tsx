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
                <div>{getServingAmount(macros.protein.quantity, servings)}{macros.protein.unit}</div>
                <label>Fats</label>
                <div>{getServingAmount(macros.fats.quantity, servings)}{macros.fats.unit}</div>
                <label>Carbs</label>
                <div>{getServingAmount(macros.carbs.quantity, servings)}{macros.carbs.unit}</div>
            </div>
            <div className={nutritionDividerGrid}>
                <label>Cholesterol</label>
                <div>{getServingAmount(minerals.cholesterol.quantity, servings)}{minerals.cholesterol.unit}</div>
                <label>Sodium</label>
                <div>{getServingAmount(minerals.sodium.quantity, servings)}{minerals.sodium.unit}</div>
                <label>Calcium</label>
                <div>{getServingAmount(minerals.calcium.quantity, servings)}{minerals.calcium.unit}</div>
                <label>Magnesium</label>
                <div>{getServingAmount(minerals.magnesium.quantity, servings)}{minerals.magnesium.unit}</div>
                <label>Potassium</label>
                <div>{getServingAmount(minerals.potassium.quantity, servings)}{minerals.potassium.unit}</div>
                <label>Iron</label>
                <div>{getServingAmount(minerals.iron.quantity, servings)}{minerals.iron.unit}</div>
            </div>
        </section>
    );
};

export default DetailsNutrition;