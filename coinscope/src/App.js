import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';
import About from './pages/aboutus';
import Auth from './pages/authPage';
import Predict from './pages/predict';
import { UserProvider } from './context/userContext';


function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/predict" element={<Predict />} />
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}


export default App;
