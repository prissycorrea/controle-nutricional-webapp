import React from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Card width="300px" height="400px">
        <h2>Meu Card</h2>
        <button>Clique Aqui</button>
      </Card>
    </div>
  );
}

export default App;