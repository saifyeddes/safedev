import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { siteConfig } from '../../data/site-data';
import { AlertCircle } from 'lucide-react';

export const Team: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleViewPositions = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000); // Hide after 5 seconds
  };

  return (
    <Section
      id="team"
      className="bg-slate-50"
      title="Meet Our Team"
      subtitle="Our team of security experts and developers are dedicated to protecting your digital assets and accelerating your growth."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {siteConfig.team.map((member, index) => (
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
              <p className="text-blue-600 font-medium text-sm mb-3">{member.role}</p>
              <p className="text-slate-600 text-sm">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="inline-block bg-blue-100 text-blue-800 font-medium text-sm py-2 px-4 rounded-full mb-4">
          Join Our Team
        </div>
        <h3 className="text-2xl font-bold mb-4">We're Always Looking for Talent</h3>
        <p className="text-slate-600 max-w-2xl mx-auto mb-6">
          Are you passionate about cybersecurity and development? Join our team of experts and help build secure solutions for our clients.
        </p>
        <div className="flex flex-col items-center">
          <button 
            onClick={handleViewPositions}
            className="bg-slate-800 hover:bg-slate-900 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            View Open Positions
          </button>
          {showAlert && (
            <div className="mt-4 flex items-center text-red-500 bg-red-50 px-4 py-2 rounded-md">
              <AlertCircle className="h-5 w-5 mr-2" />
              <span>No open positions at the moment. Please check back soon!</span>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};