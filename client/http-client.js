import axios from 'axios';

let config = {};
const parseCookies = (cookiesObj) => {
  return Object.entries(cookiesObj).map((val) => {
    return `${val[0]}=${val[1]}`
  }).join('; ');
}

export const configureHTTPClient = (baseURL, cookie = null) => {
  config = { baseURL };
  if (cookie) {
    config = {
      ...config,
      headers: { cookie: parseCookies(cookie) }
    };
  }
};

export const getHttpClient = () => axios.create(config);
