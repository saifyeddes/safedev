import React from 'react';
import { useTranslation } from 'react-i18next';
import { Section, Badge } from '../ui';
import { Code, Cpu, Shield, CpuIcon, LayoutDashboard, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const specialties = [
  {
    id: 1,
    title: 'Développement logiciel',
    icon: <Code className="h-8 w-8 text-blue-500" />,
    items: ['Web', 'Mobile', 'Embarqué', 'DevOps']
  },
  {
    id: 2,
    title: 'Intelligence Artificielle',
    icon: <Cpu className="h-8 w-8 text-purple-500" />,
    items: ['Machine Learning', 'Deep Learning', 'NLP', 'Data Science', 'Big Data']
  },
  {
    id: 3,
    title: 'Cybersécurité',
    icon: <Shield className="h-8 w-8 text-green-500" />,
    items: ['Sécurité des Systèmes', 'Cryptographie', 'Analyse de Malwares', 'Sécurité des Applications', 'IAM']
  },
  {
    id: 4,
    title: 'Conception',
    icon: <LayoutDashboard className="h-8 w-8 text-pink-500" />,
    items: ['Architecture Logicielle', 'Architecture d\'Entreprise', 'UX/UI Design', 'Modélisation 3D']
  },
  {
    id: 5,
    title: 'Gestion IT',
    icon: <CpuIcon className="h-8 w-8 text-cyan-500" />,
    items: ['Gestion de Projet IT', 'Gouvernance IT', 'Gestion des Services']
  },
  {
    id: 6,
    title: 'Bases de Données',
    icon: <Database className="h-8 w-8 text-yellow-500" />,
    items: ['Administration (DBA)', 'Architecture de Données', 'Data Engineering', 'Business Intelligence']
  }
];

const SpecialtyCard = ({ specialty }: { specialty: typeof specialties[0] }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <motion.div
      className="relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-slate-100"
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="p-2 rounded-lg bg-blue-50 mr-4">
            {React.cloneElement(specialty.icon, {
              className: `${specialty.icon.props.className} transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`
            })}
          </div>
          <h3 className="text-xl font-bold text-slate-800">{specialty.title}</h3>
        </div>
        
        <div className="space-y-2 mt-4">
          {specialty.items.map((item, index) => (
            <motion.div 
              key={index}
              className="flex items-center text-slate-600"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></span>
              <span>{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600"
        initial={{ width: '0%' }}
        animate={{ width: isHovered ? '100%' : '0%' }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export const Specialties: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Section id="specialties" className="bg-slate-50">
      <div className="text-center mb-12">
        <Badge variant="primary" className="mb-3">
          {t('specialties.subtitle')}
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          {t('specialties.title')}
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          {t('specialties.description')}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {specialties.map((specialty) => (
          <SpecialtyCard key={specialty.id} specialty={specialty} />
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-slate-600 mb-6">
          {t('specialties.footer')}
        </p>
      </div>
    </Section>
  );
};
