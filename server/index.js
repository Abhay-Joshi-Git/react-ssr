import 'babel-polyfill';
import express from 'express';
import proxy from 'express-http-proxy';
import renderer from './helper/renderer';
import { matchRoutes } from 'react-router-config';
import { configureHTTPClient } from '../client/http-client';
import Routes from '../client/routes';

const baseURL = 'https://react-ssr-api.herokuapp.com/';
configureHTTPClient(baseURL);

const app = express();

app.use('/api', proxy(baseURL, {
  proxyReqOptDecorator(opts) {
    opts.headers['x-forwarded-host'] = 'localhost:3000';
    return opts;
  }
}));
app.use(express.static('public'));

app.get('*', (req, res) => {
  const matches = matchRoutes(Routes, req.path);
  const promises = matches.map(({route: { fetchData }}) => {
    return fetchData ? fetchData() : null;
  })
  Promise.all(promises).then((values) => {
    res.send(renderer(req, values[0]));
  })
});

app.listen(8080, () => {
  console.log('app listening on 8080');
});
