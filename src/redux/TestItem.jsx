import React from 'react'
//Its used for function call
import { useDispatch } from 'react-redux'


const TestItem = () => {
    const dispatch = useDispatch()

    const increament =()=>
        {dispatch({type:'ADD_TO_CART'})}
    const decreament =()=>{
        dispatch({type:'REMOVE_FROM_CART'})
    }
  return (
    <>
        <button className="btn btn-danger" onClick={decreament}>-</button>
        &nbsp; &nbsp;
        <button className="btn btn-primary"onClick={increament}>+</button>

    </>
  )
}

export default TestItem