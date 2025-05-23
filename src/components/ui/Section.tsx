import React from 'react';
import { Container } from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  title?: string;
  subtitle?: string;
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id,
  title,
  subtitle
}) => {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 ${className}`}
    >
      <Container>
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>}
            {subtitle && <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
};