import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { 
  Hero, 
  Services, 
  Team, 
  InternshipOffers, 
  Specialties,
  Testimonials, 
  Contact 
} from './components/sections';
import { Footer } from './components/layout/Footer';
import { Chatbot } from './components/Chatbot';
import CareersPage from './pages/careers';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  useEffect(() => {
    // Update page title
    document.title = 'SAFEDEV - Securing Your Digital Future';
    
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: Event) => {
      // Only handle anchor links that don't start with http
      const target = e.target as HTMLAnchorElement;
      if (target.href && !target.href.startsWith('http')) {
        e.preventDefault();
        
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
      }
    };

    // Add event listeners to all anchor links
    const anchorLinks = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    anchorLinks.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick as EventListener);
    });

    return () => {
      // Clean up event listeners
      anchorLinks.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick as EventListener);
      });
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <InternshipOffers />
        <Specialties />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/careers" element={
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <CareersPage />
            </main>
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;