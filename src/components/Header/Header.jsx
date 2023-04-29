import React from 'react'
import './Header.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'

function Header() {
  return (
    <div className='header-container'>
      <h2>Fake Store</h2>
      <AiOutlineShoppingCart className='cart' />
    </div>
  )
}

export default Header