import { useState } from 'react'
import ReactDOM from 'react-dom/client';

import './App.css'
import Product from './components/Product'
import { createBrowserRouter, RouterProvider, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import NavbarStyle from './components/Navbar';


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <div>
        <NavbarStyle />
        <Product />
      </div>
    },
    {
      path: "/cart",
      element: <div>
        <NavbarStyle />
        <Cart />
      </div>
    },
    {
      path: "/products",
      element: <div>
        <NavbarStyle />
        <Product />
      </div>
    },

  ]
)


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
