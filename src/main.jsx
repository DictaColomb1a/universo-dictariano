import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Asegúrate de tener este archivo en `src/App.jsx`
import './styles.css'; // Si tienes un archivo de estilos en `src`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
