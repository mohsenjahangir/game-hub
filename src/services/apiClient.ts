import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '6fa95497718c480eb5b5619f9b730bd2'
    }
})