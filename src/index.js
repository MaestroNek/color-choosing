import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Color from './color';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Color />,
  document.getElementById('root')
);
registerServiceWorker();
