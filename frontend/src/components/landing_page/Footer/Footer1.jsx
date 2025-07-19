import React from 'react';
import { Mail, Phone, MapPin, Twitter, Facebook, Instagram, Globe, Linkedin } from 'lucide-react';

export default function Footer1({ aiContent }) {
  const defaultContent = {
    brandName: "MonSite",
    description: "Votre partenaire de confiance pour construire l'avenir numérique.",
    links: {
      company: ["À propos", "Notre équipe", "Carrières", "Actualités"],
      services: ["Services", "Solutions", "Consulting", "Support"],
      support: ["Centre d'aide", "Contact", "Confidentialité", "Conditions"]
    },
    contact: {
      email: "contact@exemple.com",
      phone: "+33 1 23 45 67 89"
    }
  };
  
  const content = aiContent || defaultContent;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Badge IA */}
        {aiContent && (
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
              ✨ Contenu personnalisé par IA
            </div>
          </div>
        )}

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">
                  {content.brandName.charAt(0).toUpperCase()}
                </span>
              </div>
              <span className="ml-3 text-2xl font-bold">
                {content.brandName}
              </span>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              {content.description}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>{content.contact.email}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="h-5 w-5 text-green-400" />
                <span>{content.contact.phone}</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-blue-300">Entreprise</h3>
            <ul className="space-y-4">
              {content.links.company.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-purple-300">Services</h3>
            <ul className="space-y-4">
              {(content.links.services || content.links.product || []).map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-green-300">Support</h3>
            <ul className="space-y-4">
              {content.links.support.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Social Media */}
            <div className="flex items-center gap-6">
              <span className="text-gray-400 font-medium">Suivez-nous :</span>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-800 rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Votre email..."
                className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 flex-1 lg:w-64"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-medium transition-all duration-200 whitespace-nowrap transform hover:scale-105">
                S'abonner
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} {content.brandName}. Tous droits réservés.
            </p>
            
            {aiContent && (
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Globe className="h-4 w-4" />
                <span>Contenu généré par IA • Personnalisé pour votre activité</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}