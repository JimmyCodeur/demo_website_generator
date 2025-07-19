import { useState } from "react";
import { Sparkles, Send, Eye, Loader2, CheckCircle, AlertCircle, History, Wand2 } from "lucide-react";

export default function CreateWebsite() {
  const [prompt, setPrompt] = useState("");
  const [components, setComponents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [generatedPageId, setGeneratedPageId] = useState("");
  const [aiContentGenerated, setAiContentGenerated] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setMessage("");
    setMessageType("");
    setGeneratedPageId("");
    setAiContentGenerated(false);

    try {
      const response = await fetch("http://127.0.0.1:8000/generate-landing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        setComponents(data.components);
        setGeneratedPageId(data.page_id);
        setAiContentGenerated(data.ai_content_generated || false);
        setMessage("Site généré avec contenu personnalisé par IA !");
        setMessageType("success");
        
        // Auto-redirection vers l'aperçu après 2 secondes
        setTimeout(() => {
          if (data.page_id) {
            window.location.href = `/preview/${data.page_id}`;
          } else {
            window.location.href = "/landing";
          }
        }, 2000);
      } else {
        setMessage("Erreur : " + (data.detail || JSON.stringify(data)));
        setMessageType("error");
      }
    } catch (error) {
      console.error("Erreur :", error);
      setMessage("Erreur de connexion avec l'API.");
      setMessageType("error");
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !loading && prompt.trim()) {
      handleGenerate();
    }
  };

  const handleViewPreview = () => {
    if (generatedPageId) {
      window.location.href = `/preview/${generatedPageId}`;
    } else {
      window.location.href = "/landing";
    }
  };

  const handleViewGallery = () => {
    window.location.href = "/landing";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header amélioré */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full relative">
              <Sparkles className="h-8 w-8 text-white" />
              {/* Badge IA */}
              <div className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                IA+
              </div>
            </div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Générateur de Site Web IA
          </h1>
          <p className="text-gray-600 text-lg mb-2">
            Décrivez votre vision, l'IA crée votre site web avec du contenu personnalisé
          </p>
          
          {/* Nouvelle fonctionnalité */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <Wand2 className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-600">
              Nouveau : Contenu textuel personnalisé par IA !
            </span>
          </div>
          
          {/* Bouton pour voir la galerie */}
          <div className="mt-4">
            <button
              onClick={handleViewGallery}
              className="inline-flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-200 border border-blue-200"
            >
              <History className="h-4 w-4" />
              Voir mes créations précédentes
            </button>
          </div>
        </div>

        {/* Main Card améliorée */}
        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-xl p-8 mb-8">
          {/* Input Section */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Décrivez votre site web (soyez précis pour un meilleur contenu IA)
            </label>
            <div className="relative">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ex: Une landing page moderne pour une startup tech spécialisée dans l'intelligence artificielle. Je veux un hero section accrocheur qui met en avant nos 3 services principaux, des témoignages de clients satisfaits, et un footer avec nos coordonnées..."
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-200 resize-none h-32 text-gray-700 placeholder-gray-400"
                rows="4"
                maxLength={500}
              />
              <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                {prompt.length}/500
              </div>
            </div>
            
            {/* Conseils pour l'IA */}
            <div className="mt-2 p-3 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg">
              <p className="text-sm text-purple-700">
                <Wand2 className="h-4 w-4 inline mr-1" />
                <strong>Astuce IA :</strong> Plus vous êtes précis sur votre activité, vos services, et votre style, plus l'IA personnalisera le contenu de manière pertinente !
              </p>
            </div>
          </div>

          {/* Generate Button amélioré */}
          <button
            onClick={handleGenerate}
            disabled={loading || !prompt.trim()}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 disabled:from-gray-300 disabled:to-gray-400 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <div className="flex flex-col">
                  <span>Génération en cours...</span>
                  <span className="text-xs opacity-80">L'IA personnalise votre contenu</span>
                </div>
              </>
            ) : (
              <>
                <Wand2 className="h-5 w-5" />
                <div className="flex flex-col">
                  <span>Générer mon site web avec IA</span>
                  <span className="text-xs opacity-80">Contenu personnalisé inclus</span>
                </div>
              </>
            )}
          </button>

          {/* Message amélioré */}
          {message && (
            <div className={`mt-6 p-4 rounded-xl border flex items-start gap-3 ${
              messageType === "success"
                ? "bg-green-50 border-green-200 text-green-800"
                : "bg-red-50 border-red-200 text-red-800"
            }`}>
              {messageType === "success" ? (
                <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
              ) : (
                <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
              )}
              <div className="flex-1">
                <p className="font-medium">{message}</p>
                {messageType === "success" && (
                  <div className="mt-2">
                    <p className="text-sm text-green-600 mb-1">
                      Redirection automatique vers l'aperçu dans 2 secondes...
                    </p>
                    {aiContentGenerated && (
                      <div className="flex items-center gap-1 text-sm text-purple-600">
                        <Wand2 className="h-3 w-3" />
                        <span>Contenu textuel personnalisé par IA !</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Components Preview amélioré */}
        {components.length > 0 && (
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-2 rounded-lg">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                Composants sélectionnés par l'IA
              </h3>
              {aiContentGenerated && (
                <div className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium rounded-full flex items-center gap-1">
                  <Wand2 className="h-3 w-3" />
                  Contenu personnalisé
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {components.map((comp, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 p-4 rounded-xl hover:shadow-md transition-all duration-200 transform hover:scale-[1.02] relative"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full"></div>
                    <span className="font-medium text-gray-700">{comp}</span>
                  </div>
                  {aiContentGenerated && (
                    <div className="absolute top-2 right-2">
                      <Wand2 className="h-3 w-3 text-purple-500" title="Contenu personnalisé par IA" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleViewPreview}
                className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Eye className="h-5 w-5" />
                <div className="flex flex-col">
                  <span>Voir l'aperçu</span>
                  {aiContentGenerated && (
                    <span className="text-xs opacity-80">Avec contenu IA</span>
                  )}
                </div>
              </button>
              
              <button
                onClick={handleViewGallery}
                className="px-6 py-4 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 flex items-center gap-2"
              >
                <History className="h-5 w-5" />
                Galerie
              </button>
            </div>
          </div>
        )}

        {/* Features Section améliorée */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6">
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wand2 className="h-6 w-6 text-purple-600" />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">IA Contenu Personnalisé</h4>
            <p className="text-gray-600 text-sm">
              L'IA adapte automatiquement tous les textes selon votre contexte
            </p>
          </div>
          <div className="text-center p-6">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="h-6 w-6 text-blue-600" />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">IA Avancée</h4>
            <p className="text-gray-600 text-sm">
              Double IA : sélection de composants ET personnalisation du contenu
            </p>
          </div>
          <div className="text-center p-6">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="h-6 w-6 text-green-600" />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Résultat Professionnel</h4>
            <p className="text-gray-600 text-sm">
              Sites web complets avec contenu cohérent et adapté à votre activité
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}