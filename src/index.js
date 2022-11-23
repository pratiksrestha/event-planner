import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Footer from './Components/Footer'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { Provider } from "react-redux";
import { store } from "./Store/store"

const root = ReactDOM.createRoot(document.getElementById('root'));
const foot = ReactDOM.createRoot(document.getElementById('foot'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
    <Provider store={ store }>
    <App />
    </Provider>
    </BrowserRouter>
  // </React.StrictMode>
);
foot.render(
  // <React.StrictMode>
    <BrowserRouter>
    <Footer />
    </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();