import React from 'react';
import logoImage from '../assets/plantnow.png'
import {Link} from 'react-router-dom'
import { useState } from 'react';

function Header () {
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
                <Link to="/Purchase">Make Purchase</Link>
              </button>
            </div>
          </div>

          <button className="hamburger-menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </nav>
        <div className={menu_class}></div>
      </div>
    </header>

    
  );
}

export default Header;
