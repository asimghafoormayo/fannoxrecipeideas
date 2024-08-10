import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from "react-redux"
import store from './store/index.js'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './components/Home.jsx'
import Cart from './components/Cart.jsx'

const router = createBrowserRouter([
  { path : "/", element : <App/>, children : [
    { path : "/", element : <Home /> },
    { path : "/cart", element: <Cart/> }
  ] }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}>
    </RouterProvider>
    </Provider>
  </React.StrictMode>
)
