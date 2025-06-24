import React from 'react';
import logo from '../assets/logo.png';
import userIcon from '../assets/user-icon.png';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <a href="#">
          <img src={logo} alt="BuildLink Logo" />
        </a>
      </div>
      <ul>
        <li><a href="#"><span>Home</span></a></li>
        <li><a href="#">Handyman</a></li>
        <li><a href="#">Companies</a></li>
        <li><a href="#">About Us</a></li>
      </ul>
      <div className="icon-search">
        <div className="custom-search-bar">
          <div className="custom-search-icon">
            <svg width="22" height="22" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </div>
          <input className="custom-search-input" type="text" placeholder="Search.." />
        </div>
        <div className='icon'>
          <img src={userIcon} alt="User Profile" />
        </div>
      </div>     
    </nav>
  );
}