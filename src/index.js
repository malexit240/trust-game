import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'

import './styles/index.scss';

import reportWebVitals from './reportWebVitals';

import { store } from './store/store';
import App from './containers/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

    <Provider store={store}>

      <App />

    </Provider>

  </React.StrictMode>
);

reportWebVitals();
