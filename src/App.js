import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavbarSection/Navbar';
import HomePage from './pages/HomePage';
import NutriTable from './pages/NutriTable';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tabela" element={<NutriTable />} />
      </Routes>
    </Router>
  );
}

export default App;
