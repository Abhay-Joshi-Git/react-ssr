import express from 'express';
import renderer from './helper/renderer';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  console.log(' app get req. .. . . ', req.path)
  res.send(renderer(req));
});

app.listen(8080, () => {
  console.log('app listening on 8080');
});
