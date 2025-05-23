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
      name: 'Saif Eddine Yedes',
      role: 'CEO & Co-Founder',
      bio: 'Expert in web development with a proven track record in building scalable web applications. Saif leads our security strategies and ensures all solutions meet the highest industry standards while driving our company\'s vision forward.',
      image: 'https://media.licdn.com/dms/image/v2/D4E03AQGFpXUPMsNR6w/profile-displayphoto-shrink_800_800/B4EZY_MKwOHgAg-/0/1744816882543?e=1753315200&v=beta&t=EpgMo55UQkvGiYeNp7Cct9AGJ4DyJlBClZxUeBpQDnQ',
    },
    {
      name: 'Chedy Soltani',
      role: 'IT Leader Developer',
      bio: 'Development expert with deep expertise in complex software architectures. Chedy guides our technical team towards technical excellence and innovation.',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQGGETyOkdmFxQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1688556104812?e=1753315200&v=beta&t=ynt-aIIiUjFVbu71kzFGiI0QZg6l4IX2lF88B_Zq59s',
    },
    {
      name: 'Nawres Yeddes',
      role: 'Scrum Master',
      bio: 'Agile methodologies specialist, Nawres ensures smooth and efficient project management. He facilitates collaboration and maximizes team productivity.',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQFoNOCWO1vAoQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1716248806555?e=1753315200&v=beta&t=n7nkeXN9BCQu4vY0WMVNn4k3koENM86KBJ0EPI7vh-I',
    },
    {
      name: 'Eric Wetu',
      role: 'Operations Manager',
      bio: 'Operations specialist with a keen eye for efficiency and security. Eric ensures our projects run smoothly and securely from start to finish.',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQFCHrNttmo6kw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1661986654650?e=1753315200&v=beta&t=DBO98HeWeCvwza7sZySGWp9O8jV1TMmIt5k34cRMvus',
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
    email: 'safe-dev-contact@proton.me',
    phone: '+34646112488',
    address: 'Ghent, Belgium',
  },
  social: {
    twitter: 'https://twitter.com/safedev',
    linkedin: 'https://linkedin.com/company/safedev',
    github: 'https://github.com/safedev',
  },
};