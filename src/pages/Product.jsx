import React,{useState,useEffect} from 'react'
import Card from '../component/Card'
import { ColorRing } from 'react-loader-spinner'

const Product = () => {
  const [products, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  const [limit, setLimit] = useState(8)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products')
        setProduct(response.data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }

    
    setTimeout(() => {
      fetchProduct()
    }, 2000)
  }, [])
  return (
    <>
       <div className="container my-2">
       <h1>New Arrival</h1>
       <div className="row row-cols-1 row-cols-md-4 g-4">
       {
            loading  ?
            ( 
              <div style={{height:'50vh'}} className='d-flex justify-content-center align-item-center'>
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
              products.slice(0,limit).map((product, i) => {
              return <Card key={i} item={product}/> 
            }))

          }

          <button className="btn btn-info">View More</button>
          
       </div> 
       </div>
    </>
  )
}

export default Product