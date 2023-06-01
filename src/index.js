import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppContextProvider } from './AppContextProvider';
import { BrowserRouter } from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
window.$score = 3;
window.$geometry1 = 'primary';
window.$geometry2 = 'primary';
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </AppContextProvider>
  </React.StrictMode>
);

