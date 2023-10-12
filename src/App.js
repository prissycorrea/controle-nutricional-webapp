import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from '@emotion/styled';
import './App.css';
import Navbar from './components/NavbarSection/Navbar';
import WeightInfo from './components/WeightSection/WeightInfo';

const Container = styled.div`
    display: flex;      // Usa flexbox para a organização
    flex-wrap: wrap;    // Permite que os items "quebrem" para a próxima linha
    justify-content: space-between;  // Espaçamento entre os cards
    /*max-width: 450px;   // Largura máxima (2 cards + margens)*/
    padding: 30px;
    margin: 20px auto;  // Margem central
`;

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <Container>
        <WeightInfo />
      </Container>
      </div>
    </Router>
  );
}

export default App;