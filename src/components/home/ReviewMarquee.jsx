import React from 'react';
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
    return (
        <section className="reviews-section section-padding">
            <div className="container center-text">
                <span className="subtitle">CUSTOMER STORIES</span>
                <h2 className="section-title">Trusted by Thousands</h2>
            </div>

            <div className="marquee-container">
                <div className="marquee-track">
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
