import { NavItem, Service, TeamMember, Testimonial } from '../types';

export const siteConfig = {
  name: 'SAFEDEV',
  description: 'Securing your digital future with advanced development solutions',
  nav: {
    items: [
      { label: 'Home', href: '#home' },
      { label: 'Services', href: '#services' },
      { label: 'Offers', href: '#offers' },
      { label: 'Specialties', href: '#specialties' },
      { label: 'Team', href: '#team' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Contact', href: '#contact' },
    ] as NavItem[],
  },
  services: [
    {
      key: 'secureDev',
      icon: 'shield',
    },
    {
      key: 'securityAudits',
      icon: 'search',
    },
    {
      key: 'devSecOps',
      icon: 'refresh-cw',
    },
    {
      key: 'incidentResponse',
      icon: 'siren',
    },
  ] as Service[],
  team: [
    {
      name: 'Saif Eddine Yedes',
      role: 'CEO & Co-Founder',
      bio: 'Expert in web development with a proven track record in building scalable web applications. Saif leads our security strategies and ensures all solutions meet the highest industry standards while driving our company\'s vision forward.',
      image: '/saif.jpg',
    },
    {
      name: 'Clara Martínez',
      role: 'UX/UI Designer',
      bio: 'Creative designer with a passion for creating intuitive and beautiful user experiences. Clara brings our projects to life with her design expertise, ensuring both functionality and aesthetics are perfectly balanced.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmO6kApLAVn33pF38CsPdT9xURlOMLgbnq_2NLTKchp4XhJBlinDOy8vs&s=10',
    },
    {
      name: 'Daniel Bukin',
      role: 'Operations Manager',
      bio: 'Operations specialist with extensive experience in process optimization and security. Daniel ensures our projects run smoothly and efficiently, maintaining the highest standards of quality and security throughout the development lifecycle.',
      image: 'https://f4.bcbits.com/img/0041093556_25.jpg',
    },
    {
      name: 'Akim Kabinda',
      role: 'IT Leader Developer',
      bio: 'Development expert with deep expertise in complex software architectures. Chedy guides our technical team towards technical excellence and innovation, ensuring our solutions are both robust and cutting-edge.',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQG10fM_ualq2w/profile-displayphoto-scale_400_400/B4DZwPeRM9IgAg-/0/1769786122734?e=2147483647&v=beta&t=S13zVQmeLmxM8kJSf_VunQ_mNSUXx_MeWPQVZllTOgg',
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
    email: 'safe.dev.contact@gmail.com',
    phone: '+34646112488',
    address: 'Barcelona, Spain',
    prices: {
      twoMonths: '250 TND / mois',
      threeMonths: '300 TND / mois',
      fourMonths: '450 TND / mois',
      sixMonths: '600 TND / mois'
    }
  },
  social: {
    twitter: 'https://twitter.com/safedev',
    linkedin: 'https://linkedin.com/company/safedev',
    github: 'https://github.com/safedev',
  },
};