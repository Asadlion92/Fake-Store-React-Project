import React from 'react'
import './Header.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header-container'>
      <Link to='/'>Fake Store</Link>
      <AiOutlineShoppingCart className='cart' />
    </div>
  )
}

export default Header