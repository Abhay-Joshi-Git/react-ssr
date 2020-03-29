import React from 'react';
import ReactDom from 'react-dom';
import Routes from './routes';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    {renderRoutes(Routes)}
  </BrowserRouter>
);

ReactDom.render(<App />, document.getElementById('root'));
