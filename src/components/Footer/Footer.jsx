import React from 'react'
import './Footer.css'
import {AiFillHeart} from 'react-icons/ai'

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-left-content'>
        <p>Made with</p>
        <AiFillHeart />
        <p>by mimo</p>
      </div>
      <h4>Contact Us</h4>
    </div>
  )
}

export default Footer