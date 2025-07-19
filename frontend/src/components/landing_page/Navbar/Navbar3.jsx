import React from 'react';
import { Menu, X, Sparkles, Star, Zap } from 'lucide-react';

export default function Navbar3({ aiContent }) {
  const [isOpen, setIsOpen] = React.useState(false);
  
  const defaultContent = {
    brandName: "Creative",
    navItems: ["Home", "Portfolio", "Services", "About", "Contact"],
    ctaText: "Get Quote"
  };
  
  const content = aiContent || defaultContent;

  return (
    <nav className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-pink-600/80"></div>
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-4 left-20 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-32 w-1 h-1 bg-yellow-300/50 rounded-full animate-bounce"></div>
        <div className="absolute bottom-4 left-1/3 w-1.5 h-1.5 bg-white/40 rounded-full animate-ping"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top announcement bar */}
        <div className="text-center py-2 border-b border-white/20">
          <div className="flex items-center justify-center gap-2 text-sm">
            <Sparkles className="h-4 w-4 text-yellow-300" />
            <span className="font-medium">🎉 New: AI-powered creative solutions!</span>
            <Sparkles className="h-4 w-4 text-yellow-300" />
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30">
                  <Zap className="h-6 w-6 text-yellow-300" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold tracking-tight">
                {content.brandName}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {content.navItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="relative px-4 py-2 text-white/90 hover:text-white transition-all duration-300 group"
                >
                  <span className="relative z-10 font-medium">{item}</span>
                  <div className="absolute inset-0 bg-white/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 backdrop-blur-sm"></div>
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="relative group bg-white text-purple-600 px-6 py-3 rounded-full font-bold hover:bg-yellow-300 hover:text-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              <span className="relative z-10">{content.ctaText}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-pink-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 text-white hover:bg-white/10 rounded-lg transition-all duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-purple-700/95 backdrop-blur-lg border-t border-white/20 z-50">
            <div className="px-4 py-4 space-y-3">
              {content.navItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-all duration-200 font-medium"
                >
                  {item}
                </a>
              ))}
              <button className="w-full mt-4 bg-white text-purple-600 px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition-all duration-300">
                {content.ctaText}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}