import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Sidebar from './components/Sidebar.jsx';
import Jumbotron from './components/Jumbotron.jsx';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <Sidebar />
        </Col>
        <Col md={9}>
          <Jumbotron />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
