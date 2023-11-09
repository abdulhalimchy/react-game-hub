import axios from 'axios';

export interface FetchedResponse<T> {
    count: number;
    results: T[];
}

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '2ccf0d9d7cfb4a1683c7b7b66a8022f0'
    }
})