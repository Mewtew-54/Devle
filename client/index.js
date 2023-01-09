import React from 'react'
import * as ReactDOM  from 'react-dom'
import './style.css'
import App from './App'
import {configureStore} from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

// ReactDOM.render(<App />, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <Provider store={store}>
    <App/>
  // </Provider>
  
)