import React, { useState, useEffect } from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Shield, Menu, X } from 'lucide-react';
import { siteConfig } from '../../data/site-data';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <Container className="flex items-center justify-between">
        <a href="#home" className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold">{siteConfig.name}</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          {siteConfig.nav.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
          <Button>Get Started</Button>
        </nav>
        
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? 'text-slate-900' : 'text-white'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-slate-900' : 'text-white'}`} />
          )}
        </button>
      </Container>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <Container className="py-4">
            <nav className="flex flex-col space-y-4">
              {siteConfig.nav.items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-slate-900 font-medium hover:text-blue-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button className="w-full mt-2">Get Started</Button>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
};