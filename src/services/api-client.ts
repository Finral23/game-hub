import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b627d0f54e2a49d8bc3a0a1e43db6e44'
    }
})