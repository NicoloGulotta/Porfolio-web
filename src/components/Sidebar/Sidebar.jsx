import React from 'react';
import { Nav, Container, Navbar } from 'react-bootstrap';
import './Sidebar.css';
import logo from '../../assets/foto-profilo.jpeg';
import logobig from '../../assets/logo-big.jpeg'
const Sidebar = () => {
  return (
    <Navbar className="sidebar">
      <Container className=''>
        <Navbar.Brand href="/" className='image-box'>
          <img src={logobig} alt="Big logo" className="jumbotron-image" />
          {/* <img src={logo} alt="My Profile" className="profile-image" /> */}
        </Navbar.Brand>
        <td>
          <Navbar.Collapse id="basic-sidebar-nav">
            <Nav className="flex-column">
              <Nav.Link href="/"><i className="bi bi-arrow-right"> CHI </i></Nav.Link>
              <Nav.Link href="/about"><i className="bi bi-arrow-right"> FA </i></Nav.Link>
              <Nav.Link href="/Expirienze"><i className="bi bi-arrow-right"> COSA </i></Nav.Link>
              <Nav.Link href="/contact"><i className="bi bi-arrow-right"> COME </i></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </td>
      </Container>
    </Navbar >
  );
};

export default Sidebar;