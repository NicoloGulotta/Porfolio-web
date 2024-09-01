import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Content from './components/Content/Content.jsx';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container className="app-container">
      <Navbar />
      <Content />

    </Container>
  );
}

export default App;