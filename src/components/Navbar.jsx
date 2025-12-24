import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown, Clock, Wrench } from 'lucide-react';
import './Navbar.css';
import logo from '../assets/logo.png';
import punctureIcon from '../assets/puncture_icon.png';
import batteryIcon from '../assets/battery_icon.png';
import fuelIcon from '../assets/fuel_icon.png';
import keyIcon from '../assets/key_icon.png';
import carTowingIcon from '../assets/car_towing_icon.png';
import bikeTowingIcon from '../assets/bike_towing_icon.png';
import repairIcon from '../assets/repair_icon.png';
import commercialTowingIcon from '../assets/commercial_towing_icon.png';
import heavyVehicleTowingIcon from '../assets/heavy_vehicle_towing_icon.png';

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
              <span>HQ: Hyderabad | Serving Pan India</span>
            </div>
            <div className="info-item">
              <Phone size={16} color="#FF6600" />
              <a href="tel:9111818222">9111 818 222</a>
            </div>
            <div className="info-item mobile-hidden">
              <span style={{ color: '#FF6600', fontWeight: 'bold' }}>|</span>
              <span style={{ fontWeight: 600 }}>Available 24/7 Support</span>
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
                  <Link to="/services/battery" className="dropdown-link">
                    <img src={batteryIcon} alt="Battery" className="nav-icon" /> Battery Jumpstart
                  </Link>
                  <Link to="/services/repairs" className="dropdown-link">
                    <img src={repairIcon} alt="Repairs" className="nav-icon" /> Minor Repairs
                  </Link>
                  <Link to="/services/puncture" className="dropdown-link">
                    <img src={punctureIcon} alt="Puncture" className="nav-icon" /> Puncture & Flat Tire
                  </Link>
                  <Link to="/services/fuel" className="dropdown-link">
                    <img src={fuelIcon} alt="Fuel" className="nav-icon" /> Emergency Fuel
                  </Link>
                  <Link to="/services/key" className="dropdown-link">
                    <img src={keyIcon} alt="Key" className="nav-icon" /> Key Recovery
                  </Link>
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
                  <Link to="/towing/car" className="dropdown-link">
                    <img src={carTowingIcon} alt="Car" className="nav-icon" /> Car Towing
                  </Link>
                  <Link to="/towing/bike" className="dropdown-link">
                    <img src={bikeTowingIcon} alt="Bike" className="nav-icon" /> Bike Towing
                  </Link>
                  <Link to="/towing/commercial" className="dropdown-link">
                    <img src={commercialTowingIcon} alt="Commercial" className="nav-icon" /> Commercial Towing
                  </Link>
                  <Link to="/towing/heavy-vehicle" className="dropdown-link">
                    <img src={heavyVehicleTowingIcon} alt="Heavy Vehicle" className="nav-icon" /> Heavy Vehicle Towing
                  </Link>
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
