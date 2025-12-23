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


    </main>
  );
};

export default Home;
