import React from 'react';
import { ArrowRight, Users, Award, TrendingUp, Sparkles } from 'lucide-react';

export default function Hero3({ aiContent }) {
    const defaultContent = {
        title: "RÉVOLUTIONNEZ VOTRE BUSINESS",
        subtitle: "La plateforme qui propulse les entreprises vers le succès",
        ctaText: "COMMENCER MAINTENANT",
        stats: [
            { icon: Users, value: "50K+", label: "Utilisateurs actifs" },
            { icon: TrendingUp, value: "300%", label: "Croissance moyenne" },
            { icon: Award, value: "#1", label: "Solution du marché" }
        ]
    };
    
    const content = aiContent || defaultContent;

    // Créer des stats par défaut si pas de contenu IA
    const stats = content.stats || defaultContent.stats;

    return (
        <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/50 to-pink-600/50"></div>
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                
                {/* Floating particles */}
                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 bg-white/20 rounded-full animate-ping"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 2}s`,
                                animationDuration: `${2 + Math.random() * 2}s`
                            }}
                        ></div>
                    ))}
                </div>
            </div>

            {/* Badge IA */}
            {aiContent && (
                <div className="absolute top-4 right-4 z-20">
                    <div className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                        <Sparkles className="h-3 w-3" />
                        Contenu IA
                    </div>
                </div>
            )}
            
            <div className="relative container mx-auto px-6 py-24 z-10">
                <div className="text-center max-w-5xl mx-auto">
                    {/* Main Content */}
                    <div className="mb-8">
                        <h1 className="text-5xl lg:text-8xl font-black mb-8 leading-none">
                            <span className="block animate-fade-in-up">
                                {content.title.split(' ').slice(0, -2).join(' ')}
                            </span>
                            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent animate-fade-in-up delay-200">
                                {content.title.split(' ').slice(-2).join(' ')}
                            </span>
                        </h1>
                    </div>
                    
                    <p className="text-2xl lg:text-3xl font-light mb-12 text-purple-100 animate-fade-in-up delay-300">
                        {content.subtitle}
                    </p>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {stats.map((stat, index) => {
                            const IconComponent = stat.icon || Users;
                            return (
                                <div key={index} className="text-center group animate-fade-in-up" style={{ animationDelay: `${400 + index * 100}ms` }}>
                                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-4 group-hover:bg-white/30 transition-all duration-300 transform group-hover:scale-110">
                                        <IconComponent className="h-8 w-8 mx-auto mb-2" />
                                    </div>
                                    <div className="text-3xl lg:text-4xl font-bold mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-purple-200 text-sm lg:text-base">
                                        {stat.label}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    
                    {/* CTA */}
                    <div className="space-y-6 animate-fade-in-up delay-700">
                        <button className="group bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black px-12 py-5 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-3 mx-auto">
                            {content.ctaText}
                            <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                        </button>
                        
                        <p className="text-purple-200 text-sm animate-pulse">
                            ✨ Aucune carte de crédit requise • Setup en 2 minutes
                        </p>
                    </div>

                    {/* Additional trust indicators */}
                    <div className="mt-16 pt-8 border-t border-white/20">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-60">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="h-8 bg-white/10 rounded animate-pulse" style={{ animationDelay: `${i * 200}ms` }}></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom gradient */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
    );
}