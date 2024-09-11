import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from 'firebase/auth'; // Import Firebase authentication methods
import { auth } from '../../firebaseConfig'; // Adjust the path to your firebase config file
import '../css/Login.css'; // Import your custom CSS file

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  // Handle login with email and password
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Clear any previous errors

    try {
      // Use Firebase Client SDK to sign in with email and password
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in:', userCredential.user);

      // On successful login, redirect to the main feed
      navigate('/main-feed');
    } catch (error: any) {
      console.error('Error during login:', error);
      setError('Login failed. Please check your email and password.');
    }
  };

  // Handle login with Google
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('User logged in with Google:', result.user);

      // On successful login, redirect to the main feed
      navigate('/main-feed');
    } catch (error: any) {
      console.error('Error during Google login:', error);
      setError('Google login failed.');
    }
  };

  // Handle password reset
  const handlePasswordReset = async () => {
    if (!email) {
      setError('Please enter your email to reset password.');
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      alert('Password reset email sent!');
    } catch (error) {
      console.error('Error sending password reset email:', error);
      setError('Failed to send password reset email.');
    }
  };

  // Handle navigation to the signup page
  const handleSignup = () => {
    navigate('/register');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-logo"></div>
        <form className="login-form" onSubmit={handleLogin}>
          {error && <p className="error-message">{error}</p>} {/* Show error if login fails */}
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

          <button type="button" className="password-reset-button" onClick={handlePasswordReset}>
            Forgot Password?
          </button>

          <div className="divider">
            <span>OR</span>
          </div>

          <button type="button" className="google-login-button" onClick={handleGoogleLogin}>
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
