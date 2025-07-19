import React from 'react';
import { ArrowRight, Play, Star, Users, Zap } from 'lucide-react';

export default function Hero1({ aiContent }) {
  const defaultContent = {
    title: "Transform Your Business with AI",
    subtitle: "Powerful solutions that drive growth and innovation for modern companies",
    ctaText: "Get Started",
    secondaryCtaText: "Watch Demo"
  };
  
  const content = aiContent || defaultContent;

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          {/* Badges */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-white">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <span>Trusted by 10,000+ companies</span>
            </div>
          </div>

          {/* Titre principal */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block">{content.title}</span>
          </h1>

          {/* Sous-titre */}
          <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            {content.subtitle}
          </p>

          {/* Boutons CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center gap-2">
              <span className="font-semibold text-lg">{content.ctaText}</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-200 flex items-center gap-2">
              <Play className="h-5 w-5" />
              <span className="font-semibold text-lg">{content.secondaryCtaText}</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="h-8 w-8 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">50K+</div>
              <div className="text-blue-200 text-sm">Active Users</div>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Zap className="h-8 w-8 text-yellow-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">300%</div>
              <div className="text-blue-200 text-sm">Growth Rate</div>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Star className="h-8 w-8 text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">#1</div>
              <div className="text-blue-200 text-sm">Market Leader</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}