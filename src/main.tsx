import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// ~
import { GlobalStyles } from 'components';
import { store } from 'store';
import App from './App.tsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <GlobalStyles>
                <ConfigProvider
                    theme={{
                        token: {
                            colorBgElevated: 'transparent',
                            colorPrimary: '#e71a0f'
                        },
                    }}
                >
                    <ToastContainer position="top-center" />
                    <Provider store={store}>
                        <App />
                    </Provider>
                </ConfigProvider>
            </GlobalStyles>
        </BrowserRouter>
    </React.StrictMode>,
);
