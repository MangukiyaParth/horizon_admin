import axios from 'axios';
const API_URL = "https://api.whiteorigin.in/api";

const horizonApiAxios = axios.create({
    baseURL: `${API_URL}/`,
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
});

horizonApiAxios.interceptors.request.use(
    async (config) => {
        let storageToken = localStorage.getItem('horizon_token');

        if (!config.headers.Authorization) {
            config.headers.Authorization = `Bearer ${storageToken}`;
        }
        return config;

    },
    error => {
        return Promise.reject(error);
    },
);

export default horizonApiAxios;