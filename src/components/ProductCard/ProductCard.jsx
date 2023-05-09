import React, { useContext, useEffect, useState } from 'react'
import './ProductCard.css'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import { CartContext } from '../../contexts/CartContext'

function ProductCard({product}) {
  //use global state
  //NOTE {} not []

  const {cart, addItem, removeItem} = useContext(CartContext)

  //Create a variable to test UI for the hearts
  // const isFavorite = false
  //We need to create a state
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(
    ()=> {
      //Is this card in favorites?
      setIsFavorite(cart.find(item=>item.id === product.id))
      //find returns the element if found, that is considered "true"
      //returns undefined if not, that is considered "false"



    }, [cart]
  )


  return (
    <div className='product-card'>
        <div>
          <img src={product.image} />
          {
            isFavorite?
            <FaHeart onClick={()=> removeItem(product.id)} className='heart-icon' />
            :
            <FaRegHeart onClick={()=> addItem(product)} className='heart-icon' />
          }
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