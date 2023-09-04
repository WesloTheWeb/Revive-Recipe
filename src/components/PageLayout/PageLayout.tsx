import { ReactNode } from 'react';
import Head from "next/head";
import Logo from "../Logo/Logo";
import Footer from "../Footer/Footer";

interface PageLayoutProps {
    children: ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
    return (
        <div className="page-container">
            <Logo />
            <Head>
                <title>Revive Recipe</title>
                <meta name="Revive Recipes the place" content="Get moving. Get going. Get Grooving." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="content-wrap">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default PageLayout;