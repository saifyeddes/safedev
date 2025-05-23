import React from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Mail, Phone, MapPin, Send, Clock, Calendar, CheckCircle } from 'lucide-react';
import { siteConfig } from '../../data/site-data';

export const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted! In a real implementation, this would send your message to SAFEDEV.');
  };

  return (
    <Section
      id="contact"
      className="bg-gradient-to-b from-white to-slate-50"
      title="Contact Us"
      subtitle="Have questions or need assistance? Reach out to our team for expert support."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8 slide-in-left">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100 hover-lift">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start group">
                <div className="bg-blue-50 rounded-full p-3 group-hover:bg-blue-100 transition-colors">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold mb-1">Email Us</h4>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-slate-600 hover:text-blue-600 transition-colors">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="bg-blue-50 rounded-full p-3 group-hover:bg-blue-100 transition-colors">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold mb-1">Contact us via WhatsApp</h4>
                  <a href={`https://wa.me/${siteConfig.contact.phone.replace(/[^0-9]/g, '')}`} className="text-slate-600 hover:text-green-600 transition-colors" target="_blank" rel="noopener noreferrer">
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="bg-blue-50 rounded-full p-3 group-hover:bg-blue-100 transition-colors">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold mb-1">Visit Us</h4>
                  <p className="text-slate-600">{siteConfig.contact.address}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white rounded-2xl p-8 shadow-lg hover-lift">
            <div className="flex items-center mb-6">
              <Clock className="h-6 w-6 text-blue-400 mr-2" />
              <h3 className="text-xl font-bold">Working Hours</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-blue-400 mr-2" />
                  <span>Monday - Friday</span>
                </div>
                <span className="font-medium">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-blue-400 mr-2" />
                  <span>Saturday</span>
                </div>
                <span className="font-medium">10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-blue-400 mr-2" />
                  <span>Sunday</span>
                </div>
                <span className="font-medium">Closed</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="slide-in-right">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover-lift">
            <h3 className="text-2xl font-bold mb-8 gradient-text">Send Us a Message</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div className="space-y-2 mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-slate-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="How can we help?"
              />
            </div>
            
            <div className="space-y-2 mb-8">
              <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            
            <Button type="submit" className="w-full flex items-center justify-center group text-lg">
              Send Message
              <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <div className="mt-6 flex items-center justify-center text-sm text-slate-500">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              We typically respond within 24 hours
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};