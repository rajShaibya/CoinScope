import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import '../styles/AuthPage.css';
import Navbar from '../components/navbar';

const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const { login } = useContext(UserContext);
  const navigate = useNavigate();


  const handleToggle = () => setIsSignup(!isSignup);


  const [name, setName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });

      const data = await res.json();
      console.log('Login response data:', data);

      if (res.ok) {
        login(data.user.name, data.token);
        alert('Login successful!');
        navigate('/');
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      alert('Error logging in: ' + error.message);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email: signupEmail, password: signupPassword }),
      });

      const data = await res.json();
      console.log('Signup response data:', data);

      if (res.ok) {
        // Same adjustment here if needed
        login(data.name || (data.user && data.user.name), data.token);
        alert('Signup successful!');
        navigate('/');
      } else {
        alert(data.message || 'Signup failed');
      }
    } catch (error) {
      alert('Error signing up: ' + error.message);
    }
  };

  return (
    <div className="auth-page">
      <Navbar />
      <div className={`container ${isSignup ? 'active' : ''}`} id="container">

        {/* Sign Up Form */}
        <div className="form-contain signup">
          <form onSubmit={handleSignup}>
            <h1>Create Account</h1>
            <div className="icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-google-plus-g"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for registration</span>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
              required
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>

        {/* Sign In Form */}
        <div className="form-contain signin">
          <form onSubmit={handleLogin}>
            <h1>Sign In</h1>
            <div className="icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-google-plus-g"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your email password</span>
            <input
              type="email"
              placeholder="Email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              required
            />
            <a href="#">Forgot your password?</a>
            <button type="submit">Sign In</button>
          </form>
        </div>

        {/* Toggle Panel */}
        <div className="toggle-container">
          <div className="toggle">
            <div className="panel left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us, please login with your personal info</p>
              <button className="hidden" id="login" onClick={handleToggle}>
                Sign In
              </button>
            </div>
            <div className="panel right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start your journey with us</p>
              <button className="hidden" id="reg" onClick={handleToggle}>
                Sign Up
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AuthPage;
