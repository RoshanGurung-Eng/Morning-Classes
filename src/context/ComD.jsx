import React, { useContext } from 'react'
import { GlobalContext } from './Context'

const ComD = () => {
    const js = useContext(GlobalContext)
  return (
    <>
        {/* <h1>The javascript library is {js}</h1> */}
        <h1>Name of Student is {js.name}</h1>
        <h2>Age:{js.age}</h2>
        <h3>Address:{js.address}</h3>
    </>
  )
}

export default ComD