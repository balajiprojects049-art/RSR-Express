import React from 'react';
import { Settings, Battery, Fuel, Key, Truck, Bike } from 'lucide-react';
import './Services.css';
import punctureIcon from '../../assets/puncture_icon.png';
import batteryIcon from '../../assets/battery_icon.png';
import fuelIcon from '../../assets/fuel_icon.png';
import keyIcon from '../../assets/key_icon.png';
import carTowingIcon from '../../assets/car_towing_icon.png';
import bikeTowingIcon from '../../assets/bike_towing_icon.png';
import repairIcon from '../../assets/repair_icon.png';
import commercialTowingIcon from '../../assets/commercial_towing_icon.png';
import heavyVehicleTowingIcon from '../../assets/heavy_vehicle_towing_icon.png';

const services = [
    {
        icon: <img src={carTowingIcon} alt="Car Towing" className="custom-service-icon" width={64} height={64} />,
        title: 'Car Towing',
        desc: 'Safe flatbed towing for all types of four-wheelers.',
        price: '₹999'
    },
    {
        icon: <img src={bikeTowingIcon} alt="Bike Towing" className="custom-service-icon" width={64} height={64} />,
        title: 'Bike Towing',
        desc: 'Specialized towing equipment for two-wheelers of all sizes.',
        price: '₹499'
    },
    {
        icon: <img src={commercialTowingIcon} alt="Commercial Towing" className="custom-service-icon" width={80} height={80} />,
        title: 'Commercial Towing',
        desc: 'Professional towing services for commercial vehicles and fleet operators.',
        price: '₹1,999'
    },
    {
        icon: <img src={heavyVehicleTowingIcon} alt="Heavy Vehicle Towing" className="custom-service-icon" width={80} height={80} />,
        title: 'Heavy Vehicle Towing',
        desc: 'Specialized equipment for long-haul trucks and heavy-duty vehicles.',
        price: '₹2,499'
    },
    {
        icon: <img src={batteryIcon} alt="Battery" className="custom-service-icon" width={64} height={64} />,
        title: 'Battery Jumpstart',
        desc: 'Get your engine running again with our professional jumpstart kit.',
        price: '₹349'
    },
    {
        icon: <img src={repairIcon} alt="Repairs" className="custom-service-icon" width={64} height={64} />,
        title: 'Minor Repairs',
        desc: 'On-site fixes for minor breakdowns like clutch cables or fuses.',
        price: '₹499'
    },
    {
        icon: <img src={punctureIcon} alt="Puncture" className="custom-service-icon" width={64} height={64} />,
        title: 'Puncture & Flat Tire',
        desc: 'Quick wheel changes or puncture repairs at your location.',
        price: '₹299'
    },
    {
        icon: <img src={fuelIcon} alt="Fuel" className="custom-service-icon" width={64} height={64} />,
        title: 'Emergency Fuel',
        desc: 'Running low? We deliver high-quality fuel to get you to the pump.',
        price: '₹399'
    },
    {
        icon: <img src={keyIcon} alt="Key" className="custom-service-icon" width={64} height={64} />,
        title: 'Key Recovery',
        desc: 'Locked out or lost keys? Our experts help you regain access.',
        price: '₹599'
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
