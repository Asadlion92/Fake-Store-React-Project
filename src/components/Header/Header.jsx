import React from 'react'
import './Header.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'

function Header() {
  return (
    <div className='header-container'>
      <a href='/'>Fake Store</a>
      <AiOutlineShoppingCart className='cart' />
    </div>
  )
}

export default Header