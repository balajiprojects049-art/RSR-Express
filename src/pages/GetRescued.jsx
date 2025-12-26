import React, { useState } from 'react';
import { Truck, Bike, Car, ChevronRight, AlertCircle, CheckCircle2, MapPin } from 'lucide-react';
import './GetRescued.css';

const GetRescued = () => {
    const [step, setStep] = useState(1);
    const [isLocating, setIsLocating] = useState(false);
    const [formData, setFormData] = useState({
        vehicleType: '',
        makeModel: '',
        regNumber: '',
        issue: '',
        phone: '',
        location: ''
    });

    const handleVehicleSelect = (type) => {
        setFormData({ ...formData, vehicleType: type });
        setStep(2);
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleGetLocation = () => {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser");
            return;
        }

        setIsLocating(true);

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                // Use a high-precision google maps link
                const mapLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
                setFormData(prev => ({ ...prev, location: mapLink }));
                setIsLocating(false);
            },
            (error) => {
                console.error("Error fetching location:", error);
                alert("Unable to retrieve your location. Please enter it manually.");
                setIsLocating(false);
            },
            {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            }
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const issueLabels = {
            puncture: "Puncture / Flat Tire",
            battery: "Battery Jumpstart",
            repairs: "Minor Mechanical Repair",
            fuel: "Out of Fuel",
            key: "Locked Out / Keys Lost",
            towing: "Need Towing",
            other: "Other"
        };

        const vehicleTypeLabel = formData.vehicleType === 'bike' ? 'Two Wheeler' : 'Four Wheeler';
        const issueLabel = issueLabels[formData.issue] || formData.issue;

        const message = `URGENT: RESCUE REQUEST` +
            `%0A________________________________` +
            `%0A%0A` +
            `Vehicle Details` +
            `%0A- Type: ${vehicleTypeLabel}` +
            `%0A- Model: ${formData.makeModel}` +
            `%0A- Reg No: ${formData.regNumber || 'N/A'}` +
            `%0A%0A` +
            `Issue Reported` +
            `%0A- Problem: ${issueLabel}` +
            `%0A- Location: ${formData.location}` +
            `%0A%0A` +
            `Customer Contact` +
            `%0A- Phone: ${formData.phone}` +
            `%0A%0A` +
            `Please dispatch assistance immediately.`;

        const phoneNumber = "919111818222";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

        window.open(whatsappUrl, '_blank');
        setStep(3);
    };

    return (
        <div className="get-rescued-page">
            <div className="container">
                <div className="form-container glass-card">
                    {step === 1 && (
                        <div className="step-content">
                            <h1 className="form-title">What type of <span className="text-primary">vehicle?</span></h1>
                            <p className="form-subtitle">Choose your vehicle type to continue</p>

                            <div className="vehicle-options">
                                <button
                                    className={`vehicle-btn ${formData.vehicleType === 'bike' ? 'active' : ''}`}
                                    onClick={() => handleVehicleSelect('bike')}
                                >
                                    <Bike size={48} />
                                    <span>Two Wheeler</span>
                                </button>
                                <button
                                    className={`vehicle-btn ${formData.vehicleType === 'car' ? 'active' : ''}`}
                                    onClick={() => handleVehicleSelect('car')}
                                >
                                    <Car size={48} />
                                    <span>Four Wheeler</span>
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="step-content">
                            <button className="back-btn" onClick={() => setStep(1)}>← Change Vehicle Type</button>
                            <h1 className="form-title">Tell us <span className="text-primary">what's wrong</span></h1>
                            <p className="form-subtitle">Fill in the details for a faster response</p>

                            <form onSubmit={handleSubmit} className="rescue-form">
                                <div className="form-group">
                                    <label>Current Location</label>
                                    <div className="location-input-group">
                                        <input
                                            type="text"
                                            name="location"
                                            placeholder="Landmark or Address"
                                            value={formData.location}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        <button
                                            type="button"
                                            className="btn-location"
                                            onClick={handleGetLocation}
                                            disabled={isLocating}
                                        >
                                            <MapPin size={18} />
                                            {isLocating ? 'Locating...' : 'Use Current Location'}
                                        </button>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Vehicle Make & Model</label>
                                    <input
                                        type="text"
                                        name="makeModel"
                                        placeholder="e.g. Maruti Swift or Honda Activa"
                                        required
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Registration Number (Optional)</label>
                                    <input
                                        type="text"
                                        name="regNumber"
                                        placeholder="e.g. KA 01 AB 1234"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>What is the issue?</label>
                                    <select name="issue" required onChange={handleInputChange}>
                                        <option value="">Select an issue</option>
                                        <option value="puncture">Puncture / Flat Tire</option>
                                        <option value="battery">Battery Jumpstart</option>
                                        <option value="repairs">Minor Mechanical Repair</option>
                                        <option value="fuel">Out of Fuel</option>
                                        <option value="key">Locked Out / Keys Lost</option>
                                        <option value="towing">Need Towing</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Your Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Enter 10-digit mobile number"
                                        pattern="[0-9]{10}"
                                        required
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary btn-block">
                                    SEND HELP NOW <ChevronRight size={20} />
                                </button>
                            </form>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="step-content success-step">
                            <div className="success-icon">
                                <CheckCircle2 size={80} color="#FF6600" />
                            </div>
                            <h1 className="form-title">Help is on the <span className="text-primary">way!</span></h1>
                            <p className="form-subtitle">
                                Our dispatch team has received your request. A mechanic will call you within 2 minutes.
                            </p>
                            <div className="status-badge alert">
                                <AlertCircle size={18} />
                                <span>Estimated reach time: 25 mins</span>
                            </div>

                            <div className="next-steps">
                                <p><strong>What to do next:</strong></p>
                                <ul>
                                    <li>Keep your phone line free.</li>
                                    <li>Stay with your vehicle if it is safe to do so.</li>
                                    <li>Park your vehicle in a safe spot away from traffic.</li>
                                </ul>
                            </div>

                            <a href="tel:9111818222" className="btn btn-secondary btn-block">
                                CALL SUPPORT INSTEAD
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GetRescued;
