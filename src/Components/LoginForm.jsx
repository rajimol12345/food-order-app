import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const emailPattern = /^\S+@\S+\.\S+$/;

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Login Data:', formData);
      alert('Login successful!');
      setFormData({ email: '', password: '' });
      setErrors({});
      navigate('/Home'); 
    }
  };

  return (
    <div className="container">
      {/* Welcome Message */}
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
        Welcome back! Please log in to continue.
      </h2>

      <form className="form-box" onSubmit={handleSubmit} noValidate>
        <h1>Login</h1>

        <div className="input-group">
          <div className="input-field">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="input-field">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
        </div>

        <button type="submit" className="submit-btn">Login</button>
        <p>
          Don't have an account? <Link to="/RegisterForm">Register here</Link>
        </p>
      </form>
    </div>
  );
}
