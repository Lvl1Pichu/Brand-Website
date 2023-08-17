import React from 'react';
import './Navbar.css'; // Import your CSS file for styling

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          {/* Your logo or symbol here */}
        </div>
        <div className="navbar-buttons">
          <button className="navbar-button">Esports</button>
          <button className="navbar-button">Products</button>
          <button className="navbar-button">Community</button>
          <button className="navbar-button">Company</button>
          <button className="navbar-button">App</button>
          <button className="navbar-button">Shop</button>
        </div>
      </div>
      <div className="navbar-right">
        <button className="navbar-button navbar-signup">Sign up</button>
        <button className="navbar-button navbar-signin">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
