import React from 'react';
import ReactDom from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from '../../client/routes';
import serialize from 'serialize-javascript';

const renderer = (req, data) => {
  const initialData = data.values.reduce((obj, val) => {
    if (val) {
      let key = Object.keys(val)[0];
      obj[key] = val[key];
    }
    return obj;
  }, {});

  const App = () => (
    <StaticRouter location={req.path} context={{}}>
      {renderRoutes(Routes, { values: initialData })}
    </StaticRouter>
  );

  const app = ReactDom.renderToString(<App />);  
  return `
      <!DOCTYPE html>
        <html>
          <head>
            <title>SSR</title>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <head>
          <body>
            <div id="root">${app}</div>
            <script>
              window.INITIAL_DATA = ${serialize(initialData)}
            </script>
            <script src="bundle.js"></script>
          </body>
        </html>
    `;
}

export default renderer;
