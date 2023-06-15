import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import ArticleList from './ArticleList';
import Article from './Article';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/articles/:id" element={<Article />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
