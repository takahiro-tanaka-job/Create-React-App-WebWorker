import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import * as comlink from 'comlink';
import { MyWorker } from './webWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const myWorker = new Worker('./webWorker', {
  name: 'webWorker',
  type: 'module',
});

comlink.wrap<MyWorker>(myWorker).myWorker('my work !');
