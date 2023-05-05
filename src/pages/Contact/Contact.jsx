import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='contact-container'>
      <form>
        <h1>Contact Us</h1>
        <div className='inputContainer'>
          <input placeholder='First Name' />
          <input placeholder='Last Name' />
          <textarea placeholder='Write your message here'></textarea>
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Contact