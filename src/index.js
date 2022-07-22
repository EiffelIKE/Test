import React from 'react'
import App from './App'
import {createRoot} from 'react-dom/client'
import store from './store/store'
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
    <Provider store={store}>
      <App tab="home" />
    </Provider>
)
