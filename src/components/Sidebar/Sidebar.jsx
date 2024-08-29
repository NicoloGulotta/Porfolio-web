import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Sidebar.css';
import name from '../../assets/name-big.jpg'
import logobig from '../../assets/logo-small.png'

const Sidebar = () => {
  return (
    <Navbar className="sidebar d-flex justify-content-around fixed">

      <Navbar.Brand href="/" className='image-box m-3 p-0'>
        <img src={name} alt="My Name" className="name-image m-0 p-0 w-100 m-1 mb-5" />
      </Navbar.Brand>

      <Navbar className='link-box'>
        <Nav.Link href="/#">
          <img src={logobig} alt="Big logo" className="spin-image" />
          CHI SONO
        </Nav.Link>
        <Nav.Link href="/#">
          <img src={logobig} alt="Big logo" className="spin-image" />
          CONTATTI
        </Nav.Link>
        <Nav.Link href="/#">
          <img src={logobig} alt="Big logo" className="spin-image" />
          PROGETTI        </Nav.Link>
      </Navbar>
    </Navbar >
  );
};

export default Sidebar;