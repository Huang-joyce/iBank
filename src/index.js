import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Home from './pages/Home';//前面的名稱必須使用大寫英文為開頭
// import Header from './componets/header';
// import Footer from './componets/footer';
import App from './App';
// import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();