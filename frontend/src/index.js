import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Router, Route, Routes, BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux'
import store from './redux/store'

// import "swiper/dist/css/bundle";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
