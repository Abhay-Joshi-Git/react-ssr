import React from 'react';
import ReactDom from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from '../../client/routes';
import serialize from 'serialize-javascript';

const renderer = (req, values) => {
  const App = () => (
    <StaticRouter location={req.path} context={{}}>
      {renderRoutes(Routes, values)}
    </StaticRouter>
  );

  const app = ReactDom.renderToString(<App />);
  return `
      <!DOCTYPE html>
        <html>
          <head>
            <title>SSR</title>
          <head>
          <body>
            <div id="root">${app}</div>
            <script>
              window.INITIAL_DATA = ${serialize(values)}
            </script>
            <script src="bundle.js"></script>
          </body>
        </html>
    `;
}

export default renderer;

  // const app = ReactDom.renderToString(<Home />);
  // export default `
  //     <!DOCTYPE html>
  //       <html>
  //         <head>
  //           <title>SSR</title>
  //         <head>
  //         <body>
  //           <div id="root">${app}</div>
  //           <script src="bundle.js"></script>
  //         </body>
  //       </html>
  //   `;
