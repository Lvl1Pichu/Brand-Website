import React from 'react';
import './Navbar.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/Logga.png';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="navbar-buttons">
          <button className="left-navbar-button">Esports</button>
          <button className="left-navbar-button">Products</button>
          <button className="left-navbar-button">Community</button>
          <button className="left-navbar-button">Company</button>
          <button className="left-navbar-button">App</button>
          <button className="left-navbar-button">Shop</button>
        </div>
      </div>
      <div className="navbar-right">
        <FontAwesomeIcon icon={faShoppingCart} className="icon-shopping-cart" />
        <button className="navbar-button navbar-signup">Sign up</button>
        <button className="navbar-button navbar-signin">Sign in</button>
        <button className="navbar-mobile-button">
          <FontAwesomeIcon icon={faUser} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
