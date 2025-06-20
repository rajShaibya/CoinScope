import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar';
import '../styles/predict.css';

function Predict() {
  const [amount, setAmount] = useState('');
  const [risk, setRisk] = useState(5);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    setResults([]);

    try {
      const res = await axios.post('http://localhost:5000/api/predict', {
        amount: parseFloat(amount),
        risk: parseInt(risk)
      });

      setResults(res.data);
    } catch (err) {
      console.error("Frontend Axios error:", err);
      setError('Prediction failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="predict-container">
        <h2>Crypto Coin Predictor</h2>

        <form className="predict-form" onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="Enter amount in USD"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />

          <label className="slider-label">
            Risk tolerance: <strong>{risk}</strong>
            <input
              type="range"
              min="1"
              max="10"
              value={risk}
              onChange={(e) => setRisk(e.target.value)}
            />
          </label>

          <button type="submit">Get Predictions</button>
        </form>

        {loading && <p className="loading">Loading...</p>}
        {error && <p className="error">{error}</p>}

        {results.length > 0 && (
          <div className="results">
            <h3>Top 3 Coin Suggestions</h3>
            {results.map((r, i) => (
              <div className="coin-block" key={i}>
                <p><strong>#{i + 1}: {r.name}</strong> (ID: {r.id}) @ ${r.price?.toFixed(2)} (Δ${r.diff?.toFixed(2)})</p>
                <p>  Volatility: {(r.volatility * 100).toFixed(2)}%</p>
                <p>  Sharpe Ratio: {r.sharpe?.toFixed(2)}</p>
                <p>  4-Week Forecast Averages:</p>
                {r.weekly?.map((val, idx) => (
                  <p key={idx}>   Week {idx + 1}: ${val.toFixed(2)}</p>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Predict;
