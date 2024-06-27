import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Make sure to create this CSS file

const MainNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="custom-navbar">
      <div className="custom-navbar-logo">
        <span className="logomain">Advance React</span>
      </div>
      <ul className="custom-navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li
          className="dropdown"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <Link to="/projects">projects</Link>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/projects/dragdrop">Drag Drop</Link></li>
              <li><Link to="/projects/link2">Link 2</Link></li>
              <li><Link to="/projects/link3">Link 3</Link></li>
              <li><Link to="/projects/link4">Link 4</Link></li>
            </ul>
          )}
        </li>
        <li
          className="dropdown"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <Link to="/projects">Topics</Link>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/practicetopics/LearnUseRef">UseRefs</Link></li>
              <li><Link to="/practicetopics/learnUseMemo">UseMemo</Link></li>
              <li><Link to="/practicetopics/link3">Link 3</Link></li>
              <li><Link to="/practicetopics/link4">Link 4</Link></li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/nothing-here">Nothing Here</Link>
        </li>
      </ul>
      <div className="custom-navbar-buttons">
        <button className="custom-navbar-btn">Sign Up</button>
        <button className="custom-navbar-btn">Login</button>
      </div>
    </nav>
  );
};

export default MainNavbar;
