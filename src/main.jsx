import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './components/app/Signup.jsx'
import Login from './components/app/Login.jsx'
import Test from './Test.jsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />
    },
    {
      path: 'register',
      element: <Signup />
    },
    {
      path: 'login',
      element: <Login />
    },
    {
      path: 'test',
      element: <Test />
    },
  ]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    < RouterProvider router={router} />
  </>,
)
