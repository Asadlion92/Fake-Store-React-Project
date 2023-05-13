import React, {useContext, useState} from 'react'
import './Checkout.css'
import { CartContext } from '../../contexts/CartContext'
import CartItem from '../../components/CartItem/CartItem'
import CartHeader from '../../components/CartHeader/CartHeader'
import CartTotal from '../../components/CartTotal/CartTotal'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'


function Checkout() {

  //use global state
  //NOTE {} not []
  const {cart} = useContext(CartContext)

  const [isOpen, setIsOpen] = useState(false)

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement(document.getElementById('root'));

  return (
    <div className='checkout-container'>      
      <div className='checkout-items'>
        <CartHeader />
        {cart.map((item, index)=><CartItem key={index} product={item} />)}
        <CartTotal />
        <div className='btn-container'>
          <button onClick={() => setIsOpen(true)}>Checkout</button>
          <Modal
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
            style={customStyles}
            contentLabel="Checkout Modal"
          >
            <div className='modal'>
              <div className='modal-content'>
                <p>Your Order was successful!</p>
                <p>Check your email for the order confirmation. Thank you for shopping with Fake Store!</p>
                <Link to='/'><button onClick={() => setIsOpen(false)}>Return to Main Page</button></Link>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default Checkout