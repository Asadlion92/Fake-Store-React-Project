import React, {useContext} from 'react'
import './CartItem.css'
import {BsTrash} from 'react-icons/bs'
import { CartContext } from '../../contexts/CartContext'


function CartItem({product}) {

  const {removeItem} = useContext(CartContext)

  return (
    <div className='cart-item-container'>
        <img src={product.image} />
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <p>1</p>
        <BsTrash onClick={()=> removeItem(product.id)} className='trash-can' />
    </div>
  )
}

export default CartItem