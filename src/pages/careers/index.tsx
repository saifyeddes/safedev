import React, { useState, useRef, ChangeEvent, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const CareersPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cv: null as File | null,
    coverLetter: null as File | null,
    comments: '',
    consent: false
  });
  
  const [fileNames, setFileNames] = useState({
    cv: 'Aucun fichier sélectionné',
    coverLetter: 'Aucun fichier sélectionné'
  });
  
  const cvInputRef = useRef<HTMLInputElement>(null);
  const coverLetterInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>, field: 'cv' | 'coverLetter') => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFormData(prev => ({
        ...prev,
        [field]: file
      }));
      
      setFileNames(prev => ({
        ...prev,
        [field]: file.name
      }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.cv || !formData.consent) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Show success message
    alert('Formulaire soumis avec succès! Nous reviendrons vers vous rapidement.');
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      cv: null,
      coverLetter: null,
      comments: '',
      consent: false
    });
    
    setFileNames({
      cv: 'Aucun fichier sélectionné',
      coverLetter: 'Aucun fichier sélectionné'
    });
    
    if (cvInputRef.current) cvInputRef.current.value = '';
    if (coverLetterInputRef.current) coverLetterInputRef.current.value = '';
  };

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl font-bold mb-4">Rejoignez notre équipe d'experts</h2>
            <p className="text-xl mb-6">Nous recherchons des talents passionnés par l'innovation technologique.</p>
            <div className="flex space-x-4">
              <button 
                className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-100 transition"
                onClick={() => navigate('/')}
              >
                Nos offres
              </button>
              <button 
                className="border border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition"
                onClick={() => window.scrollTo({ top: document.getElementById('application-form')?.offsetTop, behavior: 'smooth' })}
              >
                Postuler maintenant
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Équipe SAFEDEV" 
              className="rounded-lg shadow-2xl max-w-md w-full animate-float"
            />
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Formulaire de candidature</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Postulez pour rejoindre notre équipe dynamique. Nous examinerons votre candidature avec attention.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-xl shadow-md">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Nom*</label>
                <input 
                  type="text" 
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Votre nom" 
                  required
                />
              </div>
              <div>
                <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">Prénom*</label>
                <input 
                  type="text" 
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Votre prénom" 
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email*</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="votre@email.com" 
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Téléphone</label>
                <input 
                  type="tel" 
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Votre numéro de téléphone"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-gray-700 font-medium mb-2">CV*</label>
                <label 
                  htmlFor="cv" 
                  className="file-input-label cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-8 bg-white hover:bg-gray-100 transition-colors"
                >
                  <i className="fas fa-file-pdf text-4xl text-red-500 mb-2"></i>
                  <span className="text-gray-600">Glissez-déposez votre CV ou</span>
                  <span className="text-blue-600 font-medium">{fileNames.cv}</span>
                  <input 
                    type="file" 
                    id="cv" 
                    ref={cvInputRef}
                    onChange={(e) => handleFileChange(e, 'cv')}
                    className="hidden" 
                    accept=".pdf,.doc,.docx" 
                    required
                  />
                </label>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Lettre de motivation</label>
                <label 
                  htmlFor="coverLetter" 
                  className="file-input-label cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-8 bg-white hover:bg-gray-100 transition-colors"
                >
                  <i className="fas fa-file-word text-4xl text-blue-500 mb-2"></i>
                  <span className="text-gray-600">Glissez-déposez votre lettre ou</span>
                  <span className="text-blue-600 font-medium">{fileNames.coverLetter}</span>
                  <input 
                    type="file" 
                    id="coverLetter" 
                    ref={coverLetterInputRef}
                    onChange={(e) => handleFileChange(e, 'coverLetter')}
                    className="hidden" 
                    accept=".pdf,.doc,.docx"
                  />
                </label>
              </div>
            </div>

            <div className="mb-8">
              <label htmlFor="comments" className="block text-gray-700 font-medium mb-2">Commentaires</label>
              <textarea 
                id="comments" 
                name="comments"
                value={formData.comments}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Dites-nous pourquoi vous souhaitez nous rejoindre..."
              ></textarea>
            </div>

            <div className="flex items-center mb-6">
              <input 
                type="checkbox" 
                id="consent" 
                name="consent"
                checked={formData.consent}
                onChange={handleInputChange}
                className="mr-2" 
                required 
              />
              <label htmlFor="consent" className="text-gray-600">
                J'autorise SAFEDEV à utiliser mes données personnelles conformément à leur politique de confidentialité.
              </label>
            </div>

            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition shadow-lg"
            >
              Envoyer ma candidature
              <i className="fas fa-paper-plane ml-2"></i>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
