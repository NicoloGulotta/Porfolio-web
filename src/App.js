import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Content from './components/Content/Content.jsx';

function App() {
  return (
    <div className="app-container">
      < Navbar />
      <Content />
    </div>
  );
}

export default App;