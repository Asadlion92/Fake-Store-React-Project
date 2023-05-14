import React from 'react'
import './Footer.css'
import {AiFillHeart} from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
      <p>Made with <AiFillHeart /> by Ja'far Asad</p>
      <Link to='/contact'>Contact Us</Link>
    </div>
  )
}

export default Footer