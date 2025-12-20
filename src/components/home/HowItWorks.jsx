import React from 'react';
import { PhoneCall, Truck, CheckCircle } from 'lucide-react';
import './HowItWorks.css';

const steps = [
    {
        icon: <PhoneCall size={40} />,
        title: 'Connect',
        desc: 'Call us or request through the app. Our dispatch team is ready 24/7.'
    },
    {
        icon: <Truck size={40} />,
        title: 'Dispatch',
        desc: 'Nearest OEM-trained mechanic is assigned and dispatched to your location.'
    },
    {
        icon: <CheckCircle size={40} />,
        title: 'Rescued',
        desc: 'You are back on the road in no time. Fast, reliable and professional service.'
    }
];

const HowItWorks = () => {
    return (
        <section className="how-it-works section-padding">
            <div className="container">
                <div className="section-header">
                    <span className="subtitle">Simple Process</span>
                    <h2 className="section-title">How It <span className="text-primary">Works</span></h2>
                </div>

                <div className="steps-container">
                    {steps.map((step, index) => (
                        <div key={index} className="step-card">
                            <div className="step-number">{index + 1}</div>
                            <div className="step-icon-wrapper">
                                {step.icon}
                            </div>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-desc">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
