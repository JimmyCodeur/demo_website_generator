import React, { useState, useEffect } from "react";
import RealComponentPreview from '../components/RealComponentPreview';
import { ArrowLeft, Plus, Eye, Trash2, Calendar, Sparkles, AlertTriangle, Loader2 } from "lucide-react";

// Composant pour générer un aperçu miniature
const ComponentPreview = ({ pageId }) => {
    const [components, setComponents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchComponentsPreview();
    }, [pageId]);

    const fetchComponentsPreview = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/preview/${pageId}/components`);
            if (response.ok) {
                const data = await response.json();
                setComponents(data.components || []);
            }
        } catch (error) {
            console.error('Erreur preview:', error);
        } finally {
            setLoading(false);
        }
    };

    const getPreviewComponent = (componentName) => {
        const name = componentName.toLowerCase();
        
        if (name.includes('navbar') || name.includes('nav')) {
            return (
                <div className="bg-white border-b border-gray-200 p-2">
                    <div className="flex justify-between items-center">
                        <div className="w-12 h-2 bg-blue-500 rounded"></div>
                        <div className="flex gap-1">
                            <div className="w-8 h-1 bg-gray-300 rounded"></div>
                            <div className="w-8 h-1 bg-gray-300 rounded"></div>
                            <div className="w-8 h-1 bg-gray-300 rounded"></div>
                        </div>
                        <div className="w-10 h-2 bg-blue-500 rounded"></div>
                    </div>
                </div>
            );
        }
        
        if (name.includes('hero')) {
            return (
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 text-center">
                    <div className="w-20 h-2 bg-white bg-opacity-80 rounded mx-auto mb-2"></div>
                    <div className="w-16 h-1 bg-white bg-opacity-60 rounded mx-auto mb-2"></div>
                    <div className="w-12 h-2 bg-white rounded mx-auto"></div>
                </div>
            );
        }
        
        if (name.includes('feature')) {
            return (
                <div className="bg-gray-50 p-3">
                    <div className="w-16 h-1 bg-gray-600 rounded mx-auto mb-2"></div>
                    <div className="grid grid-cols-3 gap-1">
                        {[1,2,3].map(i => (
                            <div key={i} className="bg-white p-2 rounded text-center">
                                <div className="w-3 h-3 bg-blue-400 rounded-full mx-auto mb-1"></div>
                                <div className="w-6 h-0.5 bg-gray-400 rounded mx-auto"></div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }
        
        if (name.includes('testimonial')) {
            return (
                <div className="bg-white p-3">
                    <div className="w-16 h-1 bg-gray-600 rounded mx-auto mb-2"></div>
                    <div className="grid grid-cols-2 gap-1">
                        {[1,2].map(i => (
                            <div key={i} className="bg-gray-50 p-1 rounded">
                                <div className="w-8 h-0.5 bg-gray-400 rounded mb-1"></div>
                                <div className="flex items-center gap-1">
                                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                                    <div className="w-6 h-0.5 bg-gray-300 rounded"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }
        
        if (name.includes('footer')) {
            return (
                <div className="bg-gray-800 p-2">
                    <div className="grid grid-cols-4 gap-1 mb-1">
                        {[1,2,3,4].map(i => (
                            <div key={i} className="space-y-1">
                                <div className="w-6 h-0.5 bg-white bg-opacity-80 rounded"></div>
                                <div className="w-4 h-0.5 bg-white bg-opacity-40 rounded"></div>
                                <div className="w-5 h-0.5 bg-white bg-opacity-40 rounded"></div>
                            </div>
                        ))}
                    </div>
                    <div className="w-full h-0.5 bg-white bg-opacity-20 rounded"></div>
                </div>
            );
        }
        
        // Composant générique
        return (
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-3 text-center">
                <div className="w-4 h-4 bg-gray-400 rounded-full mx-auto mb-1"></div>
                <div className="w-12 h-1 bg-gray-500 rounded mx-auto"></div>
            </div>
        );
    };

    if (loading) {
        return (
            <div className="h-48 bg-gray-100 flex items-center justify-center">
                <Loader2 className="h-6 w-6 animate-spin text-gray-400" />
            </div>
        );
    }

    return (
        <div className="h-48 bg-gray-100 overflow-hidden">
            <div className="scale-75 origin-top-left transform -translate-x-2 -translate-y-2">
                {components.map((componentName, index) => (
                    <div key={index} className="border-b border-gray-200">
                        {getPreviewComponent(componentName)}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default function LandingPage() {
    const [generatedPages, setGeneratedPages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [deletingPageId, setDeletingPageId] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [pageToDelete, setPageToDelete] = useState(null);

    useEffect(() => {
        fetchGeneratedPages();
    }, []);

    const fetchGeneratedPages = async () => {
        try {
            setLoading(true);
            const response = await fetch("http://127.0.0.1:8000/generated-pages");
            const data = await response.json();
            setGeneratedPages(data.pages || []);
        } catch (error) {
            console.error("Erreur lors du chargement des pages:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDeletePage = async (pageId) => {
        try {
            setDeletingPageId(pageId);
            
            const response = await fetch(`http://127.0.0.1:8000/preview/${pageId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setGeneratedPages(prev => prev.filter(page => page.id !== pageId));
                console.log("✅ Page supprimée avec succès");
            } else {
                const errorData = await response.json();
                console.error("❌ Erreur lors de la suppression:", errorData);
                alert("Erreur lors de la suppression de la page");
            }
        } catch (error) {
            console.error("❌ Erreur réseau:", error);
            alert("Erreur de connexion lors de la suppression");
        } finally {
            setDeletingPageId(null);
            setShowDeleteModal(false);
            setPageToDelete(null);
        }
    };

    const confirmDelete = (page) => {
        setPageToDelete(page);
        setShowDeleteModal(true);
    };

    const handleGoBack = () => {
        window.location.href = "/";
    };

    const handleViewPreview = (pageId) => {
        window.location.href = `/preview/${pageId}`;
    };

    const formatDate = (timestamp) => {
        return new Date(timestamp * 1000).toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'short',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            {/* Header */}
            <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={handleGoBack}
                            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200 group"
                        >
                            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
                            <span className="font-medium">Retour au générateur</span>
                        </button>

                        <div className="flex items-center gap-3">
                            <Sparkles className="h-6 w-6 text-blue-600" />
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Mes Sites Générés
                            </h1>
                        </div>

                        <button
                            onClick={handleGoBack}
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 rounded-lg transition-all duration-200 shadow-md"
                        >
                            <Plus className="h-4 w-4" />
                            Nouveau site
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">
                {loading ? (
                    <div className="text-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                        <p className="text-gray-600">Chargement de vos créations...</p>
                    </div>
                ) : generatedPages.length === 0 ? (
                    <div className="text-center py-16">
                        <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Sparkles className="h-12 w-12 text-gray-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Aucun site créé pour le moment
                        </h2>
                        <p className="text-gray-600 mb-8 max-w-md mx-auto">
                            Commencez par créer votre premier site web avec notre générateur IA
                        </p>
                        <button
                            onClick={handleGoBack}
                            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg"
                        >
                            Créer mon premier site
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                Vos créations ({generatedPages.length})
                            </h2>
                            <p className="text-gray-600">
                                Cliquez sur un aperçu pour le visualiser en plein écran
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {generatedPages.map((page, index) => (
                                <div
                                    key={page.id}
                                    className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
                                >
                                    {/* Aperçu réel du site */}
                                    <div 
                                        className="relative cursor-pointer group"
                                        onClick={() => handleViewPreview(page.id)}
                                    >
                                        <ComponentPreview pageId={page.id} />
                                        
                                        {/* Overlay au hover */}
                                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center">
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white rounded-full p-3 shadow-lg">
                                                <Eye className="h-6 w-6 text-blue-600" />
                                            </div>
                                        </div>
                                        
                                        {/* Badge aperçu */}
                                        <div className="absolute top-2 left-2">
                                            <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                                                #{page.id.slice(0, 8)}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Card content */}
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="font-semibold text-gray-800">
                                                Site #{index + 1}
                                            </h3>
                                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                                                Généré par IA
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                                            <Calendar className="h-4 w-4" />
                                            <span>{formatDate(page.created_at)}</span>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <button
                                                onClick={() => handleViewPreview(page.id)}
                                                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 rounded-lg transition-colors text-sm font-medium"
                                            >
                                                <Eye className="h-4 w-4" />
                                                Voir en grand
                                            </button>

                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    confirmDelete(page);
                                                }}
                                                disabled={deletingPageId === page.id}
                                                className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                                title="Supprimer ce site"
                                            >
                                                {deletingPageId === page.id ? (
                                                    <div className="animate-spin h-4 w-4 border-2 border-red-600 border-t-transparent rounded-full"></div>
                                                ) : (
                                                    <Trash2 className="h-4 w-4" />
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* Modal de confirmation de suppression */}
            {showDeleteModal && pageToDelete && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-red-100 p-2 rounded-full">
                                <AlertTriangle className="h-6 w-6 text-red-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800">
                                Confirmer la suppression
                            </h3>
                        </div>
                        
                        <p className="text-gray-600 mb-6">
                            Êtes-vous sûr de vouloir supprimer ce site ? Cette action est irréversible.
                        </p>
                        
                        <div className="bg-gray-50 p-3 rounded-lg mb-6">
                            <p className="text-sm text-gray-600">
                                <strong>Site :</strong> #{pageToDelete.id.slice(0, 8)}...
                            </p>
                            <p className="text-sm text-gray-600">
                                <strong>Créé le :</strong> {formatDate(pageToDelete.created_at)}
                            </p>
                        </div>
                        
                        <div className="flex gap-3">
                            <button
                                onClick={() => {
                                    setShowDeleteModal(false);
                                    setPageToDelete(null);
                                }}
                                className="flex-1 px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                Annuler
                            </button>
                            <button
                                onClick={() => handleDeletePage(pageToDelete.id)}
                                disabled={deletingPageId === pageToDelete.id}
                                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {deletingPageId === pageToDelete.id ? (
                                    <>
                                        <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                                        Suppression...
                                    </>
                                ) : (
                                    <>
                                        <Trash2 className="h-4 w-4" />
                                        Supprimer
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}