import React from "react";
import { ArrowLeft, Download, Share2, Edit, Info } from "lucide-react";
import Navbar5 from "../../components/landing_page/Navbar/Navbar5";
import Hero3 from "../../components/landing_page/Heroes/Hero3";
import Features2 from "../../components/landing_page/Features/Features2";
import TestimonialsSection from "../../components/landing_page/TestimonialsSection";
import FooterComponentsDarkLarge from "../../components/landing_page/Footer/FooterComponentsDarkLarge";

export default function Preview1e946613639a45ac987e2f7f02223f84() {
    const handleGoBack = () => {
        window.location.href = "/landing";
    };

    const handleBackToGenerator = () => {
        window.location.href = "/";
    };

    // Métadonnées du site généré
    const siteMetadata = {
        id: "1e946613639a45ac987e2f7f02223f84",
        prompt: "site le plus complet possible",
        type: "Site Vitrine",
        style: "Classique",
        components: ['Navigation', 'Hero Section', 'Features', 'Testimonials', 'Footer'],
        generatedAt: "19/07/2025 à 06:57",
        componentsCount: 5
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header de contrôle amélioré */}
            <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-3">
                    <div className="flex items-center justify-between">
                        {/* Navigation */}
                        <div className="flex items-center gap-4">
                            <button
                                onClick={handleGoBack}
                                className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200 group"
                            >
                                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                                Retour à la galerie
                            </button>
                            
                            <div className="w-px h-6 bg-gray-300"></div>
                            
                            <button
                                onClick={handleBackToGenerator}
                                className="px-3 py-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
                            >
                                Nouveau site
                            </button>
                        </div>

                        {/* Info génération */}
                        <div className="flex items-center gap-3">
                            <div className="text-center">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-sm font-medium text-gray-800">
                                        Site Vitrine - Classique
                                    </span>
                                </div>
                                <span className="text-xs text-gray-500">
                                    Généré le 19/07/2025 à 06:57
                                </span>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-2">
                            <button 
                                className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200"
                                title="Informations du site"
                            >
                                <Info className="h-4 w-4" />
                                <span className="hidden sm:inline">Infos</span>
                            </button>
                            
                            <button className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200">
                                <Share2 className="h-4 w-4" />
                                <span className="hidden sm:inline">Partager</span>
                            </button>
                            
                            <button className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200">
                                <Download className="h-4 w-4" />
                                <span className="hidden sm:inline">Exporter</span>
                            </button>
                            
                            <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 rounded-lg transition-all duration-200 shadow-md">
                                <Edit className="h-4 w-4" />
                                <span className="hidden sm:inline">Éditer</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Badge prompt et métadonnées */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-blue-200 py-4">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-sm font-semibold text-blue-800">Prompt original :</span>
                                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                                    5 composants
                                </span>
                            </div>
                            <p className="text-sm text-blue-600 italic">
                                "site le plus complet possible"
                            </p>
                        </div>
                        
                        <div className="flex items-center gap-4">
                            <div className="text-right">
                                <p className="text-xs text-gray-500">Structure :</p>
                                <p className="text-sm font-medium text-gray-700">
                                    Navigation → Hero Section → Features → Testimonials → Footer
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contenu généré avec ordre professionnel */}
            <div className="relative">
                {/* Badge aperçu */}
                <div className="absolute top-4 left-4 z-40">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                        ✨ Aperçu #1e946613 - Site Vitrine
                    </div>
                </div>

                {/* Composants dans l'ordre logique */}
                <div className="website-content">
                    <Navbar5 />
                    <Hero3 />
                    <Features2 />
                    <TestimonialsSection />
                    <FooterComponentsDarkLarge />
                </div>
            </div>

            {/* Footer avec métadonnées */}
            <div className="bg-gray-100 border-t border-gray-200 py-4">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-xs text-gray-500">
                        Site généré automatiquement par IA • 5 composants • 
                        Type: Site Vitrine • Style: Classique
                    </p>
                </div>
            </div>
        </div>
    );
}