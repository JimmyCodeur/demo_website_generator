import React from "react";
import { ArrowLeft, Download, Share2, Edit, Sparkles, Bot, Zap } from "lucide-react";
import Navbar4 from "../../components/landing_page/Navbar/Navbar4";
import Hero2 from "../../components/landing_page/Heroes/Hero2";
import Features1 from "../../components/landing_page/Features/Features1";
import Footer2 from "../../components/landing_page/Footer/Footer2";

export default function Previewb3fe2e732325474fb289f72988443ffb() {
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
                                    "Genere moi un site de voiture de vente de voiture de colletion à montpellier"
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                            <Bot className="h-5 w-5 text-blue-600 mt-0.5" />
                            <div>
                                <h3 className="font-semibold text-blue-800 mb-1">Analyse IA</h3>
                                <p className="text-sm text-blue-600">
                                    E-commerce • Classique • Grand public
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
                    Double IA • Commerce
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
            </div>

            {/* Contenu généré */}
            <div className="website-content">
                    <Navbar4 aiContent={{"brandName": "Collection Auto 34", "navItems": ["Accueil", "Nos Voitures", "A propos", "Contact"], "ctaText": "Acheter maintenant"}} />
                    <Hero2 aiContent={{"title": "Trouvez la voiture de collection de vos rêves à Montpellier", "subtitle": "Des véhicules rares, en parfait état, prêts à enrichir votre collection", "ctaText": "Explorez notre collection", "secondaryCtaText": "En savoir plus"}} />
                    <Features1 aiContent={{"sectionTitle": "Nos Services Exclusifs", "sectionSubtitle": "Découvrez ce qui fait de nous le meilleur choix pour votre passion des voitures de collection", "features": [{"title": "Sélection Rigoureuse", "description": "Chaque voiture est minutieusement sélectionnée pour sa qualité et son authenticité, vous garantissant l'achat le plus fiable."}, {"title": "Livraison à Domicile", "description": "Profitez de notre service de livraison sécurisé et fiable, directement à votre porte, où que vous soyez à Montpellier."}, {"title": "Service Après-Vente Dédié", "description": "Nous sommes à vos côtés même après l'achat, offrant un support et des conseils d'experts pour l'entretien de votre véhicule de collection."}]}} />
                    <Footer2 aiContent={{"brandName": "Montpellier Vintage Cars", "description": "Spécialiste de la vente de voitures de collection à Montpellier depuis 1995", "links": {"company": ["À propos", "Notre équipe", "Carrières"], "services": ["Nos voitures", "Entretien de collection", "Restauration de véhicules"], "support": ["Contact", "FAQ", "Support"]}, "contact": {"email": "contact@montpellier-vintagecars.com", "phone": "+33 4 67 12 34 56"}}} />
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
                            Composants sélectionnés automatiquement • Contenu personnalisé • 19/07/2025 à 07:54
                        </p>
                        <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
                            <span>IA #1: Sélection composants</span>
                            <span>•</span>
                            <span>IA #2: Génération contenu</span>
                            <span>•</span>
                            <span>ID: b3fe2e73...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}