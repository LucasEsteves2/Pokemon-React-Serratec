import axios from "axios";

const api = axios.create({
    baseURL: 'https://apiserratec.herokuapp.com'
})
export default api;


