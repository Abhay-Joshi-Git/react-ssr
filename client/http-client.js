import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://react-ssr-api.herokuapp.com/'
});

export default httpClient;
