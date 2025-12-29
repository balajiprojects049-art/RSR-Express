import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import './Footer.css';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                {/* Orange CTA Box */}
                <div className="footer-cta">
                    <div className="cta-content">
                        <h2>Vehicle Breakdown? Immediate <br /> Assistance, Anywhere in India</h2>
                        <p>With 51+ certified mechanics and a fully equipped fleet of tow trucks, Team RSR provides fast, reliable roadside assistance 24/7, wherever you are.</p>
                        <a href="/get-rescued" className="btn btn-secondary btn-dark-cta">
                            GET RESCUED NOW
                        </a>
                    </div>
                </div>

                <div className="footer-top">
                    <div className="footer-brand">
                        <img src={logo} alt="RSR EXPRESS" className="footer-logo" />
                        <p className="footer-tagline"><strong>HQ: Hyderabad | Serving Pan India</strong><br />Your trusted roadside assistance partner</p>
                        <div className="footer-social">
                            <a href="https://www.facebook.com/share/1Dhp6afqY6/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <Facebook size={20} />
                            </a>
                            <a href="https://www.instagram.com/rsr.express?igsh=dnhqaWYyanJjMnJ5" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="footer-links-group">
                        <div className="footer-column">
                            <h3>Company</h3>
                            <ul>
                                <li><a href="/about">Our Story</a></li>
                                <li><a href="/careers">Careers</a></li>
                                <li><a href="/blog">Blog</a></li>
                                <li><a href="/contact">Contact Us</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h3>Services</h3>
                            <ul>
                                <li><a href="/services/puncture">Puncture Repair</a></li>
                                <li><a href="/services/battery">Battery Jumpstart</a></li>
                                <li><a href="/services/fuel">Fuel Delivery</a></li>
                                <li><a href="/towing/car">Car Towing</a></li>
                                <li><a href="/towing/bike">Bike Towing</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h3>Legal</h3>
                            <ul>
                                <li><a href="/privacy">Privacy Policy</a></li>
                                <li><a href="/terms">Terms of Service</a></li>
                                <li><a href="/terms-of-use">Terms of Use</a></li>
                                <li><a href="/refund-policy">Cancellation & Refund Policy</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h3>Contact</h3>
                            <ul className="contact-list">
                                <li>
                                    <Phone size={16} />
                                    <a href="tel:9111818222">9111 818 222</a>
                                </li>
                                <li>
                                    <Mail size={16} />
                                    <a href="mailto:rsaexpressalloverindia@gmail.com">rsaexpressalloverindia@gmail.com</a>
                                </li>
                                <li>
                                    <MapPin size={16} />
                                    <span><strong>Main Head Office:</strong><br />Ground Floor, R S R Express 1-301, Near NTR Statue, Bowenpally, Hyderabad</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} RSR Express. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
