import React from 'react';
import { Heart, Coffee, Code, Globe, Mail, Phone } from 'lucide-react';

export default function Footer2({ aiContent }) {
    const defaultContent = {
        brandName: "MonEntreprise",
        description: "Votre partenaire de confiance pour votre transformation digitale",
        links: {
            company: ["À propos", "Carrières", "Presse", "Partenaires"],
            services: ["Fonctionnalités", "Tarifs", "Sécurité", "Intégrations"],
            support: ["Documentation", "Blog", "Communauté", "Support"]
        },
        contact: {
            email: "contact@exemple.com",
            phone: "+33 1 23 45 67 89"
        }
    };
    
    const content = aiContent || defaultContent;

    return (
        <footer className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>
            
            <div className="relative container mx-auto px-6 py-16">
                {/* Main Content avec contenu IA */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        Prêt à commencer avec
                        <span className="bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">
                            {" "}{content.brandName} ?
                        </span>
                    </h2>
                    <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
                        {content.description}
                    </p>
                    <button className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Commencer gratuitement
                    </button>
                </div>

                {/* Contact Info avec IA */}
                {content.contact && (
                    <div className="text-center mb-12">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <div className="flex items-center gap-3 text-purple-200">
                                <Mail className="h-5 w-5 text-pink-400" />
                                <span>{content.contact.email}</span>
                            </div>
                            <div className="flex items-center gap-3 text-purple-200">
                                <Phone className="h-5 w-5 text-yellow-400" />
                                <span>{content.contact.phone}</span>
                            </div>
                        </div>
                    </div>
                )}

                {/* Links Grid avec contenu IA */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {/* Entreprise */}
                    <div>
                        <h4 className="font-semibold mb-4 text-purple-200">Entreprise</h4>
                        <ul className="space-y-2">
                            {content.links.company.map((item, index) => (
                                <li key={index}>
                                    <a href="#" className="text-purple-300 hover:text-white transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold mb-4 text-purple-200">Services</h4>
                        <ul className="space-y-2">
                            {(content.links.services || content.links.product || []).map((item, index) => (
                                <li key={index}>
                                    <a href="#" className="text-purple-300 hover:text-white transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-semibold mb-4 text-purple-200">Support</h4>
                        <ul className="space-y-2">
                            {content.links.support.map((item, index) => (
                                <li key={index}>
                                    <a href="#" className="text-purple-300 hover:text-white transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Légal */}
                    <div>
                        <h4 className="font-semibold mb-4 text-purple-200">Légal</h4>
                        <ul className="space-y-2">
                            {['Confidentialité', 'Conditions', 'Cookies', 'RGPD'].map((item, index) => (
                                <li key={index}>
                                    <a href="#" className="text-purple-300 hover:text-white transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-purple-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-lg flex items-center justify-center">
                                <span className="text-black font-bold">
                                    {content.brandName.charAt(0).toUpperCase()}
                                </span>
                            </div>
                            <span className="text-xl font-bold">{content.brandName}</span>
                        </div>

                        <div className="flex items-center gap-6 text-purple-300">
                            <div className="flex items-center gap-2">
                                <Heart className="h-4 w-4 text-red-400" />
                                <span className="text-sm">Fait avec passion</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Coffee className="h-4 w-4 text-yellow-400" />
                                <span className="text-sm">Et beaucoup de café</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Code className="h-4 w-4 text-blue-400" />
                                <span className="text-sm">En France</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-purple-300 text-sm">
                            <Globe className="h-4 w-4" />
                            <span>© {new Date().getFullYear()} {content.brandName} • Tous droits réservés</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Badge IA si contenu personnalisé */}
            {aiContent && (
                <div className="absolute top-4 right-4">
                    <div className="bg-gradient-to-r from-pink-500/80 to-yellow-500/80 backdrop-blur-sm text-black px-3 py-1 rounded-full text-xs font-medium">
                        ✨ Contenu IA personnalisé
                    </div>
                </div>
            )}
        </footer>
    );
}