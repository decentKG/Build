import React from "react";
import "./NavBar2.css";
import buildLogo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom"; // 👈 import Link + location

const NavBar = () => {
  const location = useLocation(); // to highlight the active link

  return (
    <header className="navbar-header">
      {/* Logo Section - far left */}
      <div className="navbar-logo-group">
        <img src={buildLogo} alt="BuildLink Logo" className="navbar-logo-img" />
      </div>

      {/* Spacer to push menu to center */}
      <div className="navbar-flex-spacer" />

      {/* Navigation Menu - centered */}
      <nav className="navbar-menu">
        <Link to="/" className={`navbar-menu-item ${location.pathname === '/' ? 'active' : ''}`}>
          Home
        </Link>
        <Link to="/handyman" className={`navbar-menu-item ${location.pathname === '/handyman' ? 'active' : ''}`}>
          Handyman
        </Link>
        <Link to="/companies" className={`navbar-menu-item ${location.pathname === '/companies' ? 'active' : ''}`}>
          Companies
        </Link>
        <Link to="/Aboutus" className={`navbar-menu-item ${location.pathname === '/Aboutus' ? 'active' : ''}`}>
          About Us
        </Link>
      </nav>

      {/* Spacer to push actions to right */}
      <div className="navbar-flex-spacer" />

      {/* Actions: Search bar and Profile Icon - far right */}
      <div className="navbar-actions">
        <form className="navbar-search-form" onSubmit={e => e.preventDefault()}>
          <button className="navbar-search-icon" type="submit" aria-label="Search">
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#fff', fontSize: 20 }} />
          </button>
          <input
            className="navbar-search-input-invert"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
        <div className="navbar-profile-icon">
          <FontAwesomeIcon icon={faUserCircle} style={{ color: '#FEB300', fontSize: 32 }} />
        </div>
      </div>
    </header>
  );
};

export default NavBar;

