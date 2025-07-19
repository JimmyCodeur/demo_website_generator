import React from "react";
import { ArrowLeft, Download, Share2, Edit, Sparkles } from "lucide-react";
import Navbar1 from "../../components/landing_page/Navbar/Navbar1";
import Hero3 from "../../components/landing_page/Heroes/Hero3";
import Features2 from "../../components/landing_page/Features/Features2";
import TestimonialsSection from "../../components/landing_page/TestimonialsSection";
import FooterComponentsDarkLarge from "../../components/landing_page/Footer/FooterComponentsDarkLarge";

export default function Preview5e6b6ca881b647a3953feb287750a459() {
    const handleGoBack = () => {
        window.location.href = "/landing";
    };

    const handleBackToGenerator = () => {
        window.location.href = "/";
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-3">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={handleGoBack}
                            className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200 group"
                        >
                            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                            Retour à la galerie
                        </button>
                        
                        <div className="flex items-center gap-2">
                            <Sparkles className="h-4 w-4 text-purple-600" />
                            <span className="text-sm font-medium text-gray-800">
                                Site Vitrine - Contenu IA
                            </span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                            <button className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200">
                                <Share2 className="h-4 w-4" />
                                Partager
                            </button>
                            
                            <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 rounded-lg transition-all duration-200 shadow-md">
                                <Edit className="h-4 w-4" />
                                Éditer
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Info bar */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-b border-purple-200 py-4">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <Sparkles className="h-4 w-4 text-purple-600" />
                                <span className="text-sm font-semibold text-purple-800">Prompt :</span>
                                <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                                    Contenu IA personnalisé
                                </span>
                            </div>
                            <p className="text-sm text-purple-600 italic">
                                "site de voiture de collection"
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contenu généré */}
            <div className="relative">
                <div className="absolute top-4 left-4 z-40">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg flex items-center gap-2">
                        <Sparkles className="h-3 w-3" />
                        Aperçu #5e6b6ca8 - Contenu IA
                    </div>
                </div>

                <div className="website-content">
                    <Navbar1 />
                    <Hero3 />
                    <Features2 />
                    <TestimonialsSection />
                    <FooterComponentsDarkLarge />
                </div>
            </div>

            {/* Footer */}
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 border-t border-purple-200 py-4">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                        <Sparkles className="h-4 w-4 text-purple-600" />
                        <p className="text-sm font-medium text-purple-800">
                            Site généré automatiquement par IA - 19/07/2025 à 07:28
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}