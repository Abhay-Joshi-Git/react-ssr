import React from 'react';
import ReactDom from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../../client/routes';

const renderer = (req) => {
  const App = () => (
    <StaticRouter location={req.path} context={{}}>
      <Routes />
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
