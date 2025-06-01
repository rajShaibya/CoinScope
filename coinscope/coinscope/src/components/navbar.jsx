import '../styles/navbar.css';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';

const Navbar = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/auth');
  };

  return (
    <nav className="Navigation">
      <div className="coinscope">CoinScope</div>

      <ul className="flex gap-6 text-sm">
        <li className="Home">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="crypto">Predict Crypto</li>
        <li className="About">
          <Link to="/about" className="nav-link">About Us</Link>
        </li>
      </ul>

      <div className="login">
        {user ? (
          <>
            <span className="username">Hi, {user.name}</span>
            <button className="logout" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/auth">
              <button className="login">Log In</button>
            </Link>
            <Link to="/auth">
              <button className="sign-up">Sign Up</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

