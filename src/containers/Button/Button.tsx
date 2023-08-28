import classes from './Button.module.scss';

const { loginButton, signUpButton, guestButton,
    returnButton, cancelButton, viewIngredientsButton,
    recipeSearchButton, firstPage, prevPage, nextPage,
    lastPage } = classes;

interface ButtonProps {
    buttonType: ButtonTypes;
    handleClick?: () => void;
    disabled?: boolean;
};

// pass to the parent component for the prop calling allow multiple constants
export enum ButtonTypes {
    LOGIN = 'login',
    SIGNUP = 'signup',
    GUEST = 'guest',
    SIGNUPACCOUNT = 'createAccount',
    RETURN = 'returnButton',
    CANCEL = 'cancelButton',
    VIEWINGREDIENTS = 'viewIngredientsButton',
    RECIPESEARCH = 'recipeSearchButton',
    FIRSTPAGE = 'firstPage',
    PREVPAGE = 'prevPage',
    NEXTPAGE = 'nextPage',
    LASTPAGE = 'lastPage',
};

// binds CSS classes to whatever prop is passed:
const buttonPaths = {
    [ButtonTypes.LOGIN]: loginButton,
    [ButtonTypes.SIGNUP]: signUpButton,
    [ButtonTypes.GUEST]: guestButton,
    [ButtonTypes.SIGNUPACCOUNT]: signUpButton,
    [ButtonTypes.RETURN]: returnButton,
    [ButtonTypes.CANCEL]: cancelButton,
    [ButtonTypes.VIEWINGREDIENTS]: viewIngredientsButton,
    [ButtonTypes.RECIPESEARCH]: recipeSearchButton,
    [ButtonTypes.FIRSTPAGE]: firstPage,
    [ButtonTypes.PREVPAGE]: prevPage,
    [ButtonTypes.NEXTPAGE]: nextPage,
    [ButtonTypes.LASTPAGE]: lastPage

};

const Button = ({ buttonType, handleClick, disabled }: ButtonProps) => {

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
                return buttonPaths[ButtonTypes.RETURN];
            case ButtonTypes.CANCEL:
                return buttonPaths[ButtonTypes.CANCEL];
            case ButtonTypes.VIEWINGREDIENTS:
                return buttonPaths[ButtonTypes.VIEWINGREDIENTS];
            case ButtonTypes.RECIPESEARCH:
                return buttonPaths[ButtonTypes.RECIPESEARCH];
            case ButtonTypes.FIRSTPAGE:
                return buttonPaths[ButtonTypes.FIRSTPAGE];
            case ButtonTypes.PREVPAGE:
                return buttonPaths[ButtonTypes.PREVPAGE];
            case ButtonTypes.NEXTPAGE:
                return buttonPaths[ButtonTypes.NEXTPAGE];
            case ButtonTypes.LASTPAGE:
                return buttonPaths[ButtonTypes.LASTPAGE];
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
            case ButtonTypes.CANCEL:
                return 'Cancel'
            case ButtonTypes.VIEWINGREDIENTS:
                return 'View Ingredients'
            case ButtonTypes.RECIPESEARCH:
                return 'Search Recipe'
            case ButtonTypes.FIRSTPAGE:
                return 'First'
            case ButtonTypes.PREVPAGE:
                return 'Prev'
            case ButtonTypes.NEXTPAGE:
                return 'Next'
            case ButtonTypes.LASTPAGE:
                return 'Last'
            default:
                return 'Click Me';
        };
    };

    // Specific button action via the prop passed in for handleClick:
    const handleButtonClick = () => {
        if (handleClick) {
            handleClick();
        };
    };

    return (
        <button
            className={determineButtonTypeFromProps(buttonType)}
            onClick={handleButtonClick}
            disabled={disabled}
        >
            {determineButtonText(buttonType)}
        </button>
    );
};

export default Button;