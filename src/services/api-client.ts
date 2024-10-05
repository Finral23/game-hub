import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'e3ae432eb6b34f82a311a51e4cdc128a'
    }
})