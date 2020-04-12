import 'babel-polyfill';
import express from 'express';
import proxy from 'express-http-proxy';
import renderer from './helper/renderer';
import { matchRoutes } from 'react-router-config';
import cookieParser from 'cookie-parser';
import { configureHTTPClient, setCookie } from '../client/http-client';
import Routes from '../client/routes';
import RouteNotFound from '../client/pages/RouteNotFound';

const baseURL = 'http://react-ssr-api.herokuapp.com/';

const app = express();

app.use(cookieParser());
app.use('/api', proxy(baseURL, {
  proxyReqOptDecorator(opts) {
    opts.headers['x-forwarded-host'] = 'localhost:3000/';
    return opts;
  }
}));
app.use(express.static('public'));

app.get('*', (req, res) => {
  configureHTTPClient(baseURL, req.cookies);
  const matches = matchRoutes(Routes, req.path);
  const promises = matches.map(({route: { fetchData }}) => {
    return fetchData ? fetchData() : null;
  });
  const notFound = matches.filter(match => {
    return match.route.component === RouteNotFound.component
  })
  if (notFound.length) {
    res.status(404);
  }
  Promise.all(promises).then((values) => {
    res.send(renderer(req, { values }));
  });
});

app.listen(3000, () => {
  console.log('app listening on 3000');
});
