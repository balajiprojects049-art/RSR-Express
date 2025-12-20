import React from 'react';
import { CheckCircle, Award, Users, Clock } from 'lucide-react';
import './About.css';
import aboutTeam from '../assets/about_team.jpg';

const About = () => {
    return (
        <main className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <div className="hero-content animate-fadeInUp">
                        <span className="subtitle">About RSR Express</span>
                        <h1 className="page-title">Our Story</h1>
                        <p className="hero-description">
                            We're on a mission to revolutionize roadside assistance across India,
                            ensuring no driver is ever left stranded.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="section-padding">
                <div className="container">
                    <div className="mission-grid">
                        <div className="mission-content">
                            <h2 className="text-gradient">Our Mission</h2>
                            <p className="large-text">
                                To provide fast, reliable, and professional roadside assistance services
                                that give drivers peace of mind, no matter where their journey takes them.
                            </p>
                            <p>
                                Founded in Hyderabad, RSR Express started with a simple vision: to create
                                a network of skilled mechanics and tow operators who could reach any breakdown
                                location within minutes. Today, we've assisted over 200,000 commuters and
                                continue to expand our reach across India.
                            </p>
                        </div>
                        <div className="mission-image img-hover-zoom">
                            <img
                                src={aboutTeam}
                                alt="RSR Express Team"
                                className="shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="values-section section-padding">
                <div className="container">
                    <div className="section-header">
                        <span className="subtitle">Our Values</span>
                        <h2 className="section-title">What Drives Us</h2>
                    </div>
                    <div className="values-grid">
                        <div className="value-card card hover-lift">
                            <div className="value-icon">
                                <Clock size={40} color="#FF6600" />
                            </div>
                            <h3>Speed</h3>
                            <p>We understand emergencies. Our average response time is under 30 minutes.</p>
                        </div>
                        <div className="value-card card hover-lift">
                            <div className="value-icon">
                                <CheckCircle size={40} color="#FF6600" />
                            </div>
                            <h3>Reliability</h3>
                            <p>Available 24/7, 365 days a year. No breakdown is too small or too big.</p>
                        </div>
                        <div className="value-card card hover-lift">
                            <div className="value-icon">
                                <Users size={40} color="#FF6600" />
                            </div>
                            <h3>Professionalism</h3>
                            <p>OEM-trained mechanics with years of experience in vehicle assistance.</p>
                        </div>
                        <div className="value-card card hover-lift">
                            <div className="value-icon">
                                <Award size={40} color="#FF6600" />
                            </div>
                            <h3>Excellence</h3>
                            <p>We don't just fix problems—we ensure you get back on the road safely.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="about-stats section-padding">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-item animate-fadeInUp">
                            <h3 className="stat-number text-gradient">200K+</h3>
                            <p>Commuters Assisted</p>
                        </div>
                        <div className="stat-item animate-fadeInUp">
                            <h3 className="stat-number text-gradient">40K+</h3>
                            <p>Vehicles Towed</p>
                        </div>
                        <div className="stat-item animate-fadeInUp">
                            <h3 className="stat-number text-gradient">50+</h3>
                            <p>Expert Mechanics</p>
                        </div>
                        <div className="stat-item animate-fadeInUp">
                            <h3 className="stat-number text-gradient">24/7</h3>
                            <p>Service Availability</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team/Journey Section */}
            <section className="section-padding">
                <div className="container">
                    <div className="section-header">
                        <span className="subtitle">Our Journey</span>
                        <h2 className="section-title">Growing Together</h2>
                    </div>
                    <div className="journey-content">
                        <div className="journey-step card border-shine">
                            <div className="step-year">2020</div>
                            <h3>The Beginning</h3>
                            <p>Started with 5 mechanics in Hyderabad, focusing on puncture repairs and battery assistance.</p>
                        </div>
                        <div className="journey-step card border-shine">
                            <div className="step-year">2021</div>
                            <h3>Expansion</h3>
                            <p>Expanded to major Hyderabad locations and introduced our first fleet of tow trucks.</p>
                        </div>
                        <div className="journey-step card border-shine">
                            <div className="step-year">2022</div>
                            <h3>Technology Integration</h3>
                            <p>Launched our digital platform for faster dispatch and real-time tracking.</p>
                        </div>
                        <div className="journey-step card border-shine">
                            <div className="step-year">2023-Present</div>
                            <h3>Pan-India Vision</h3>
                            <p>Expanding nationwide with a goal to serve every major city in India.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
