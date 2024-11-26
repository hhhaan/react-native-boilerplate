import axios from 'axios';

const baseURL = process.env.BASE_URL;

export const publicAxios = axios.create({
    baseURL: baseURL,
    withCredentials: true,
});
