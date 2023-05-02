import React from 'react'
import ReactDOM from 'react-dom/client'
import {Cards} from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.css'


ReactDOM.createRoot(document.getElementById('cards') as HTMLElement).render(
  <React.StrictMode>
    <Cards title="Ingresos" aumentar={10} type='add' />
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('root2') as HTMLElement).render(
  <React.StrictMode>
    <Cards title="Gastos" aumentar={1} type='sub' />
  </React.StrictMode>,
)