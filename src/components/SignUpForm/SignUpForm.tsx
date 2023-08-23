import Link from "next/link";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import ReactSelect from "react-select";
import Image from 'next/image';
import classes from './SignUpForm.module.scss';
import Button, { ButtonTypes } from "@/containers/Button/Button";

const { signUpInstructions, signUpContainer, signUpFormContainer, formGroup, actionButtonsContainer, relatedFormGroup } = classes;

interface Inputs {
    firstName: string;
    lastName: string;
    gender: string;
    birthday: any; // might use datepicker calendar for this.
    username: string;
    password: string;
    email: string;
};

const genderOptions: readonly { value: string, label: string }[] = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
];

const SignUpForm = ({ }) => {

    // RHF Properties
    const { register, handleSubmit, watch, control, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    return (
        <section className={signUpContainer}>
            <section className={signUpInstructions}>
                <Image src='./assets/svg/Revive-Recipe-small.svg' alt="logo" width={75} height={100} />
                <h2>Revive Recipe</h2>
                <p>
                    To create your free account, please fill out the requested information.
                    A valid email address is required.
                </p>
            </section>
            <form
                className={signUpFormContainer}
                onSubmit={handleSubmit(onSubmit)}
            >
                <h3>Basic Information</h3>
                <p>
                    Ensure your username does not include personal information or common phrases when completing forms,
                    safeguarding your privacy and enhancing security.
                </p>
                <section className={relatedFormGroup}>
                    <div className={formGroup}>
                        <label>*First Name</label>
                        <input placeholder="First Name"{...register("firstName", { required: true })} />
                        {errors.firstName && <span>This field cannot be blank</span>}
                    </div>
                    <div className={formGroup}>
                        <label>*Last Name</label>
                        <input placeholder="Last Name"{...register("lastName", { required: true })} />
                        {errors.lastName && <span>This field is required</span>}
                    </div>
                    <div className={formGroup}>
                        <label>*Gender</label>
                        <Controller
                            name="gender"
                            control={control}
                            render={({ field }) => (
                                <ReactSelect
                                    {...field}
                                    options={genderOptions as any}
                                    isClearable
                                    placeholder="Select Gender"
                                />
                            )}
                        />
                        {errors.gender && <span>Select a gender</span>}
                    </div>
                    <section className={relatedFormGroup}>
                        <div className={formGroup}>
                            <label>*Email Address</label>
                            <input placeholder="email address"{...register("email", { required: true })} />
                            {errors.lastName && <span>Email cannot be empty.</span>}
                        </div>
                        <div className={formGroup}>
                            <label>*Username </label>
                            <input {...register("username", { required: true })} />
                            {errors.lastName && <span>Email cannot be empty.</span>}
                        </div>
                        <p>
                            Please ensure it is unique, appropriate and abides by our community guidelines.
                        </p>
                    </section>
                    <div className={formGroup}>
                        <label>*Create password</label>
                        <input {...register("password", { required: true })} />
                        {errors.password && <span>Password needed.</span>}
                    </div>
                </section>


                <section className={actionButtonsContainer}>
                    <Link href="/">
                        <Button buttonType={ButtonTypes.RETURN} />
                    </Link>
                    <Button buttonType={ButtonTypes.SIGNUPACCOUNT} />
                </section>
            </form>
        </section>
    )
};

export default SignUpForm;