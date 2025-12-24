import React, { useState, useEffect, useRef } from 'react';
import './Stats.css';

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, suffix = '', prefix = '' }) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                        animateCounter();
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% visible
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, [hasAnimated]);

    const animateCounter = () => {
        const startTime = Date.now();
        const endValue = parseInt(end);

        const updateCounter = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);

            // Easing function for smooth animation (easeOutQuart)
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(easeOutQuart * endValue);

            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                setCount(endValue);
            }
        };

        requestAnimationFrame(updateCounter);
    };

    return (
        <h3 className="stat-number" ref={counterRef}>
            {prefix}{count.toLocaleString()}{suffix}
        </h3>
    );
};

const Stats = () => {
    return (
        <section className="stats-section">
            <div className="container">
                <div className="stats-grid">
                    <div className="stat-item">
                        <AnimatedCounter end={100000} suffix="+" duration={2500} />
                        <p className="stat-label">Vehicles Rescued Since 2011</p>
                    </div>
                    <div className="stat-item">
                        <AnimatedCounter end={30} suffix=" Mins" duration={2000} />
                        <p className="stat-label">Average Reach Time</p>
                    </div>
                    <div className="stat-item">
                        <h3 className="stat-number">24/7</h3>
                        <p className="stat-label">Round-the-clock Support</p>
                    </div>
                    <div className="stat-item">
                        <AnimatedCounter end={500} suffix="+" duration={2200} />
                        <p className="stat-label">Verified Technicians</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
