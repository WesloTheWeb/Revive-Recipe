import React from 'react';
import classes from './Footer.module.scss';

const { information } = classes;

const Footer = ({ }) => {
    return (
        <footer>
            <div className={information}>
                <div>
                    <label>Address: 177A Bleecker Street,<br/> New York City, NY. 10012</label>
                    <label>Phone: (212)-555-7143</label>
                    <label>Email: inquiries@reviverecipe.com</label>
                </div>
                <label>&copy; Revive Recipe 2023. All rights reserved.</label>
            </div>
        </footer>
    );
};

export default Footer;