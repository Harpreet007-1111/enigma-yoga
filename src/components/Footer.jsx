import React, { useState } from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';

function Footer() {

  const [email, setEmail] = useState('');

  return (
    <div className="footer-main">
      <footer>
        <img src="/logo512.png" alt="Logo of Enigma Yoga website" />
        <h2>Subscribe today!</h2>
        <div className="subscribe">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button>Subscribe</button>
        </div>
        <h2>Follow Us: </h2>
        <div className="social">
          <FaFacebookF className="icons" />
          <AiFillInstagram className="icons" />
          <FaTwitter className="icons" />
        </div>
        <hr />
        <p className="copy">
          &copy; Enigma Yoga All Rights Reserved 2023. <br /> Created With Love
          By Harpreet Jassy.
        </p>
      </footer>
    </div>
  );
}

export default Footer;