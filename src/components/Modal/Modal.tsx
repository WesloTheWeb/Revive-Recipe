import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import Button, { ButtonTypes } from '@/containers/Button/Button';
import classes from './Modal.module.scss';

const { container, instructions, controls } = classes;

interface Inputs {
    username: string;
    password: string;
};

interface ModalProps {
    title: string;
    description: string;
    closeModal: () => void;
    content: React.ReactNode; // Use ReactNode to represent any kind of content
};

const Modal = ({ closeModal }: ModalProps) => {

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    return (
        <section className={container}>
            <div className={instructions}>
                <h3>Log in</h3>
                <p>Please login to your account below. If you wish to create a new account or view as a guest you may do so.</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>username</label>
                <input placeholder="username"{...register("username", { required: true })} />
                {errors.username && <span>Username not entered</span>}
                <label>password</label>
                <input type="password" placeholder="password"{...register("password", { required: true })} />
                {errors.password && <span>Blank or invalid password</span>}
                <div className={controls}>
                    <Button buttonType={ButtonTypes.CANCEL} handleClick={closeModal} />
                    <Button buttonType={ButtonTypes.LOGIN} />
                </div>
            </form>
        </section>
    );
};

export default Modal;