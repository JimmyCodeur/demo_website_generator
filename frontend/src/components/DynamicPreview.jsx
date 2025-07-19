import React, { useState, useEffect, Suspense } from 'react';
import { AlertCircle, Loader2, Bot, Zap } from 'lucide-react';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

// Fonction pour créer un composant de fallback
const createFallbackComponent = (componentName) => {
  return ({ aiContent }) => (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 p-8 text-center">
      <div className="max-w-md mx-auto">
        <Bot className="h-12 w-12 text-blue-600 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-blue-800 mb-2">
          {componentName}
        </h3>
        <p className="text-blue-700 text-sm mb-4">
          Composant en cours de chargement...
        </p>
        {aiContent && (
          <div className="bg-purple-100 p-3 rounded-lg text-xs text-purple-700">
            <strong>✨ Contenu IA disponible:</strong>
            <pre className="mt-2 text-left overflow-auto">
              {JSON.stringify(aiContent, null, 2)}
            </pre>
          </div>
        )}
        <div className="mt-4">
          <div className="animate-pulse bg-blue-200 h-2 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

// Fonction pour créer des composants lazy avec fallback amélioré
const createLazyComponent = (importPath, componentName) => {
  return React.lazy(() =>
    import(importPath)
      .then(module => {
        console.log(`✅ Composant chargé: ${componentName}`);
        return module;
      })
      .catch(error => {
        console.warn(`⚠️ Fallback pour ${componentName}:`, error.message);
        return {
          default: createFallbackComponent(componentName)
        };
      })
  );
};

// Mapping des composants
const COMPONENT_MAP = {
  // Navbars
  'Navbar1': createLazyComponent('../components/landing_page/Navbar/Navbar1.jsx', 'Navbar1'),
  'Navbar3': createLazyComponent('../components/landing_page/Navbar/Navbar3.jsx', 'Navbar3'),
  
  // Heroes
  'Hero1': createLazyComponent('../components/landing_page/Hero/Hero1.jsx', 'Hero1'),
  'Hero2': createLazyComponent('../components/landing_page/Hero/Hero2.jsx', 'Hero2'),
  'Hero3': createLazyComponent('../components/landing_page/Hero/Hero3.jsx', 'Hero3'),
  'HeroSection': createLazyComponent('../components/landing_page/Hero/Hero1.jsx', 'Hero1'),
  'HeroBanner': createLazyComponent('../components/landing_page/Hero/Hero2.jsx', 'Hero2'),
  'MainBanner': createLazyComponent('../components/landing_page/Hero/Hero3.jsx', 'Hero3'),
  
  // Features
  'Features1': createLazyComponent('../components/landing_page/Features/Features1.jsx', 'Features1'),
  
  // Testimonials
  'Testimonials1': createLazyComponent('../components/landing_page/Testimonials/Testimonials1.jsx', 'Testimonials1'),
  'TestimonialsSection': createLazyComponent('../components/landing_page/Testimonials/Testimonials1.jsx', 'Testimonials1'),
  
  // Footers
  'Footer1': createLazyComponent('../components/landing_page/Footer/Footer1.jsx', 'Footer1'),
  'Footer2': createLazyComponent('../components/landing_page/Footer/Footer2.jsx', 'Footer2'),
  'FooterSection': createLazyComponent('../components/landing_page/Footer/Footer1.jsx', 'Footer1'),
  'FooterComponent': createLazyComponent('../components/landing_page/Footer/Footer1.jsx', 'Footer1'),
  'FooterComponentsDarkLarge': createLazyComponent('../components/landing_page/Footer/Footer2.jsx', 'Footer2'),
  'DarkFooter': createLazyComponent('../components/landing_page/Footer/Footer2.jsx', 'Footer2'),
  'SiteFooter': createLazyComponent('../components/landing_page/Footer/Footer1.jsx', 'Footer1'),
};

// Fonction pour trouver le composant
function getComponent(componentName) {
  // Recherche exacte
  if (COMPONENT_MAP[componentName]) {
    return COMPONENT_MAP[componentName];
  }

  // Recherche par type
  const name = componentName.toLowerCase();
  if (name.includes('navbar') || name.includes('nav')) {
    return COMPONENT_MAP['Navbar1'];
  }
  if (name.includes('hero')) {
    return COMPONENT_MAP['Hero1'];
  }
  if (name.includes('feature') || name.includes('service')) {
    return COMPONENT_MAP['Features1'];
  }
  if (name.includes('testimonial') || name.includes('review')) {
    return COMPONENT_MAP['Testimonials1'];
  }
  if (name.includes('footer')) {
    return COMPONENT_MAP['Footer1'];
  }

  // Fallback par défaut
  return () => createFallbackComponent(componentName);
}

const ComponentRenderer = ({ componentName, index, aiContent }) => {
  const Component = getComponent(componentName);

  return (
    <Suspense
      fallback={
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-8 text-center animate-pulse">
          <Loader2 className="h-8 w-8 animate-spin text-gray-500 mx-auto mb-4" />
          <p className="text-gray-600">Chargement de {componentName}...</p>
        </div>
      }
    >
      <div className="component-wrapper relative" data-component={componentName} data-index={index}>
        {/* Badge IA */}
        {aiContent && Object.keys(aiContent).length > 0 && (
          <div className="absolute top-2 right-2 z-10">
            <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 shadow-lg">
              <Bot className="h-3 w-3" />
              Contenu IA
            </div>
          </div>
        )}
        
        {/* Badge nom composant en dev */}
        {process.env.NODE_ENV === 'development' && (
          <div className="absolute top-2 left-2 z-10">
            <div className="bg-gray-800 text-white px-2 py-1 rounded text-xs font-mono">
              {componentName}
            </div>
          </div>
        )}
        
        <Component aiContent={aiContent} />
      </div>
    </Suspense>
  );
};

export default function DynamicPreview({ pageId }) {
  const [components, setComponents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [aiMetadata, setAiMetadata] = useState({});

  useEffect(() => {
    fetchComponents();
  }, [pageId]);

  const fetchComponents = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const url = `${API_BASE_URL}/preview/${pageId}/components`;
      console.log('🔍 Récupération des composants:', url);
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Erreur API: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('📦 Données reçues:', data);
      
      setAiMetadata({
        prompt: data.prompt || '',
        site_analysis: data.site_analysis || {},
        ai_content: data.ai_content || {},
        double_ai_used: data.double_ai_used || false
      });
      
      const componentData = data.imports?.map((importLine, index) => {
        const componentNameMatch = importLine.match(/import\s+(\w+)\s+from/);
        
        if (componentNameMatch) {
          const componentName = componentNameMatch[1];
          const componentKey = componentName.toLowerCase();
          const aiContent = data.ai_content?.[componentKey] || null;
          
          console.log(`📝 Composant traité: ${componentName}`, aiContent ? '✨ avec IA' : '');
          
          return {
            name: componentName,
            id: `${componentName}-${index}`,
            index,
            aiContent: aiContent
          };
        }
        
        return null;
      }).filter(Boolean) || [];
      
      setComponents(componentData);
      
    } catch (err) {
      console.error('❌ Erreur de chargement:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="text-center">
          <div className="flex justify-center items-center gap-3 mb-6">
            <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
            <Bot className="h-10 w-10 text-purple-600 animate-pulse" />
            <Zap className="h-8 w-8 text-indigo-600 animate-bounce" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            🤖 Génération de votre site
          </h2>
          <p className="text-gray-600 mb-4">
            Chargement des composants avec contenu IA personnalisé...
          </p>
          <div className="w-64 bg-gray-200 rounded-full h-3 mx-auto">
            <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 h-3 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-red-50 flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <div className="bg-white border border-red-200 rounded-xl p-6 text-center shadow-lg">
            <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-red-800 mb-2">
              Erreur de chargement
            </h3>
            <p className="text-red-600 mb-6">{error}</p>
            <button
              onClick={fetchComponents}
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              Réessayer
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header info */}
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-4 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Bot className="h-5 w-5" />
              <span className="font-semibold">Site généré par IA</span>
            </div>
            <div className="text-sm">
              {components.length} composant(s) • {Object.keys(aiMetadata.ai_content || {}).length} avec contenu IA
            </div>
          </div>
        </div>
      </div>

      {/* Prompt info */}
      {aiMetadata.prompt && (
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-b py-3">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-purple-800 text-sm">
              <strong>🤖 Prompt:</strong> "{aiMetadata.prompt.substring(0, 150)}..."
            </p>
          </div>
        </div>
      )}

      {/* Composants */}
      <div className="space-y-0">
        {components.map((component) => (
          <ComponentRenderer
            key={component.id}
            componentName={component.name}
            index={component.index}
            aiContent={component.aiContent}
          />
        ))}
      </div>

      {/* Debug info */}
      {process.env.NODE_ENV === 'development' && components.length === 0 && (
        <div className="bg-yellow-50 border border-yellow-200 p-8 m-4 rounded-lg">
          <h3 className="font-bold text-yellow-800 mb-2">🔧 Mode Debug</h3>
          <p className="text-yellow-700">Aucun composant détecté. Vérifiez :</p>
          <ul className="list-disc list-inside mt-2 text-yellow-600 text-sm">
            <li>Les imports dans la page générée</li>
            <li>La structure des dossiers de composants</li>
            <li>Les logs du backend</li>
          </ul>
        </div>
      )}
    </div>
  );
}