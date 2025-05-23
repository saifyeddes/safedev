import { NavItem, Service, TeamMember, Testimonial } from '../types';

export const siteConfig = {
  name: 'SAFEDEV',
  description: 'Securing your digital future with advanced development solutions',
  nav: {
    items: [
      { label: 'Home', href: '#home' },
      { label: 'Services', href: '#services' },
      { label: 'Team', href: '#team' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Contact', href: '#contact' },
    ] as NavItem[],
  },
  services: [
    {
      title: 'Secure Software Development',
      description: 'Custom-built software solutions with security integrated from day one. We build with a security-first mindset.',
      icon: 'shield',
    },
    {
      title: 'Security Audits',
      description: 'Comprehensive analysis of your existing systems to identify and remediate security vulnerabilities.',
      icon: 'search',
    },
    {
      title: 'DevSecOps Implementation',
      description: 'Integrate security practices throughout your development pipeline for continuous protection.',
      icon: 'refresh-cw',
    },
    {
      title: 'Incident Response',
      description: '24/7 support to quickly address and mitigate security breaches when they occur.',
      icon: 'siren',
    },
  ] as Service[],
  team: [
    {
      name: 'Alex Morgan',
      role: 'Chief Security Officer',
      bio: 'With over 15 years in cybersecurity, Alex leads our security strategies and ensures all solutions meet the highest standards.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Jamie Chen',
      role: 'Lead Developer',
      bio: 'Jamie specializes in secure coding practices and has led development for Fortune 500 companies across diverse industries.',
      image: 'https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Sam Wilson',
      role: 'DevOps Specialist',
      bio: 'Sam brings extensive experience in building and securing CI/CD pipelines that automate security testing.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Taylor Reed',
      role: 'Security Analyst',
      bio: 'Taylor excels at penetration testing and vulnerability assessments, helping clients identify weaknesses before they can be exploited.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ] as TeamMember[],
  testimonials: [
    {
      quote: 'SAFEDEV transformed our security posture while accelerating our development cycles. Their expertise is unmatched.',
      author: 'Jordan Blake',
      company: 'FinTech Innovations',
      image: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      quote: 'After suffering a breach, SAFEDEV not only helped us recover but implemented systems that have kept us secure for years.',
      author: 'Riley Kim',
      company: 'Healthcare Solutions',
      image: 'https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      quote: 'Their team consistently delivers secure, high-quality code on time and on budget. SAFEDEV is our trusted security partner.',
      author: 'Casey Johnson',
      company: 'E-commerce Platform',
      image: 'https://images.pexels.com/photos/5792629/pexels-photo-5792629.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ] as Testimonial[],
  contact: {
    email: 'info@safedev.com',
    phone: '+1 (555) 123-4567',
    address: '123 Security Ave, Cybertown, CT 10101',
  },
  social: {
    twitter: 'https://twitter.com/safedev',
    linkedin: 'https://linkedin.com/company/safedev',
    github: 'https://github.com/safedev',
  },
};