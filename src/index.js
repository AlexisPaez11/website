import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory({
    v7_startTransition: true,  // Habilitar el flag de transición
    v7_relativeSplatPath: true,  // Habilitar el flag de rutas relativas para rutas Splat
  });  

  if (process.env.NODE_ENV !== 'production') {
      console.warn = () => {};  // Esto deshabilita las advertencias en desarrollo
    }

const rootElement = document.getElementById('root')
const root = ReactDOMClient.createRoot(rootElement)

root.render(
    <BrowserRouter history={history}> 
        <App/>
    </BrowserRouter>, 
);