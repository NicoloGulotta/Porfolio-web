import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Sidebar.css';
import name from '../../assets/name-big.jpg'
import logobig from '../../assets/logo-small.png'

const Sidebar = () => {
  return (
    <Navbar className="sidebar">

      <Navbar.Brand href="/" className='image-box'>
        <img src={name} alt="My Name" className="name-image" />
      </Navbar.Brand>

      <Navbar.Collapse id="basic-sidebar-nav" className='link-box'>
        <Nav.Link href="/#">
          <img src={logobig} alt="Big logo" className="jumbotron-image" />
          CHI SONO
        </Nav.Link>
        <Nav.Link href="/#">
          <img src={logobig} alt="Big logo" className="jumbotron-image" />
          COSA FACCIO
        </Nav.Link>
        <Nav.Link href="/#">
          <img src={logobig} alt="Big logo" className="jumbotron-image" />
          COME LO FACCIO
        </Nav.Link>
        <Nav.Link href="/#">
          <img src={logobig} alt="Big logo" className="jumbotron-image" />
          CHIEDI DI PIU'
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar >
  );
};

export default Sidebar;