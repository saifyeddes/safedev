import React from 'react';
import { Section } from '../ui/Section';
import { Shield, Search, RefreshCw, Siren } from 'lucide-react';
import { siteConfig } from '../../data/site-data';

export const Services: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    'shield': <Shield className="h-10 w-10 text-blue-600" />,
    'search': <Search className="h-10 w-10 text-blue-600" />,
    'refresh-cw': <RefreshCw className="h-10 w-10 text-blue-600" />,
    'siren': <Siren className="h-10 w-10 text-blue-600" />,
  };

  return (
    <Section
      id="services"
      className="bg-white"
      title="Our Services"
      subtitle="We provide comprehensive security and development solutions to protect your digital assets and accelerate your business growth."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {siteConfig.services.map((service, index) => (
          <div 
            key={index}
            className={`bg-slate-50 p-8 rounded-lg shadow-sm border border-slate-100 transition-all duration-500 hover:shadow-xl hover:border-blue-100 hover:bg-blue-50/30 hover-lift slide-in-${index % 2 === 0 ? 'left' : 'right'} animate-delay-${(index + 1) * 100}`}
          >
            <div className="mb-4">
              {iconMap[service.icon]}
            </div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-slate-600">{service.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-16 bg-gradient-to-r from-slate-900 to-blue-900 text-white p-8 md:p-12 rounded-xl scale-in">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4 slide-in-left">Need a custom security solution?</h3>
            <p className="text-slate-300 mb-6 slide-in-left animate-delay-100">
              Our team of experts can design a tailored security strategy that addresses your specific challenges and requirements.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 slide-in-left animate-delay-200">
              Schedule a Consultation
            </button>
          </div>
          <div className="hidden md:block">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Shield />, text: 'Custom Security Architecture' },
                { icon: <Search />, text: 'Vulnerability Assessment' },
                { icon: <RefreshCw />, text: 'Security Training' },
                { icon: <Siren />, text: 'Managed Security Services' }
              ].map((item, index) => (
                <div key={index} className={`glass-effect p-4 rounded-lg scale-in animate-delay-${(index + 1) * 100}`}>
                  <div className="h-8 w-8 text-blue-400 mb-2">{item.icon}</div>
                  <p className="text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};