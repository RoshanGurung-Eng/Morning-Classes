import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './component/Layout'
import Homepge from './pages/Homepge'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Product from './pages/Product'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Show from './context/Show'
import TestCart from './redux/TestCart'


const MyRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path='' element={<Layout/>}>
          <Route path ='' element={<Homepge/>}/>
          <Route path='' element={<Product/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<Signup/>}/>
          <Route path='productdetails/:product_id' element={<ProductDetails/>}></Route>
          <Route path='cart' element={<Cart/>}/>
        </Route>

        <Route path='show' element={<Show/>}/>
        <Route path='redux/cart' element={<TestCart/>}/>

       
      
        
      </Routes>
    </Router>
  )
}

export default MyRoute
