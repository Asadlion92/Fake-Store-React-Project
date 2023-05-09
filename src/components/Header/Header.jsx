import React from 'react'
import './Header.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header-container'>
      <Link to='/'>Fake Store</Link>
      <Link to='/checkout'><AiOutlineShoppingCart className='cart' /></Link>
    </div>
  )
}

export default Header