import React from 'react';
import { MutatingDots } from "react-loader-spinner";
import classes from './Loading.module.scss';

const { centerLoader } = classes;

const Loading = ({ }) => {
    return (
        <div className={centerLoader}>
            <MutatingDots
                height="100"
                width="100"
                color="#231F4D"
                secondaryColor='#DF2468'
                radius='12.5'
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{}}
                wrapperClass="centerLoader"
                visible={true}
            />
            Loading...
        </div>
    );
};

export default Loading;