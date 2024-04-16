import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css' // As this line was missing, hence the tailwind properties were not being applied to the page.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

