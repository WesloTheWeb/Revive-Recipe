import Link from "next/link";
import dynamic from "next/dynamic";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import ReactSelect from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from 'next/image';
import classes from './SignUpForm.module.scss';
import Button, { ButtonTypes } from "@/containers/Button/Button";

const ReactSelectNoSSR = dynamic(() => import("react-select"), {
    ssr: false,
    loading: () => <p>Loading...</p>
});

const { signUpInstructions, signUpContainer, signUpFormContainer, formGroup, actionButtonsContainer, relatedFormGroup } = classes;

interface Inputs {
    firstName: string;
    lastName: string;
    gender: string;
    birthday: any;
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

    const eighteenYearsAgo = new Date();
    eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);

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
                                <ReactSelectNoSSR
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
                            <label>*Birthday (atleast 18 years old)</label>
                            <Controller
                                name="birthday"
                                control={control}
                                render={({ field }) => (
                                    <DatePicker
                                        selected={field.value}
                                        onChange={(date) => field.onChange(date)}
                                        dateFormat="MM/dd/yyyy"
                                        maxDate={eighteenYearsAgo}
                                        placeholderText="mm/dd/yyyy"
                                    />
                                )}
                            />
                        </div>
                        <div className={formGroup}>
                            <label>*Email Address</label>
                            <input placeholder="email address"{...register("email", { required: true })} />
                            {errors.lastName && <span>Email cannot be empty.</span>}
                        </div>
                    </section>
                    <section className={relatedFormGroup}>
                        <div className={formGroup}>
                            <label>*Username </label>
                            <input {...register("username", { required: true })} />
                            {errors.lastName && <span>Email cannot be empty.</span>}
                        </div>
                        <p>
                            Please ensure it is unique, appropriate and abides by our community guidelines.
                        </p>
                        <div className={formGroup}>
                            <label>*Create password</label>
                            <input {...register("password", { required: true })} />
                            {errors.password && <span>Password needed.</span>}
                        </div>
                    </section>
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