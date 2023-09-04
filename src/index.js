import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import "bootstrap/dist/css/bootstrap.min.css"

import store from "./store"


import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // thẻ in hoa chữ cái đầu như vd ở dưới được goi là component. VD là thẻ App ở dưới đó
  <Provider store={store}>

    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
