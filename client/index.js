import React from 'react';
import ReactDom from 'react-dom';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import { configureHTTPClient } from './http-client';
import Routes from './routes';

configureHTTPClient('/api/');

const App = () => (
  <BrowserRouter>
    {renderRoutes(Routes)}
  </BrowserRouter>
);

ReactDom.render(<App />, document.getElementById('root'));
