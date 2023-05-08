import React from 'react'
import './Footer.css'
import {AiFillHeart} from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-left-content'>
        <p>Made with</p>
        <AiFillHeart />
        <p>by Ja'far Asad</p>
      </div>
      <Link to='/contact'>Contact Us</Link>
    </div>
  )
}

export default Footer