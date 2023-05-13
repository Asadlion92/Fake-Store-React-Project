import React, {useContext, useEffect, useState} from 'react'
import './CartTotal.css'
import { CartContext } from '../../contexts/CartContext'

function CartTotal() {

  const {cart} = useContext(CartContext)
  const [totalPrice, setTotalPrice] = useState(0)

  const getTotal = () => {
    let initial = 0;
    let amount = 1;
    cart.map((item) => {
      initial += amount * item.price;
    });
    setTotalPrice(initial)
  }

  useEffect(() => {
    getTotal();
  });
  

  return (
    <div className='total-container'>
        <h1>Total ${totalPrice.toFixed(2)}</h1>
    </div>
  )
}

export default CartTotal