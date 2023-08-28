import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import Button, { ButtonTypes } from '@/containers/Button/Button';
import Toast from '../Toast/Toast';

interface Inputs {
    username: string;
    password: string;
};

const LoginForm = () => {
    const [showToast, setShowToast] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        setShowToast(true);
    };

    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => {
                setShowToast(false);
            }, 5000); // 5 seconds

            return () => clearTimeout(timer);
        }
    }, [showToast])

    return (
        <>
            {showToast && <Toast
                type="notice"
                content="There is no backend integrated into the web app yet. But this is just demo to show react-hook forms. If you 
          are interested in the data you entered, it is logged to the console."
            />}
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>username</label>
                <input placeholder="username"{...register("username", { required: true })} />
                {errors.username && <span>Username not entered</span>}
                <label>password</label>
                <input type="password" placeholder="password"{...register("password", { required: true })} />
                {errors.password && <span>Blank or invalid password</span>}
                <Button buttonType={ButtonTypes.LOGIN} />
            </form>
        </>

    );
};

export default LoginForm;