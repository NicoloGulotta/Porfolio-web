import React from 'react';
import { Nav, NavLink, Container } from 'react-bootstrap';
import './Sidebar.css';
import logo from '../assets/foto-profilo.jpeg';

const Sidebar = () => {
  return (
    <Container fluid className="sidebar">
      <div className="foto">
        <img src={logo} alt="My Profile" />
      </div>
      <Nav className="nav-links">
        <Nav className="mr-auto">
          <Nav.Link href="/">Chi sono</Nav.Link>
          <Nav.Link href="/about">Cosa faccio</Nav.Link>
          <Nav.Link href="/Expirienze">Competenze</Nav.Link>
          <Nav.Link href="/contact">Contatti</Nav.Link>

        </Nav>
      </Nav>
    </Container>
  );
};

export default Sidebar;