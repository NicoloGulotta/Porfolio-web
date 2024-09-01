import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Navbar.css';
import logobig from '../../assets/logo-small.png'
import name from '../../assets/name-big.jpg'

const Sidebar = () => {
  return (
    <Navbar className="sidebar fixed-bottom">

      <a href="/" className='image-box m-3 p-0'>
        <img src={name} alt="My Name" className="name-image m-0 p-0 w-100 m-1 mb-5" />
      </a>
      <Navbar className='link-box'>
        <Nav.Link href="/#">
          <img src={logobig} alt="Big logo" className="spin-image" />
          CHI SONO
        </Nav.Link>
        <Nav.Link href="/#">
          <img src={logobig} alt="Big logo" className="spin-image" />
          PROGETTI
        </Nav.Link>
        <Nav.Link href="/#">
          <img src={logobig} alt="Big logo" className="spin-image" />
          CONTATTI       </Nav.Link>
      </Navbar>
    </Navbar >
  );
};

export default Sidebar;