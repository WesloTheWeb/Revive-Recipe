import React from 'react';
import Image from 'next/image';
import classes from './SignUpForm.module.scss';

const { signupInstructions, signupContainer } = classes;

const SignUpForm = ({ }) => {
    return (
        <section className={signupContainer}>
            <section className={signupInstructions}>
                <Image src='./assets/svg/Revive-Recipe-small.svg' alt="logo" width={75} height={100} />
                <h2>Revive Recipe</h2>
                <p>
                    To create your free account, please fill out the requested information. A valid email address is required
                </p>
            </section>
            <form>
                <h3>Basic Information</h3>
                <section>
                    sd
                </section>
            </form>
        </section>
    )
};

export default SignUpForm;