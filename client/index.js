import React from 'react';
import ReactDom from 'react-dom';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

ReactDom.render(<App />, document.getElementById('root'));
