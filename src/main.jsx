import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './components/Signup.jsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />
    },
    {
      path: 'register',
      element: <Signup />
    }
  ]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    < RouterProvider router={router} />
  </>,
)
