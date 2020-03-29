import express from 'express';
import renderer from './helper/renderer';

const app = express();

app.use(express.static('public'));

app.get('/', (_, res) => {
  res.send(renderer());
});

app.listen(8080, () => {
  console.log('app listening on 8080');
});
