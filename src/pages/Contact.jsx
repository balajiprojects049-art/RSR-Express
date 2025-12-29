import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import './Contact.css';
import contactSupport from '../assets/contact_support.jpg';

const Contact = () => {
    return (
        <main className="contact-page">
            <div className="contact-hero">
                <div className="container">
                    <div className="hero-content animate-fadeInUp">
                        <span className="subtitle">Get In Touch</span>
                        <h1 className="page-title">Contact Us</h1>
                        <p className="hero-description">
                            Our team is available 24/7 to provide prompt assistance, answer your queries, and support you in any emergency.
                        </p>
                    </div>
                </div>
            </div>

            <div className="contact-content container">
                <div className="contact-grid">
                    {/* Contact Info */}
                    <div className="contact-info-card glass-card">
                        <h2>Get in Touch</h2>
                        <div className="info-list">
                            <div className="info-item-lg">
                                <div className="icon-box">
                                    <Phone size={24} color="#FF6600" />
                                </div>
                                <div>
                                    <h3>Phone</h3>
                                    <a href="tel:9111818222" className="contact-link">9111 818 222</a>
                                    <p className="contact-note">Available 24/7 for emergencies</p>
                                </div>
                            </div>

                            <div className="info-item-lg">
                                <div className="icon-box">
                                    <Mail size={24} color="#FF6600" />
                                </div>
                                <div>
                                    <h3>Email</h3>
                                    <a href="mailto:rsaexpressalloverindia@gmail.com" className="contact-link">rsaexpressalloverindia@gmail.com</a>
                                    <p className="contact-note">For general inquiries</p>
                                </div>
                            </div>

                            <div className="info-item-lg">
                                <div className="icon-box">
                                    <MapPin size={24} color="#FF6600" />
                                </div>
                                <div>
                                    <h3>Main Head Office</h3>
                                    <p>Ground Floor, R S R Express 1-301, Near NTR Statue, Opp. MMR Garden Road, Nandamuri Nagar, Bowenpally, Hyderabad</p>
                                    <p className="contact-note">Pan India Service - Serving all over India</p>
                                </div>
                            </div>

                            <div className="info-item-lg">
                                <div className="icon-box">
                                    <Clock size={24} color="#FF6600" />
                                </div>
                                <div>
                                    <h3>Hours</h3>
                                    <p>Monday - Sunday: 24 Hours</p>
                                    <p className="contact-note">Always open</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-card glass-card">
                        <h2>Send us a Message</h2>
                        <form className="contact-form">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="tel" placeholder="Your Phone Number" required />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea rows="4" placeholder="How can we help you?" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Support Center Section */}
            <div className="support-center-section section-padding">
                <div className="container">
                    <div className="support-grid">
                        <div className="support-content">
                            <span className="subtitle">24/7 Command Center</span>
                            <h2 className="section-title">Always Watching, Always Ready</h2>
                            <p className="support-text">
                                Our state-of-the-art dispatch center in Hyderabad operates around the clock, 365 days a year. Leveraging advanced GPS tracking and real-time fleet management, our skilled support team ensures the nearest mechanic reaches you as quickly as possible.
                            </p>
                            <div className="support-features">
                                <div className="feature-item">
                                    <Clock size={20} color="#FF6600" />
                                    <span>Real-time Tracking</span>
                                </div>
                                <div className="feature-item">
                                    <Phone size={20} color="#FF6600" />
                                    <span>Instant Dispatch</span>
                                </div>
                            </div>
                        </div>
                        <div className="support-image img-hover-zoom">
                            <img src={contactSupport} alt="RSR Express Dispatch Center" className="shadow-lg" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div className="map-section">
                <iframe
                    title="RSR Express Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2189!2d78.45!3d17.48!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI4JzQ4LjAiTiA3OMKwMjcnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </main>
    );
};

export default Contact;
