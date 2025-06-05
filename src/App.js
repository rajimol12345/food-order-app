import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
// import RegisterForm from './Components/RegisterForm';
// import LoginForm from './Components/LoginForm';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import Cart from './Components/Cart';
import Orders from './Components/Order';
import Profile from './Components/Profile';
import Logout from './Components/Logout';
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Order" element={<Orders />} /> 
        <Route path="/Profile" element={<Profile />} /> 
        <Route path="/Logout" element={<Logout />} />
      </Routes>
      {/* 
        <Route path="/" element={<RegisterForm onSuccess={handleAuthSuccess} />} />
        <Route path="/LoginForm" element={<LoginForm onSuccess={handleAuthSuccess} />} /> 
      */}
      <Footer />
    </div>
  );
}

export default App;
