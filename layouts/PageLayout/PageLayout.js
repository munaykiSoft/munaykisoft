import React from 'react';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';


const PageLayout = ({ children }) => {
    return (
        <>
            <Header />
                <main className="container mt-5">
                    {children}
                </main>
            <Footer />
        </>
    )
}

export default PageLayout
