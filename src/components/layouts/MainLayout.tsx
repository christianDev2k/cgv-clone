// import React from 'react'
import { HeaderTemplate, FooterTemplate } from 'components';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='container-lg mx-auto'>
            <HeaderTemplate />
            <Outlet />
            <FooterTemplate />
        </div>
    );
};

export default MainLayout;
