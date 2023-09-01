import classes from './DetailsCuisineLabels.module.scss';

interface DetailsCuisineLabelsProps {
    label: string;
    meal?: boolean;
    dishType?: boolean;
};

const { container } = classes;

const DetailsCuisineLabels = ({ label, meal, dishType }: DetailsCuisineLabelsProps) => {
    return (
        <label className={container}>{label}</label>
    );
};

export default DetailsCuisineLabels;