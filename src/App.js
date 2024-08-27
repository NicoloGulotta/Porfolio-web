import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar.jsx';
// import Jumbotron from './components/Jumbotron/Jumbotron.jsx';
import Content from './components/Content/Content.jsx'
function App() {
  return (
    <div className='container'>
      <Sidebar />
      {/* <Jumbotron /> */}
      <Content />
    </div>
  );
}

export default App;