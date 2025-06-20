import React from 'react';
import '../styles/news.css';

const News = () => {
  // Sample news data (can be replaced with API later)
  const newsList = [
    {
      title: 'Bitcoin hits new all-time high',
      date: 'May 14, 2025',
      summary: 'Bitcoin price reaches $75,000 as institutional investment surges.'
    },
    {
      title: 'Ethereum 2.0 launches successfully',
      date: 'May 10, 2025',
      summary: 'Major upgrade boosts scalability and reduces gas fees by 80%.'
    },
    {
      title: 'US announces crypto regulation framework',
      date: 'May 8, 2025',
      summary: 'New policies aim to foster innovation while enhancing consumer protection.'
    }
  ];

  return (
    <div className="news-section">
      <h2 className="news-title">Crypto News & Updates</h2>
      <div className="news-list">
        {newsList.map((item, index) => (
          <div key={index} className="news-card">
            <h3>{item.title}</h3>
            <p className="news-date">{item.date}</p>
            <p>{item.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;