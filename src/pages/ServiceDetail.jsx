import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
    Clock, Shield, MapPin, ChevronDown, ChevronUp,
    Phone, AlertTriangle, Truck, CheckCircle, Car,
    Wrench, Zap, Fuel, Key, Bike
} from 'lucide-react';
import './ServiceDetail.css';
import punctureHero from '../assets/puncture_hero.png';
import punctureService from '../assets/puncture_service.png';
import batteryHero from '../assets/battery_hero.png';
import batteryService from '../assets/battery_service.png';
import repairsHero from '../assets/repairs_hero.png';
import repairsService from '../assets/repairs_service.png';
import fuelHero from '../assets/fuel_hero.jpg';
import fuelService from '../assets/fuel_service.jpg';
import keyHero from '../assets/key_hero.jpg';
import keyService from '../assets/key_service.jpg';
import bikeHero from '../assets/bike_hero.jpg';
import bikeService from '../assets/bike_service.jpg';
import carHero from '../assets/car_hero.jpg';
import carService from '../assets/car_service.jpg';

import punctureIcon from '../assets/puncture_icon.png';
import batteryIcon from '../assets/battery_icon.png';
import fuelIcon from '../assets/fuel_icon.png';
import keyIcon from '../assets/key_icon.png';
import carTowingIcon from '../assets/car_towing_icon.png';
import bikeTowingIcon from '../assets/bike_towing_icon.png';
import repairIcon from '../assets/repair_icon.png';

// Service Content Data
const serviceData = {
    // Roadside Assistance
    'puncture': {
        icon: <img src={punctureIcon} alt="Puncture" className="hero-custom-icon" width={100} />,
        title: 'Puncture & Flat Tyre Services',
        subtitle: 'Whether it\'s a tubeless tyre puncture repair, air fill or a stepney change, why look for a puncture shop when RSR EXPRESS arrives at you spot? We get you moving!',
        heroImage: punctureHero,
        contentImage: punctureService,
        features: [
            {
                icon: <Clock size={32} color="#002D5B" />,
                title: '30 mins reach time',
                desc: 'With over 30 puncture repair mechanics spread across Bengaluru, the closest RSR EXPRESS mechanic is dispatched to your breakdown spot! We aim to reach you within 30 minutes.'
            },
            {
                icon: <Shield size={32} color="#002D5B" />,
                title: 'Trained Mechanics',
                desc: 'An OEM trained & our certified mechanic inspects the flat tyre and identifies the issue. Depending on the issue, he fixes the puncture on-the-spot or replaces the flat tyre with a functional spare tyre, if available.'
            },
            {
                icon: <MapPin size={32} color="#002D5B" />,
                title: 'Available across Bengaluru',
                desc: 'Breakfast at MTR, spending the morning at Cubbon Park, meeting friends for lunch at Nagarjuna... Let your day never stop! RSR EXPRESS has got your vehicle covered in case of breakdowns across Bengaluru 24/7.'
            }
        ],
        faqs: [
            {
                q: 'How quickly can you reach me?',
                a: 'We are constantly working behind-the-scenes to maintain average reach times of 30 minutes or less and deliver the quickest vehicle breakdown service in Bangalore.'
            },
            {
                q: 'What if my tyre puncture/flat tyre issue isn\'t resolved on the spot?',
                a: 'We fix 98% of punctures on the spot. If your flat tyre issue is not resolved, we will recommend towing your vehicle to a nearby tyre shop or service station of your choice.'
            },
            {
                q: 'What if my spare tyre is also punctured?',
                a: 'If your spare tyre is also punctured, we will fix the punctures of one or both of the tyres according to your requirement.'
            },
            {
                q: 'Do you repair all car punctures and bike punctures?',
                a: 'Yes, we can help with any type of vehicle puncture — car, bike, tube, tubeless tyre punctures.'
            },
            {
                q: 'Do you offer tube replacement?',
                a: 'Yes, we carry standard tubes for most bikes and cars. If yours is a specialized size, let us know during the call.'
            },
            {
                q: 'What if the tire is completely damaged/burst?',
                a: 'In case of a burst tire that cannot be repaired, we can help you fit your spare tire or tow your vehicle to the nearest tire shop.'
            },
            {
                q: 'Is the repair permanent?',
                a: 'Yes, we use high-quality mushroom patches or plugs that provide a permanent fix for tubeless tires.'
            }
        ]
    },
    'battery': {
        icon: <img src={batteryIcon} alt="Battery" className="hero-custom-icon" width={100} />,
        title: 'Battery Jumpstart Service',
        subtitle: 'Dead battery? Get a boost in minutes.',
        heroImage: batteryHero,
        contentImage: batteryService,
        features: [
            { icon: <Clock size={32} color="#002D5B" />, title: 'Instant Start', desc: 'Our technicians carry professional jumpstart kits to get your engine running again instantly.' },
            { icon: <Shield size={32} color="#002D5B" />, title: 'Battery Health', desc: 'We perform a comprehensive battery health check to ensure it holds charge.' },
            { icon: <MapPin size={32} color="#002D5B" />, title: 'City-wide Service', desc: 'Available anywhere in Bengaluru.' }
        ],
        faqs: [
            { q: 'Will a jumpstart damage my car?', a: 'No, our professionals use surge-protected equipment.' },
            { q: 'Do you replace batteries?', a: 'Yes, we can also arrange for a new battery if yours is dead.' },
            { q: 'How do I know if it\'s a battery issue?', a: 'If your lights are dim, the horn is weak, or the car makes a clicking sound when starting, it\'s likely a battery issue.' },
            { q: 'Do you check the alternator?', a: 'Yes, after jumpstarting, we check if your alternator is charging the battery correctly.' },
            { q: 'How long does a jumpstart take?', a: 'The process takes less than 10 minutes once we reach your location.' }
        ]
    },
    'repairs': {
        icon: <img src={repairIcon} alt="Repairs" className="hero-custom-icon" width={100} />,
        title: 'Minor Mechanical Repairs',
        subtitle: 'On-site fixes for minor breakdowns.',
        heroImage: repairsHero,
        contentImage: repairsService,
        features: [
            { icon: <Clock size={32} color="#002D5B" />, title: 'Quick Fixes', desc: 'We handle minor mechanical issues like clutch adjustments and fuse issues on the spot.' },
            { icon: <Shield size={32} color="#002D5B" />, title: 'Expert Diagnosis', desc: 'Our mechanics are trained to diagnose and fix common breakdown causes.' },
            { icon: <MapPin size={32} color="#002D5B" />, title: 'On-Spot Repair', desc: 'Save towing costs by getting your car fixed right where it broke down.' }
        ],
        faqs: [
            { q: 'What kind of repairs do you do?', a: 'We handle clutch cables, fuses, spark plugs, and other minor repairs.' },
            { q: 'What if it cannot be repaired?', a: 'We will tow your vehicle to the nearest workshop.' },
            { q: 'Do you carry spare parts?', a: 'We carry common spares like fuses, cables, and bulbs. For specific parts, we can purchase them from a nearby shop for you.' },
            { q: 'What if the engine is overheated?', a: 'We will inspect the coolant levels and radiator. If it\'s a minor leak, we fix it. If serious, we recommend towing.' }
        ]
    },
    'fuel': {
        icon: <img src={fuelIcon} alt="Fuel" className="hero-custom-icon" width={100} />,
        title: 'Emergency Fuel Delivery',
        subtitle: 'Ran out of fuel? We deliver to you.',
        heroImage: fuelHero,
        contentImage: fuelService,
        features: [
            { icon: <Fuel size={32} color="#002D5B" />, title: 'Petrol & Diesel', desc: 'We deliver both petrol and diesel directly to your stalled location.' },
            { icon: <Clock size={32} color="#002D5B" />, title: 'Fast Delivery', desc: 'No need to walk to a petrol bunk. We arrive within minutes.' },
            { icon: <Shield size={32} color="#002D5B" />, title: 'Safe Handling', desc: 'Fuel is delivered in safe, approved jerricans.' }
        ],
        faqs: [
            { q: 'How much fuel do you deliver?', a: 'We typically deliver up to 5 litres, sufficient to reach the nearest station.' },
            { q: 'Is there a delivery charge?', a: 'Yes, a nominal delivery fee applies on top of the fuel cost.' },
            { q: 'Is the fuel quality guaranteed?', a: 'Absolutely. We purchase fuel only from trusted, branded petrol pumps immediately after your order.' },
            { q: 'Do you provide bill for the fuel?', a: 'Yes, we provide the original bill from the pump along with our receipt.' }
        ]
    },
    'key': {
        icon: <img src={keyIcon} alt="Key" className="hero-custom-icon" width={100} />,
        title: 'Key Recovery & Lockout',
        subtitle: 'Keys locked inside? We can open it.',
        heroImage: keyHero,
        contentImage: keyService,
        features: [
            { icon: <Key size={32} color="#002D5B" />, title: 'Damage Free', desc: 'We use specialized lockout tools to open doors without damaging seals or glass.' },
            { icon: <Shield size={32} color="#002D5B" />, title: 'Verified Owners', desc: 'Service provided only after verifying vehicle ownership documents.' },
            { icon: <Clock size={32} color="#002D5B" />, title: 'Quick Entry', desc: 'Regain access to your vehicle in minutes.' }
        ],
        faqs: [
            { q: 'Can you unlock luxury cars?', a: 'Yes, our experts are trained to handle various locking mechanisms.' },
            { q: 'Do you make duplicate keys?', a: 'Currently we only provide lockout services (opening the door).' },
            { q: 'Will my car door get scratched?', a: 'No, we use air wedges and long-reach tools to unlock doors without any damage.' },
            { q: 'What proof do I need to show?', a: 'For security, you must show a valid ID and vehicle papers matching your name.' }
        ]
    },
    'bike': {
        icon: <img src={bikeTowingIcon} alt="Bike Towing" className="hero-custom-icon" width={100} />,
        title: 'Two-Wheeler Towing',
        subtitle: 'Safe transport for your motorbike.',
        heroImage: bikeHero,
        contentImage: bikeService,
        features: [
            { icon: <Bike size={32} color="#002D5B" />, title: 'Flatbed Towing', desc: 'We load your bike onto a truck, avoiding any wear on tires during transport.' },
            { icon: <Shield size={32} color="#002D5B" />, title: 'Secure Strapping', desc: 'Professional strapping ensures your bike stays upright and scratch-free.' },
            { icon: <MapPin size={32} color="#002D5B" />, title: 'Anywhere Pickup', desc: 'We pick up from highways, basements, or homes.' }
        ],
        faqs: [
            { q: 'Can you tow superbikes?', a: 'Yes, our flatbed trucks are perfect for safely transporting premium bikes.' },
            { q: 'Do you tow to the service center?', a: 'We can drop your bike at any location or garage of your choice.' },
            { q: 'Is my bike safe on the truck?', a: 'Yes, we handle superbikes daily using soft straps and wheel chocks to ensure zero scratches.' },
            { q: 'Can I travel with the truck?', a: 'Yes, usually one person can travel in the cabin with the driver.' }
        ]
    },
    'car': {
        icon: <img src={carTowingIcon} alt="Car Towing" className="hero-custom-icon" width={100} />,
        title: 'Car Towing Service',
        subtitle: 'Reliable towing for all car types.',
        heroImage: carHero,
        contentImage: carService,
        features: [
            { icon: <Truck size={32} color="#002D5B" />, title: 'Flatbed & Lift', desc: 'We have both flatbed trucks for safe transport and wheel-lift trucks for quick city towing.' },
            { icon: <Shield size={32} color="#002D5B" />, title: 'Accident Recovery', desc: 'Our team is experienced in safely recovering vehicles from accident sites.' },
            { icon: <Clock size={32} color="#002D5B" />, title: '24/7 Availability', desc: 'Breakdowns don\'t watch the clock, and neither do we.' }
        ],
        faqs: [
            { q: 'Is flatbed towing better?', a: 'Yes, for most modern cars (especially AWD/4WD), flatbed is the safest option.' },
            { q: 'How long will the tow truck take?', a: 'We usually dispatch the nearest truck immediately to reach you within 30-45 mins.' },
            { q: 'Do you tow automatic transmission cars?', a: 'Yes, our flatbed trucks prevent any transmission damage for automatic/AWD cars.' },
            { q: 'Can you tow from basement parking?', a: 'Yes, we have specialized wheel-lift capability for low-height basement extractions.' },
            { q: 'Is accident towing covered by insurance?', a: 'We provide GST bills which you can claim if your insurance covers towing.' }
        ]
    },
    'default': {
        title: 'Roadside Assistance Services',
        subtitle: 'Expert help when you need it most. Our team arrives within 30 minutes to get you back on the road.',
        heroImage: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
        contentImage: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        features: [
            {
                icon: <Clock size={32} color="#002D5B" />,
                title: 'Fast Response',
                desc: 'We aim to reach you within 30 minutes anywhere in Bengaluru.'
            },
            {
                icon: <Shield size={32} color="#002D5B" />,
                title: 'Expert Technicians',
                desc: 'Our team is trained to handle all types of vehicle breakdowns professionally.'
            },
            {
                icon: <MapPin size={32} color="#002D5B" />,
                title: 'Pan India Coverage',
                desc: 'We are available across major cities to assist you anytime.'
            }
        ],
        faqs: [
            { q: 'How do I book a service?', a: 'You can call us directly or use the "Get Rescued" form on our website.' },
            { q: 'Is there a cancellation fee?', a: 'No, if you cancel before our mechanic is dispatched.' }
        ]
    }
};

const ServiceDetail = () => {
    const { serviceId } = useParams();
    // Use specific data if exists, else default (or specific logic for other keys)
    const content = serviceData[serviceId] || serviceData['default'];

    // Dynamic title based on ID if not in specific list (for the generic 'default' usage)
    if (!serviceData[serviceId]) {
        content.title = serviceId.charAt(0).toUpperCase() + serviceId.slice(1) + ' Services';
    }

    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [serviceId]);

    return (
        <main className="service-landing-page">
            {/* 1. Hero Section with Overlay Card */}
            <section className="service-hero" style={{ backgroundImage: `url(${content.heroImage})` }}>
                <div className="container">
                    <div className="service-hero-card">
                        {content.icon && (
                            <div className="hero-service-icon">
                                {content.icon}
                            </div>
                        )}
                        <h1>{content.title}</h1>
                        <p>{content.subtitle}</p>
                        <Link to="/get-rescued" className="btn btn-primary">GET RESCUED NOW</Link>
                    </div>
                </div>
            </section>

            {/* 2. Info Section: Image Left, Features Right */}
            <section className="service-info section-padding">
                <div className="container">
                    <div className="info-grid">
                        <div className="info-image-wrapper">
                            <img src={content.contentImage} alt={content.title} className="info-image" />
                            {/* Decorative border or shadow logic could go here */}
                        </div>
                        <div className="info-features">
                            {content.features.map((item, index) => (
                                <div className="feature-row" key={index}>
                                    <div className="feature-icon">
                                        {item.icon}
                                    </div>
                                    <div className="feature-text">
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Process Section: "A typical breakdown scenario" */}
            <section className="process-section section-padding">
                <div className="container">
                    <h2 className="section-title text-center">A typical breakdown scenario explained</h2>
                    <p className="section-subtitle text-center">
                        You've got a issue, you need a doorstep mechanic or just someone who can help you with a stepney change on the spot.
                        Don't worry! RSR EXPRESS is always nearby and available 24 hours a day.
                    </p>

                    <div className="process-steps">
                        <div className="process-step">
                            <div className="p-icon"><AlertTriangle size={32} /></div>
                            <p>You face an issue with your vehicle.</p>
                        </div>
                        <div className="p-arrow">→</div>
                        <div className="process-step">
                            <div className="p-icon"><Phone size={32} /></div>
                            <p>You get in touch with RSR EXPRESS.</p>
                        </div>
                        <div className="p-arrow">→</div>
                        <div className="process-step">
                            <div className="p-icon"><Truck size={32} /></div>
                            <p>We dispatch the closest help.</p>
                        </div>
                        <div className="p-arrow">→</div>
                        <div className="process-step">
                            <div className="p-icon"><CheckCircle size={32} /></div>
                            <p>You're on your way!</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Stats / Trust Banner */}
            <section className="stats-banner">
                <div className="container">
                    <div className="stats-flex">
                        <div className="stat-box">
                            <h3>Assisted over <span className="underline">2,00,000</span> commuters in Bengaluru</h3>
                        </div>
                        <div className="stat-box">
                            <h3>Towed over <span className="underline">40,000</span> vehicles safely</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. FAQ Section */}
            <section className="faq-section section-padding">
                <div className="container">
                    <h2 className="section-title">Frequently Asked Questions</h2>
                    <div className="faq-list">
                        {content.faqs.map((faq, index) => (
                            <div key={index} className={`faq-item ${openFaq === index ? 'open' : ''} `} onClick={() => toggleFaq(index)}>
                                <div className="faq-question">
                                    <h4>{faq.q}</h4>
                                    {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </div>
                                <div className="faq-answer">
                                    <p>{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



        </main>
    );
};

export default ServiceDetail;
