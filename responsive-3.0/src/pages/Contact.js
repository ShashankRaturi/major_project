import React from 'react'
import PizzaLeft from '../assets/pexels-matilda-wormwood-4099325.jpg'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className='contact'> 
        <div 
          className="leftSide"
          style={{backgroundImage:`url(${PizzaLeft})`}}
        ></div>
        <div className="rightSide">
          <h1>Contact Us</h1>
          <form id='contact-form' method='POST'>
            <label htmlFor="name">Full Name</label>
            <input name='name' placeholder='Enter full name'  type="text" />
            <label htmlFor="email">Email</label>
            <input name='email' placeholder='Enter email address'  type="email" />
            <label htmlFor='message'>Message</label>
            <textarea name="message" rows="6" placeholder='Enter your message here' required></textarea>
            <button type='submit'>Send Message</button>
          </form>
        </div>
    </div>
  )
}

export default Contact
