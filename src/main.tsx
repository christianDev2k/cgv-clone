import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StyleProvider } from '@ant-design/cssinjs';
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
                            colorPrimary: '#e71a0f',
                        },
                        components: {
                            Breadcrumb: {
                                itemColor: '#222',
                                linkColor: '#222',
                                iconFontSize: 12,
                                linkHoverColor: 'none',
                                separatorMargin: 0,
                            },
                        },
                    }}
                >
                    <ToastContainer position="top-center" />
                    <Provider store={store}>
                        <StyleProvider hashPriority="high">
                            <App />
                        </StyleProvider>
                    </Provider>
                </ConfigProvider>
            </GlobalStyles>
        </BrowserRouter>
    </React.StrictMode>,
);
