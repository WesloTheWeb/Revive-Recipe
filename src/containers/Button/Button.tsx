import classes from './Button.module.scss';

const { loginButton, signUpButton, guestButton, returnButton } = classes;

interface ButtonProps {
    buttonType: ButtonTypes;
};

// pass to the parent component for the prop calling allow multiple 
// constants:
export enum ButtonTypes {
    LOGIN = 'login',
    SIGNUP = 'signup',
    GUEST = 'guest',
    SIGNUPACCOUNT = 'createAccount',
    RETURN = 'returnButton'
};

// binds CSS classes to whatever prop is passed:
const buttonPaths = {
    [ButtonTypes.LOGIN]: loginButton,
    [ButtonTypes.SIGNUP]: signUpButton,
    [ButtonTypes.GUEST]: guestButton,
    [ButtonTypes.SIGNUPACCOUNT]: signUpButton,
    [ButtonTypes.RETURN]: returnButton
};

const Button = ({ buttonType }: ButtonProps) => {

    const determineButtonTypeFromProps = (type: ButtonTypes) => {
        switch (type) {
            case ButtonTypes.LOGIN:
                return buttonPaths[ButtonTypes.LOGIN];
            case ButtonTypes.SIGNUP:
                return buttonPaths[ButtonTypes.SIGNUP];
            case ButtonTypes.GUEST:
                return buttonPaths[ButtonTypes.GUEST];
            case ButtonTypes.SIGNUPACCOUNT:
                return buttonPaths[ButtonTypes.SIGNUPACCOUNT];
            case ButtonTypes.RETURN:
                return buttonPaths[ButtonTypes.RETURN]
            default:
                return undefined;
        };
    };

    const determineButtonText = (type: ButtonTypes) => {
        // returns text on button:
        switch (type) {
            case ButtonTypes.LOGIN:
                return 'Log In';
            case ButtonTypes.SIGNUP:
                return 'Sign Up';
            case ButtonTypes.GUEST:
                return 'view as Guest';
            case ButtonTypes.SIGNUPACCOUNT:
                return 'Create Account';
            case ButtonTypes.RETURN:
                return 'Return'
            default:
                return 'Click Me';
        };
    };

    return (
        <button className={determineButtonTypeFromProps(buttonType)}>
            {determineButtonText(buttonType)}
        </button>
    );
};

export default Button;