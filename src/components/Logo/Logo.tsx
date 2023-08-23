import Link from 'next/link';
import classes from './Logo.module.scss';

const { container } = classes;

const Logo = () => {
    return (
        <Link href="/">
            <figure className={container}>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="148.000000pt" height="148.000000pt" viewBox="0 0 148.000000 148.000000"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <g transform="translate(0.000000,148.000000) scale(0.100000,-0.100000)" stroke="none">
                        <path fill="#231F4D" d="M591 1294 c-214 -57 -377 -216 -441 -432 -19 -64 -22 -89 -17 -195 5
                            -141 25 -210 89 -309 40 -63 115 -148 130 -148 4 0 8 32 8 71 0 64 -3 76 -40
                        137 -100 166 -107 340 -19 514 58 115 188 220 314 253 69 18 188 20 250 4 l45
                        -11 2 -247 3 -246 58 -3 57 -3 0 286 0 286 -37 16 c-106 45 -290 57 -402 27z"/>
                        <path fill="#DF2468" d="M1140 1098 c0 -67 3 -77 34 -120 31 -44 44 -74 74 -169 17 -51 15
                        -196 -4 -260 -49 -167 -177 -299 -344 -355 -65 -22 -224 -25 -283 -5 l-37 13
                        0 244 0 244 -55 0 -55 0 0 -281 0 -280 44 -19 c57 -26 174 -50 239 -50 280 1
                        542 212 603 486 20 91 16 239 -10 324 -29 96 -118 234 -183 284 l-23 17 0 -73z"/>
                        <path fill="#DF2468" d="M690 690 l0 -240 60 0 60 0 0 240 0 240 -60 0 -60 0 0 -240z" />
                    </g>
                </svg>
                <h1>Revive Recipe</h1>
            </figure>
        </Link>
    );
};

export default Logo;