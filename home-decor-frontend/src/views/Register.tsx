import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Import Firebase create user method
import { auth } from '../../firebaseConfig'; // Adjust the path to your firebase config file
import '../css/Register.css'; // Import your custom CSS file

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  // Handle registration with email and password
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Clear any previous errors

    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    try {
      // Use Firebase Client SDK to create a new user
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User registered:', userCredential.user);

      // On successful registration, redirect to the complete signup page
      navigate('/complete-signup', { state: { email: email } });
    } catch (error: any) {
      console.error('Error during registration:', error);
      setError('Registration failed. Please check your email and password.');
    }
  };

  // Handle navigation to the login page
  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="register-page">
      <div className="register-overlay"></div>
      <div className="register-page-content">
        <div className="register-logo"></div>
        {error && <p className="error-message">{error}</p>} {/* Show error if registration fails */}
        <form className="register-form" onSubmit={handleRegister}>
          <div className="register-input-container">
            <label>Email</label>
            <input 
              type="email" 
              placeholder="Enter Email" 
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className="register-input-container">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="Enter Password" 
              required 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <div className="register-input-container">
            <label>Confirm Password</label>
            <input 
              type="password" 
              placeholder="Confirm Password" 
              required 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
            />
          </div>
          <button type="submit" className="register-create-account-button">
            Sign Up
          </button>

          <div className="register-divider">
            <span>OR</span>
          </div>

          <button type="button" className="register-login-button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
