import React, { useState } from 'react';
import '../styles/questions.css';

const faqData = [
  {
    question: 'What is a cryptocurrency exchange?',
    answer: 'Cryptocurrency exchanges are digital marketplaces that enable users to buy and sell cryptocurrencies like Bitcoin, Ethereum, and Tether. The Binance exchange is the largest crypto exchange by trade volume.'
  },
  {
    question: 'What products does Binance provide?',
    answer: 'Binance provides spot trading, futures, staking, NFT marketplace, and various earning products.'
  },
  {
    question: 'How to buy Bitcoin and other cryptocurrencies on Binance?',
    answer: 'You can buy cryptocurrencies using bank transfer, credit/debit cards, or P2P trading on Binance.'
  },
  {
    question: 'How to track cryptocurrency prices?',
    answer: 'Binance offers real-time price charts, mobile apps, and price alerts to track coins.'
  },
  {
    question: 'How to trade cryptocurrencies on Binance?',
    answer: 'You can place market, limit, or stop-limit orders on Binance’s trading interface.'
  },
  {
    question: 'How to earn from crypto on Binance?',
    answer: 'You can stake, lend, or use Binance Earn to generate passive income.'
  }
];

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <ul className="faq-list">
        {faqData.map((item, index) => (
          <li key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleQuestion(index)}>
              <span className="faq-number">{index + 1}</span>
              <span className="faq-text">{item.question}</span>
              <span className="faq-toggle">{openIndex === index ? '−' : '+'}</span>
            </div>
            {openIndex === index && <p className="faq-answer">{item.answer}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Questions;
