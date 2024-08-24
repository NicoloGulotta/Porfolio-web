import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Sidebar from './components/Sidebar.jsx';
import Jumbotron from './components/Jumbotron.jsx';

function App() {
  return (
    <Container >
      <Sidebar />
      <Jumbotron />
    </Container >
  );
}

export default App;