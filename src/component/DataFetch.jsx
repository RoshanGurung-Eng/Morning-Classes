import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DataFetch = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                // console.log(res.data)
                setPosts(res.data)
            })
            .catch(err => console.log(err))
    }, []) // Added an empty dependency array to run the effect only once

    return (
        <>
            {
                posts && posts.map((item, i) => {
                    return (
                        <div key={i}> 
                            <h2 className='text-primary'>{item.title}</h2>                           
                            <h2 className="text-seconday">{item.body}</h2>
                        </div>
                    )
                })
            }
        </>
    )
}

export default DataFetch
