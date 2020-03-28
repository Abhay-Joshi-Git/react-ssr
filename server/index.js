import React from 'react';
import ReactDom from 'react-dom/server';
import express from 'express';
import Home from '../client/components/Home';

const app = express();

app.use(express.static('public'));
app.get('/', (req, res) => {
  const app = ReactDom.renderToString(<Home />)

  const htmlTemplate = `
    <!DOCTYPE html>
      <html>
        <head>
          <title>SSR</title>
        <head>
        <body>
          <div id="root">${app}</div>
          <script src="bundle.js"></script>
        </body>
      </html>
  `;

  res.send(htmlTemplate);
});

app.listen(8080, () => {
  console.log('app listening on 8080');
});
