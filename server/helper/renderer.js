import React from 'react';
import ReactDom from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Helmet } from 'react-helmet';
import Routes from '../../client/routes';
import serialize from 'serialize-javascript';
import { ServerStyleSheets } from '@material-ui/core/styles';

const renderer = (req, data) => {
  const initialData = data.values.reduce((obj, val) => {
    if (val) {
      let key = Object.keys(val)[0];
      obj[key] = val[key];
    }
    return obj;
  }, {});

  const sheets = new ServerStyleSheets();

  const RootApp = () => (
    <StaticRouter location={req.path} context={{}}>
      {renderRoutes(Routes, { values: initialData })}
    </StaticRouter>
  );

  const app = ReactDom.renderToString(sheets.collect(<RootApp />));
  const cssString = sheets.toString();
  const helmet = Helmet.renderStatic();

  return `
      <!DOCTYPE html>
        <html>
          <head>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <style id="jss-server-side">${cssString}</style>
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
