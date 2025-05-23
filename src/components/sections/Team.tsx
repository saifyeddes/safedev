import React from 'react';
import { useTranslation } from 'react-i18next';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { AlertCircle } from 'lucide-react';
import { siteConfig } from '../../data/site-data';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const Team: React.FC = () => {
  const { t } = useTranslation();
  const [showAlert, setShowAlert] = React.useState(false);

  const handleViewPositions = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <Section
      id="team"
      className="bg-slate-50"
      title={t('team.title')}
      subtitle={t('team.subtitle')}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {(siteConfig.team as TeamMember[]).map((member: TeamMember, index: number) => (
          <div 
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-md group"
          >
            <div className="aspect-square overflow-hidden">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  objectPosition: 'center 20%',
                  width: '100%',
                  height: '100%'
                }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-blue-600 font-medium text-sm mb-3">
                {t(`team.members.${member.name.toLowerCase().split(' ')[0]}.role`)}
              </p>
              <p className="text-slate-600 text-sm">
                {t(`team.members.${member.name.toLowerCase().split(' ')[0]}.bio`)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="inline-block bg-blue-100 text-blue-800 font-medium text-sm py-2 px-4 rounded-full mb-4">
          {t('team.joinTeam.tagline')}
        </div>
        <h3 className="text-2xl font-bold mb-4">{t('team.joinTeam.title')}</h3>
        <p className="text-slate-600 max-w-2xl mx-auto mb-6">
          {t('team.joinTeam.description')}
        </p>
        <div className="flex flex-col items-center">
          <Button 
            variant="outline" 
            className="border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white"
            onClick={handleViewPositions}
          >
            {t('team.joinTeam.cta')}
          </Button>
          {showAlert && (
            <div className="mt-4 flex items-center text-red-500 bg-red-50 px-4 py-2 rounded-md">
              <AlertCircle className="h-5 w-5 mr-2" />
              <span>{t('team.joinTeam.noPositions')}</span>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};