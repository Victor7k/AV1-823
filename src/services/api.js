import axios from 'axios';

const api = axios.create({
    baseURL: 'http://172.26.15.11:3333'
});

export default api;