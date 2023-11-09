import axios, { AxiosRequestConfig } from "axios";

export interface FetchedResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2ccf0d9d7cfb4a1683c7b7b66a8022f0",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchedResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
