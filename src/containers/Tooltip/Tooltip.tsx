import React, { useState, ReactNode } from 'react';
import classes from './Tooltip.module.scss';

interface TooltipProps {
    message: string;
    children: ReactNode;
}

const { tooltipContainer, tooltip } = classes;

const Tooltip = ({ message, children }: TooltipProps) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div
            className={tooltipContainer}
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}
            {isVisible && <div className={tooltip}>{message}</div>}
        </div>
    );
};

export default Tooltip;