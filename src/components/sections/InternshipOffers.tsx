import React from 'react';
import { useTranslation } from 'react-i18next';
import { Section, Badge, Dialog } from '../ui';
import { Briefcase, Award, FileText, Clock, Mail } from 'lucide-react';

interface InternshipOfferProps {
  duration: string;
  price: number;
  popular?: boolean;
}

const InternshipOfferCard: React.FC<InternshipOfferProps> = ({ duration, price, popular = false }) => {
  const { t } = useTranslation();
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  
  const handleApplyClick = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
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
          <span className="text-4xl font-bold text-blue-600">{price} DT</span>
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

      <Dialog
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        title={t('internship.applyTitle')}
      >
        <div className="space-y-4">
          <p>{t('internship.applyMessage1')}</p>
          <p className="font-medium">{t('internship.applyMessage2')}</p>
          <div className="mt-4 p-3 bg-blue-50 rounded-lg flex items-start">
            <Mail className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium">safe-dev-contact@proton.me</p>
              <p className="text-sm text-slate-600">
                {t('internship.mentionDuration')} {duration} {t('internship.months')}
              </p>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export const InternshipOffers: React.FC = () => {
  const { t } = useTranslation();
  
  const offers = [
    { duration: '2', price: 200 },
    { duration: '3', price: 250, popular: true },
    { duration: '4', price: 350, popular: true },
    { duration: '6', price: 500 },
  ];

  return (
    <Section
      id="internship"
      className="bg-gradient-to-b from-slate-50 to-white"
      title={t('internship.title')}
      subtitle={t('internship.subtitle')}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {offers.map((offer, index) => (
          <InternshipOfferCard
            key={index}
            duration={offer.duration}
            price={offer.price}
            popular={offer.popular}
          />
        ))}
      </div>
      
      <div className="mt-12 bg-blue-50 p-6 rounded-xl border border-blue-100">
        <div className="flex flex-col md:flex-row items-center">
          <div className="bg-blue-100 p-3 rounded-full mb-4 md:mb-0 md:mr-4">
            <Clock className="h-6 w-6 text-blue-600" />
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-slate-800">{t('internship.note.title')}</h4>
            <p className="text-slate-600">{t('internship.note.description')}</p>
          </div>
        </div>
      </div>
    </Section>
  );
};
