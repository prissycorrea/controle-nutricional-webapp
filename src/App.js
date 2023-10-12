import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Card from './components/Card';
import Navbar from './components/NavbarSection/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <Card width="300px" height="400px">
          <h2>Meu Card</h2>
          <button>Clique Aqui</button>
        </Card>
      </div>
    </Router>
  );
}

export default App;