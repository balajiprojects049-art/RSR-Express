import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Shield, MapPin, ChevronDown, ChevronUp, Phone, Truck, CheckCircle } from 'lucide-react';
import './ServiceDetail.css';
import commercialHero from '../assets/commercial_towing_hero.jpg';
import commercialImage2 from '../assets/commercial_towing_2.jpg';
import commercialIcon from '../assets/commercial_towing_icon.png';

const CommercialTowing = () => {
    const [expandedFaq, setExpandedFaq] = useState(null);

    const toggleFaq = (index) => {
        setExpandedFaq(expandedFaq === index ? null : index);
    };

    const features = [
        { icon: <Clock size={32} color="#002D5B" />, title: '30-45 Min Response', desc: 'Fast response on major highways' },
        { icon: <Shield size={32} color="#002D5B" />, title: 'Professional Equipment', desc: 'Flatbed towing prevents damage' },
        { icon: <MapPin size={32} color="#002D5B" />, title: 'All Major Highways', desc: 'NH-44, NH-48, expressways covered' }
    ];

    const vehicleTypes = [
        'Tata Ace, 407, LPT Series',
        'Ashok Leyland Dost, Partner, Ecomet',
        'Mahindra Bolero Pickup, Jeeto, Furio',
        'Eicher Pro Series (1049, 1055, 1059)',
        'Commercial vans and delivery vehicles',
        'Food trucks and mobile businesses'
    ];

    const keyFeatures = [
        '24/7 highway assistance across all major routes',
        'Flatbed towing to prevent drivetrain damage',
        'Secure tie-down systems and professional rigging',
        'GPS-tracked towing for fleet management',
        'Insurance claim assistance and documentation',
        'Direct transport to authorized service centers'
    ];

    const faqs = [
        {
            q: 'How quickly can you respond to a commercial vehicle breakdown on the highway?',
            a: 'Our average response time is 30-45 minutes on major highways like NH-44, NH-48, and expressways. We have strategically located service points for rapid deployment.'
        },
        {
            q: 'Do you tow loaded commercial vehicles or only empty ones?',
            a: 'We can tow both loaded and unloaded commercial vehicles up to 7.5 tons GVW. For heavily loaded vehicles, we assess the situation and may recommend partial unloading for safety.'
        },
        {
            q: 'What is the cost of commercial vehicle towing?',
            a: 'Starting at ₹1,999, pricing depends on distance, vehicle size, and highway tolls. We provide transparent quotes before service with no hidden charges.'
        },
        {
            q: 'Can you tow my commercial vehicle to a specific workshop or dealer?',
            a: 'Absolutely! We can transport your vehicle to any authorized service center, dealer, or workshop of your choice across the region.'
        },
        {
            q: 'Do you provide insurance documentation for towing claims?',
            a: 'Yes, we provide complete documentation including photos, towing receipts, and condition reports for insurance claims.'
        },
        {
            q: 'Is nighttime commercial towing available?',
            a: 'Yes, we operate 24/7 including nights, weekends, and holidays with the same professional service standards.'
        },
        {
            q: 'What if my commercial vehicle breaks down in a restricted highway zone?',
            a: 'Our team coordinates with highway authorities and police to ensure safe and compliant recovery from restricted or high-traffic zones.'
        },
        {
            q: 'Do you offer fleet towing contracts for businesses?',
            a: 'Yes, we provide customized fleet assistance contracts with priority response, discounted rates, and dedicated support for commercial fleet operators.'
        }
    ];

    return (
        <div className="service-landing-page">
            {/* Hero Section */}
            <section className="service-hero" style={{ backgroundImage: `url(${commercialHero})` }}>
                <div className="service-hero-overlay">
                    <div className="service-hero-content">
                        <h1>Commercial Vehicle Towing</h1>
                        <p className="service-hero-subtitle">
                            Professional towing services for commercial vehicles and fleet operators across Indian highways
                        </p>
                        <div className="service-hero-cta">
                            <a href="tel:+919876543210" className="cta-button primary">
                                <Phone size={20} /> Call Now - ₹1,999
                            </a>
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
                            <h2>Professional Commercial Towing</h2>
                            <p>
                                RSR Express provides professional commercial vehicle towing services across major Indian highways
                                including NH-44, Mumbai-Pune Expressway, and other national highways. Our specialized flatbed tow
                                trucks and trained operators ensure safe transport of delivery trucks, mini trucks, and commercial fleet vehicles.
                            </p>

                            <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Vehicles We Tow</h3>
                            <ul className="vehicle-list">
                                {vehicleTypes.map((vehicle, idx) => (
                                    <li key={idx}>
                                        <CheckCircle size={20} color="#FF6600" /> {vehicle}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="content-image">
                            <img src={commercialImage2} alt="Commercial Towing Service" />
                        </div>
                    </div>

                    {/* Key Features Section */}
                    <div className="key-features-section" style={{ marginTop: '3rem' }}>
                        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Key Features</h2>
                        <div className="features-list-grid">
                            {keyFeatures.map((feature, idx) => (
                                <div key={idx} className="feature-list-item">
                                    <CheckCircle size={24} color="#FF6600" />
                                    <span>{feature}</span>
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
                        <h2>Need Commercial Towing Assistance?</h2>
                        <p>Available 24/7 on all major Indian highways • Starting at ₹1,999</p>
                        <a href="tel:+919876543210" className="cta-button primary large">
                            <Phone size={24} /> Call Emergency Hotline
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CommercialTowing;
