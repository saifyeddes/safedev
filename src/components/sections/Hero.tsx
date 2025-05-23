import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Shield, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 to-slate-800 text-white pt-20 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10"></div>
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center justify-center p-2 glass-effect rounded-full mb-6 slide-in-left">
            <Shield className="h-6 w-6 text-blue-500 mr-2" />
            <span className="text-sm font-medium text-blue-300">Security at the speed of development</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
            <span className="block slide-up">Secure Your Digital Future</span>
            <span className="block gradient-text slide-up animate-delay-200">With SAFEDEV</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-8 slide-up animate-delay-300">
            We combine cutting-edge security practices with modern development methodologies to deliver robust, resilient digital solutions for forward-thinking organizations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 slide-up animate-delay-400">
            <Button size="lg" className="group hover-lift">
              Get Started
              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 hover-lift">
              Learn More
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '10+', label: 'Years Experience' },
              { value: '250+', label: 'Projects Secured' },
              { value: '99.9%', label: 'Client Satisfaction' },
              { value: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <div key={index} className={`flex flex-col items-center scale-in animate-delay-${(index + 1) * 100}`}>
                <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-sm text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};