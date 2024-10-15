
import React,{ useEffect, useState } from "react"


const UseEffects = () => {
    const [data, setData] = useState(1)
    const [num, setNum] = useState(1)

    useEffect(()=>{
        alert('This is from effect hook')
    }, [num,data])
  return (
    <>  
        <div className="container ">
        <h2 className="text-danger">{data}</h2>
        <button className="btn btn-warning"onClick={()=>setData(data+1)}>Add</button>

        <h2 className="text-info">{num}</h2>
        <button className='btn btn-secondary' onClick={()=>setNum(num+1)}>Add</button>
        </div>
    </>
  )
}

export default UseEffects