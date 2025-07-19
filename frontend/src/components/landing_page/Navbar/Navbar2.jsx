import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

export default function Navbar2() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* Top Bar */}
            <div className="bg-gray-900 text-white py-2">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center space-x-6">
                            <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                <span>+33 1 23 45 67 89</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                <span>contact@exemple.com</span>
                            </div>
                        </div>
                        <div className="hidden md:flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>Paris, France</span>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Main Navbar */}
            <nav className="bg-white shadow-md sticky top-0 z-50">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center py-4">
                        {/* Logo */}
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mr-3">
                                <span className="text-white font-bold text-xl">E</span>
                            </div>
                            <div>
                                <div className="text-xl font-bold text-gray-800">Entreprise</div>
                                <div className="text-xs text-gray-500">Solutions Pro</div>
                            </div>
                        </div>
                        
                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-8">
                            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors font-medium border-b-2 border-transparent hover:border-green-600 pb-1">
                                Accueil
                            </a>
                            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors font-medium border-b-2 border-transparent hover:border-green-600 pb-1">
                                Solutions
                            </a>
                            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors font-medium border-b-2 border-transparent hover:border-green-600 pb-1">
                                Secteurs
                            </a>
                            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors font-medium border-b-2 border-transparent hover:border-green-600 pb-1">
                                Ressources
                            </a>
                            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors font-medium border-b-2 border-transparent hover:border-green-600 pb-1">
                                Contact
                            </a>
                        </div>
                        
                        {/* Desktop CTA */}
                        <div className="hidden lg:flex items-center space-x-3">
                            <button className="text-green-600 hover:text-green-700 font-medium transition-colors">
                                Connexion
                            </button>
                            <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-6 py-2 rounded-full transition-all duration-300 font-medium shadow-lg">
                                Essai Gratuit
                            </button>
                        </div>
                        
                        {/* Mobile Menu Button */}
                        <button 
                            className="lg:hidden p-2 text-gray-600 hover:text-green-600"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                    
                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="lg:hidden border-t border-gray-200 py-4">
                            <div className="flex flex-col space-y-4">
                                <a href="#" className="text-gray-700 hover:text-green-600 transition-colors font-medium py-2">
                                    Accueil
                                </a>
                                <a href="#" className="text-gray-700 hover:text-green-600 transition-colors font-medium py-2">
                                    Solutions
                                </a>
                                <a href="#" className="text-gray-700 hover:text-green-600 transition-colors font-medium py-2">
                                    Secteurs
                                </a>
                                <a href="#" className="text-gray-700 hover:text-green-600 transition-colors font-medium py-2">
                                    Ressources
                                </a>
                                <a href="#" className="text-gray-700 hover:text-green-600 transition-colors font-medium py-2">
                                    Contact
                                </a>
                                <div className="pt-4 border-t border-gray-200 space-y-2">
                                    <button className="w-full text-green-600 hover:text-green-700 font-medium py-2 transition-colors">
                                        Connexion
                                    </button>
                                    <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-2 rounded-full font-medium">
                                        Essai Gratuit
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
}