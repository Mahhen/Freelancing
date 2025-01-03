// eslint-disable-next-line no-unused-vars
import React from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const LoginForm = () => {
  return (
    <main>
    
    
    <div className='wrapper'>
        <form action="">
            <h1>Login</h1>
            <div className='input-box'>
                <input type='text' placeholder='Username' required />
                <FaUser className='icon' />
            </div>
            <div className='input-box'>
                <input type='password' placeholder='Password' required />
                <FaLock className='icon' />
            </div>
            <div className="remember-forget">
                <label><input type='checkbox' /> Remember me</label>
                <a href="#" className='forgotpass'>Forgot password?</a>
            </div>

            <button type='submit'> <Link to="/home">Login</Link></button>
            <div className="register-link">
                <p>Don&apos;t have an account? <Link to="/signup">Register</Link></p>
            </div>
        </form>
    </div>
    </main>
  );
};
