import axios, { CreateAxiosDefaults, AxiosRequestHeaders } from 'axios';

const TokenCyberSoft = import.meta.env.VITE_TOKEN_CYBERSOFT;

const apiInstance = (config?: CreateAxiosDefaults) => {
    const api = axios.create(config);

    api.interceptors.request.use(config => {
        return {
            ...config,
            headers: {
                TokenCyberSoft,
            } as unknown as AxiosRequestHeaders,
        };
    });

    return api;
};

export default apiInstance;
