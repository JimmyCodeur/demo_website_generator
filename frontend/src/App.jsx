import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import { ArrowLeft, Download, Share2, Edit, Calendar, Loader2, Bot, Zap } from 'lucide-react';

// Imports des pages
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import Error404 from "./pages/Error404";
import Dashboard from "./pages/Dashboard";
import MessagesPage from "./pages/MessagesPage";
import CreateWebsite from "./pages/CreateWebsite";
import DynamicPreview from './components/DynamicPreview';

// Composant PreviewPage avec support IA
function PreviewPage() {
  const { pageId } = useParams();
  const [pageInfo, setPageInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPageInfo();
  }, [pageId]);

  const fetchPageInfo = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/preview/${pageId}/components`);
      if (response.ok) {
        const data = await response.json();
        setPageInfo(data);
      }
    } catch (error) {
      console.error('Erreur lors du chargement:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header avec indicateurs IA */}
      <div className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Navigation gauche */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => window.location.href = "/landing"}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200 group"
              >
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
                <span className="font-medium">Retour à la galerie</span>
              </button>
              
              <div className="w-px h-6 bg-gray-300"></div>
              
              <button
                onClick={() => window.location.href = "/"}
                className="px-4 py-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
              >
                Nouveau site IA
              </button>
            </div>

            {/* Info centre avec badges IA */}
            <div className="flex items-center gap-4">
              <div className="text-center">
                <h1 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <Bot className="h-5 w-5 text-purple-600" />
                  Site généré par IA
                  <Zap className="h-4 w-4 text-blue-600" />
                </h1>
                <p className="text-sm text-gray-500">
                  ID: {pageId?.slice(0, 8)}...
                  {pageInfo?.double_ai_used && (
                    <span className="ml-2 inline-flex items-center gap-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-2 py-0.5 rounded-full text-xs font-medium">
                      <Bot className="h-3 w-3" />
                      Double IA
                    </span>
                  )}
                </p>
              </div>
            </div>

            {/* Actions droite */}
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200">
                <Share2 className="h-4 w-4" />
                <span className="hidden sm:inline">Partager</span>
              </button>
              
              <button className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200">
                <Download className="h-4 w-4" />
                <span className="hidden sm:inline">Exporter</span>
              </button>
              
              <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-600 text-white hover:from-purple-600 hover:via-blue-600 hover:to-indigo-700 rounded-lg transition-all duration-200 shadow-md">
                <Edit className="h-4 w-4" />
                <span className="hidden sm:inline">Éditer IA</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Info bar avec détails IA */}
      {pageInfo && (
        <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50 border-b border-purple-200 py-4">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-purple-600" />
                <span className="text-sm text-purple-800 font-medium">
                  {pageInfo.created_at ? formatDate(pageInfo.created_at) : 'Généré récemment'}
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <Bot className="h-4 w-4 text-blue-600" />
                <span className="text-sm text-blue-700">
                  {pageInfo.components?.length || 0} composant(s)
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-indigo-600" />
                <span className="text-sm text-indigo-700">
                  {Object.keys(pageInfo.ai_content || {}).length} IA contenu
                </span>
              </div>
              
              <div className="justify-self-end">
                <div className="bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                  <Bot className="h-4 w-4" />
                  Double IA
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Prompt affiché */}
            {pageInfo.prompt && (
              <div className="mt-4 p-3 bg-white/50 rounded-lg border border-purple-200">
                <div className="flex items-start gap-2">
                  <span className="text-sm font-semibold text-purple-800">Prompt:</span>
                  <p className="text-sm text-purple-700 italic">
                    "{pageInfo.prompt}"
                  </p>
                </div>
                {pageInfo.site_analysis && (
                  <div className="mt-2 flex flex-wrap gap-3 text-xs">
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                      {pageInfo.site_analysis.type}
                    </span>
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                      {pageInfo.site_analysis.style}
                    </span>
                    <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">
                      {pageInfo.site_analysis.industry}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Contenu principal */}
      <div className="relative">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
                <Bot className="h-10 w-10 text-purple-600 animate-pulse" />
                <Zap className="h-8 w-8 text-indigo-600 animate-bounce" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                🤖 Chargement de votre site IA
              </h2>
              <p className="text-gray-600">
                Préparation du contenu personnalisé...
              </p>
            </div>
          </div>
        ) : (
          <DynamicPreview pageId={pageId} />
        )}
      </div>

      {/* Actions flottantes avec thème IA */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-3 flex items-center gap-3">
          <button
            onClick={() => window.location.href = "/landing"}
            className="p-3 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-xl transition-all duration-200"
            title="Retour à la galerie"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          
          <div className="w-px h-6 bg-gray-300"></div>
          
          <button
            onClick={() => window.location.href = "/"}
            className="p-3 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-600 text-white hover:from-purple-600 hover:via-blue-600 hover:to-indigo-700 rounded-xl transition-all duration-200 shadow-md flex items-center gap-2"
            title="Nouveau site IA"
          >
            <Bot className="h-5 w-5" />
            <span className="hidden sm:inline text-sm font-medium">Nouveau IA</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// Composant de chargement avec thème IA
function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
          <Bot className="h-10 w-10 text-blue-600 animate-pulse" />
          <Zap className="h-8 w-8 text-indigo-600 animate-bounce" />
        </div>
        <p className="text-gray-700 font-medium">Initialisation de l'IA...</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<CreateWebsite />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/preview/:pageId" element={<PreviewPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/create-website" element={<CreateWebsite />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;