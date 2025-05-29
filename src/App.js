import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Restaurants from './Components/Restaurants';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Restaurants" element={<Restaurants />} />
      </Routes>
    </Router>
  );
}

export default App;
