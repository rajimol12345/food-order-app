
import React, { useState } from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import RegisterForm from './Components/RegisterForm';
import LoginForm from './Components/LoginForm';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import Cart from './Components/Cart';
import Orders from './Components/Order';
import Profile from './Components/Profile';
import Logout from './Components/Logout';

function App() {
  const location = useLocation();

const [isVisible,setIsVissible] = useState(true)

  const hideLayoutRoutes = ["/LoginForm", "/RegisterForm"]; 
  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);
console.log(shouldHideLayout);
  const handleAuthSuccess = (userData) => {
    console.log("Authentication successful:", userData);
  };

  return (
    <div >
        {isVisible ? (
          <Header />
        ) : (
          null
        )}

      <Routes>
        <Route path="*" element={<RegisterForm onSuccess={handleAuthSuccess} />} />
        <Route path="/LoginForm" element={<LoginForm onSuccess={handleAuthSuccess} />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Order" element={<Orders />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/Home" element={<Home />} />
      </Routes>

              {isVisible ? (
          <Footer />
        ) : (
          null
        )}
    </div>
  );
}

export default App;
