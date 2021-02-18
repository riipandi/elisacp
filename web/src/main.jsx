import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import 'tailwindcss/tailwind.css'
import Routes from './routes'
import { history } from './utils';

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Routes />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
