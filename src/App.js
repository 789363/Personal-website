import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import ArticleList from './ArticleList';

import FujiPage  from './ArticalPage/FujiPage';
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/articles/1" element={<FujiPage />} />
          <Route path="/articles/2" element={<FujiPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
