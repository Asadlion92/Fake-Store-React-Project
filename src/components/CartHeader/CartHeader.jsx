import React from 'react'
import './CartHeader.css'

function CartHeader() {
  return (
    <div className='checkout-header'>
        <div className='checkout-header-left-content'>
            <p>Item</p>
        </div>
        <div className='checkout-header-right-content'>
            <p>Price</p>
            <p>Quantity</p>
            <p>Remove</p>
        </div>
    </div>
  )
}

export default CartHeader