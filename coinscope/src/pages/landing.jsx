import React from 'react';
import '../styles/landing.css';
import Navbar from '../components/navbar';
import Popularcoins from '../components/popular';
import News from'../components/news';
import Questions from '../components/questions';
import Footer from'../components/footer';

const Landing = () => {
  return (
    <div className="landingpage">
      <div className="nav"><Navbar/></div>
      <div className="info">
      <span className="brand">CoinScope</span> <span className="description">is a website that predicts what coin you should invest in next</span>
      </div>

      <div className="popularnews-wrapper">
      <div className="popularcoins">
        <Popularcoins/>
      </div>
      <div className="recentnews">
        <News/>
      </div>
      </div>

      <div className="frequentques">
        <Questions/>
      </div>
      <div className="footer"><Footer/></div>
    </div>
  );
};

export default Landing;