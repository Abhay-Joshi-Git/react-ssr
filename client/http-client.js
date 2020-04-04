import axios from 'axios';

let httpClient;

export const configureHTTPClient = (baseURL) => {
  httpClient = axios.create({ baseURL });
};

export const getHttpClient = () => httpClient;
