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
      <a href='/contact'>Contact Us</a>
    </div>
  )
}

export default Footer