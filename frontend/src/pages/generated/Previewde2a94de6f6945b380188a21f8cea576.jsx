import React from "react";
import { ArrowLeft, Download, Share2, Edit, Info, Sparkles } from "lucide-react";
import Navbar5 from "../../components/landing_page/Navbar/Navbar5";
import HeroStandard from "../../components/landing_page/Heroes/HeroStandard";
import FeatureComponentsDark from "../../components/landing_page/Features/FeatureComponentsDark";
import PricingSection from "../../components/landing_page/PricingSection";
import FooterComponentsDarkLarge from "../../components/landing_page/Footer/FooterComponentsDarkLarge";

export default function Previewde2a94de6f6945b380188a21f8cea576() {
    const handleGoBack = () => {
        window.location.href = "/landing";
    };

    const handleBackToGenerator = () => {
        window.location.href = "/";
    };

    // Métadonnées du site généré avec IA
    const siteMetadata = {
        id: "de2a94de6f6945b380188a21f8cea576",
        prompt: "Je veux un site de voiture pour vendre des voiture d\'occasion de collection.",
        type: "Site Vitrine",
        style: "Classique",
        components: ['navbar5', 'herostandard', 'featurecomponentsdark', 'pricingsection', 'footercomponentsdarklarge'],
        generatedAt: "19/07/2025 à 07:14",
        componentsCount: 5,
        aiGenerated: true,
        contentPersonalized: true
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
                                    <Sparkles className="w-4 h-4 text-purple-600 animate-pulse" />
                                    <span className="text-sm font-medium text-gray-800">
                                        Site Vitrine - Classique
                                    </span>
                                    <div className="px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-medium rounded-full">
                                        Contenu IA
                                    </div>
                                </div>
                                <span className="text-xs text-gray-500">
                                    Généré le 19/07/2025 à 07:14
                                </span>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-2">
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
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-b border-purple-200 py-4">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <Sparkles className="h-4 w-4 text-purple-600" />
                                <span className="text-sm font-semibold text-purple-800">Prompt original :</span>
                                <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                                    5 composants personnalisés
                                </span>
                                <span className="px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-xs font-medium">
                                    Contenu IA
                                </span>
                            </div>
                            <p className="text-sm text-purple-600 italic">
                                "Je veux un site de voiture pour vendre des voiture d\'occasion de collection."
                            </p>
                        </div>
                        
                        <div className="flex items-center gap-4">
                            <div className="text-right">
                                <p className="text-xs text-gray-500">Structure :</p>
                                <p className="text-sm font-medium text-gray-700">
                                    Navigation → Hero Section → Features → Content Section → Footer
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contenu généré avec contenu personnalisé par IA */}
            <div className="relative">
                {/* Badge aperçu */}
                <div className="absolute top-4 left-4 z-40">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg flex items-center gap-2">
                        <Sparkles className="h-3 w-3" />
                        ✨ Aperçu #de2a94de - Contenu IA personnalisé
                    </div>
                </div>

                {/* Composants dans l'ordre logique avec contenu IA */}
                <div className="website-content">
                    <Navbar5 />
                    <HeroStandard />
                    <FeatureComponentsDark />
                    <PricingSection />
                    <FooterComponentsDarkLarge />
                </div>
            </div>

            {/* Footer avec métadonnées IA */}
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 border-t border-purple-200 py-4">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <Sparkles className="h-4 w-4 text-purple-600" />
                        <p className="text-sm font-medium text-purple-800">
                            Site généré automatiquement par IA avec contenu personnalisé
                        </p>
                    </div>
                    <p className="text-xs text-purple-600">
                        5 composants • Type: Site Vitrine • Style: Classique • Contenu adapté au contexte
                    </p>
                </div>
            </div>
        </div>
    );
}