import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import GetRescued from './pages/GetRescued';
import Contact from './pages/Contact';
import ServiceDetail from './pages/ServiceDetail';
import About from './pages/About';
import Blog from './pages/Blog';
import useScrollReveal from './hooks/useScrollReveal';
import './App.css';

// Placeholder common layout for legal/info pages
const InfoPage = ({ title }) => (
  <div className="info-page section-padding" style={{ paddingTop: '150px' }}>
    <div className="container">
      <h1>{title}</h1>
      <p style={{ marginTop: '20px', color: '#666' }}>Content for {title} page coming soon...</p>
    </div>
  </div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  useScrollReveal(); // Activate scroll animations
  return (
    <Router>
      <div className="app-container">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/get-rescued" element={<GetRescued />} />

          {/* Dynamic Service Routes */}
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/towing/:serviceId" element={<ServiceDetail />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<InfoPage title="Careers" />} />
          <Route path="/privacy" element={<InfoPage title="Privacy Policy" />} />
          <Route path="/terms" element={<InfoPage title="Terms of Service" />} />
          <Route path="/terms-of-use" element={<InfoPage title="Terms of Use" />} />
          <Route path="/refund-policy" element={<InfoPage title="Cancellation & Refund Policy" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
