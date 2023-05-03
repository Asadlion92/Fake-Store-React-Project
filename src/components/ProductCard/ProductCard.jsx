import React from 'react'
import './ProductCard.css'

function ProductCard({product}) {
  return (
    <div className='product-card'>
        <img src={product.image} />
        <h3><a href='/product-details'>{product.title}</a></h3>
        <p>{product.category}</p>
        <p>${product.price}</p>
    </div>
  )
}

export default ProductCard