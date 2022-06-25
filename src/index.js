import React from 'react'
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import 'fontawesome'
import { Provider } from 'react-redux'
import store from 'redux/store'

const container = document.getElementById('root')
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>
  </Provider>,
)
