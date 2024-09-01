import React from 'react';
import './Navbar.css';
import name from '../../assets/name-big.jpg'

const Navbar = () => {
  return (
    <div className="sidebar">
      <a href="/" className='image-box '>
        <img src={name} alt="My Name" className="name-image" />
      </a>

    </div >
  );
};

export default Navbar;