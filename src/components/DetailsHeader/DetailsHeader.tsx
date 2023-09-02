import React from 'react';
import Image from 'next/image';
import classes from './DetailsHeader.module.scss';

interface DetailsHeaderProps {
    img: string;
    label: string;
};

const { detailedHeaderFlex } = classes;

const DetailsHeader = ({ img, label }: DetailsHeaderProps) => {
    return (
        <section className={detailedHeaderFlex}>
            <Image src={img} width={250} height={300} alt={label} />
            <h2>{label}</h2>
        </section>
    );
};

export default DetailsHeader;