import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Traductions
const resources = {
  en: {
    translation: {
      // Chatbot
      chatbot: {
        welcome: 'Hello! I\'m the SAFEDEV assistant. How can I help you today? For more information, you can contact us at {{email}}',
        defaultResponse: 'How can I help you today? Here are some suggestions:',
        contactInfo: '📧 Email: {{email}}\n📞 Phone: {{phone}}',
        suggestions: {
          offers: 'View our internship offers',
          services: 'Discover our services',
          specialties: 'Explore our specialties',
          team: 'Learn about our team',
          contact: 'Contact us'
        },
        offers: {
          title: '📋 Our Internship Offers',
          note: '🔥 Most popular options marked\n💡 All offers include internship certificate and practical experience'
        },
        team: {
          contact: '\n📧 Contact us for more information: {{email}}'
        }
      },
      
      // Navigation
      nav: {
        home: 'Home',
        services: 'Services',
        offers: 'Offers',
        specialties: 'Specialties',
        team: 'Team',
        testimonials: 'Testimonials',
        contact: 'Contact',
        quickLinks: 'Quick Links',
        contactUs: 'Contact Us'
      },
      
      // Common
      common: {
        years: 'Years',
        projects: 'Projects',
        clients: 'Clients',
        support: 'Support',
        learnMore: 'Learn More',
        viewAll: 'View All',
        readMore: 'Read More',
        getInTouch: 'Get in Touch',
        siteDescription: 'Securing your digital future with advanced development solutions',
        sendMessage: 'Send Message',
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        message: 'Message',
        submit: 'Submit',
        loading: 'Loading...',
        success: 'Success!',
        error: 'Error!',
        close: 'Close',
        getStarted: 'Get Started'
      },
      
      // Hero Section
      hero: {
        tagline: 'Security at the speed of development',
        title1: 'Secure Your Digital Future',
        title2: 'With SAFEDEV',
        description: 'We combine cutting-edge security practices with modern development methodologies to deliver robust, resilient digital solutions for forward-thinking organizations.',
        ctaPrimary: 'Get Started',
        ctaSecondary: 'Learn More',
        stats: {
          experience: 'Years Experience',
          projects: 'Projects Secured',
          satisfaction: 'Client Satisfaction',
          support: 'Support Available'
        }
      },
      
      // Services Section
      services: {
        title: 'Our Services',
        siteDescription: {
          en: 'Securing your digital future with advanced development solutions',
          fr: 'Sécuriser votre avenir numérique avec des solutions de développement avancées'
        },
        subtitle: 'We offer professional paid and international training programs, in partnership with internationally accredited training centers. Our programs include practical internships and provide recognized internship certificates.',
        customSolution: {
          title: 'Need a custom security solution?',
          description: 'Our team of experts can design a tailored security strategy that addresses your specific challenges and requirements.',
          cta: 'Schedule a Consultation',
          features: [
            'Custom Security Architecture',
            'Vulnerability Assessment',
            'Security Training',
            'Managed Security Services'
          ]
        },
        items: {
          secureDev: {
            title: 'Secure Software Development',
            description: 'Custom-built software solutions with security integrated from day one. We build with a security-first mindset.'
          },
          securityAudits: {
            title: 'Security Audits',
            description: 'Comprehensive analysis of your existing systems to identify and remediate security vulnerabilities.'
          },
          devSecOps: {
            title: 'DevSecOps Implementation',
            description: 'Integrate security practices throughout your development pipeline for continuous protection.'
          },
          incidentResponse: {
            title: 'Incident Response',
            description: '24/7 support to quickly address and mitigate security breaches when they occur.'
          }
        }
      },
      
      // Team Section
      team: {
        title: 'Meet Our Team',
        subtitle: 'Our team of security experts and developers are dedicated to protecting your digital assets and accelerating your growth.',
        members: {
          saif: {
            role: 'CEO & Co-Founder',
            bio: 'Expert in web development with a proven track record in building scalable web applications. Saif leads our security strategies and ensures all solutions meet the highest industry standards while driving our company\'s vision forward.'
          },
          chedy: {
            role: 'IT Leader Developer',
            bio: 'Development expert with deep expertise in complex software architectures. Chedy guides our technical team towards technical excellence and innovation.'
          },
          nawres: {
            role: 'Scrum Master',
            bio: 'Agile methodologies specialist, Nawres ensures smooth and efficient project management. He facilitates collaboration and maximizes team productivity.'
          },
          eric: {
            role: 'Operations Manager',
            bio: 'Operations specialist with a keen eye for efficiency and security. Eric ensures our projects run smoothly and securely from start to finish.'
          }
        },
        joinTeam: {
          tagline: 'Join Our Team',
          title: 'We\'re Always Looking for Talent',
          description: 'Are you passionate about cybersecurity and development? Join our team of experts and help build secure solutions for our clients.',
          cta: 'View Open Positions',
          noPositions: 'No open positions at the moment. Please check back soon!'
        }
      },
      
      // Internship Offers Section
      specialties: {
        title: 'Our Specialties',
        subtitle: 'Expertise Areas',
        description: 'Discover our comprehensive range of IT specialties designed to meet your business needs and drive innovation.',
        footer: 'Our team of experts is ready to help you with any of these specialties. Contact us to learn more about how we can assist with your specific requirements.',
        items: {
          softwareDev: 'Software Development',
          ai: 'Artificial Intelligence',
          cybersecurity: 'Cybersecurity',
          design: 'Design',
          itManagement: 'IT Management',
          database: 'Database'
        }
      },
      
      internship: {
        title: 'Internship Programs',
        subtitle: 'Join our internship programs and kickstart your career in technology with hands-on experience and professional growth opportunities.',
        months: 'months',
        duration: 'Duration',
        perMonth: 'total',
        mostPopular: 'Most Popular',
        applyNow: 'Apply Now',
        features: {
          internship: 'Hands-on internship in your field',
          certification: 'International certification upon completion',
          attestation: 'Internship attestation letter',
        },
        note: {
          title: 'Flexible Duration',
          description: 'Choose the internship duration that fits your schedule and learning goals.'
        },
        applyTitle: 'Application Information',
        applyMessage1: 'The internship application form will be available soon.',
        applyMessage2: 'In the meantime, you can send us an email with your application to:',
        mentionDuration: 'Please mention the internship duration:'
      },
      
      // Testimonials Section
      testimonials: {
        title: 'Client Testimonials',
        subtitle: 'Hear what our clients have to say about our security and development solutions.'
      },
      
      // Contact Section
      contact: {
        title: 'Contact Us',
        subtitle: 'Have questions or need assistance? Reach out to our team for expert support.',
        getInTouch: 'Get in Touch',
        workingHours: 'Working Hours',
        sendMessage: 'Send Us a Message',
        form: {
          name: 'Name',
          email: 'Email',
          phone: 'Phone',
          subject: 'Subject',
          message: 'Message',
          submit: 'Send Message',
          success: 'Your message has been sent successfully!',
          error: 'There was an error sending your message. Please try again.',
          responseTime: 'We typically respond within 24 hours'
        },
        contactMethods: {
          email: 'Email Us',
          whatsapp: 'Contact us via WhatsApp',
          phone: 'Call Us',
          visit: 'Visit Us',
          hours: {
            weekdays: 'Monday - Friday',
            weekdaysHours: '9:00 AM - 6:00 PM',
            saturday: 'Saturday',
            saturdayHours: '10:00 AM - 2:00 PM',
            sunday: 'Sunday',
            closed: 'Closed'
          }
        }
      }
    }
  },
  fr: {
    translation: {
      // Chatbot
      chatbot: {
        welcome: 'Bonjour ! Je suis l\'assistant SAFEDEV. Comment puis-je vous aider aujourd\'hui ? Pour plus d\'informations, vous pouvez nous contacter à {{email}}',
        defaultResponse: 'Comment puis-je vous aider ? Voici quelques suggestions :',
        contactInfo: '📧 Email : {{email}}\n📞 Téléphone : {{phone}}',
        suggestions: {
          offers: 'Voir nos offres de stage',
          services: 'Découvrir nos services',
          specialties: 'Explorer nos spécialités',
          team: 'Découvrir notre équipe',
          contact: 'Nous contacter'
        },
        offers: {
          title: '📋 Nos Offres de Stage',
          note: '🔥 Options les plus populaires marquées\n💡 Toutes les offres incluent une attestation de stage et une expérience pratique'
        },
        team: {
          contact: '\n📧 Contactez-nous pour plus d\'informations : {{email}}'
        }
      },
      
      // Navigation
      nav: {
        home: 'Accueil',
        services: 'Services',
        offers: 'Offres',
        specialties: 'Spécialités',
        team: 'Équipe',
        testimonials: 'Témoignages',
        contact: 'Contact',
        quickLinks: 'Liens rapides',
        contactUs: 'Contactez-nous'
      },
      
      // Common
      common: {
        years: 'Ans',
        projects: 'Projets',
        clients: 'Clients',
        support: 'Support',
        learnMore: 'En savoir plus',
        viewAll: 'Voir tout',
        readMore: 'Lire la suite',
        getInTouch: 'Contactez-nous',
        siteDescription: 'Sécuriser votre avenir numérique avec des solutions de développement avancées',
        sendMessage: 'Envoyer un message',
        name: 'Nom',
        email: 'Email',
        phone: 'Téléphone',
        message: 'Message',
        submit: 'Envoyer',
        loading: 'Chargement...',
        success: 'Succès !',
        error: 'Erreur !',
        close: 'Fermer',
        getStarted: 'Commencer'
      },
      
      // Hero Section
      hero: {
        tagline: 'Sécurité à la vitesse du développement',
        title1: 'Sécurisez Votre Avenir',
        title2: 'Avec SAFEDEV',
        description: 'Nous combinons des pratiques de sécurité de pointe avec des méthodologies de développement modernes pour fournir des solutions numériques robustes et résilientes aux organisations visionnaires.',
        ctaPrimary: 'Commencer',
        ctaSecondary: 'En savoir plus',
        stats: {
          experience: 'Années d\'expérience',
          projects: 'Projets Sécurisés',
          satisfaction: 'Satisfaction Client',
          support: 'Support 24/7'
        }
      },
      
      // Services Section
      services: {
        title: 'Nos Services',
        subtitle: 'Nous proposons des formations professionnelles payantes et internationales, en partenariat avec des centres de formation agréés à l\'échelle internationale. Nos programmes comprennent des stages pratiques et délivrent des attestations de stage reconnues.',
        customSolution: {
          title: 'Besoin d\'une solution de sécurité personnalisée ?',
          description: 'Notre équipe d\'experts peut concevoir une stratégie de sécurité sur mesure qui répond à vos défis et exigences spécifiques.',
          cta: 'Planifier une Consultation',
          features: [
            'Architecture de Sécurité Personnalisée',
            'Évaluation des Vulnérabilités',
            'Formation à la Sécurité',
            'Services de Sécurité Gérés'
          ]
        },
        items: {
          secureDev: {
            title: 'Développement Logiciel Sécurisé',
            description: 'Solutions logicielles personnalisées avec une approche de sécurité intégrée dès le premier jour. Nous construisons avec une mentalité axée sur la sécurité.'
          },
          securityAudits: {
            title: 'Audits de Sécurité',
            description: 'Analyse complète de vos systèmes existants pour identifier et remédier aux vulnérabilités de sécurité.'
          },
          devSecOps: {
            title: 'Mise en Œuvre DevSecOps',
            description: 'Intégrez les pratiques de sécurité tout au long de votre pipeline de développement pour une protection continue.'
          },
          incidentResponse: {
            title: 'Réponse aux Incidents',
            description: 'Support 24/7 pour répondre rapidement aux violations de sécurité et en atténuer les effets.'
          }
        }
      },
      
      // Team Section
      team: {
        title: 'Notre Équipe',
        subtitle: 'Notre équipe d\'experts en sécurité et en développement se consacre à protéger vos actifs numériques et à accélérer votre croissance.',
        members: {
          saif: {
            role: 'PDG & Co-Fondateur',
            bio: 'Expert en développement web avec une expérience avérée dans la création d\'applications web évolutives. Saif dirige nos stratégies de sécurité et veille à ce que toutes les solutions répondent aux normes les plus élevées du secteur tout en faisant progresser la vision de notre entreprise.'
          },
          chedy: {
            role: 'Développeur Principal IT',
            bio: 'Expert en développement avec une expertise approfondie dans les architectures logicielles complexes. Chedy guide notre équipe technique vers l\'excellence technique et l\'innovation.'
          },
          nawres: {
            role: 'Scrum Master',
            bio: 'Spécialiste des méthodologies agiles, Nawres assure une gestion de projet fluide et efficace. Il facilite la collaboration et maximise la productivité de l\'équipe.'
          },
          eric: {
            role: 'Responsable des Opérations',
            bio: 'Spécialiste des opérations avec un œil attentif à l\'efficacité et à la sécurité. Eric veille à ce que nos projets se déroulent sans heurts et en toute sécurité du début à la fin.'
          }
        },
        joinTeam: {
          tagline: 'Rejoignez Notre Équipe',
          title: 'Nous Recherchons Toujours des Talents',
          description: 'Êtes-vous passionné par la cybersécurité et le développement ? Rejoignez notre équipe d\'experts et aidez à construire des solutions sécurisées pour nos clients.',
          cta: 'Voir les Postes Ouverts',
          noPositions: 'Aucun poste disponible pour le moment. Veuillez réessayer plus tard !'
        }
      },
      
      // Contact Section
      contact: {
        title: 'Contactez-nous',
        subtitle: 'Vous avez des questions ou avez besoin d\'aide ? Contactez notre équipe pour un soutien expert.',
        getInTouch: 'Contactez-nous',
        workingHours: 'Heures d\'ouverture',
        sendMessage: 'Envoyez-nous un message',
        form: {
          name: 'Nom',
          email: 'Email',
          phone: 'Téléphone',
          subject: 'Sujet',
          message: 'Message',
          submit: 'Envoyer le message',
          success: 'Votre message a été envoyé avec succès !',
          error: 'Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer.',
          responseTime: 'Nous répondons généralement dans les 24 heures'
        },
        contactMethods: {
          email: 'Envoyez-nous un email',
          whatsapp: 'Contactez-nous via WhatsApp',
          phone: 'Appelez-nous',
          visit: 'Rendez-nous visite',
          hours: {
            weekdays: 'Lundi - Vendredi',
            weekdaysHours: '9h00 - 18h00',
            saturday: 'Samedi',
            saturdayHours: '10h00 - 14h00',
            sunday: 'Dimanche',
            closed: 'Fermé'
          }
        }
      },
      
      // Internship Offers Section
      specialties: {
        title: 'Nos Spécialités',
        subtitle: 'Domaines d\'Expertise',
        description: 'Découvrez notre gamme complète de spécialités informatiques conçues pour répondre à vos besoins métiers et stimuler l\'innovation.',
        footer: 'Notre équipe d\'experts est prête à vous aider dans ces différents domaines. Contactez-nous pour en savoir plus sur la manière dont nous pouvons vous accompagner.',
        items: {
          softwareDev: 'Développement Logiciel',
          ai: 'Intelligence Artificielle',
          cybersecurity: 'Cybersécurité',
          design: 'Conception',
          itManagement: 'Gestion IT',
          database: 'Bases de Données'
        }
      },
      
      internship: {
        title: 'Programmes de Stage',
        subtitle: 'Rejoignez nos programmes de stage et lancez votre carrière dans la technologie avec une expérience pratique et des opportunités de croissance professionnelle.',
        months: 'mois',
        duration: 'Durée',
        perMonth: 'total',
        mostPopular: 'Le Plus Populaire',
        applyNow: 'Postuler Maintenant',
        features: {
          internship: 'Stage pratique dans votre domaine',
          certification: 'Certification internationale à la fin du stage',
          attestation: 'Attestation de stage',
        },
        note: {
          title: 'Durée Flexible',
          description: 'Choisissez la durée de stage qui correspond à votre emploi du temps et à vos objectifs d\'apprentissage.'
        },
        applyTitle: 'Information de Candidature',
        applyMessage1: 'Le formulaire de demande de stage sera bientôt disponible.',
        applyMessage2: 'En attendant, vous pouvez nous envoyer un email avec votre candidature à :',
        mentionDuration: 'Veuillez mentionner la durée du stage :'
      },
      
      // Testimonials Section
      testimonials: {
        title: 'Témoignages Clients',
        subtitle: 'Découvrez ce que nos clients disent de nos solutions de sécurité et de développement.'
      }
    }
  },
  es: {
    translation: {
      // Chatbot
      chatbot: {
        welcome: '¡Hola! Soy el asistente de SAFEDEV. ¿En qué puedo ayudarte hoy? Para más información, puedes contactarnos en {{email}}',
        defaultResponse: '¿Cómo puedo ayudarte? Aquí tienes algunas sugerencias:',
        contactInfo: '📧 Correo electrónico: {{email}}\n📞 Teléfono: {{phone}}',
        suggestions: {
          offers: 'Ver ofertas de prácticas',
          services: 'Nuestros servicios',
          specialties: 'Nuestras especialidades',
          team: 'Nuestro equipo',
          contact: 'Contáctanos'
        },
        offers: {
          title: '📋 Nuestras Ofertas de Prácticas',
          note: '💡 Todas las ofertas incluyen certificado de prácticas y experiencia práctica.'
        },
        team: {
          contact: '\n📧 Contáctanos: {{email}}'
        }
      },
      
      // Navegación
      nav: {
        home: 'Inicio',
        services: 'Servicios',
        offers: 'Ofertas',
        specialties: 'Especialidades',
        team: 'Equipo',
        testimonials: 'Testimonios',
        contact: 'Contacto',
        quickLinks: 'Enlaces rápidos',
        contactUs: 'Contáctanos'
      },
      
      // Común
      common: {
        years: 'Años',
        projects: 'Proyectos',
        clients: 'Clientes',
        support: 'Soporte',
        learnMore: 'Saber más',
        viewAll: 'Ver todo',
        readMore: 'Leer más',
        getInTouch: 'Contáctanos',
        siteDescription: 'Aseguramos tu futuro digital con soluciones de desarrollo avanzadas',
        sendMessage: 'Enviar mensaje',
        name: 'Nombre',
        email: 'Correo electrónico',
        phone: 'Teléfono',
        message: 'Mensaje',
        submit: 'Enviar',
        loading: 'Cargando...',
        success: '¡Éxito!',
        error: '¡Error!',
        close: 'Cerrar',
        getStarted: 'Comenzar'
      },
      
      // Sección Hero
      hero: {
        tagline: 'Seguridad a la velocidad del desarrollo',
        title1: 'Asegura tu Futuro Digital',
        title2: 'con SAFEDEV',
        description: 'Combinamos prácticas de seguridad de vanguardia con metodologías de desarrollo modernas para ofrecer soluciones digitales robustas y resilientes para organizaciones visionarias.',
        ctaPrimary: 'Comenzar',
        ctaSecondary: 'Saber más',
        stats: {
          experience: 'Años de experiencia',
          projects: 'Proyectos asegurados',
          satisfaction: 'Satisfacción del cliente',
          support: 'Soporte disponible'
        }
      },
      
      // Sección de Servicios
      services: {
        title: 'Nuestros Servicios',
        siteDescription: 'Aseguramos tu futuro digital con soluciones de desarrollo avanzadas',
        subtitle: 'Ofrecemos programas profesionales de formación remunerada e internacional, en asociación con centros de formación acreditados internacionalmente. Nuestros programas incluyen prácticas profesionales y proporcionan certificados de prácticas reconocidos.',
        secureDev: {
          title: 'Desarrollo Seguro',
          description: 'Integramos seguridad en cada etapa del ciclo de vida del desarrollo para crear aplicaciones robustas y resistentes desde el principio.'
        },
        securityAudits: {
          title: 'Auditorías de Seguridad',
          description: 'Evaluaciones exhaustivas para identificar y corregir vulnerabilidades en sus aplicaciones e infraestructura.'
        },
        devSecOps: {
          title: 'DevSecOps',
          description: 'Automatización de la seguridad en las tuberías de CI/CD para una implementación segura y eficiente.'
        },
        incidentResponse: {
          title: 'Respuesta a Incidentes',
          description: 'Equipo de respuesta rápida para mitigar y recuperarse de incidentes de seguridad.'
        }
      },
      
      // Sección de Equipo
      team: {
        title: 'Nuestro Equipo',
        subtitle: 'Nuestro equipo de expertos en seguridad y desarrollo se dedica a proteger sus activos digitales y acelerar su crecimiento.',
        joinTeam: {
          tagline: 'Únete a Nuestro Equipo',
          title: 'Siempre Buscamos Talento',
          description: '¿Te apasiona la ciberseguridad y el desarrollo? Únete a nuestro equipo de expertos y ayuda a construir soluciones seguras para nuestros clientes.',
          cta: 'Ver Vacantes',
          noPositions: 'No hay vacantes disponibles en este momento. ¡Vuelve a consultar pronto!'
        },
        contact: {
          title: 'Envíanos un Mensaje',
          getInTouch: 'Contáctanos',
          emailUs: 'Escríbenos un correo',
          whatsapp: 'Contáctanos por WhatsApp',
          visitUs: 'Visítanos',
          workingHours: 'Horario de Atención',
          mondayToFriday: 'Lunes a Viernes',
          mondayToFridayHours: '9:00 - 18:00',
          saturday: 'Sábado',
          saturdayHours: '10:00 - 16:00',
          sunday: 'Domingo',
          closed: 'Cerrado',
          responseTime: 'Normalmente respondemos en 24 horas'
        },
        members: {
          saif: {
            name: 'Saif Eddine Yedes',
            role: 'CEO y Cofundador',
            bio: 'Experto en desarrollo web con un historial probado en la creación de aplicaciones web escalables. Saif dirige nuestras estrategias de seguridad y garantiza que todas las soluciones cumplan con los más altos estándares de la industria mientras impulsa la visión de nuestra empresa.'
          },
          clara: {
            name: 'Clara López',
            role: 'Diseñadora UX/UI',
            bio: 'Diseñadora creativa apasionada por crear experiencias de usuario intuitivas y hermosas. Clara da vida a nuestros proyectos con su experiencia en diseño, asegurando un equilibrio perfecto entre funcionalidad y estética.'
          },
          daniel: {
            name: 'Daniel García',
            role: 'Gerente de Operaciones',
            bio: 'Especialista en operaciones con amplia experiencia en optimización de procesos y seguridad. Daniel garantiza que nuestros proyectos se ejecuten sin problemas y de manera eficiente, manteniendo los más altos estándares de calidad y seguridad durante todo el ciclo de vida del desarrollo.'
          },
          chedy: {
            name: 'Chedy Soltani',
            role: 'Desarrollador Líder de TI',
            bio: 'Experto en desarrollo con amplia experiencia en arquitecturas de software complejas. Chedy guía a nuestro equipo técnico hacia la excelencia técnica y la innovación, asegurando que nuestras soluciones sean tanto robustas como vanguardistas.'
          }
        }
      },
      
      // Sección de Especialidades
      specialties: {
        title: 'Nuestras Especialidades',
        subtitle: 'Áreas de Especialización',
        description: 'Descubre nuestra gama completa de especialidades tecnológicas diseñadas para satisfacer las necesidades de tu negocio e impulsar la innovación.',
        footer: 'Nuestro equipo de expertos está listo para ayudarte en estas áreas. Contáctanos para obtener más información sobre cómo podemos apoyarte.',
        items: {
          softwareDev: 'Desarrollo de Software',
          ai: 'Inteligencia Artificial',
          cybersecurity: 'Ciberseguridad',
          design: 'Diseño',
          itManagement: 'Gestión de TI',
          database: 'Bases de Datos'
        }
      },
      
      // Sección de Prácticas
      internship: {
        title: 'Programas de Prácticas',
        subtitle: 'Únete a nuestros programas de prácticas y lanza tu carrera en tecnología con experiencia práctica y oportunidades de crecimiento profesional.',
        months: 'meses',
        duration: 'Duración',
        perMonth: 'total',
        mostPopular: 'Más Popular',
        applyNow: 'Aplicar Ahora',
        features: {
          internship: 'Prácticas en tu campo',
          certification: 'Certificación internacional al finalizar',
          attestation: 'Certificado de prácticas',
        },
        note: {
          title: 'Duración Flexible',
          description: 'Elige la duración que mejor se adapte a tu horario y objetivos de aprendizaje.'
        },
        applyTitle: 'Información de Solicitud',
        applyMessage1: 'El formulario de solicitud de prácticas estará disponible pronto.',
        applyMessage2: 'Mientras tanto, puedes enviarnos un correo electrónico con tu solicitud a:',
        mentionDuration: 'Por favor, menciona la duración de las prácticas:'
      },
      
      // Sección de Testimonios
      testimonials: {
        title: 'Lo que Dicen Nuestros Clientes',
        subtitle: 'Descubre por qué las empresas confían en nosotros para sus necesidades de desarrollo seguro.'
      },
      
      // Sección de Contacto
      contact: {
        title: 'Contáctanos',
        subtitle: '¿Listo para llevar la seguridad de tu organización al siguiente nivel? Completa el formulario y nos pondremos en contacto contigo lo antes posible.',
        getInTouch: 'Contáctanos',
        workingHours: 'Horario de Atención',
        sendMessage: 'Envíanos un Mensaje',
        form: {
          name: 'Nombre',
          email: 'Correo electrónico',
          phone: 'Teléfono',
          subject: 'Asunto',
          message: 'Mensaje',
          submit: 'Enviar mensaje',
          success: '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.',
          error: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.',
          responseTime: 'Normalmente respondemos en 24 horas'
        },
        contactMethods: {
          email: 'Escríbenos un correo',
          whatsapp: 'Contáctanos por WhatsApp',
          phone: 'Llámanos',
          visit: 'Visítanos',
          hours: {
            weekdays: 'Lunes a Viernes',
            saturday: 'Sábado',
            sunday: 'Domingo',
            closed: 'Cerrado',
            weekdaysHours: '9:00 - 18:00',
            saturdayHours: '10:00 - 16:00'
          }
        },
        info: {
          title: 'Información de Contacto',
          email: 'Correo electrónico',
          phone: 'Teléfono',
          address: 'Dirección',
          workingHours: 'Horario de Atención',
          hours: 'Lunes a Viernes: 9:00 - 18:00',
          location: 'Barcelona, España'
        },
        social: 'Síguenos en Redes Sociales'
      },
      
      // Pie de página
      footer: {
        about: 'Sobre Nosotros',
        aboutText: 'SAFEDEV es una empresa líder en soluciones de desarrollo seguro, comprometida con la protección de su futuro digital.',
        quickLinks: 'Enlaces Rápidos',
        contactUs: 'Contáctanos',
        rights: 'Todos los derechos reservados',
        privacy: 'Política de Privacidad',
        terms: 'Términos de Servicio',
        cookies: 'Política de Cookies'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
