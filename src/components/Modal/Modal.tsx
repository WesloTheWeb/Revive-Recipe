import React from 'react';
import Button, { ButtonTypes } from '@/containers/Button/Button';
import classes from './Modal.module.scss';

const { container, instructions, ingredientContainer, controls } = classes;

interface ModalProps {
    title: string;
    description?: string | string[] | null;
    ingredients?: boolean;
    closeModal: () => void;
    content?: React.ReactNode; // Use ReactNode to represent any kind of content
};

const Modal = ({ title, ingredients, description, closeModal, content }: ModalProps) => {

    const renderDescription = (desc: string) => <p>{desc}</p>;

    const renderIngredientList = (ingredientList: string[]) => {
        return (
            <section className={ingredientContainer}>
                {ingredientList.map((ingredient, key) => (
                    <li key={key}>{ingredient}</li>
                ))}
            </section>
        );
    };

    return (
        <section className={container}>
            <div className={instructions}>
                <h3>{title}</h3>
                {ingredients && Array.isArray(description)
                    ? renderIngredientList(description)  // Use the function for the ingredient list 
                    : renderDescription(description as string)}
            </div>
            {content}
            <div className={controls}>
                <Button buttonType={ButtonTypes.CANCEL} handleClick={closeModal} />
            </div>
        </section>
    );
};

export default Modal;
