import React from 'react';
import { Nav, NavLink, Container, Row, Col, Button } from 'react-bootstrap';
import './Sidebar.css'; // Import your custom CSS file
import logo from '../assets/foto-profilo.jpeg'; // Import your logo image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome icons
import { faFacebookF, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'; // Import specific icons

const Sidebar = () => {
  return (
    <Container fluid className="sidebar">
      <div className="foto">
        <img src={logo} alt="My Profile" />
      </div>
      <Nav className="nav-links flex-column"> {/* Add flex-column for vertical navigation */}
        <NavLink to="/">Chi sono</NavLink>
        <NavLink to="/about">Cosa faccio</NavLink>
        <NavLink to="/Expirienze">Competenze</NavLink>
        <NavLink to="/contact">Contatti</NavLink>
      </Nav>
      <div className="social-icons"> {/* Create a dedicated section for social icons */}
        <Row>
          <Col xs={12} className="text-center">
            <h1 className="display-4 fw-bold">Seguici sui social</h1>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-3 text-center">
            <a href="https://www.facebook.com/VGparrucchiere/?locale=it_IT" target="_blank" rel="noreferrer">
              <Button className="btn-primary btn-lg btn-block btn-social btn-facebook">
                <FontAwesomeIcon icon={faFacebookF} className="me-2" /> Facebook
              </Button>
            </a>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-3 text-center">
            <a href="https://www.instagram.com/vitogalloparrucchieri/" target="_blank" rel="noreferrer">
              <Button className="btn-danger btn-lg btn-block btn-social btn-instagram">
                <FontAwesomeIcon icon={faInstagram} className="me-2" /> Instagram
              </Button>
            </a>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-3 text-center">
            <a href="https://www.tiktok.com/place/Parrucchiere-Vito-Gallo-21568295496296882" target="_blank" rel="noreferrer">
              <Button className="btn-dark btn-lg btn-block btn-social btn-tiktok">
                <FontAwesomeIcon icon={faTiktok} className="me-2" /> TikTok
              </Button>
            </a>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Sidebar;