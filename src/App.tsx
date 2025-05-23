import React, { useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Team } from './components/sections/Team';
import { InternshipOffers } from './components/sections/InternshipOffers';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { Chatbot } from './components/Chatbot';

function App() {
  useEffect(() => {
    // Update page title
    document.title = 'SAFEDEV - Securing Your Digital Future';
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Ensure we have a valid href attribute
        const href = this.getAttribute('href');
        if (!href) return;
        
        // Find the target element
        const targetElement = document.querySelector(href);
        
        // Only proceed if we found the target element
        if (targetElement) {
          try {
            const boundingRect = targetElement.getBoundingClientRect();
            if (boundingRect) {
              window.scrollTo({
                top: boundingRect.top + window.scrollY - 80, // Offset for fixed header
                behavior: 'smooth'
              });
            }
          } catch (error) {
            console.warn('Error during smooth scroll:', error);
          }
        }
      });
    });
    
    // Cleanup event listeners
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Navbar />
      <Hero />
      <Services />
      <InternshipOffers />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;