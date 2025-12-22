import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import './LiveCoverageMap.css';
import mapBg from '../../assets/hero-bg.png'; // Re-using existing bg or can use a map image if available

const LiveCoverageMap = () => {
    // Simulated mechanic locations (percentage style for responsiveness)
    const mechanics = [
        { top: '30%', left: '40%', name: 'Ramesh - Indiranagar' },
        { top: '50%', left: '60%', name: 'Suresh - Koramangala' },
        { top: '20%', left: '70%', name: 'Mike - Whitefield' },
        { top: '65%', left: '30%', name: 'John - JP Nagar' },
        { top: '45%', left: '20%', name: 'Ali - Vijayanagar' },
        { top: '80%', left: '50%', name: 'Kiran - Electronic City' },
    ];

    return (
        <section className="live-map-section section-padding">
            <div className="container">
                <div className="map-header center-text">
                    <span className="subtitle" style={{ color: '#2ecc71' }}>LIVE COVERAGE</span>
                    <h2 className="section-title">Mechanics Near You</h2>
                    <p className="section-desc">Real-time view of our active fleet across Bengaluru.</p>
                </div>

                <div className="map-container glass-card reveal-zoom">
                    {/* Simulated Map Background */}
                    <div className="live-map-display">
                        <div className="radar-sweep"></div>

                        {mechanics.map((mech, index) => (
                            <div
                                key={index}
                                className="mechanic-pin"
                                style={{ top: mech.top, left: mech.left, animationDelay: `${index * 0.5}s` }}
                            >
                                <div className="pin-pulse"></div>
                                <div className="pin-icon">
                                    <Navigation size={14} fill="white" />
                                </div>
                                <div className="pin-tooltip">{mech.name}</div>
                            </div>
                        ))}

                        {/* User Location (Simulated Center) */}
                        <div className="user-pin">
                            <div className="user-pulse"></div>
                            <MapPin size={24} fill="#FF6600" color="white" />
                            <div className="user-label">YOU</div>
                        </div>
                    </div>

                    <div className="map-stats">
                        <div className="map-stat-item">
                            <h3>50+</h3>
                            <p>Active Mechanics</p>
                        </div>
                        <div className="map-stat-item">
                            <h3>12 min</h3>
                            <p>Avg Response Time</p>
                        </div>
                        <div className="map-stat-item">
                            <div className="status-indicator">
                                <span className="blink"></span>
                                Live System Active
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LiveCoverageMap;
