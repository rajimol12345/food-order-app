import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ import navigator
import { Link } from 'react-router-dom';
export default function RegisterForm() {
  const navigate = useNavigate(); // ✅ initialize navigate

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    password: '',
    confirm_password: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const namePattern = /^[a-zA-Z]+(?: [a-zA-Z]+)+$/;
    const emailPattern = /^\S+@\S+\.\S+$/;
    const phonePattern = /^[0-9]{10,15}$/;

    if (!formData.fullname.trim()) {
      newErrors.fullname = 'Full name is required';
    } else if (!namePattern.test(formData.fullname)) {
      newErrors.fullname = 'Enter at least first and last name (letters only)';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phonePattern.test(formData.phone)) {
      newErrors.phone = 'Enter a valid phone number (10–15 digits)';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirm_password) {
      newErrors.confirm_password = 'Please confirm your password';
    } else if (formData.confirm_password !== formData.password) {
      newErrors.confirm_password = 'Passwords do not match';
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
      console.log('Form submitted:', formData);
      alert('Registration successful!');
      setFormData({
        fullname: '',
        email: '',
        phone: '',
        password: '',
        confirm_password: '',
      });
      setErrors({});
      navigate('/LoginForm'); // ✅ redirect to login
    }
  };

  return (
    <div className="container">
      <form className="form-box" onSubmit={handleSubmit} noValidate>
        <h1>Register</h1>

        <div className="input-group">
          {[
            { name: 'fullname', type: 'text', placeholder: 'Full Name' },
            { name: 'email', type: 'email', placeholder: 'Email' },
            { name: 'phone', type: 'text', placeholder: 'Phone Number' },
            { name: 'password', type: 'password', placeholder: 'Password' },
            { name: 'confirm_password', type: 'password', placeholder: 'Confirm Password' },
          ].map(field => (
            <div className="input-field" key={field.name}>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
                required
              />
              {errors[field.name] && <p className="error">{errors[field.name]}</p>}
            </div>
          ))}
        </div>

        <button type="submit" className="submit-btn">Register</button>
        <p>
          Already have an account? <Link to="/LoginForm">Login here</Link>
        </p>
      </form>
    </div>
  );
}
