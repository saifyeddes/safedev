import React from 'react';
import { useTranslation } from 'react-i18next';
import { Section } from '../ui/Section';
import { Shield, Search, RefreshCw, Siren } from 'lucide-react';
import { siteConfig } from '../../data/site-data';

interface ServiceItem {
  icon: string;
  key: string;
  title?: string;
  description?: string;
}

export const Services: React.FC = () => {
  const { t } = useTranslation();
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
      title={t('services.title')}
      subtitle={t('services.subtitle')}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {(siteConfig.services as ServiceItem[]).map((service, index) => (
          <div 
            key={index}
            className={`bg-slate-50 p-8 rounded-lg shadow-sm border border-slate-100 transition-all duration-500 hover:shadow-xl hover:border-blue-100 hover:bg-blue-50/30 hover-lift slide-in-${index % 2 === 0 ? 'left' : 'right'} animate-delay-${(index + 1) * 100}`}
          >
            <div className="mb-4">
              {iconMap[service.icon]}
            </div>
            <h3 className="text-xl font-semibold mb-3">
              {t(`services.items.${service.key}.title`)}
            </h3>
            <p className="text-slate-600">
              {t(`services.items.${service.key}.description`)}
            </p>
          </div>
        ))}
      </div>
      
      <div className="mt-16 bg-gradient-to-r from-slate-900 to-blue-900 text-white p-8 md:p-12 rounded-xl scale-in">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4 slide-in-left">{t('services.customSolution.title')}</h3>
            <p className="text-slate-300 mb-6 slide-in-left animate-delay-100">
              {t('services.customSolution.description')}
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 slide-in-left animate-delay-200">
              {t('services.customSolution.cta')}
            </button>
          </div>
          <div className="hidden md:block">
            <div className="grid grid-cols-2 gap-4">
              {(t('services.customSolution.features', { returnObjects: true }) as string[]).map((feature, index) => {
                const icons = [
                  <Shield key="shield" />,
                  <Search key="search" />,
                  <RefreshCw key="refresh" />,
                  <Siren key="siren" />
                ];
                return (
                  <div 
                    key={index} 
                    className={`glass-effect p-4 rounded-lg scale-in animate-delay-${(index + 1) * 100}`}
                  >
                    <div className="h-8 w-8 text-blue-400 mb-2">{icons[index]}</div>
                    <p className="text-sm">{feature}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};