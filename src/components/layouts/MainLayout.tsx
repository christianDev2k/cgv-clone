// import React from 'react'
import { Header, Footer } from 'components';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='container-lg mx-auto'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;
