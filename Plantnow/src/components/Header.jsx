import React from 'react';
import logoImage from '../assets/plantnow.png'

function Header() {
  return (
    <header>
      <div className="navigation">
        <nav>
          <div className="logo">
            <img src={logoImage} alt="logo" />
          </div>

          <div className="nav-list">
            <ul className="menu">
              <li><a href="#">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>

            <div className="right-nav">
              <button className="btn">
                <a href="purchase.html">Make Purchase</a>
              </button>
            </div>
          </div>

          <div className="hamburger-menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
