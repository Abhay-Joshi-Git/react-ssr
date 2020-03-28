import React from 'react';
import ReactDom from 'react-dom';

import Home from './components/Home';

console.log('rendering ......');

ReactDom.render(<Home />, document.getElementById('root'));
