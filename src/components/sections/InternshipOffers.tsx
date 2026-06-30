import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Section, Badge } from '../ui';
import { Briefcase, Award, FileText } from 'lucide-react';

interface InternshipOfferProps {
  duration: string;
  price: number;
  popular?: boolean;
}

const InternshipOfferCard: React.FC<InternshipOfferProps> = ({ duration, price, popular = false }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const handleApplyClick = () => {
    navigate('/careers');
  };
  
  return (
    <>
      <div className={`relative bg-white p-6 rounded-xl border-2 ${popular ? 'border-blue-500' : 'border-slate-100'} shadow-sm hover:shadow-md transition-all duration-300`}>
        <div className="flex flex-col items-center">
          {popular && (
            <div className="mb-2">
              <Badge variant="primary" className="px-3 py-1 text-sm font-medium whitespace-nowrap">
                {t('internship.mostPopular')}
              </Badge>
            </div>
          )}
          <h3 className="text-2xl font-bold text-slate-800">{duration} {t('internship.months')}</h3>
        
          <p className="text-slate-500 text-sm mt-1">{t('internship.duration')}</p>
        </div>
        
        <div className="text-center mb-6">
          <span className="text-4xl font-bold text-blue-600">{price} TND</span>
          <span className="text-slate-500"> / {t('internship.perMonth')}</span>
        </div>
        
        <ul className="space-y-3 mb-6">
          <li className="flex items-center text-slate-700">
            <Briefcase className="h-5 w-5 text-blue-500 mr-2" />
            {t('internship.features.internship')}
          </li>
          <li className="flex items-center text-slate-700">
            <Award className="h-5 w-5 text-blue-500 mr-2" />
            {t('internship.features.certification')}
          </li>
          <li className="flex items-center text-slate-700">
            <FileText className="h-5 w-5 text-blue-500 mr-2" />
            {t('internship.features.attestation')}
          </li>
        </ul>
        
        <button 
          onClick={handleApplyClick}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          {t('internship.applyNow')}
        </button>
      </div>
    </>
  );
};

export const InternshipOffers: React.FC = () => {
  const { t } = useTranslation();
  
  const offers = [
    { duration: '2', price: 250 },
    { duration: '3', price: 300, popular: true },
    { duration: '4', price: 450, popular: true },
    { duration: '6', price: 600 },
  ];

  return (
    <Section id="internship-offers" className="py-16 md:py-24 bg-slate-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
          {t('internship.title')}
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          {t('internship.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {offers.map((offer, index) => (
          <InternshipOfferCard 
            key={index}
            duration={offer.duration}
            price={offer.price}
            popular={offer.popular}
          />
        ))}
      </div>

      <div className="mt-12 p-6 bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-start md:items-center mb-4 md:mb-0">
          <div className="h-6 w-6 mr-3 mt-1 md:mt-0 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-blue-500">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          <div>
            <h4 className="font-medium text-slate-800">{t('internship.note.title')}</h4>
            <p className="text-slate-600">{t('internship.note.description')}</p>
          </div>
        </div>
      </div>
    </Section>
  );
};
