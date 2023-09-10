import React from 'react';
import ReactDOM from 'react-dom/client';
// redux thẻ chứa APP
import { Provider } from 'react-redux';
// thư viện từ react query 
import {QueryClient,QueryClientProvider} from "@tanstack/react-query"

import "bootstrap/dist/css/bootstrap.min.css"

// sử dụng redux 
import store from "./store"


import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
 const queryClient = new QueryClient()


root.render(
  // thẻ in hoa chữ cái đầu như vd ở dưới được goi là component. VD là thẻ App ở dưới đó
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>

    <App />

    </QueryClientProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
