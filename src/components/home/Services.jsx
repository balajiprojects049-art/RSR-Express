import React from 'react';
import { Settings, Battery, Fuel, Key, Truck, Bike } from 'lucide-react';
import './Services.css';

const services = [
    {
        icon: <Settings size={32} />,
        title: 'Puncture & Flat Tire',
        desc: 'Quick wheel changes or puncture repairs at your location.',
        price: '₹299'
    },
    {
        icon: <Battery size={32} />,
        title: 'Battery Jumpstart',
        desc: 'Get your engine running again with our professional jumpstart kit.',
        price: '₹349'
    },
    {
        icon: <Fuel size={32} />,
        title: 'Emergency Fuel',
        desc: 'Running low? We deliver high-quality fuel to get you to the pump.',
        price: '₹399'
    },
    {
        icon: <Key size={32} />,
        title: 'Key Recovery',
        desc: 'Locked out or lost keys? Our experts help you regain access.',
        price: '₹599'
    },
    {
        icon: <Truck size={32} />,
        title: 'Car Towing',
        desc: 'Safe flatbed towing for all types of four-wheelers.',
        price: '₹999'
    },
    {
        icon: <Bike size={32} />,
        title: 'Bike Towing',
        desc: 'Specialized towing equipment for two-wheelers of all sizes.',
        price: '₹499'
    }
];

const Services = () => {
    return (
        <section className="services section-padding">
            <div className="container">
                <div className="section-header">
                    <span className="subtitle">Premium Services</span>
                    <h2 className="section-title">Whatever the issue, <span className="text-primary">we've got you covered.</span></h2>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">
                                {service.icon}
                            </div>
                            <h3 className="service-card-title">{service.title}</h3>
                            <p className="service-card-desc">{service.desc}</p>
                            <div className="service-card-footer">
                                <span className="price-tag">Starts at {service.price}</span>
                                <a href="/get-rescued" className="service-link">Get Help →</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
