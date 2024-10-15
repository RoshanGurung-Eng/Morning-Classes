import React, { useState, useEffect, Fragment } from 'react';
import { FaTrash } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cartItems')) || [];
    setProducts(cartData);
  }, []);

  const removeCartHandler = (id,title) =>{
    const cartItems = JSON.parse(localStorage.getItem('cartItems'))

    // remove from the cart using filter methos
    const filterData = cartItems.filter(item=> item.id !== id)
    
    //update products after Filter
    setProducts(filterData)

    //updtae localstorage after filter
    localStorage.setItem('cartItems',JSON.stringify(filterData))

    toast.success(`${title} is dead`)
  }

  //decreaQty
  const decreaseQty= (id) => {
    const updateProducts = products.map(item=>{
      if(item.id === id && item.quantity){
        //rest OPerator
        return{...item,quantity: item.quantity-1}
      } else {
        return item;
      }  
  });

  setProducts(updateProducts)
    //update on localStorage
    localStorage.setItem('cartItems',JSON.stringify(updateProducts))
}
  //increaseQty
  const increaseQty=(id)=>{
    const updateProducts = products.map(item=>{
        if(item.id === id && item.quantity<15){
          return{...item,quantity: item.quantity+1}
        }else {
          return item
        }
    }
    )
    
    //update product state to synchronize
    setProducts(updateProducts)
    //update on localStorage
    localStorage.setItem('cartItems',JSON.stringify(updateProducts))

  }

  return (
    <>
      <ToastContainer position="top-right" theme="colored" />
      <div className="container">
        <div className="row d-flex justify-content-evenly shadow my-4">
          {products.length === 0 ? (
            <h2 className="my-5 text-danger text-center">Your Cart is empty</h2>
          ) : (
            <>
              <h2 className="text-center">Your Cart Items</h2>
              <div className="col-md-8 shadow">
                {products.map((item, i) => (
                  <Fragment key={i}>
                    <hr />
                    <div className="row d-flex align-items-center">
                      <div className="col-2">
                        <img src={item.image} alt={item.title} width={50} />
                      </div>
                      <div className="col-3">
                        <span>
                          <strong>{item.title}</strong>
                        </span>
                      </div>
                      <div className="col-2 text-warning">${item.price}</div>
                      <div className="col-3">
                        {/* {item.quantity} */}
                        <div className="d-flex">
                          <button className='btn btn-danger' onClick={()=> decreaseQty(item.id)}>-</button>
                          &nbsp;
                          <input type="number"className='form-control border-0 text-center' name="" id=""value={item.quantity} readOnly />
                          &nbsp;
                          <button className="btn btn-primary" onClick={()=> increaseQty(item.id)}>+</button>
                        </div>
                        </div>
                     <div className="col-1">
                      <button className="btn btn-danger" onClick={()=>removeCartHandler(item.id,item.title)}><FaTrash/></button></div>
                    </div>
                    <hr />
                  </Fragment>
                ))}
              </div>
              <div className="col-md-3 py-2">
                <h5 className="text-center">Cart Summary</h5>
                <hr />
                <span>
                  <strong>Units:</strong>{' '}
                  {products.reduce((total, item) => total + Number(item.quantity), 0)} units
                </span>
                <br />
                <span>
                  <strong>Total Price: </strong>${' '}
                  {products.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                </span>
                <hr />
                <button className="btn btn-danger">Check Out</button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
