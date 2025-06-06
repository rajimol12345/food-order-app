import React from 'react';
import './App.css';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
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

  // Hide header/footer on these paths
  const hideLayoutRoutes = ["/LoginForm", "/RegisterForm"]; 
  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  const handleAuthSuccess = (userData) => {
    console.log("Authentication successful:", userData);
  };

  return (
    <div>
      {!shouldHideLayout && <Header />}

      <Routes>
        {/* Redirect root to LoginForm */}
        <Route path="/" element={<Navigate to="/LoginForm" replace />} />

        {/* Auth routes */}
        <Route path="/LoginForm" element={<LoginForm onSuccess={handleAuthSuccess} />} />
        <Route path="/RegisterForm" element={<RegisterForm onSuccess={handleAuthSuccess} />} />

        {/* Main app routes */}
        <Route path="/Home" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Order" element={<Orders />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="*" element={<Navigate to="/LoginForm" replace />} />
      </Routes>

      {!shouldHideLayout && <Footer />}
    </div>
  );
}

export default App;
