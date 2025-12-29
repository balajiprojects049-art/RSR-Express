import React, { useState } from 'react';
import { Calculator, CheckCircle, AlertCircle } from 'lucide-react';
import './CostEstimator.css';

const CostEstimator = () => {
    const [vehicle, setVehicle] = useState('');
    const [service, setService] = useState('');
    const [estimate, setEstimate] = useState(null);

    const calculateEstimate = () => {
        if (!vehicle || !service) return;

        let basePrice = 0;

        // Base pricing logic (Example values in INR)
        const pricing = {
            'bike': { 'puncture': 599, 'battery': 599, 'towing': 1299, 'fuel': 599 },
            'car': { 'puncture': 599, 'battery': 599, 'towing': 3500, 'fuel': 599 },
            'suv': { 'puncture': 599, 'battery': 599, 'towing': 4500, 'fuel': 599 }
        };

        const price = pricing[vehicle][service];

        // Add range for estimate
        setEstimate({
            min: price,
            max: price + (vehicle === 'bike' ? 200 : 500)
        });
    };

    return (
        <section className="estimator-section section-padding">
            <div className="container">
                <div className="estimator-grid">
                    <div className="estimator-content">
                        <span className="subtitle">TRANSPARENT PRICING</span>
                        <h2 className="section-title">Get an Instant Cost Estimate</h2>
                        <p className="section-desc">
                            Transparent pricing with no hidden fees. View the estimated cost for your vehicle service instantly.
                        </p>

                        <div className="estimator-features">
                            <div className="est-feature">
                                <CheckCircle size={20} color="#FF6600" />
                                <span>No Subscription Required</span>
                            </div>
                            <div className="est-feature">
                                <CheckCircle size={20} color="#FF6600" />
                                <span>Pay only after the service, simple and hassle-free.</span>
                            </div>
                        </div>
                    </div>

                    <div className="estimator-card glass-card">
                        <div className="est-header">
                            <Calculator size={24} color="#FF6600" />
                            <h3>Service Calculator</h3>
                        </div>

                        <div className="est-form">
                            <div className="form-group">
                                <label>Vehicle Type</label>
                                <select value={vehicle} onChange={(e) => setVehicle(e.target.value)} className="form-select">
                                    <option value="">Select your vehicle</option>
                                    <option value="bike">Bike / Scooter</option>
                                    <option value="car">Car (Hatchback/Sedan)</option>
                                    <option value="suv">SUV / Luxury Car</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Service Needed</label>
                                <select value={service} onChange={(e) => setService(e.target.value)} className="form-select">
                                    <option value="">Select service</option>
                                    <option value="puncture">Flat Tyre / Puncture</option>
                                    <option value="battery">Battery Jumpstart</option>
                                    <option value="towing">Towing Service</option>
                                    <option value="fuel">Fuel Delivery</option>
                                </select>
                            </div>

                            <button
                                className="btn btn-primary btn-block est-btn"
                                onClick={calculateEstimate}
                                disabled={!vehicle || !service}
                            >
                                Calculate Cost
                            </button>

                            {estimate && (
                                <div className="estimate-result animate-fadeInUp">
                                    <div className="price-label">Estimated Cost</div>
                                    <div className="price-value">₹{estimate.min} - ₹{estimate.max}</div>
                                    <div className="price-note">
                                        <AlertCircle size={14} />
                                        <span>Final price depends on exact location & distance</span>
                                    </div>
                                    <a href="/get-rescued" className="btn-link">Book Now &rarr;</a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CostEstimator;
