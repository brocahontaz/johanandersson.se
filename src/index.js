import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import 'fontawesome'
import { Provider } from 'react-redux'
import store from 'redux/store'

const rootElement = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>
  </Provider>,
  rootElement
)
