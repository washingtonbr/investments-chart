import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

export const renderApp = () => ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

renderApp();
