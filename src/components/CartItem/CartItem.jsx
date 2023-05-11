import React from 'react'
import './CartItem.css'
import {BsTrash} from 'react-icons/bs'

function CartItem({product}) {

  return (
    <div className='cart-item-container'>
        <img src={product.image} />
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <p>1</p>
        <BsTrash className='trash-can' />
    </div>
  )
}

export default CartItem