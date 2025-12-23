import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import './ReviewMarquee.css';

const reviews = [
    { name: "Rahul Sharma", text: "Fastest response ever! They reached my location in 20 mins. Highly recommended!", rating: 5, service: "Battery Jumpstart" },
    { name: "Priya Reddy", text: "Stuck on the highway at night, RSR Express was a lifesaver. Very professional team.", rating: 5, service: "Car Towing" },
    { name: "Ankit Verma", text: "Affordable and transparent pricing. No hidden charges.", rating: 5, service: "Puncture Repair" },
    { name: "Suresh Kumar", text: "Excellent service for my bike. Handled with care.", rating: 5, service: "Bike Towing" },
    { name: "Meera Nair", text: "The mechanic was very polite and skilled. Fixed the issue instantly.", rating: 5, service: "Breakdown Support" },
    { name: "Arjun Das", text: "Best roadside assistance in Hyderabad. 24/7 availability is real.", rating: 5, service: "Key Lockout" }
];

const ReviewMarquee = () => {
    const trackRef = useRef(null);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        let raf = null;
        let running = true;
        let lastTime = performance.now();
        let pos = 0;

        const speed = 30; // px per second

        const step = (time) => {
            if (!running) {
                lastTime = time;
                raf = requestAnimationFrame(step);
                return;
            }

            const dt = (time - lastTime) / 1000;
            lastTime = time;

            const trackWidth = track.scrollWidth / 2; // because items are doubled
            if (trackWidth === 0) {
                raf = requestAnimationFrame(step);
                return;
            }

            pos -= speed * dt;
            if (Math.abs(pos) >= trackWidth) {
                pos += trackWidth;
            }

            track.style.transform = `translateX(${pos}px)`;
            raf = requestAnimationFrame(step);
        };

        // Pause on hover (desktop)
        const onEnter = () => (running = false);
        const onLeave = () => (running = true);

        // Pause on touch start
        const onTouchStart = () => (running = false);
        const onTouchEnd = () => (running = true);

        track.addEventListener('mouseenter', onEnter);
        track.addEventListener('mouseleave', onLeave);
        track.addEventListener('touchstart', onTouchStart, { passive: true });
        track.addEventListener('touchend', onTouchEnd);

        raf = requestAnimationFrame(step);

        return () => {
            cancelAnimationFrame(raf);
            track.removeEventListener('mouseenter', onEnter);
            track.removeEventListener('mouseleave', onLeave);
            track.removeEventListener('touchstart', onTouchStart);
            track.removeEventListener('touchend', onTouchEnd);
        };
    }, []);
    return (
        <section className="reviews-section section-padding">
            <div className="container center-text">
                <span className="subtitle">CUSTOMER STORIES</span>
                <h2 className="section-title">Trusted by Thousands</h2>
            </div>

            <div className="marquee-container">
                <div className="marquee-track" ref={trackRef}>
                    {/* Double the list for seamless looping */}
                    {[...reviews, ...reviews].map((review, index) => (
                        <div className="review-card" key={index}>
                            <div className="review-header">
                                <div className="stars">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} size={16} fill="#FFD700" stroke="#FFD700" />
                                    ))}
                                </div>
                                <span className="service-tag">{review.service}</span>
                            </div>
                            <p className="review-text">"{review.text}"</p>
                            <div className="review-author">
                                <div className="author-avatar">{review.name.charAt(0)}</div>
                                <span className="author-name">{review.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReviewMarquee;
