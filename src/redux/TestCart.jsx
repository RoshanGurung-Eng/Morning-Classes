import React from 'react'
import { useSelector } from 'react-redux'
import TestItem from './TestItem'

const TestCart = () => {
    const data = useSelector(store =>store.cart)
  return (
    <>
    <h2>The total number of item  is {data.cartCount}</h2>
    <TestItem/>
    </>
  )
}

export default TestCart