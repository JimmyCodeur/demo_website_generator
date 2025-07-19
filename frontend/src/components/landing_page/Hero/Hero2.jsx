import React from 'react';
import { CheckCircle, ArrowRight, Zap, Play } from 'lucide-react';

export default function Hero2({ aiContent }) {
    const defaultContent = {
        title: "La solution complète pour votre entreprise",
        subtitle: "Automatisez vos processus, optimisez vos performances et développez votre business avec notre suite d'outils intégrés.",
        ctaText: "Essai gratuit 14 jours",
        secondaryCtaText: "Planifier une démo",
        features: [
            "Setup en 5 minutes",
            "Support 24/7", 
            "Intégrations illimitées"
        ],
        badge: "Nouveau : IA intégrée"
    };
    
    const content = aiContent || defaultContent;

    return (
        <div className="bg-white relative overflow-hidden">
            {/* Badge IA */}
            {aiContent && (
                <div className="absolute top-4 right-4 z-10">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        ✨ Contenu IA personnalisé
                    </div>
                </div>
            )}

            <div className="container mx-auto px-6 py-20 lg:py-28">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                            <Zap className="h-4 w-4" />
                            {content.badge || "Nouveau : IA intégrée"}
                        </div>
                        
                        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            {content.title}
                        </h1>
                        
                        <p className="text-xl text-gray-600 leading-relaxed">
                            {content.subtitle}
                        </p>
                        
                        {/* Features List */}
                        <div className="space-y-4">
                            {(content.features || defaultContent.features).map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                    <span className="text-gray-700 font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                        
                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                {content.ctaText}
                                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 text-gray-700 px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2">
                                <Play className="h-4 w-4" />
                                {content.secondaryCtaText}
                            </button>
                        </div>

                        {/* Trust indicators */}
                        <div className="pt-6 border-t border-gray-200">
                            <p className="text-sm text-gray-500 mb-3">Utilisé par des milliers d'entreprises :</p>
                            <div className="flex items-center gap-8 opacity-60">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-20 h-8 bg-gray-200 rounded"></div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    {/* Visual */}
                    <div className="relative">
                        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 shadow-2xl transform rotate-2 hover:rotate-1 transition-transform duration-300">
                            <div className="bg-white rounded-lg p-6 space-y-6 transform -rotate-1">
                                {/* Header */}
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold">
                                            {(content.title?.charAt(0) || 'S').toUpperCase()}
                                        </span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="h-3 bg-gray-200 rounded w-32 mb-2"></div>
                                        <div className="h-2 bg-gray-100 rounded w-20"></div>
                                    </div>
                                </div>

                                {/* Content simulation */}
                                <div className="space-y-3">
                                    <div className="h-2 bg-gray-200 rounded"></div>
                                    <div className="h-2 bg-gray-200 rounded w-4/5"></div>
                                    <div className="h-2 bg-gray-200 rounded w-3/5"></div>
                                </div>

                                {/* Cards simulation */}
                                <div className="grid grid-cols-3 gap-3">
                                    <div className="h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                                        <div className="w-6 h-6 bg-blue-500 rounded"></div>
                                    </div>
                                    <div className="h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                                        <div className="w-6 h-6 bg-green-500 rounded"></div>
                                    </div>
                                    <div className="h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center">
                                        <div className="w-6 h-6 bg-purple-500 rounded"></div>
                                    </div>
                                </div>

                                {/* Progress bar */}
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs text-gray-500">
                                        <span>Progression</span>
                                        <span>85%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full w-4/5"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Floating Elements */}
                        <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg animate-bounce">
                            <CheckCircle className="h-6 w-6" />
                        </div>
                        <div className="absolute -bottom-4 -left-4 bg-yellow-500 text-white p-3 rounded-full shadow-lg animate-pulse">
                            <Zap className="h-6 w-6" />
                        </div>

                        {/* Background decoration */}
                        <div className="absolute inset-0 -z-10">
                            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-2xl"></div>
                            <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-200 rounded-full opacity-20 blur-2xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}