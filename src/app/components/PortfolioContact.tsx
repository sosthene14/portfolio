import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, GitCommit } from 'lucide-react';
import useEmailSubmit from '../hooks/useSendEmail';

export const PortfolioContact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Me contacter</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour discuter de vos projets ou opportunités de collaboration
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Informations de contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-gray-700 font-medium mb-1">Email</h4>
                    <a href="mailto:mounsambotesosthene1@gmail.com" className="text-gray-600 hover:text-indigo-600 transition-colors">
                      mounsambotesosthene1@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="text-gray-700 font-medium mb-1">Téléphone</h4>
                    <a href="tel:+221773101160" className="text-gray-600 hover:text-indigo-600 transition-colors">
                      +221 773 101 160
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-gray-700 font-medium mb-1">Localisation</h4>
                    <p className="text-gray-600">
                      Liberté IV, Dakar, Sénégal
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <Globe size={18} />
                  </div>
                  <div>
                    <h4 className="text-gray-700 font-medium mb-1">Réseaux sociaux</h4>
                    <div className="flex space-x-3 mt-2">
                      <a target='blank' href="https://www.linkedin.com/in/sosthene-mounsambote-311171248" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-indigo-600 hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect x="2" y="9" width="4" height="12" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      </a>
                      <a target='blank' href="https://github.com/sosthene14" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-indigo-600 hover:text-white transition-colors">
                        <GitCommit size={16} />
                      </a>
                      <a target='blank' href="https://x.com/mounsambote_s" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-indigo-600 hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
        <ContactForm />
      </div>
        </div>
      </div>
    </section>
  );
};



const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const {submitEmail,loading} = useEmailSubmit()

  const handleChange = (e: { target: { id: any; value: any; }; }) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const res = await submitEmail(formData)

    if (res){
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }
  
  };

  return (
    <form className="bg-white rounded-xl shadow-lg p-8" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nom</label>
          <input 
            type="text" 
            id="name" 
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            placeholder="Votre nom"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
          <input 
            type="email" 
            id="email" 
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            placeholder="Votre email"
            required
          />
        </div>
      </div>
      
      <div className="mb-6">
        <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Sujet</label>
        <input 
          type="text" 
          id="subject" 
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
          placeholder="Sujet de votre message"
          required
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
        <textarea 
          id="message" 
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all resize-none"
          placeholder="Votre message"
          required
        ></textarea>
      </div>
      
      <button 
        disabled={loading}
        type="submit"
        className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-medium transition-colors"
      >
        {loading ? "Envoi en cours ...":" Envoyer le message"}
       
      </button>
    </form>
  );
};

