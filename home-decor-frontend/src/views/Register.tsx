import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Register.css';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>(''); // State to capture user input for email

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Check if email is valid before navigating (Optional)
    if (!email) {
      alert('Please enter a valid email address');
      return;
    }

    // Navigate to complete-signup page with the email in state
    navigate('/complete-signup', { state: { email } });
  };

  const handleLogin = () => {
    // Navigate to the login page
    navigate('/login');
  };

  return (
    <div className="register-page">
      <div className="register-overlay"></div>
      <div className="register-page-content">
        <div className="register-logo"></div>
        <p className="info-message">Registration is currently a placeholder. You can proceed to the next step.</p>

        <form onSubmit={handleSignUp}>
          <div className="register-input-container">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state on change
              required
            />
          </div>

          <button type="submit" className="register-create-account-button">
            Sign Up
          </button>

          <div className="register-divider">
            <span>OR</span>
          </div>

          <button type="button" className="register-google-signup-button" disabled>
            Sign Up with Google 
          </button>

          <button type="button" className="register-login-button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
