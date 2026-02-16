/// <reference types="vite/client" />
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Importa tus estilos globales aquí si tienes (ej. tailwind o css)
// import './index.css'; 

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("No se encontró el elemento root. Asegúrate de que index.html tenga un <div id='root'></div>");
}

// Creamos el root
const root = createRoot(rootElement);

// Obtenemos el base de Vite para no escribirlo a mano dos veces
const basename = import.meta.env.BASE_URL;

root.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);