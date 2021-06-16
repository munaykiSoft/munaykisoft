import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';


const PageLayout = ({ children }) => {
    return (
        <>
            <Header />
            { children }
            <Footer />
        </>
    )
}

export default PageLayout
