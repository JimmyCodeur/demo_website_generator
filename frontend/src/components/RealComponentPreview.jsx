//fichier RealComponentPreview.jsx
import React, { useState, useEffect } from 'react';
import { Loader2, Eye } from 'lucide-react';

// Composant pour générer un aperçu miniature RÉEL
const RealComponentPreview = ({ pageId }) => {
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
                
                // Extraire les noms de composants réels
                const realComponents = data.imports.map(importLine => {
                    const match = importLine.match(/import\s+(\w+)\s+from/);
                    return match ? match[1] : null;
                }).filter(Boolean);
                
                setComponents(realComponents);
            }
        } catch (error) {
            console.error('Erreur preview:', error);
        } finally {
            setLoading(false);
        }
    };

    const getComponentPreview = (componentName) => {
        const name = componentName.toLowerCase();
        
        // Navbar previews basés sur les vrais composants
        if (name.includes('navbar')) {
            if (name.includes('navbar1')) {
                return (
                    <div className="bg-white border-b border-gray-200 p-2 shadow-sm">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded"></div>
                                <div className="w-8 h-1 bg-gray-800 rounded"></div>
                            </div>
                            <div className="flex gap-1">
                                <div className="w-6 h-0.5 bg-gray-400 rounded"></div>
                                <div className="w-6 h-0.5 bg-gray-400 rounded"></div>
                                <div className="w-6 h-0.5 bg-gray-400 rounded"></div>
                            </div>
                            <div className="w-8 h-1.5 bg-blue-600 rounded"></div>
                        </div>
                    </div>
                );
            } else if (name.includes('navbar2')) {
                return (
                    <div>
                        <div className="bg-gray-900 p-1">
                            <div className="flex justify-between text-xs">
                                <div className="w-12 h-0.5 bg-white rounded"></div>
                                <div className="w-8 h-0.5 bg-white rounded"></div>
                            </div>
                        </div>
                        <div className="bg-white border-b border-gray-200 p-2">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-1">
                                    <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
                                    <div className="w-10 h-1 bg-gray-800 rounded"></div>
                                </div>
                                <div className="flex gap-1">
                                    <div className="w-8 h-0.5 bg-gray-400 rounded border-b border-green-500"></div>
                                    <div className="w-8 h-0.5 bg-gray-400 rounded"></div>
                                </div>
                                <div className="w-10 h-1.5 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                );
            } else if (name.includes('navbar3')) {
                return (
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-1">
                                <div className="w-2 h-2 bg-white/30 rounded transform rotate-12"></div>
                                <div className="w-2 h-2 bg-white/50 rounded transform -rotate-12 -ml-1"></div>
                                <div className="w-10 h-1 bg-white rounded ml-1"></div>
                            </div>
                            <div className="flex gap-1">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="w-6 h-0.5 bg-white/80 rounded"></div>
                                ))}
                            </div>
                            <div className="w-8 h-1.5 bg-white rounded-full"></div>
                        </div>
                    </div>
                );
            } else if (name.includes('navbar4')) {
                return (
                    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
                        <div className="text-center py-0.5 border-b border-white/20">
                            <div className="flex items-center justify-center gap-1">
                                <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                                <div className="w-16 h-0.5 bg-white/80 rounded"></div>
                                <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                            </div>
                        </div>
                        <div className="p-2">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-1">
                                    <div className="w-2 h-2 bg-white/20 rounded flex items-center justify-center relative">
                                        <div className="w-0.5 h-0.5 bg-yellow-400 rounded-full absolute -top-0.5 -right-0.5"></div>
                                    </div>
                                    <div className="w-8 h-1 bg-white rounded"></div>
                                </div>
                                <div className="flex gap-1">
                                    <div className="w-6 h-0.5 bg-white/80 rounded"></div>
                                    <div className="w-6 h-0.5 bg-white/80 rounded"></div>
                                    <div className="w-6 h-0.5 bg-white/80 rounded"></div>
                                </div>
                                <div className="w-8 h-1.5 bg-white rounded-full"></div>
                            </div>
                        </div>
                    </div>
                );
            } else if (name.includes('navbar5')) {
                return (
                    <div className="bg-white">
                        <div className="border-b border-gray-100 py-0.5">
                            <div className="flex justify-between text-xs">
                                <div className="w-16 h-0.5 bg-gray-400 rounded"></div>
                                <div className="w-8 h-0.5 bg-gray-400 rounded"></div>
                            </div>
                        </div>
                        <div className="p-2 border-b border-gray-100">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-1">
                                    <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"></div>
                                    <div className="w-10 h-1 bg-gray-900 rounded"></div>
                                </div>
                                <div className="flex gap-1">
                                    <div className="w-8 h-0.5 bg-gray-400 rounded"></div>
                                    <div className="w-6 h-0.5 bg-pink-600 rounded"></div>
                                </div>
                                <div className="flex gap-0.5">
                                    <div className="w-1 h-1 bg-gray-400 rounded"></div>
                                    <div className="w-1 h-1 bg-gray-400 rounded"></div>
                                    <div className="w-1 h-1 bg-gray-400 rounded relative">
                                        <div className="w-0.5 h-0.5 bg-pink-500 rounded-full absolute -top-0.5 -right-0.5"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
            
            // Navbar générique si aucun match spécifique
            return (
                <div className="bg-white border-b border-gray-200 p-2">
                    <div className="flex justify-between items-center">
                        <div className="w-12 h-2 bg-gray-600 rounded"></div>
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
        
        // Hero previews
        if (name.includes('hero')) {
            if (name.includes('hero1')) {
                return (
                    <div className="bg-gradient-to-br from-blue-900 to-indigo-900 p-4 text-center text-white">
                        <div className="w-16 h-1 bg-blue-400 rounded mx-auto mb-1"></div>
                        <div className="w-20 h-2 bg-white bg-opacity-80 rounded mx-auto mb-2"></div>
                        <div className="w-16 h-1 bg-blue-100 rounded mx-auto mb-2"></div>
                        <div className="w-12 h-1.5 bg-blue-500 rounded mx-auto"></div>
                    </div>
                );
            } else if (name.includes('hero2')) {
                return (
                    <div className="bg-white p-3 flex gap-2">
                        <div className="flex-1">
                            <div className="w-16 h-1 bg-gray-800 rounded mb-1"></div>
                            <div className="w-20 h-1.5 bg-blue-600 rounded mb-2"></div>
                            <div className="w-14 h-0.5 bg-gray-400 rounded mb-1"></div>
                            <div className="w-8 h-1 bg-blue-500 rounded"></div>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded"></div>
                    </div>
                );
            } else if (name.includes('hero3')) {
                return (
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 text-center text-white">
                        <div className="w-20 h-2 bg-white bg-opacity-90 rounded mx-auto mb-1"></div>
                        <div className="w-16 h-2 bg-yellow-300 rounded mx-auto mb-2"></div>
                        <div className="grid grid-cols-3 gap-1 mb-2">
                            <div className="bg-white bg-opacity-20 rounded h-3 flex items-center justify-center">
                                <div className="text-xs font-bold">50K+</div>
                            </div>
                            <div className="bg-white bg-opacity-20 rounded h-3 flex items-center justify-center">
                                <div className="text-xs font-bold">300%</div>
                            </div>
                            <div className="bg-white bg-opacity-20 rounded h-3 flex items-center justify-center">
                                <div className="text-xs font-bold">#1</div>
                            </div>
                        </div>
                        <div className="w-14 h-1.5 bg-yellow-400 rounded mx-auto"></div>
                    </div>
                );
            }
            
            // Hero générique
            return (
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 text-center">
                    <div className="w-20 h-2 bg-white bg-opacity-80 rounded mx-auto mb-2"></div>
                    <div className="w-16 h-1 bg-white bg-opacity-60 rounded mx-auto mb-2"></div>
                    <div className="w-12 h-2 bg-white rounded mx-auto"></div>
                </div>
            );
        }
        
        // Features previews
        if (name.includes('feature')) {
            if (name.includes('features1')) {
                return (
                    <div className="bg-gray-50 p-3">
                        <div className="w-16 h-1 bg-gray-600 rounded mx-auto mb-2"></div>
                        <div className="grid grid-cols-3 gap-1">
                            {[1,2,3].map(i => (
                                <div key={i} className="bg-white p-1 rounded text-center shadow-sm">
                                    <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto mb-1"></div>
                                    <div className="w-6 h-0.5 bg-gray-400 rounded mx-auto"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            } else if (name.includes('features2')) {
                return (
                    <div className="bg-white p-3 flex gap-2">
                        <div className="flex-1 space-y-1">
                            <div className="w-12 h-1 bg-gray-600 rounded"></div>
                            <div className="w-16 h-1.5 bg-green-600 rounded"></div>
                            <div className="space-y-1">
                                <div className="flex gap-1 items-center">
                                    <div className="w-2 h-2 bg-green-500 rounded"></div>
                                    <div className="w-8 h-0.5 bg-gray-400 rounded"></div>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <div className="w-2 h-2 bg-blue-500 rounded"></div>
                                    <div className="w-8 h-0.5 bg-gray-400 rounded"></div>
                                </div>
                            </div>
                        </div>
                        <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded transform rotate-3"></div>
                    </div>
                );
            }
            
            // Features générique
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
        
        // Footer previews
        if (name.includes('footer')) {
            if (name.includes('footer1')) {
                return (
                    <div className="bg-gray-900 p-2">
                        <div className="grid grid-cols-4 gap-1 mb-1">
                            {[1,2,3,4].map(i => (
                                <div key={i} className="space-y-0.5">
                                    <div className="w-6 h-0.5 bg-white bg-opacity-80 rounded"></div>
                                    <div className="w-4 h-0.5 bg-white bg-opacity-40 rounded"></div>
                                    <div className="w-5 h-0.5 bg-white bg-opacity-40 rounded"></div>
                                </div>
                            ))}
                        </div>
                        <div className="w-full h-0.5 bg-white bg-opacity-20 rounded"></div>
                    </div>
                );
            } else if (name.includes('footer2')) {
                return (
                    <div className="bg-gradient-to-r from-purple-900 to-indigo-900 p-2">
                        <div className="text-center mb-1">
                            <div className="w-16 h-1.5 bg-gradient-to-r from-pink-400 to-yellow-400 rounded mx-auto mb-1"></div>
                            <div className="w-20 h-1 bg-purple-200 rounded mx-auto mb-1"></div>
                            <div className="w-10 h-1 bg-pink-500 rounded mx-auto"></div>
                        </div>
                        <div className="grid grid-cols-4 gap-1">
                            {[1,2,3,4].map(i => (
                                <div key={i} className="space-y-0.5">
                                    <div className="w-6 h-0.5 bg-purple-200 rounded"></div>
                                    <div className="w-4 h-0.5 bg-purple-300 rounded"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            }
            
            // Footer générique
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
        
        // Testimonials preview
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
                        {getComponentPreview(componentName)}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RealComponentPreview;