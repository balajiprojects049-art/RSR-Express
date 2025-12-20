import React from 'react';
import './LaunchSoon.css';

const LaunchSoon = () => {
    return (
        <section className="launch-soon section-padding">
            <div className="container">
                <div className="launch-grid">
                    <div className="launch-content">
                        <span className="subtitle">RSR Tech Platform Launching Soon</span>
                        <h2 className="launch-title">
                            Stand a Chance to win <br />
                            fuel worth <span className="text-primary">₹5000</span>
                        </h2>
                        <p className="launch-desc">
                            Share your suggestion on features you would like in the RSR Tech Platform & enter the weekly draw by completing your details.
                        </p>
                    </div>

                    <div className="launch-form-wrapper">
                        <div className="glass-card launch-card">
                            <form className="suggestion-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <input type="text" placeholder="Name" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="tel" placeholder="Phone Number" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="email" placeholder="Email" required />
                                </div>
                                <div className="form-group">
                                    <textarea placeholder="Your Suggestion" rows="3" required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LaunchSoon;
