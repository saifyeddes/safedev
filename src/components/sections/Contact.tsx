import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import { siteConfig } from '../../data/site-data';

export const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      // 1. Configuration EmailJS
      // Remplacer ces valeurs par vos identifiants EmailJS
      // Remplacez ces valeurs par vos identifiants EmailJS
      // Configuration EmailJS - Ne partagez jamais ces informations publiquement
      const serviceId = 'service_pgzuwbs';
      const templateId = 'template_f2quouh';
      const publicKey = 'GfvU4Tz-8pBKZJMdP'; // Clé publique EmailJS
      
      // 2. Vérification des champs obligatoires
      if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        throw new Error(t('contact.form.required'));
      }
      
      // 3. Validation de l'email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error(t('contact.form.invalidEmail'));
      }
      
      // 4. Envoi de l'email via EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email // Pour permettre la réponse directe
        },
        publicKey
      );
      
      // 5. Réinitialisation du formulaire en cas de succès
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // 6. Réinitialisation du message de succès après 5 secondes
      const successTimer = setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
      
      // Nettoyage du timer si le composant est démonté
      return () => clearTimeout(successTimer);
      
    } catch (err: any) {
      console.error('Erreur lors de l\'envoi du message:', err);
      
      // Gestion des erreurs avec des messages personnalisés
      if (err.message.includes('Failed to send email') || !navigator.onLine) {
        setError(t('contact.form.networkError'));
      } else if (err.message.includes('Invalid template')) {
        setError(t('contact.form.invalidTemplate'));
      } else if (err.message) {
        setError(err.message);
      } else {
        setError(t('contact.form.error'));
      }
    } finally {
      setIsLoading(false);
    }
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
                <span className="font-medium text-slate-800">{t('contact.contactMethods.hours.weekdaysHours')}</span>
              </li>
              <li className="flex justify-between items-center py-2 border-b border-slate-100">
                <span className="text-slate-600">{t('contact.contactMethods.hours.saturday')}</span>
                <span className="font-medium text-slate-800">{t('contact.contactMethods.hours.saturdayHours')}</span>
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
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder={t('contact.form.name')}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">{t('contact.form.email')}</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder={t('contact.form.email')}
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">{t('contact.form.subject')}</label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder={t('contact.form.subject')}
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">{t('contact.form.message')}</label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder={t('contact.form.message')}
                required
              ></textarea>
            </div>
            
            <Button 
              type="submit" 
              className="w-full flex items-center justify-center group text-lg"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin mr-2 h-5 w-5" />
                  {t('contact.form.sending')}
                </>
              ) : (
                <>
                  {t('contact.form.submit')}
                  <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </Button>

            {isSuccess && (
              <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-md flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                {t('contact.form.success')}
              </div>
            )}

            {error && (
              <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-md flex items-center">
                <AlertCircle className="h-5 w-5 mr-2" />
                {error}
              </div>
            )}

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