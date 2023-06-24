import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BiMenu } from 'react-icons/bi';

function Navbar() {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className='nav-cont'>
      <div className="logo">
        <img src="/logo512.png" alt="Logo for Enigma yoga" />
        <HashLink smooth to="/#">Enigma Yoga</HashLink>
      </div>

      {(showMenu === false) ? <BiMenu className='menu' onClick={() => setShowMenu(!showMenu)} /> : <AiOutlineCloseCircle className='close' onClick={() => setShowMenu(false)} />}

      {showMenu === true && <nav className={(showMenu === true) ? "show": 'hide'}>
      <HashLink smooth to="/#">Home</HashLink>
      <HashLink smooth to="/#about">About</HashLink>
      <HashLink smooth to='/#service'>Services</HashLink>
      <HashLink smooth to="/#poses">Poses</HashLink>
      <HashLink smooth to="/#price">Pricing</HashLink>
      <HashLink smooth to="/#contact">Contact</HashLink>
      </nav>}
    </div>
  )
}

export default Navbar;