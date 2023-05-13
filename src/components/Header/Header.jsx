import React, {useContext, useEffect, useState} from 'react'
import './Header.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'

function Header() {

  const {cart} = useContext(CartContext)
  const [totalItems, setTotalItems] = useState(0)

  const getTotalItems = () => {
    let initial = []
    cart.map((item) => {
      initial.push(item.id)
    })
    setTotalItems(initial.length)
  }

  useEffect(() => {
    getTotalItems();
  })

  return (
    <div className='header-container'>
      <Link to='/'>Fake Store</Link>
      <div>
        <Link to='/checkout'><AiOutlineShoppingCart className='cart' /></Link>
        {
          totalItems > 0 ?(<p className='total-item'>{totalItems}</p>) : ""
        }
      </div>
    </div>
  )
}

export default Header