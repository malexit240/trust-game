import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './containers/App/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <App />

  </React.StrictMode>
);

reportWebVitals();
