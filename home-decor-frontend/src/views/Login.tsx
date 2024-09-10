import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css'; 

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Эмуляция логики входа
      console.log('Email:', email, 'Password:', password);
      // После успешного входа редирект на страницу main-feed
      navigate('/main-feed');
    } catch (error) {
      console.error('Error during login', error);
      alert('Login failed');
    }
  };

  const handleSignup = () => {
    // Перенаправление на страницу регистрации
    navigate('/register');
  };

  return (
    <div className="login-page">
      <div className="login-overlay"></div>
      <div className="login-container">
      <div className="login-logo"></div>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="login-input-container">
            <label>Email</label>
            <input 
              type="email" 
              placeholder="Enter Email" 
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className="login-input-container">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="Enter Password" 
              required 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <button type="submit" className="login-button">Login</button>

          <div className="divider">
            <span>OR</span>
          </div>

          <button type="button" className="google-login-button">
            Login with Google
          </button>

          <button type="button" className="signup-button" onClick={handleSignup}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;