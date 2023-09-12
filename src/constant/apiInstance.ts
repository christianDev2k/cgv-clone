import axios, { CreateAxiosDefaults, AxiosRequestHeaders } from 'axios';
import getAccessToken from 'utils/getAccessToken';

const TokenCyberSoft = import.meta.env.VITE_TOKEN_CYBERSOFT;

const apiInstance = (config?: CreateAxiosDefaults) => {
    const api = axios.create(config);
    const Authorization = 'Bearer ' + getAccessToken() || '';

    api.interceptors.request.use(config => {
        return {
            ...config,
            headers: {
                TokenCyberSoft,
                Authorization,
            } as unknown as AxiosRequestHeaders,
        };
    });

    return api;
};

export default apiInstance;
