import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'; // For making API requests to your backend
import '../css/CompleteSignUp.css'; // Import your custom CSS file

const CompleteSignUp: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || ''; 
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string>(''); 
  const [loading, setLoading] = useState<boolean>(false);

  if (!email) {
    navigate('/register'); // Redirect to the registration page if email is not provided
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(''); // Clear any previous errors
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    try {
      setLoading(true);
      // Make an API request to your backend to create a user
      const response = await axios.post('http://localhost:8000/signup', {
        email,
        username,
        password,
      });
      console.log('User created with email:', email);
      navigate('/main-feed'); // Redirect to the main feed upon successful signup
    } catch (err: any) {
      console.error('Registration failed:', err);
      setError('Failed to create account');
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="complete-signup-page">
      <div className="complete-signup-overlay"></div> 
      <form className="complete-signup-content" onSubmit={handleSubmit}>
        <div className="register-logo"></div>
        {error && <p className="error-message">{error}</p>}
        <div className="input-container">
          <label>Email</label>
          <input type="email" value={email} readOnly />
        </div>
        <div className="input-container">
          <label>Username</label> 
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label>Create Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="create-account-button" disabled={loading}>
          {loading ? 'Creating Account...' : 'Create Account'}
        </button>
      </form>
    </div>
  );
};

export default CompleteSignUp;
