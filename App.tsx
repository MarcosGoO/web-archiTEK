
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Studio from '@/components/Studio';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';

import { Routes, Route } from 'react-router-dom';
import PortfolioPage from '@/components/PortfolioPage';
import RequestQuote from '@/components/RequestQuote';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navbar scrolled={scrolled} />
      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            <Stats />
            <Studio />
            <Portfolio />
          </main>
        } />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/request-quote" element={<RequestQuote />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
