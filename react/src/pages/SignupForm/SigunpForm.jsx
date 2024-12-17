// EnhancedSignupForm.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './SignupForm.css';
import googleIcon from '../../assets/google-icon.svg';
import linkedinIcon from '../../assets/linkedin-icon.svg';
import { Link } from 'react-router-dom';

const EnhancedSignupForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-heading">Welcome to Jeezz</h2>
        <p className="signup-subheading">Your AI-powered Freelance Hub</p>

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" id="email" required className="form-input" placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" id="password" required className="form-input" placeholder="Create a password" />
          </div>

          <button type="submit" className="signup-button"> <Link className='route-home' to="/home">Sign Up</Link></button>

          <div className="divider">OR</div>

          <button className="social-login google-login">
            <img src={googleIcon} alt="Google Icon" className="social-icon" />
            Continue with Google
          </button>

          <button className="social-login linkedin-login">
            <img src={linkedinIcon} alt="LinkedIn Icon" className="social-icon" />
            Continue with LinkedIn
          </button>
        </form>

        <p className="login-link">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default EnhancedSignupForm;
