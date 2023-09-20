import React from 'react';
import classes from './DetailsCuisineLabels.module.scss';

interface DetailsCuisineLabelsProps {
    title: string | string[];
    meal?: boolean;
    dishType?: boolean;
};

const { container, mealTypeLabel } = classes;

const DetailsCuisineLabels = ({ title, meal }: DetailsCuisineLabelsProps) => {
    let displayLabel;

    if (Array.isArray(title)) {
        displayLabel = title.join(", ");
    } else {
        displayLabel = title;
    };

    return (
        <label className={`${container} ${meal ? mealTypeLabel : ''} `}>{displayLabel}</label>
    );
};

export default DetailsCuisineLabels;