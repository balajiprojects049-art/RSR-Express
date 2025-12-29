import React from 'react';
import { ShieldCheck, MapPin, Zap } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="container">
                <div className="hero-content">
                    <div className="glass-card hero-card">
                        <h1 className="hero-title">
                            Roadside Assistance <br />
                            <span className="typing-text">Made Easy!</span>
                        </h1>
                        <p className="hero-description">
                            Stuck on the road? We’ve got you covered. Our expert mechanics provide fast and reliable roadside support. From tire punctures to battery jump-starts, arriving within 30–45 minutes, Pan India.
                        </p>

                        <div className="hero-stats-mini">
                            <div className="mini-stat">
                                <ShieldCheck color="#FF6600" size={20} />
                                <span className="stat-text">OEM Trained</span>
                            </div>
                            <div className="mini-stat">
                                <MapPin color="#FF6600" size={20} />
                                <span className="stat-text">Pan India Service</span>
                            </div>
                            <div className="mini-stat">
                                <Zap color="#FF6600" size={20} />
                                <span className="stat-text">30-45 Mins Reach</span>
                            </div>
                        </div>

                        <div className="hero-actions">
                            <a href="/get-rescued" className="btn btn-primary btn-lg">
                                GET RESCUED NOW
                            </a>
                            <a href="tel:9111818222" className="btn btn-outline">
                                Call 9111 818 222
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
