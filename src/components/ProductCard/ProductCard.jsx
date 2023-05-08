import React from 'react'
import './ProductCard.css'
import { useParams } from 'react-router-dom'
import {AiOutlineHeart} from 'react-icons/ai'
import { Link } from 'react-router-dom'

function ProductCard({product}) {
  return (
    <div className='product-card'>
        <div className='imageAndHeart'>
          <div className='outter-heart'>
            <AiOutlineHeart className='heart' />
          </div>
          {/* <AiOutlineHeart className='heart' /> */}
          <img src={product.image} />
        </div>
        <div className='lower-content'>
          <Link to={`/product-details/${product.id}`}>{product.title}</Link>
          <p className='category'>{product.category}</p>
          <p className='price'>${product.price}</p>  
        </div>
      
    </div>
  )
}

export default ProductCard