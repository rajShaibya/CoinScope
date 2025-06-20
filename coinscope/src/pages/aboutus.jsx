import React from 'react';
import '../styles/aboutus.css';
import Navbar from '../components/navbar';

const AboutUs = () => {
  return (
    <div className="aboutus-page">
      <div className="nav"><Navbar/></div>
      <header className="aboutus-header">
        <h1>About This Website</h1>
        <p>Your Gateway to Data-Driven Crypto Investment</p>
      </header>

      <div className="aboutus-container">
        <section className="card">
          <h2>What We Do</h2>
          <p>
            We are a group of college students passionate about blockchain and finance. Our platform offers a sleek dashboard for monitoring, analyzing, and simulating cryptocurrency investments. Leveraging real-time data from the CoinGecko API, we empower users with custom tools and insights to pursue high-return strategies.
          </p>
        </section>

        <section className="card">
          <h2>Key Features</h2>
          <ul>
            <li><strong>Live Coin Data:</strong> Real-time prices, volumes, and market caps of top cryptocurrencies.</li>
            <li><strong>Personalized Inputs:</strong> Set your investment amount, risk profile, and coin preferences to tailor portfolio advice.</li>
            <li><strong>Interactive Dashboard:</strong> Engaging charts and tables visualize performance metrics, trends, and forecasts.</li>
            <li><strong>Automated Analysis:</strong> Built-in indicators like moving averages, RSI, and volatility thresholds fuel data-driven decisions.</li>
            <li><strong>Simulator:</strong> Paper-trade scenarios with your strategies to project potential returns before investing real capital.</li>
          </ul>
        </section>

        <section className="card">
          <h2>How It Works</h2>
          <ol>
            <li><strong>Fetch Data:</strong> We gather live market metrics from the CoinGecko API for selected coins.</li>
            <li><strong>Customize:</strong> Input your capital, select coins, and adjust strategy parameters.</li>
            <li><strong>Compute:</strong> Our algorithms analyze inputs and market data, generating risk-adjusted scores and allocations.</li>
            <li><strong>Display:</strong> Results are presented through dynamic charts and key statistics like ROI, drawdown, and Sharpe ratio.</li>
            <li><strong>Decide:</strong> Use these insights to execute trades or refine your approach in the simulator.</li>
          </ol>
        </section>

        <section className="card">
          <h2>Dashboard Insights</h2>
          <p>
            Our dashboard highlights essential statistics based on your inputs:<br />
            • <strong>Portfolio Allocation:</strong> Suggested coin distribution tailored to your risk profile.<br />
            • <strong>Performance Metrics:</strong> Track ROI, volatility, and historical growth in real time.<br />
            • <strong>Risk Analysis:</strong> Visualize drawdowns and volatility over your selected timeframe.<br />
            • <strong>Alerts & Trends:</strong> Receive notifications on significant market movements and emerging patterns.
          </p>
        </section>

        <section className="warning-container">
          <div className="warning">
            <h2>Warning</h2>
            <p>
              This platform is intended for educational and research purposes only. It does not constitute financial advice. Always conduct your own research and consult a professional before making investment decisions.
            </p>
          </div>
        </section>
      </div>

      <footer className="aboutus-footer">
        &copy; 2025 Crypto Investment Dashboard Team
      </footer>
    </div>
  );
};

export default AboutUs;