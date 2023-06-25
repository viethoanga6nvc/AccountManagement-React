import axios from "axios";

const axiosClient = axios.create({
    baseURL: `https://649856aa9543ce0f49e1ea56.mockapi.io`,
    timeout: 5000,
    responseType: 'json'
});

export default axiosClient;