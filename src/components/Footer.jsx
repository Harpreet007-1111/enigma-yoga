import React, { useState } from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';

function Footer() {

  const [email, setEmail] = useState('');

  return (
    <div className='footer-main'>
        <footer>
        <img src="/logo512.png" alt="Logo of Enigma Yoga website" />
          <div className="subscribe">
          <p>Subscribe today! </p>
            <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <button>Subscribe</button>
          </div>

        <div className="social">
          <p>Follow us: </p>
          <FaFacebookF className='icons' />
          <AiFillInstagram className='icons' />
          <FaTwitter className='icons' />
        </div>
          <hr />
          <p>Copyright 2023. All Rights Reserved.</p>
        </footer>
    </div>
  )
}

export default Footer;