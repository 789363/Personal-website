import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaFileAlt } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Yuwei的個人網站</h1>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <FaHome />
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            <FaUser />
            About Me
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/articles" className="nav-link">
            <FaFileAlt />
            SideProjects
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
