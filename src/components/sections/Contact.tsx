import React from 'react';
import { useTranslation } from 'react-i18next';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from 'lucide-react';
import { siteConfig } from '../../data/site-data';

export const Contact: React.FC = () => {
  const { t } = useTranslation();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted! In a real implementation, this would send your message to SAFEDEV.');
  };

  return (
    <Section
      id="contact"
      className="bg-gradient-to-b from-white to-slate-50"
      title={t('contact.title')}
      subtitle={t('contact.subtitle')}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8 slide-in-left">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100 hover-lift">
            <h3 className="text-2xl font-bold mb-6">{t('contact.getInTouch')}</h3>
            
            <div className="space-y-6">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm">{t('contact.contactMethods.email')}</p>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-slate-800 hover:text-blue-600 transition-colors">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="bg-blue-50 rounded-full p-3 group-hover:bg-blue-100 transition-colors">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold mb-1">{t('contact.contactMethods.whatsapp')}</h4>
                  <a href={`https://wa.me/${siteConfig.contact.phone.replace(/[^0-9]/g, '')}`} className="text-slate-600 hover:text-green-600 transition-colors" target="_blank" rel="noopener noreferrer">
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <div className="bg-purple-100 p-3 rounded-full mr-4 mt-1">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm">{t('contact.contactMethods.visit')}</p>
                  <p className="text-slate-800">{siteConfig.contact.address}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <Clock className="h-5 w-5 text-blue-600" />
              </div>
              <h4 className="font-semibold text-slate-800 text-lg">{t('contact.workingHours')}</h4>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between items-center py-2 border-b border-slate-100">
                <span className="text-slate-600">{t('contact.contactMethods.hours.weekdays')}</span>
                <span className="font-medium text-slate-800">9:00 - 18:00</span>
              </li>
              <li className="flex justify-between items-center py-2 border-b border-slate-100">
                <span className="text-slate-600">{t('contact.contactMethods.hours.saturday')}</span>
                <span className="font-medium text-slate-800">10:00 - 16:00</span>
              </li>
              <li className="flex justify-between items-center py-2">
                <span className="text-slate-600">{t('contact.contactMethods.hours.sunday')}</span>
                <span className="text-red-500 font-medium">{t('contact.contactMethods.hours.closed')}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="slide-in-right">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover-lift">
            <h3 className="text-2xl font-bold mb-6">{t('contact.sendMessage')}</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">{t('contact.form.name')}</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder={t('contact.form.name')}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">{t('contact.form.email')}</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder={t('contact.form.email')}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">{t('contact.form.subject')}</label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder={t('contact.form.subject')}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">{t('contact.form.message')}</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder={t('contact.form.message')}
              ></textarea>
            </div>
            
            <Button type="submit" className="w-full flex items-center justify-center group text-lg">
              Send Message
              <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <div className="mt-6 flex items-center justify-center text-sm text-slate-500">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              {t('contact.form.responseTime')}
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};