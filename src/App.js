import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Content from './components/Content/Content.jsx';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container fluid className="app-container">
      <Sidebar />
      <Content />

    </Container>
  );
}

export default App;