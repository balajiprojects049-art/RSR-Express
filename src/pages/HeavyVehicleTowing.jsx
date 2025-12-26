import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Shield, MapPin, ChevronDown, ChevronUp, Phone, Truck, CheckCircle, AlertTriangle } from 'lucide-react';
import './ServiceDetail.css';
import heavyHero from '../assets/heavy_vehicle_towing_hero.jpg';
import heavyImage2 from '../assets/heavy_vehicle_towing_2.jpg';
import heavyIcon from '../assets/heavy_vehicle_towing_icon.png';

const HeavyVehicleTowing = () => {
    const [expandedFaq, setExpandedFaq] = useState(null);

    const toggleFaq = (index) => {
        setExpandedFaq(expandedFaq === index ? null : index);
    };

    const features = [
        { icon: <Truck size={32} color="#002D5B" />, title: 'Up to 50 Tons', desc: 'Industrial-grade recovery equipment' },
        { icon: <Shield size={32} color="#002D5B" />, title: 'Certified Operators', desc: 'NHAI-compliant safety protocols' },
        { icon: <MapPin size={32} color="#002D5B" />, title: 'National Coverage', desc: 'Inter-state heavy vehicle towing' }
    ];

    const vehicleTypes = [
        'Tata Prima, Signa, Ultra heavy trucks',
        'Ashok Leyland U-Truck series, AVTR',
        'BharatBenz heavy-duty trucks',
        'Eicher Pro 6000 series and above',
        'Container trucks (20ft, 40ft)',
        'Multi-axle trailers and tippers',
        'Construction equipment transporters'
    ];

    const equipment = [
        'Heavy-duty rotator cranes (25-50 ton capacity)',
        'Industrial-strength towing chains and cables',
        'Hydraulic winching systems',
        'Under-lift and wheel-lift mechanisms',
        'Air brake connections for safe towing',
        'Specialized rigging for overturned vehicles'
    ];

    const safetyProtocols = [
        'Highway traffic management and safety cones',
        'Trained crew with safety certifications',
        'Coordination with highway authorities',
        'Load balancing and weight distribution',
        'Compliance with NHAI safety regulations'
    ];

    const faqs = [
        {
            q: 'What is the maximum weight you can tow?',
            a: 'Our heavy-duty recovery trucks can handle vehicles up to 50 tons including loaded container trucks and multi-axle trailers.'
        },
        {
            q: 'How much does heavy vehicle towing cost?',
            a: 'Heavy vehicle recovery starts at ₹2,499 and varies based on vehicle weight, distance, complexity of recovery, and crane usage. We provide detailed estimates upfront.'
        },
        {
            q: 'Can you recover an overturned or accident-damaged heavy truck?',
            a: 'Yes, our specialized heavy recovery service includes uprighting overturned vehicles, accident recovery, and complex extraction operations with industrial cranes.'
        },
        {
            q: 'Do you operate during monsoon season?',
            a: 'Yes, we provide year-round service including monsoon season. Our equipment is designed for all-weather operations on Indian highways.'
        },
        {
            q: 'How long does a heavy vehicle recovery take?',
            a: 'Simple towing operations take 1-2 hours. Complex recoveries (overturned vehicles, off-road extraction) may take 4-6 hours depending on the situation.'
        },
        {
            q: 'Do you provide inter-state heavy vehicle towing?',
            a: 'Yes, we offer long-distance heavy vehicle towing across state borders with proper permits and highway toll management.'
        },
        {
            q: 'What safety measures do you take during heavy vehicle recovery?',
            a: 'We deploy traffic cones, warning signs, coordinate with highway patrol, use certified rigging equipment, and follow NHAI safety guidelines for all operations.'
        },
        {
            q: 'Can you tow refrigerated trucks or specialized commercial vehicles?',
            a: 'Yes, we handle specialized vehicles including reefer trucks, tankers, car carriers, and other specialized commercial transport with appropriate precautions.'
        },
        {
            q: 'Do you provide winching service for stuck heavy vehicles?',
            a: 'Yes, our heavy recovery trucks include hydraulic winching systems for extracting vehicles stuck in mud, ditches, or off-road situations.'
        },
        {
            q: 'Is driver accommodation arranged for long-distance heavy vehicle towing?',
            a: 'For long-distance towing, we can accommodate the driver in our tow truck cab or provide information about nearby rest stops and accommodations.'
        }
    ];

    return (
        <div className="service-landing-page">
            {/* Hero Section */}
            <section className="service-hero" style={{ backgroundImage: `url(${heavyHero})` }}>
                <div className="service-hero-overlay">
                    <div className="service-hero-content">
                        <h1>Heavy Vehicle Towing & Recovery</h1>
                        <p className="service-hero-subtitle">
                            Specialized equipment for long-haul trucks, trailers, and heavy-duty vehicles on Indian highways
                        </p>
                        <div className="service-hero-cta">
                            <Link to="/get-rescued" className="cta-button primary">
                                GET RESCUED NOW
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="service-features">
                <div className="container">
                    <div className="features-grid">
                        {features.map((feature, idx) => (
                            <div key={idx} className="feature-card">
                                <div className="feature-icon">{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Overview */}
            <section className="service-content">
                <div className="container">
                    <div className="content-grid">
                        <div className="content-text">
                            <h2>Industrial-Grade Recovery Operations</h2>
                            <p>
                                RSR Express operates specialized heavy-duty recovery vehicles equipped with industrial-grade cranes,
                                heavy chains, and rigging systems to handle semi-trucks, container vehicles, and trailers on Indian highways.
                                Our expert team manages complex recovery operations safely and efficiently.
                            </p>

                            <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Vehicles We Recover</h3>
                            <ul className="vehicle-list">
                                {vehicleTypes.map((vehicle, idx) => (
                                    <li key={idx}>
                                        <CheckCircle size={20} color="#FF6600" /> {vehicle}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="content-image">
                            <img src={heavyImage2} alt="Heavy Vehicle Towing" />
                        </div>
                    </div>

                    {/* Equipment Section */}
                    <div className="equipment-section" style={{ marginTop: '3rem' }}>
                        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Specialized Equipment</h2>
                        <div className="features-list-grid">
                            {equipment.map((item, idx) => (
                                <div key={idx} className="feature-list-item">
                                    <Truck size={24} color="#FF6600" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Safety Protocols */}
                    <div className="safety-section" style={{ marginTop: '3rem', background: '#f8f9fa', padding: '2rem', borderRadius: '12px' }}>
                        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Safety Protocols</h2>
                        <div className="features-list-grid">
                            {safetyProtocols.map((protocol, idx) => (
                                <div key={idx} className="feature-list-item">
                                    <AlertTriangle size={24} color="#002D5B" />
                                    <span>{protocol}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="service-faq">
                <div className="container">
                    <h2>Frequently Asked Questions</h2>
                    <div className="faq-list">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="faq-item">
                                <div className="faq-question" onClick={() => toggleFaq(idx)}>
                                    <h3>{faq.q}</h3>
                                    {expandedFaq === idx ? <ChevronUp /> : <ChevronDown />}
                                </div>
                                {expandedFaq === idx && (
                                    <div className="faq-answer">
                                        <p>{faq.a}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="service-cta-section">
                <div className="container">
                    <div className="cta-box">
                        <h2>Heavy Vehicle Emergency?</h2>
                        <p>24/7 Industrial Recovery Service • Up to 50 Tons Capacity • Starting at ₹2,499</p>
                        <a href="tel:+919876543210" className="cta-button primary large">
                            <Phone size={24} /> Call Heavy Recovery Team
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeavyVehicleTowing;
