import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown, Clock } from 'lucide-react';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleDropdown = (name) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="info-item">
              <Clock size={16} color="#FF6600" />
              <span>Available 24/7 All Over Hyderabad</span>
            </div>
            <div className="info-item">
              <Phone size={16} color="#FF6600" />
              <a href="tel:9111818222">9111 818 222</a>
            </div>
          </div>
        </div>
      </div>

      <nav className="main-nav">
        <div className="container">
          <div className="nav-container">
            <Link to="/" className="logo">
              <img src={logo} alt="RSR EXPRESS" className="logo-img" />
            </Link>

            <div className={`nav-links ${isOpen ? 'active' : ''}`}>
              <div className="nav-item dropdown">
                <button
                  className="nav-link"
                  onClick={() => toggleDropdown('roadside')}
                >
                  Roadside Assistance <ChevronDown size={16} />
                </button>
                <div className={`dropdown-menu ${activeDropdown === 'roadside' ? 'active' : ''}`}>
                  <Link to="/services/puncture" className="dropdown-link">Puncture & Flat Tire</Link>
                  <Link to="/services/battery" className="dropdown-link">Battery Jumpstart</Link>
                  <Link to="/services/repairs" className="dropdown-link">Minor Repairs</Link>
                  <Link to="/services/fuel" className="dropdown-link">Emergency Fuel</Link>
                  <Link to="/services/key" className="dropdown-link">Key Recovery</Link>
                </div>
              </div>

              <div className="nav-item dropdown">
                <button
                  className="nav-link"
                  onClick={() => toggleDropdown('towing')}
                >
                  Towing Services <ChevronDown size={16} />
                </button>
                <div className={`dropdown-menu ${activeDropdown === 'towing' ? 'active' : ''}`}>
                  <Link to="/towing/bike" className="dropdown-link">Bike Towing</Link>
                  <Link to="/towing/car" className="dropdown-link">Car Towing</Link>
                </div>
              </div>

              <Link to="/contact" className="nav-link">Contact</Link>

              <Link to="/get-rescued" className="btn btn-primary mobile-cta">
                GET RESCUED NOW
              </Link>
            </div>

            <div className="nav-actions">
              <Link to="/get-rescued" className="btn btn-primary desktop-cta">
                GET RESCUED NOW
              </Link>

              <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
