import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './components/app/Signup.jsx'
import Login from './components/app/Login.jsx'
import Test from './Test.jsx'
import Msg from './components/pages/Premium.jsx'
import Learn from './components/pages/Learn.jsx'
import Premium from './components/pages/Premium.jsx'
import Trending from './components/pages/Trending.jsx'
import Messaging from './components/pages/Messaging.jsx'

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
    {
      path: 'premium',
      element: <Premium />
    },
    {
      path: 'learn',
      element: <Learn />
    },
    {
      path: 'trending',
      element: <Trending />
    },
    {
      path: 'chat',
      element: <Messaging />
    }
    ,]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    < RouterProvider router={router} />
  </>,
)
