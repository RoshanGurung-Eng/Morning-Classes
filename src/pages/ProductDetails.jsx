import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

const ProductDetails = () => {
  const [product, setProduct] = useState({})
  const params = useParams()

  useEffect(() => {
    const id = params.product_id

    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err))
  }, [ params.product_id])

  // handling addtocart function for localstorage
  const addToCart = () =>{
    //if there is value then provide otherwise empty
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || []

    const productItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      category: product.category,
      rating: product.rating,
      quantity: 1
    }
    const existItem = cartItems.find(item=>item.id === product.id)

    if(existItem){
      toast.error('Product is already in cart')
    }else{
      cartItems.push(productItem)
      localStorage.setItem("cartItems",JSON.stringify(cartItems))
      toast.success(`${productItem.title} is successfully added to cart`)
    }
}
  
return (
    <>
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition: Bounce
/>
      <div className="container my-5">
        <div className="row d-flex justify-content-evenly py-2">
          <div className="col-md-5">
            <img src={product.image} alt={product.title} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2>{product.title}</h2>
            <h4>${product.price}</h4>
            <p>{product.description}</p>
            <h5>
            {product.rating && product.rating.rate}</h5>
            <button className="btn btn-warning"onClick={addToCart}>Add To Cart</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails
