import React from 'react';
import { CheckCircle, ArrowRight, Lightbulb, Target, TrendingUp, Shield } from 'lucide-react';

export default function Features2({ aiContent }) {
  const defaultContent = {
    sectionTitle: "Why Choose Us",
    sectionSubtitle: "Discover the advantages that set us apart from the competition",
    features: [
      {
        title: "Proven Results",
        description: "Track record of delivering measurable success for our clients"
      },
      {
        title: "Expert Team",
        description: "Skilled professionals with years of industry experience"
      },
      {
        title: "24/7 Support",
        description: "Round-the-clock assistance whenever you need help"
      }
    ]
  };
  
  const content = aiContent || defaultContent;
  const icons = [Lightbulb, Target, TrendingUp, Shield, CheckCircle, ArrowRight];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {content.sectionTitle}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {content.sectionSubtitle}
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-6">
              {content.features.map((feature, index) => {
                const IconComponent = icons[index % icons.length];
                return (
                  <div key={index} className="group flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
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

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-xl hover:from-green-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3">
                <span className="font-semibold text-lg">Learn More</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative">
            {/* Main Visual Element */}
            <div className="relative bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl p-8 transform rotate-3 hover:rotate-1 transition-transform duration-500">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">98%</div>
                    <div className="text-green-100 text-sm">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">24/7</div>
                    <div className="text-green-100 text-sm">Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">500+</div>
                    <div className="text-green-100 text-sm">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">5★</div>
                    <div className="text-green-100 text-sm">Rating</div>
                  </div>
                </div>

                {/* Progress Bars */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-white text-sm mb-1">
                      <span>Quality</span>
                      <span>95%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-white h-2 rounded-full w-[95%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-white text-sm mb-1">
                      <span>Speed</span>
                      <span>90%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-white h-2 rounded-full w-[90%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <CheckCircle className="h-8 w-8 text-yellow-800" />
            </div>
            
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <Target className="h-6 w-6 text-pink-800" />
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-10 right-10 w-32 h-32 bg-green-200 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-blue-200 rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}