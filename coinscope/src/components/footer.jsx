import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>CoinScope</h2>
          <p>Predicting your next crypto move.</p>
        </div>

        <div className="footer-links">
          <h4>Explore</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>News</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-socials">
          <h4>Follow Us</h4>
          <div className="icons">
            <span>🐦</span>
            <span>📘</span>
            <span>📸</span>
            <span>💼</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} CoinScope. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
