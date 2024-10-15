import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'
import { ColorRing } from 'react-loader-spinner'

const Cardcontainer = () => {
  const [products, setProduct] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products')
        console.log(response.data)
        setProduct(response.data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }

    
    setTimeout(() => {
      fetchProduct()
    }, 2000)
  }, [])  // Add an empty array here to avoid infinite loop

  return (
    <>
      <div className="container my-2">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {
            loading  ?
            ( 
              <div style={{height:'50vh'}} className='d-flex justify-content-center align-item-center w-100'>
                <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="color-ring-loading"
                    wrapperStyle={{}}
                    wrapperClass="color-ring-wrapper"
                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
              />
              </div>
            )
            :
            (
              products.slice(0,8).map((product, i) => {
              return <Card key={i} item={product}/> 
            }))

          }
          
        </div>
      </div>
    </>
  )
}

export default Cardcontainer
