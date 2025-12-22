import React from 'react';
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import Services from '../components/home/Services';
import CostEstimator from '../components/home/CostEstimator';
import ReviewMarquee from '../components/home/ReviewMarquee';
import HowItWorks from '../components/home/HowItWorks';
import LaunchSoon from '../components/home/LaunchSoon';

const Home = () => {
  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      <CostEstimator />
      <ReviewMarquee />
      <HowItWorks />
      <LaunchSoon />

      {/* WhatsApp CTA */}
      <a
        href="https://wa.me/9111818222"
        className="whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
        />
      </a>

      <style>{`
        .whatsapp-btn {
          position: fixed;
          bottom: 30px;
          left: 30px;
          width: 50px;
          height: 50px;
          background-color: #25D366;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          z-index: 999;
          transition: transform 0.3s ease;
        }
        .whatsapp-btn img {
          width: 30px;
          height: 30px;
        }
        .whatsapp-btn:hover {
          transform: scale(1.1);
        }
      `}</style>
    </main>
  );
};

export default Home;
