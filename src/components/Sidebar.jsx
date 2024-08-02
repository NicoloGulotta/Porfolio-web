import React from 'react';
import { Nav } from 'react-bootstrap';
import './Sidebar.css'; // Importa il tuo CSS personalizzato
import logo from '../assets/foto profilo.jpeg'
const Sidebar = () => {
  return (
    <div className="sidebar">

      <div className="logo-container">
        <img src={logo} alt="My Logo" />
      </div>
      <Nav className="">
        <Nav.Link href="#home" className="nav-link-custom">
          <i className="fas fa-home"></i> Home
        </Nav.Link>
        <Nav.Link href="#projects" className="nav-link-custom">
          <i className="fas fa-code"></i> Projects
        </Nav.Link>
        <Nav.Link href="#contact" className="nav-link-custom">
          <i className="fas fa-envelope"></i> Contact
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
