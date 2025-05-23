import { useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { 
  Hero, 
  Services, 
  Team, 
  InternshipOffers, 
  Testimonials, 
  Contact 
} from './components/sections';
import { Footer } from './components/layout/Footer';
import { Chatbot } from './components/Chatbot';

function App() {
  useEffect(() => {
    // Update page title
    document.title = 'SAFEDEV - Securing Your Digital Future';
    
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: Event) => {
      e.preventDefault();
      
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute('href');
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
    };

    // Add event listeners to all anchor links
    const anchorLinks = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    anchorLinks.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick as EventListener);
    });

    // Cleanup event listeners
    return () => {
      anchorLinks.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick as EventListener);
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