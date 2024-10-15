import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
  const { image, title, price, id } = props.item

  return (
    <div className="col">
      <div className="card h-100">
        <img src={image} className="card-img-top" alt={title} style={{ height: '200px' }} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{price}</p>
          <Link to={`/productdetails/${id}`} className="btn btn-primary">View Details</Link>
        </div>
      </div>
    </div>
  )
}

export default Card;
