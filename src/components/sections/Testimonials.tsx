import React from 'react';
import { useTranslation } from 'react-i18next';
import { Section } from '../ui/Section';
import { siteConfig } from '../../data/site-data';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = React.useState(0);
  const testimonials = siteConfig.testimonials;

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Section
      id="testimonials"
      className="bg-gradient-to-br from-slate-900 to-blue-900 text-white"
      title={t('testimonials.title')}
      subtitle={t('testimonials.subtitle')}
    >
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute -left-8 top-1/2 -translate-y-1/2 z-10">
          <button
            onClick={prevTestimonial}
            className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        </div>
        
        <div className="overflow-hidden py-8">
          <div 
            className="flex transition-transform duration-500 ease-in-out" 
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="bg-white/5 backdrop-blur-sm p-8 md:p-10 rounded-xl">
                  <Quote className="h-12 w-12 text-blue-400 mb-6 opacity-50" />
                  <blockquote className="text-xl md:text-2xl font-light mb-8 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-slate-300">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute -right-8 top-1/2 -translate-y-1/2 z-10">
          <button
            onClick={nextTestimonial}
            className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
      
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === activeIndex ? 'bg-blue-500' : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </Section>
  );
};