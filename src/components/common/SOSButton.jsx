import React from 'react';
import { Phone } from 'lucide-react';
import './SOSButton.css';

const SOSButton = () => {
    return (
        <a href="tel:9111818222" className="sos-button" aria-label="Emergency Call">
            <div className="sos-pulse"></div>
            <div className="sos-content">
                <Phone size={24} className="sos-icon" />
                <span className="sos-text">EMERGENCY</span>
            </div>
        </a>
    );
};

export default SOSButton;
