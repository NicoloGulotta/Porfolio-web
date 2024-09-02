import React from 'react';
import './Navbar.css';
import name from '../../assets/name-big.jpg'

const Navbar = () => {
  return (
    <div className="sidebar">
      <img src={name} alt="My Name" className="name-image" />

    </div >
  );
};

export default Navbar;