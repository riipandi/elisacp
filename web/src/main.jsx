import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import 'tailwindcss/tailwind.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Routes from './routes'
import { history } from './utils';
import './assets/css/style.css'

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Routes />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
