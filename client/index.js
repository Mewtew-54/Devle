import React from 'react'
import * as ReactDOM  from 'react-dom/client'
import './style.css'
import App from './App'
import Home from './components/Home.jsx'
import attemptsReducer from './state/index.js'
import {configureStore} from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// ReactDOM.render(<App />, document.getElementById('root'));

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <h1>Not Found</h1>,
//   //   children: [
//   //     {
//   //       path: "home",
//   //       element: <Home />,
//   //     },
//   //   ],
//   // },
//   // {
//   //   path: "home/",
//   //   element: <Home />,
//   },
// ]);

// const store = configureStore({
//   reducer: 
// })

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <Provider store={store}>
    {/* <RouterProvider router={router} /> */}
      <App/>
    </Provider>
  </>
  
)