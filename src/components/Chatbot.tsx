import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { siteConfig } from '../data/site-data';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
};

// Messages du chatbot
const messages = {
  // French messages
  fr: {
    welcome: () => `Bonjour ! Je suis l'assistant SAFEDEV. Comment puis-je vous aider ?`,
    offers: {
      title: '📋 Nos Offres de Stage',
      list: '💰 2 mois - 200 TND / mois\n' +
            '🔥 3 mois - 250 TND / mois (Le plus populaire)\n' +
            '🔥 4 mois - 400 TND / mois (Le plus populaire)\n' +
            '💰 6 mois - 500 TND / mois',
      note: '💡 Toutes les offres incluent une attestation de stage et une expérience pratique'
    },
    team: {
      title: '👥 Notre Équipe',
      contact: (email: string) => `\n📧 Contact: ${email}`
    },
    specialties: {
      title: '🌟 Nos Spécialités',
      list: '🔹 Développement Logiciel\n' +
            '🔹 Intelligence Artificielle\n' +
            '🔹 Cybersécurité\n' +
            '🔹 Conception\n' + 
            '🔹 Gestion IT\n' +
            '🔹 Bases de Données'
    },
    services: {
      title: '🛠️ Nos Services',
      list: '🛡️ Développement Sécurisé\n' +
            '🔍 Audits de Sécurité\n' +
            '🔄 DevSecOps\n' +
            '🚨 Réponse aux Incidents',
      description: 'Nous proposons des solutions complètes pour sécuriser vos projets numériques.'
    },
    contact: {
      title: '📞 Contact',
      workingHours: '🕒 Lundi à Vendredi 9h-18h',
      email: 'Email',
      phone: 'Téléphone',
      address: 'Adresse'
    }
  },
  
  // Spanish messages
  es: {
    welcome: () => `¡Hola! Soy el asistente de SAFEDEV. ¿En qué puedo ayudarte?`,
    offers: {
      title: '📋 Nuestras Ofertas de Prácticas',
      list: '💰 2 meses - 200 DT / mes\n' +
            '🔥 3 meses - 250 DT / mes (Más popular)\n' +
            '🔥 4 meses - 350 DT / mes (Más popular)\n' +
            '💰 6 meses - 500 DT / mes',
      note: '💡 Todas las ofertas incluyen certificado de prácticas y experiencia práctica.'
    },
    team: {
      title: '👥 Nuestro Equipo',
      contact: (email: string) => `\n📧 Contacto: ${email}`
    },
    specialties: {
      title: '🌟 Nuestras Especialidades',
      list: '🔹 Desarrollo de Software\n' +
            '🔹 Inteligencia Artificial\n' +
            '🔹 Ciberseguridad\n' +
            '🔹 Diseño\n' + 
            '🔹 Gestión de TI\n' +
            '🔹 Bases de Datos'
    },
    services: {
      title: '🛠️ Nuestros Servicios',
      list: '🛡️ Desarrollo Seguro\n' +
            '🔍 Auditorías de Seguridad\n' +
            '🔄 DevSecOps\n' +
            '🚨 Respuesta a Incidentes',
      description: 'Ofrecemos soluciones integrales para asegurar tus proyectos digitales.'
    },
    contact: {
      title: '📞 Contacto',
      workingHours: '🕒 Lunes a Viernes 9h-18h',
      email: 'Correo electrónico',
      phone: 'Teléfono',
      address: 'Dirección'
    }
  },
  
  // English messages
  en: {
    welcome: () => `Hello! I'm the SAFEDEV assistant. How can I help you?`,
    offers: {
      title: '📋 Internship Offers',
      list: '💰 2 months - 200 DT / month\n' +
            '🔥 3 months - 250 DT / month (Most popular)\n' +
            '🔥 4 months - 350 DT / month (Most popular)\n' +
            '💰 6 months - 500 DT / month',
      note: '💡 All offers include internship certificate and practical experience'
    },
    team: {
      title: '👥 Our Team',
      contact: (email: string) => `\n📧 Contact: ${email}`
    },
    specialties: {
      title: '🌟 Our Specialties',
      list: '🔹 Software Development\n' +
            '🔹 Artificial Intelligence\n' +
            '🔹 Cybersecurity\n' +
            '🔹 Design\n' + 
            '🔹 IT Management\n' +
            '🔹 Database'
    },
    services: {
      title: '🛠️ Our Services',
      list: '🛡️ Secure Development\n' +
            '🔍 Security Audits\n' +
            '🔄 DevSecOps\n' +
            '🚨 Incident Response',
      description: 'We provide comprehensive solutions to secure your digital projects.'
    },
    contact: {
      title: '📞 Contact',
      workingHours: '🕒 Monday to Friday 9am-6pm',
      email: 'Email',
      phone: 'Phone',
      address: 'Address'
    }
  }
};

// Fonction pour calculer la distance de Levenshtein entre deux chaînes
const levenshteinDistance = (a: string, b: string): number => {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  const matrix = [];
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      const cost = a[j - 1] === b[i - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,     // Suppression
        matrix[i][j - 1] + 1,     // Insertion
        matrix[i - 1][j - 1] + cost // Substitution
      );
    }
  }
  return matrix[b.length][a.length];
};

// Fonction pour trouver le meilleur match avec tolérance aux fautes
export const findBestMatch = (input: string, options: string[], maxDistance: number = 2): string | null => {
  const inputLower = input.toLowerCase();
  
  // D'abord vérifier les correspondances exactes
  const exactMatch = options.find(option => 
    inputLower === option || inputLower.includes(option)
  );
  if (exactMatch) return exactMatch;
  
  // Ensuite, vérifier les correspondances partielles
  const partialMatch = options.find(option => 
    option.includes(inputLower) || inputLower.includes(option)
  );
  if (partialMatch) return partialMatch;
  
  // Enfin, utiliser la distance de Levenshtein pour les fautes de frappe
  let bestMatch: { word: string; distance: number } | null = null;
  
  for (const option of options) {
    const distance = levenshteinDistance(inputLower, option);
    if (distance <= maxDistance && (!bestMatch || distance < bestMatch.distance)) {
      bestMatch = { word: option, distance };
    }
  }
  
  return bestMatch ? bestMatch.word : null;
};

// Dictionnaire de mots-clés avec leurs variantes
const keywordVariants: Record<string, string[]> = {
  // Français
  'equipe': ['ekip', 'ekipe', 'lequipe', 'lequipe'],
  'offre': ['ofre', 'offr', 'ofr', 'offres'],
  'specialite': ['specialité', 'specialit', 'specialty', 'specialt'],
  'service': ['servis', 'services', 'servise', 'serv'],
  'contact': ['contat', 'contackt', 'kontakt', 'contacte', 'contacts'],
  'bonjour': ['bonjur', 'bonsoir', 'salut', 'slt', 'bjr', 'hello', 'hi', 'hey'],
  'salut': ['slt', 'hello', 'hi', 'hey'],
  
  // Anglais
  'team': ['tem', 'teem', 'teams', 'teammate'],
  'offer': ['ofer', 'offers', 'offre', 'offr'],
  'specialty': ['specialt', 'specialite', 'specialité', 'specialit'],
  'hello': ['hallo', 'hi', 'hey', 'bonjour', 'salut']
};

// Mots-clés français
const frenchKeywords = ['equipe', 'offre', 'specialite', 'service', 'contact', 'bonjour', 'salut'];

// Function to get the right message set based on keyword
const getMessageSet = (input: string) => {
  // Convertir l'input en minuscules et supprimer les espaces
  const cleanInput = input.toLowerCase().trim();
  
  // Vérifier d'abord les mots-clés français
  for (const keyword of frenchKeywords) {
    // Vérifier le mot-clé exact
    if (cleanInput === keyword) return messages.fr;
    
    // Vérifier si le mot-clé est contenu dans l'input
    if (cleanInput.includes(keyword)) return messages.fr;
    
    // Vérifier les variantes du mot-clé
    const variants = keywordVariants[keyword] || [];
    if (variants.some(variant => cleanInput.includes(variant))) {
      return messages.fr;
    }
  }
  
  // Vérifier les mots-clés espagnols
  const spanishKeywords = ['equipo', 'oferta', 'especialidad', 'servicio', 'contacto', 'hola'];
  for (const keyword of spanishKeywords) {
    if (cleanInput === keyword || cleanInput.includes(keyword)) {
      return messages.es;
    }
  }
  
  // Ensuite vérifier les mots-clés anglais
  const englishKeywords = ['team', 'offer', 'specialty', 'service', 'contact', 'hello', 'hi'];
  for (const keyword of englishKeywords) {
    if (cleanInput === keyword || cleanInput.includes(keyword)) {
      return messages.en;
    }
  }
  
  // Par défaut en anglais
  return messages.en;
};

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<Message[]>([
    { 
      id: 1, 
      text: 'Bonjour ! Comment puis-je vous aider ? / Hello! How can I help you?',
      sender: 'bot'
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const userInput = inputValue.trim().toLowerCase();
    if (!userInput) return;

    // Add user message
    const newUserMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user' as const,
    };

    setChatMessages(prev => [...prev, newUserMessage]);
    setInputValue('');

    // Generate bot response based on user input
    setTimeout(() => {
      const msg = getMessageSet(inputValue.toLowerCase());
      let botResponseText = '';
      
      // Check for different types of queries
      if (inputValue.match(/offre|stage|internship|offer/i)) {
        // Show internship offers
        botResponseText = `${msg.offers.title}\n\n${msg.offers.list}\n\n${msg.offers.note}`;
      } 
      else if (inputValue.match(/équipe|team|qui êtes-vous|qui etes-vous|who are you/i)) {
        // Show team information
        botResponseText = `${msg.team.title}\n\n` +
          siteConfig.team.map(member => `👤 ${member.name} - ${member.role}`).join('\n') + 
          msg.team.contact(siteConfig.contact.email);
      }
      else if (inputValue.match(/spécialité|specialt|expertise/i)) {
        // Show specialties information
        botResponseText = `${msg.specialties.title}\n\n${msg.specialties.list}`;
      }
      else if (inputValue.match(/service|what do you do|que faites-vous/i)) {
        // Show services information
        botResponseText = `${msg.services.title}\n\n${msg.services.list}`;
      }
      else if (inputValue.match(/contact|email|téléphone|phone/i)) {
        // Show contact information
        botResponseText = `${msg.contact.title}\n\n` +
          `📧 ${msg.contact.email}: ${siteConfig.contact.email}\n` +
          `📞 ${msg.contact.phone}: ${siteConfig.contact.phone}\n` +
          `📍 ${msg.contact.address}: ${siteConfig.contact.address}`;
      }
      else {
        // Default response
        botResponseText = msg.welcome();
      }
      
      const botResponse = {
        id: Date.now() + 1,
        text: botResponseText,
        sender: 'bot' as const,
      };

      setChatMessages(prev => [...prev, botResponse]);
    }, 500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-80 bg-white rounded-lg shadow-xl overflow-hidden flex flex-col h-[500px]">
          <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <h3 className="font-semibold">SAFEDEV Assistant</h3>
            <button 
              onClick={toggleChat}
              className="text-white hover:text-blue-200 transition-colors"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto bg-slate-50">
            <div className="space-y-4">
              {chatMessages.map((message) => {
                const isUser = message.sender === 'user';
                return (
                  <div 
                    key={message.id}
                    className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[80%] rounded-lg p-3 whitespace-pre-line ${
                        isUser 
                          ? 'bg-blue-600 text-white rounded-br-none' 
                          : 'bg-white border border-slate-200 rounded-bl-none'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <form onSubmit={handleSendMessage} className="p-4 border-t border-slate-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button 
                type="submit"
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
                aria-label="Send message"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-110"
          aria-label="Open chat"
        >
          <MessageSquare className="h-8 w-8" />
        </button>
      )}
    </div>
  );
};

export default Chatbot;
