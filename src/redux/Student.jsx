import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


const Student = () => {
    const std = useSelector(store=> store.Student)
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    const handleSubmit=()=>{
        dispatch({
            type:'CHANGE_NAME',
            payload: name

        })

    }
  return (
    <>
        <h1>Hello my name is{std.stdName}</h1>
        <p>I am from {std.address}</p>
        
        <h3>Form</h3>
        <input type="text" name='std' placeholder='type name' onChange={e=>setName(e.target.value)}/>
        &nbsp; &nbsp;
        <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Student