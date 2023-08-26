import { useForm, SubmitHandler } from "react-hook-form";
import Button, { ButtonTypes } from '@/containers/Button/Button';

interface Inputs {
    username: string;
    password: string;
};

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>username</label>
            <input placeholder="username"{...register("username", { required: true })} />
            {errors.username && <span>Username not entered</span>}
            <label>password</label>
            <input type="password" placeholder="password"{...register("password", { required: true })} />
            {errors.password && <span>Blank or invalid password</span>}
            <Button buttonType={ButtonTypes.LOGIN} />
        </form>
    );
};

export default LoginForm;