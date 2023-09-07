// import React from 'react';
import { ReactNode } from 'react';
import './app.scss';

interface GlobalStylesProps {
    children: ReactNode;
}

const GlobalStyles: React.FC<GlobalStylesProps> = ({ children }) => {
    return children;
};

export default GlobalStyles;
