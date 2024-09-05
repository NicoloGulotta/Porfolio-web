import React from 'react';
import './Navbar.css';
import name from '../../assets/name-big.jpg'
import arrow from '../../assets/vecteezy_neumorphic-down-arrow-button_11888080.png'
const Navbar = () => {
  return (
    <div className="sidebar">
      <img src={name} alt="My Name" className="name-image" />
      <img src={arrow} alt="Animated Arrow" className="animated-arrow" />
    </div >
  );
};

export default Navbar;