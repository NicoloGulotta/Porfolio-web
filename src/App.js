import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Content from './components/Content/Content.jsx';
import { Row, Col, Container } from 'react-bootstrap';

function App() {
  return (
    <Container className="app-container">
      <Row className="row-column">
        <Col className='p-0' md={3}>
          <Sidebar />
        </Col>
        <Col className='p-0' md={9}>
          <Content />
        </Col>
      </Row>
    </Container>
  );
}

export default App;