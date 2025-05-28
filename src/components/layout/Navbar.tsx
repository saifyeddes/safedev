import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Shield, Menu, X } from 'lucide-react';
import { siteConfig } from '../../data/site-data';
import ReactCountryFlag from 'react-country-flag';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
  };

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
              {t(`nav.${item.label.toLowerCase()}`)}
            </a>
          ))}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => changeLanguage('en')} 
              className={`p-1 rounded-full ${i18n.language && (i18n.language === 'en' || i18n.language.startsWith('en-')) ? 'ring-2 ring-blue-500' : ''}`}
              title="English"
            >
              <ReactCountryFlag 
                countryCode="US" 
                svg 
                className="w-6 h-6 rounded-full"
              />
            </button>
            <button 
              onClick={() => changeLanguage('fr')} 
              className={`p-1 rounded-full ${i18n.language && (i18n.language === 'fr' || i18n.language.startsWith('fr-')) ? 'ring-2 ring-blue-500' : ''}`}
              title="Français"
            >
              <ReactCountryFlag 
                countryCode="FR" 
                svg 
                className="w-6 h-6 rounded-full"
              />
            </button>
            <button 
              onClick={() => changeLanguage('es')} 
              className={`p-1 rounded-full ${i18n.language && (i18n.language === 'es' || i18n.language.startsWith('es-')) ? 'ring-2 ring-blue-500' : ''}`}
              title="Español"
            >
              <ReactCountryFlag 
                countryCode="ES" 
                svg 
                className="w-6 h-6 rounded-full"
              />
            </button>
          </div>
          <a href="#services">
            <Button>{t('common.getStarted')}</Button>
          </a>
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
                  {t(`nav.${item.label.toLowerCase()}`)}
                </a>
              ))}
              <div className="flex space-x-4 mt-2">
                <button 
                  onClick={() => changeLanguage('en')} 
                  className={`p-1 rounded-full ${i18n.language && (i18n.language === 'en' || i18n.language.startsWith('en-')) ? 'ring-2 ring-blue-500' : ''}`}
                  title="English"
                >
                  <ReactCountryFlag 
                    countryCode="US" 
                    svg 
                    className="w-6 h-6 rounded-full"
                  />
                </button>
                <button 
                  onClick={() => changeLanguage('fr')} 
                  className={`p-1 rounded-full ${i18n.language && (i18n.language === 'fr' || i18n.language.startsWith('fr-')) ? 'ring-2 ring-blue-500' : ''}`}
                  title="Français"
                >
                  <ReactCountryFlag 
                    countryCode="FR" 
                    svg 
                    className="w-6 h-6 rounded-full"
                  />
                </button>
                <button 
                  onClick={() => changeLanguage('es')} 
                  className={`p-1 rounded-full ${i18n.language && (i18n.language === 'es' || i18n.language.startsWith('es-')) ? 'ring-2 ring-blue-500' : ''}`}
                  title="Español"
                >
                  <ReactCountryFlag 
                    countryCode="ES" 
                    svg 
                    className="w-6 h-6 rounded-full"
                  />
                </button>
              </div>
              <Button className="w-full mt-2">{t('getStarted')}</Button>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
};