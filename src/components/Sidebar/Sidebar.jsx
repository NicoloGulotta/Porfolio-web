import React from 'react';
import { Nav, Container, Navbar } from 'react-bootstrap';
import './Sidebar.css';
import name from '../../assets/name-big.jpg'
import logobig from '../../assets/logo-small.png'

const Sidebar = () => {
  return (
    <Navbar className="sidebar">
      <Container className=''>
        <Navbar.Brand href="/" className='image-box'>
          <img src={name} alt="My Name" className="name-image" />
          {/* <img src={logobig} alt="Big logo" className="jumbotron-image" /> */}
        </Navbar.Brand>
        <td>
          <Navbar.Collapse id="basic-sidebar-nav">
            <Nav>
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
            </Nav>
          </Navbar.Collapse>
        </td>
      </Container>
    </Navbar >
  );
};

export default Sidebar;