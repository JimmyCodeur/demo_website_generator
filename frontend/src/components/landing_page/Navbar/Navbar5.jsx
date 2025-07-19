import React, { useState } from 'react';
import { Menu, X, ShoppingBag, Heart, Search, User } from 'lucide-react';

export default function Navbar5() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [cartCount] = useState(3);

    return (
        <nav className="bg-white border-b border-gray-100">
            <div className="container mx-auto px-4">
                {/* Top bar */}
                <div className="border-b border-gray-100 py-2">
                    <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center space-x-6 text-gray-600">
                            <span>Livraison gratuite dès 50€</span>
                            <span className="hidden md:inline">•</span>
                            <span className="hidden md:inline">Retours 30 jours</span>
                        </div>
                        <div className="flex items-center space-x-4 text-gray-600">
                            <a href="#" className="hover:text-gray-900 transition-colors">Aide</a>
                            <a href="#" className="hover:text-gray-900 transition-colors">Suivi</a>
                        </div>
                    </div>
                </div>
                
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full mr-3"></div>
                        <span className="text-2xl font-bold text-gray-900">Boutique</span>
                    </div>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
                            Nouveautés
                        </a>
                        <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
                            Femmes
                        </a>
                        <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
                            Hommes
                        </a>
                        <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
                            Accessoires
                        </a>
                        <a href="#" className="text-pink-600 font-medium">
                            Sale
                        </a>
                    </div>
                    
                    {/* Desktop Actions */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <button className="p-2 text-gray-600 hover:text-pink-600 transition-colors">
                            <Search className="h-5 w-5" />
                        </button>
                        <button className="p-2 text-gray-600 hover:text-pink-600 transition-colors">
                            <User className="h-5 w-5" />
                        </button>
                        <button className="p-2 text-gray-600 hover:text-pink-600 transition-colors">
                            <Heart className="h-5 w-5" />
                        </button>
                        <button className="relative p-2 text-gray-600 hover:text-pink-600 transition-colors">
                            <ShoppingBag className="h-5 w-5" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 w-5 h-5 bg-pink-500 text-white text-xs rounded-full flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                    </div>
                    
                    {/* Mobile Menu Button */}
                    <button 
                        className="lg:hidden p-2 text-gray-600 hover:text-pink-600"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
                
                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden border-t border-gray-100 py-4">
                        <div className="space-y-4">
                            {/* Search bar mobile */}
                            <div className="px-4">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                    <input 
                                        type="text" 
                                        placeholder="Rechercher..." 
                                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                    />
                                </div>
                            </div>
                            
                            {/* Navigation links */}
                            <div className="space-y-2">
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:text-pink-600 transition-colors font-medium">
                                    Nouveautés
                                </a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:text-pink-600 transition-colors font-medium">
                                    Femmes
                                </a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:text-pink-600 transition-colors font-medium">
                                    Hommes
                                </a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:text-pink-600 transition-colors font-medium">
                                    Accessoires
                                </a>
                                <a href="#" className="block px-4 py-2 text-pink-600 font-medium">
                                    Sale
                                </a>
                            </div>
                            
                            {/* Mobile actions */}
                            <div className="border-t border-gray-100 pt-4 px-4">
                                <div className="flex justify-around">
                                    <button className="flex flex-col items-center gap-1 text-gray-600 hover:text-pink-600 transition-colors">
                                        <User className="h-5 w-5" />
                                        <span className="text-xs">Compte</span>
                                    </button>
                                    <button className="flex flex-col items-center gap-1 text-gray-600 hover:text-pink-600 transition-colors">
                                        <Heart className="h-5 w-5" />
                                        <span className="text-xs">Favoris</span>
                                    </button>
                                    <button className="flex flex-col items-center gap-1 text-gray-600 hover:text-pink-600 transition-colors relative">
                                        <ShoppingBag className="h-5 w-5" />
                                        <span className="text-xs">Panier</span>
                                        {cartCount > 0 && (
                                            <span className="absolute -top-1 left-6 w-4 h-4 bg-pink-500 text-white text-xs rounded-full flex items-center justify-center">
                                                {cartCount}
                                            </span>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}