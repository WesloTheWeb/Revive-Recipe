import { MutatingDots } from "react-loader-spinner";

const Loading = ({ }) => {
    return (
        <MutatingDots
            height="100"
            width="100"
            color="#231F4D"
            secondaryColor='#DF2468'
            radius='12.5'
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    );
};

export default Loading;