import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
// ~
import { GlobalStyles, antd } from 'components';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <GlobalStyles>
                <ConfigProvider theme={antd}>
                    <App />
                </ConfigProvider>
            </GlobalStyles>
        </BrowserRouter>
    </React.StrictMode>,
);
