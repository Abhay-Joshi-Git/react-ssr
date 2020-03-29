import 'babel-polyfill';
import express from 'express';
import renderer from './helper/renderer';
import { matchRoutes } from 'react-router-config';
import Routes from '../client/routes';

const app = express();

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
