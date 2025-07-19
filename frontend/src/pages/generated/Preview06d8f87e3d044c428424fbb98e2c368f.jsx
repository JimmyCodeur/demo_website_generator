import React from "react";
import { ArrowLeft, Download, Share2, Edit, Sparkles, Bot, Zap } from "lucide-react";
import Navbar4 from "../../components/landing_page/Navbar/Navbar4";
import Hero3 from "../../components/landing_page/Hero/Hero3";
import Features1 from "../../components/landing_page/Features/Features1";
import Footer2 from "../../components/landing_page/Footer/Footer2";

export default function Preview06d8f87e3d044c428424fbb98e2c368f() {
    const handleGoBack = () => {
        window.location.href = "/landing";
    };

    const handleBackToGenerator = () => {
        window.location.href = "/";
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header avec indicateurs IA */}
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
                        
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1">
                                    <Bot className="h-4 w-4 text-purple-600" />
                                    <span className="text-xs font-medium text-purple-600">IA #1 Sélection</span>
                                </div>
                                <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                                <div className="flex items-center gap-1">
                                    <Zap className="h-4 w-4 text-blue-600" />
                                    <span className="text-xs font-medium text-blue-600">IA #2 Contenu</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                            <button className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200">
                                <Share2 className="h-4 w-4" />
                                Partager
                            </button>
                            
                            <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700 rounded-lg transition-all duration-200 shadow-md">
                                <Edit className="h-4 w-4" />
                                Éditer
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Info bar avec détails IA */}
            <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50 border-b border-purple-200 py-4">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-start gap-3">
                            <Sparkles className="h-5 w-5 text-purple-600 mt-0.5" />
                            <div>
                                <h3 className="font-semibold text-purple-800 mb-1">Prompt utilisateur</h3>
                                <p className="text-sm text-purple-600 italic">
                                    "Cree moi un site web de voiture d\'occasion. je suis le commerce VoitureAuto34 à Montpellier."
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                            <Bot className="h-5 w-5 text-blue-600 mt-0.5" />
                            <div>
                                <h3 className="font-semibold text-blue-800 mb-1">Analyse IA</h3>
                                <p className="text-sm text-blue-600">
                                    Site Vitrine • Classique • Grand public
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                            <Zap className="h-5 w-5 text-indigo-600 mt-0.5" />
                            <div>
                                <h3 className="font-semibold text-indigo-800 mb-1">Génération</h3>
                                <p className="text-sm text-indigo-600">
                                    4 composant(s) • Contenu personnalisé
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Badge flottant IA */}
            <div className="absolute top-20 left-4 z-40">
                <div className="bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg flex items-center gap-2">
                    <Bot className="h-4 w-4" />
                    Double IA • Généraliste
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
            </div>

            {/* Contenu généré */}
            <div className="website-content">
                    <Navbar4 aiContent={{"brandName": "VoitureAuto34", "navItems": ["Accueil", "Nos Voitures", "A Propos", "Contact"], "ctaText": "Prenez RDV"}} />
                    <Hero3 aiContent={{"title": "Trouvez votre voiture d'occasion idéale chez VoitureAuto34", "subtitle": "Voitures contrôlées et garanties, prix compétitifs et service client de qualité à Montpellier", "ctaText": "Parcourez nos véhicules", "secondaryCtaText": "Prenez rendez-vous"}} />
                    <Features1 aiContent={{"sectionTitle": "Nos Services Uniques", "sectionSubtitle": "Découvrez pourquoi VoitureAuto34 est votre meilleur choix pour les voitures d'occasion à Montpellier", "features": [{"title": "Grand choix de véhicules", "description": "Explorez une vaste sélection de véhicules d'occasion de qualité, adaptés à tous les budgets et préférences"}, {"title": "Inspection complète", "description": "Chaque véhicule est soigneusement inspecté par nos experts pour garantir votre sécurité et votre satisfaction"}, {"title": "Service client dédié", "description": "Notre équipe d'experts est à votre service pour répondre à vos questions et vous aider à trouver la voiture de vos rêves"}]}} />
                    <Footer2 aiContent={{"brandName": "VoitureAuto34", "description": "Votre partenaire de confiance pour l'achat de voitures d'occasion à Montpellier.", "links": {"company": ["À propos", "Notre équipe", "Carrières"], "services": ["Recherche de voiture", "Vente de voiture", "Evaluation de voiture"], "support": ["Contact", "FAQ", "Support"]}, "contact": {"email": "contact@voitureauto34.com", "phone": "+33 4 67 12 34 56"}}} />
            </div>

            {/* Footer d'information */}
            <div className="bg-gradient-to-r from-purple-100 via-blue-100 to-indigo-100 border-t border-purple-200 py-6">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <Bot className="h-5 w-5 text-purple-600" />
                            <Zap className="h-5 w-5 text-blue-600" />
                            <span className="font-semibold text-gray-800">Site généré par Double IA</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">
                            Composants sélectionnés automatiquement • Contenu personnalisé • 19/07/2025 à 08:44
                        </p>
                        <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
                            <span>IA #1: Sélection composants</span>
                            <span>•</span>
                            <span>IA #2: Génération contenu</span>
                            <span>•</span>
                            <span>ID: 06d8f87e...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}