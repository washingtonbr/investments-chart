import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { configDate } from './utils/date';

export const renderApp = () => ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

renderApp();
configDate();
