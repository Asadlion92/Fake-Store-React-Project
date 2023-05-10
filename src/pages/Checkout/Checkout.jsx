import React, {useContext} from 'react'
import './Checkout.css'
import { CartContext } from '../../contexts/CartContext'
import ProductCard from '../../components/ProductCard/ProductCard'


function Checkout() {

  //use global state
  //NOTE {} not []
  const {cart} = useContext(CartContext)
  //I kept the removeItem since we will be using the trash can later

  return (
    <div className='checkout-container'>
      {
        //cart.map(item=><p>{item.title}</p>)

        cart.map((item, index)=><ProductCard key={index} product={item} />)

        }
    </div>
  )
}

export default Checkout