import React from 'react';
import './Stats.css';

const Stats = () => {
    return (
        <section className="stats-section">
            <div className="container">
                <div className="stats-grid">
                    <div className="stat-item">
                        <h3 className="stat-number">100,000+</h3>
                        <p className="stat-label">Vehicles Rescued Since 2011</p>
                    </div>
                    <div className="stat-item">
                        <h3 className="stat-number">30 Mins</h3>
                        <p className="stat-label">Average Reach Time</p>
                    </div>
                    <div className="stat-item">
                        <h3 className="stat-number">24/7</h3>
                        <p className="stat-label">Round-the-clock Support</p>
                    </div>
                    <div className="stat-item">
                        <h3 className="stat-number">500+</h3>
                        <p className="stat-label">Verified Technicians</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
