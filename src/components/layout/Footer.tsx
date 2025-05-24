import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '../ui/Container';
import { Shield, Twitter, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig } from '../../data/site-data';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-6 w-6 text-blue-500" />
              <span className="text-xl font-bold">{siteConfig.name}</span>
            </div>
            <p className="text-slate-300 mb-4">
              {t('common.siteDescription')}
            </p>
            <div className="flex space-x-4">
              <a href={siteConfig.social.twitter} className="text-slate-300 hover:text-blue-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href={siteConfig.social.linkedin} className="text-slate-300 hover:text-blue-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href={siteConfig.social.github} className="text-slate-300 hover:text-blue-500 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('nav.quickLinks')}</h3>
            <ul className="space-y-3">
              {siteConfig.nav.items.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-slate-300 hover:text-blue-500 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('nav.specialties')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#specialties" className="text-slate-300 hover:text-blue-500 transition-colors">
                  {t('specialties.items.softwareDev')}
                </a>
              </li>
              <li>
                <a href="#specialties" className="text-slate-300 hover:text-blue-500 transition-colors">
                  {t('specialties.items.ai')}
                </a>
              </li>
              <li>
                <a href="#specialties" className="text-slate-300 hover:text-blue-500 transition-colors">
                  {t('specialties.items.cybersecurity')}
                </a>
              </li>
              <li>
                <a href="#specialties" className="text-slate-300 hover:text-blue-500 transition-colors">
                  {t('specialties.items.design')}
                </a>
              </li>
              <li>
                <a href="#specialties" className="text-slate-300 hover:text-blue-500 transition-colors">
                  {t('specialties.items.itManagement')}
                </a>
              </li>
              <li>
                <a href="#specialties" className="text-slate-300 hover:text-blue-500 transition-colors">
                  {t('specialties.items.database')}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('nav.contactUs')}</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-500 mt-0.5" />
                <span className="text-slate-300">{siteConfig.contact.email}</span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-500 mt-0.5" />
                <span className="text-slate-300">{siteConfig.contact.phone}</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-500 mt-0.5" />
                <span className="text-slate-300">{siteConfig.contact.address}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8">
          <p className="text-center text-slate-400">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};