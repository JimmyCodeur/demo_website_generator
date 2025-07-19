import React from 'react';
import { Zap, Shield, Rocket } from 'lucide-react';

export default function Features1({ aiContent }) {
  const defaultContent = {
    sectionTitle: "Nos Services",
    sectionSubtitle: "Des solutions adaptées à vos besoins",
    features: [
      {
        title: "Rapidité",
        description: "Performance optimisée pour une expérience utilisateur exceptionnelle"
      },
      {
        title: "Sécurité",
        description: "Protection de niveau entreprise avec 99.9% de disponibilité"
      },
      {
        title: "Innovation",
        description: "Technologies de pointe pour rester à l'avant-garde"
      }
    ]
  };
  
  const content = aiContent || defaultContent;
  const icons = [Zap, Shield, Rocket];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {content.sectionTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {content.sectionSubtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {content.features.map((feature, index) => {
            const IconComponent = icons[index % icons.length];
            return (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold text-lg">
            Découvrir tous nos services
          </button>
        </div>
      </div>
    </section>
  );
}