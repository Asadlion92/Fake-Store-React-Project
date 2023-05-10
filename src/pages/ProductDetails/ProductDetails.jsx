import React, { useContext, useEffect, useState } from 'react'
import './ProductDetails.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { CartContext } from '../../contexts/CartContext'

function ProductDetails() {

  const {productId} = useParams()
  const [item, setItem] = React.useState('')

  const {cart, addItem, removeItem} = useContext(CartContext)
  const [isAdded, setIsAdded] = useState(false)

  React.useEffect(
    ()=>{
      axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then(res => {console.log(res.data)
      //store in state
      setItem(res.data)
    })
      .catch(err => console.log(err))
    }, []
  )

  useEffect(
    ()=> {
      //Is this card in favorites?
      setIsAdded(cart.find(test=>test.id === item.id))
      //find returns the element if found, that is considered "true"
      //returns undefined if not, that is considered "false"
    }, [cart]
  )

  return (
    <div className='product-details-container'>
      <div className='product-details'>
        <img src={item?.image} />
        <div className='product-details-content'>
          <h2>{item?.title}</h2>
          <p>${item?.price}</p>
          <h3>Description</h3>
          <p>{item?.description}</p>
      
          {
            isAdded?
            <button onClick={()=> removeItem(item.id)}>Remove from Cart</button>
            :
            <button onClick={()=> addItem(item)}>Add to Cart</button>
          }
          
        </div>
      </div>
    </div>
  )
}

export default ProductDetails