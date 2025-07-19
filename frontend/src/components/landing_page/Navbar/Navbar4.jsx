import React, { useState } from 'react';
import { Menu, X, Zap, Star, Award } from 'lucide-react';

export default function Navbar4() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
            <div className="container mx-auto px-4">
                {/* Top notification bar */}
                <div className="text-center py-2 border-b border-white/20">
                    <div className="flex items-center justify-center gap-2 text-sm">
                        <Star className="h-4 w-4 text-yellow-400" />
                        <span>Nouveau : Fonctionnalité IA intégrée maintenant disponible !</span>
                        <Zap className="h-4 w-4 text-yellow-400" />
                    </div>
                </div>
                
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                                <Zap className="h-6 w-6 text-yellow-400" />
                            </div>
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                                <span className="text-xs font-bold text-gray-900">⚡</span>
                            </div>
                        </div>
                        <div>
                            <div className="text-xl font-bold">TechFlow</div>
                            <div className="text-xs text-purple-200">Powered by AI</div>
                        </div>
                    </div>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-6">
                        <a href="#" className="relative group px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300">
                            <span className="font-medium">Produits</span>
                            <div className="absolute -bottom-1 left-4 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-8"></div>
                        </a>
                        <a href="#" className="relative group px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300">
                            <span className="font-medium">Pricing</span>
                            <div className="absolute -bottom-1 left-4 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-8"></div>
                        </a>
                        <a href="#" className="relative group px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300">
                            <span className="font-medium">Docs</span>
                            <div className="absolute -bottom-1 left-4 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-8"></div>
                        </a>
                        <a href="#" className="relative group px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-1">
                            <Award className="h-4 w-4" />
                            <span className="font-medium">Enterprise</span>
                            <div className="absolute -bottom-1 left-4 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-20"></div>
                        </a>
                    </div>
                    
                    {/* Desktop Actions */}
                    <div className="hidden lg:flex items-center space-x-3">
                        <button className="text-white hover:text-yellow-400 transition-colors font-medium px-4 py-2">
                            Se connecter
                        </button>
                        <button className="bg-white text-purple-600 hover:bg-yellow-400 hover:text-gray-900 px-6 py-2 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                            Essayer gratuitement
                        </button>
                    </div>
                    
                    {/* Mobile Menu Button */}
                    <button 
                        className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
                
                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden border-t border-white/20 py-4">
                        <div className="space-y-2">
                            <a href="#" className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-colors font-medium">
                                Produits
                            </a>
                            <a href="#" className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-colors font-medium">
                                Pricing
                            </a>
                            <a href="#" className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-colors font-medium">
                                Docs
                            </a>
                            <a href="#" className="flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors font-medium">
                                <Award className="h-4 w-4" />
                                Enterprise
                            </a>
                            <div className="pt-4 border-t border-white/20 space-y-2">
                                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-white/10 transition-colors font-medium">
                                    Se connecter
                                </button>
                                <button className="w-full bg-white text-purple-600 py-3 rounded-lg font-bold shadow-lg">
                                    Essayer gratuitement
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}