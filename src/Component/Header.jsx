import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <div className='container'>
      <nav className="navbar">
        <div className='logo'>
          <img src="https://thumbs.dreamstime.com/b/bus-icon-vector-solid-logo-illustration-red-color-bus-icon-design-bus-vector-design-169403631.jpg" alt="Bus Logo" />
          <span>Magic Bus</span>
        </div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Placement">Placement</Link></li>
          <li><Link to="/Signup">Contact</Link></li>
        </ul>

     
      </nav>
    </div>
  );
};

export default Header;
