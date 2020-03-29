import React from 'react';
import ReactDom from 'react-dom/server';
import Home from '../../client/components/Home';

const renderer = () => {
  const app = ReactDom.renderToString(<Home />);
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
