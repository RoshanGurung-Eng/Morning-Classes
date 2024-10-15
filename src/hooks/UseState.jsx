import React, { useState } from 'react'

const UseState = () => {
  const [num, setNum] = useState(1)

//   const increment = () => {
//     setNum(num + 1)
//   }

//   const decrement = () => {
//     setNum(num - 1)
//   }

  return (
    <>
      <div className="container flex flex-wrap">
        {/* <button className='btn btn-primary' onClick={increment}>Increment</button> */}
        {
            num<10 && <button className='btn btn-primary' onClick={()=>setNum(num+1)}>Increment</button>
        }
        {/* <button className='btn btn-primary' onClick={()=>setNum(num+1)}>Increment</button> */}
        <h1 className='text-success'>{num}</h1>
        {
            num>1 && <button className='btn btn-danger' onClick={()=>setNum(num-1)}>Decrement</button>
        }
       
      </div>
    </>
  )
}

export default UseState
