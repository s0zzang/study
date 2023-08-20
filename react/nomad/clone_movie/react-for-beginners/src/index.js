import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import "./styles.css"; // 모든 button 태그에 스타일 적용됨

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
