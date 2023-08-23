import classes from './Button.module.scss';

const { loginButton, signUpButton, guestButton } = classes;

interface ButtonProps {
    buttonType: ButtonTypes;
};

// pass to the parent component for the prop calling allow multiple 
// constants:
export enum ButtonTypes {
    LOGIN = 'login',
    SIGNUP = 'signup',
    GUEST = 'guest'
};

// determine the class from our props
const buttonPaths = {
    [ButtonTypes.LOGIN]: loginButton,
    [ButtonTypes.SIGNUP]: signUpButton,
    [ButtonTypes.GUEST]: guestButton
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
            default:
                return undefined;
        };
    };

    const determineButtonText = (type: ButtonTypes) => {
        switch (type) {
            case ButtonTypes.LOGIN:
                return 'Log In';
            case ButtonTypes.SIGNUP:
                return 'Sign Up';
            case ButtonTypes.GUEST:
                return 'view as Guest';
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