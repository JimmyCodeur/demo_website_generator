import os
import openai
import uuid
import re
import random
import json
from datetime import datetime
from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(
    title="Website Generator API",
    description="API pour générer des sites web avec IA",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://frontend:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
if not OPENAI_API_KEY:
    raise ValueError("❌ OPENAI_API_KEY manquante dans les variables d'environnement")
if not OPENAI_API_KEY.startswith('sk-'):
    raise ValueError("❌ OPENAI_API_KEY format invalide")

try:
    client = openai.OpenAI(api_key=OPENAI_API_KEY)
    test_response = client.models.list()
    print("✅ OpenAI connecté avec succès")
    print(f"🔑 Clé API: {OPENAI_API_KEY[:20]}...")
except Exception as e:
    print(f"❌ Erreur connexion OpenAI: {e}")
    raise

COMPONENTS_DIR = "/app/frontend_components"
PAGES_DIR = "/app/frontend_pages"
GENERATED_PAGES_DIR = "/app/frontend_pages/generated"

os.makedirs(GENERATED_PAGES_DIR, exist_ok=True)
print(f"📁 Dossiers créés: {GENERATED_PAGES_DIR}")

class PromptRequest(BaseModel):
    prompt: str

class HealthResponse(BaseModel):
    status: str
    openai_connected: bool
    firebase_project: str = None

@app.get("/health", response_model=HealthResponse)
async def health_check():
    """🏥 Vérification de l'état du service"""
    try:
        models = client.models.list()
        openai_ok = True
    except:
        openai_ok = False
    
    return HealthResponse(
        status="healthy" if openai_ok else "degraded",
        openai_connected=openai_ok,
        firebase_project=os.getenv("VITE_FIREBASE_PROJECT_ID", "non configuré")
    )

def get_available_components():
    """📝 Récupère tous les composants disponibles"""
    components = {}
    component_categories = {
        'navbar': [],
        'hero': [],
        'features': [],
        'testimonials': [],
        'footer': [],
        'other': []
    }
    
    landing_page_dir = os.path.join(COMPONENTS_DIR, "landing_page")
    
    if not os.path.exists(landing_page_dir):
        print(f"⚠️ Dossier non trouvé: {landing_page_dir}")
        
        test_components = {
            'navbar1': 'landing_page/Navbar/Navbar1',
            'navbar2': 'landing_page/Navbar/Navbar2',
            'hero1': 'landing_page/Hero/Hero1',
            'hero2': 'landing_page/Hero/Hero2',
            'hero3': 'landing_page/Hero/Hero3',
            'features1': 'landing_page/Features/Features1',
            'features2': 'landing_page/Features/Features2',
            'testimonials1': 'landing_page/Testimonials/Testimonials1',
            'footer1': 'landing_page/Footer/Footer1',
            'footer2': 'landing_page/Footer/Footer2'
        }
        
        for comp_name, comp_path in test_components.items():
            components[comp_name] = comp_path
            
            if 'navbar' in comp_name:
                component_categories['navbar'].append(comp_name)
            elif 'hero' in comp_name:
                component_categories['hero'].append(comp_name)
            elif 'features' in comp_name:
                component_categories['features'].append(comp_name)
            elif 'testimonials' in comp_name:
                component_categories['testimonials'].append(comp_name)
            elif 'footer' in comp_name:
                component_categories['footer'].append(comp_name)
        
        print(f"🧪 Composants de test créés: {len(components)}")
        return components, component_categories
    
    for root, dirs, files in os.walk(landing_page_dir):
        for filename in files:
            if filename.endswith((".jsx", ".js")):
                relative_path = os.path.relpath(root, landing_page_dir)
                component_name = filename.replace(".jsx", "").replace(".js", "")
                
                if relative_path == ".":
                    key = component_name.lower()
                    import_path = f"landing_page/{component_name}"
                else:
                    key = component_name.lower()
                    import_path = f"landing_page/{relative_path}/{component_name}"
                
                components[key] = import_path
                
                folder_name = os.path.basename(root).lower()
                component_lower = component_name.lower()
                
                if 'navbar' in folder_name or 'nav' in component_lower:
                    component_categories['navbar'].append(key)
                elif 'hero' in folder_name or 'hero' in component_lower:
                    component_categories['hero'].append(key)
                elif 'feature' in folder_name or 'feature' in component_lower:
                    component_categories['features'].append(key)
                elif 'testimonial' in folder_name or 'testimonial' in component_lower:
                    component_categories['testimonials'].append(key)
                elif 'footer' in folder_name or 'footer' in component_lower:
                    component_categories['footer'].append(key)
                else:
                    component_categories['other'].append(key)
    
    print(f"✅ Composants trouvés: {len(components)}")
    return components, component_categories

def analyze_site_type(prompt):
    """📊 Analyse le type de site à partir du prompt"""
    prompt_lower = prompt.lower()
    
    if any(word in prompt_lower for word in ['startup', 'tech', 'innovation', 'saas', 'application']):
        site_type = 'Startup Tech'
        industry = 'Technologie'
    elif any(word in prompt_lower for word in ['restaurant', 'café', 'bar', 'nourriture', 'cuisine']):
        site_type = 'Restaurant'
        industry = 'Restauration'
    elif any(word in prompt_lower for word in ['fitness', 'sport', 'gym', 'yoga', 'musculation']):
        site_type = 'Fitness'
        industry = 'Sport & Bien-être'
    elif any(word in prompt_lower for word in ['agence', 'marketing', 'publicité', 'communication']):
        site_type = 'Agence Marketing'
        industry = 'Marketing'
    elif any(word in prompt_lower for word in ['e-commerce', 'boutique', 'vente', 'magasin']):
        site_type = 'E-commerce'
        industry = 'Commerce'
    elif any(word in prompt_lower for word in ['avocat', 'juridique', 'droit', 'conseil']):
        site_type = 'Cabinet Juridique'
        industry = 'Juridique'
    elif any(word in prompt_lower for word in ['médecin', 'docteur', 'santé', 'clinique']):
        site_type = 'Cabinet Médical'
        industry = 'Santé'
    elif any(word in prompt_lower for word in ['immobilier', 'maison', 'appartement', 'vente']):
        site_type = 'Immobilier'
        industry = 'Immobilier'
    elif any(word in prompt_lower for word in ['portfolio', 'cv', 'personnel', 'freelance']):
        site_type = 'Portfolio'
        industry = 'Personnel'
    else:
        site_type = 'Site Vitrine'
        industry = 'Généraliste'
    
    if any(word in prompt_lower for word in ['moderne', 'contemporain', 'minimaliste']):
        style = 'Moderne'
    elif any(word in prompt_lower for word in ['professionnel', 'corporate', 'business']):
        style = 'Professionnel'
    elif any(word in prompt_lower for word in ['créatif', 'artistique', 'coloré']):
        style = 'Créatif'
    elif any(word in prompt_lower for word in ['luxe', 'élégant', 'premium']):
        style = 'Luxe'
    else:
        style = 'Classique'
    
    return {
        'type': site_type,
        'style': style,
        'industry': industry,
        'target': extract_target_audience(prompt_lower)
    }

def extract_target_audience(prompt_lower):
    """🎯 Extrait l'audience cible"""
    if any(word in prompt_lower for word in ['entreprise', 'b2b', 'professionnel']):
        return 'Professionnels'
    elif any(word in prompt_lower for word in ['jeune', 'étudiant', 'ado']):
        return 'Jeunes'
    elif any(word in prompt_lower for word in ['famille', 'parent']):
        return 'Familles'
    else:
        return 'Grand public'

def advanced_ai_selection(prompt, components, component_categories):
    """🤖 IA #1 : Sélection des composants avec noms normalisés"""
    try:
        components_presentation = []
        for category, comps in component_categories.items():
            if comps:
                components_presentation.append(f"{category.upper()}: {', '.join(comps)}")
        
        system_prompt = f"""Tu es un expert en UX/UI design. Sélectionne les composants les plus adaptés pour créer une landing page efficace.

COMPOSANTS DISPONIBLES :
{chr(10).join(components_presentation)}

RÈGLES STRICTES :
1. Sélectionne EXACTEMENT 4-5 composants
2. Ordre OBLIGATOIRE : navbar → hero → (features OU testimonials) → footer
3. UTILISE UNIQUEMENT les noms exacts des composants listés ci-dessus
4. Évite les répétitions de même type
5. Adapte au secteur d'activité du prompt

NOMS AUTORISÉS UNIQUEMENT :
- Navbars: navbar1, navbar2, navbar3, navbar4, navbar5
- Heroes: hero1, hero2, hero3
- Features: features1, features2
- Testimonials: testimonials1, testimonials2
- Footers: footer1, footer2

Réponds UNIQUEMENT avec les noms des composants séparés par des virgules, sans espace supplémentaire.
Exemple de réponse valide: navbar3,hero1,features2,footer1"""
        
        response = client.chat.completions.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": f"Sélectionne les composants pour ce projet : {prompt}"}
            ],
            temperature=0.2,
            max_tokens=80
        )
        
        ai_response = response.choices[0].message.content.strip()
        print(f"🤖 IA #1 - Réponse brute: '{ai_response}'")
        
        ai_components = []
        for comp in ai_response.split(","):
            comp = comp.strip().lower()
            if comp in components:
                ai_components.append(comp)
            else:
                print(f"⚠️ Composant ignoré (non valide): '{comp}'")
        
        if len(ai_components) >= 3:
            print(f"✅ IA #1 - Sélection validée: {ai_components}")
            return ai_components
        else:
            print(f"⚠️ IA #1 - Sélection insuffisante: {ai_components}")
            return ['navbar3', 'hero1', 'features2', 'footer1']
        
    except Exception as e:
        print(f"❌ Erreur IA #1 sélection: {e}")
        return ['navbar3', 'hero1', 'features2', 'footer1']

def generate_content_with_ai(prompt, component_type, site_analysis):
    """🤖 IA #2 : Génération du contenu personnalisé"""
    try:
        content_prompts = {
            'navbar': f"""Génère le contenu pour une navbar de site web.

CONTEXTE :
- Prompt utilisateur : {prompt}
- Type de site : {site_analysis['type']}
- Secteur : {site_analysis['industry']}
- Audience : {site_analysis['target']}
- Style : {site_analysis['style']}

INSTRUCTIONS :
Crée un contenu de navbar professionnel et adapté au secteur.

Réponds UNIQUEMENT avec un JSON valide :
{{
    "brandName": "Nom de marque court (max 20 caractères)",
    "navItems": ["Item1", "Item2", "Item3", "Item4"],
    "ctaText": "Bouton CTA (max 15 caractères)"
}}""",

            'hero': f"""Génère le contenu pour une section hero percutante.

CONTEXTE :
- Prompt utilisateur : {prompt}
- Type de site : {site_analysis['type']}
- Secteur : {site_analysis['industry']}
- Audience : {site_analysis['target']}
- Style : {site_analysis['style']}

INSTRUCTIONS :
Crée un hero qui convertit avec :
- Titre accrocheur qui résout un problème
- Sous-titre qui explique la valeur ajoutée
- CTA persuasif

Réponds UNIQUEMENT avec un JSON valide :
{{
    "title": "Titre principal accrocheur (max 60 caractères)",
    "subtitle": "Sous-titre explicatif (max 120 caractères)",
    "ctaText": "Bouton principal (max 20 caractères)",
    "secondaryCtaText": "Bouton secondaire optionnel (max 20 caractères)"
}}""",

            'features': f"""Génère le contenu pour une section features/services.

CONTEXTE :
- Prompt utilisateur : {prompt}
- Type de site : {site_analysis['type']}
- Secteur : {site_analysis['industry']}
- Audience : {site_analysis['target']}

INSTRUCTIONS :
Crée 3 features/services principaux avec des bénéfices clairs.

Réponds UNIQUEMENT avec un JSON valide :
{{
    "sectionTitle": "Titre de section (max 50 caractères)",
    "sectionSubtitle": "Sous-titre explicatif (max 100 caractères)",
    "features": [
        {{"title": "Feature 1", "description": "Description bénéfice"}},
        {{"title": "Feature 2", "description": "Description bénéfice"}},
        {{"title": "Feature 3", "description": "Description bénéfice"}}
    ]
}}""",

            'testimonials': f"""Génère le contenu pour des témoignages clients.

CONTEXTE :
- Prompt utilisateur : {prompt}
- Type de site : {site_analysis['type']}
- Secteur : {site_analysis['industry']}
- Audience : {site_analysis['target']}

INSTRUCTIONS :
Crée 2-3 témoignages crédibles et spécifiques au secteur.

Réponds UNIQUEMENT avec un JSON valide :
{{
    "sectionTitle": "Titre de section",
    "testimonials": [
        {{"text": "Témoignage détaillé et crédible", "name": "Nom réaliste", "role": "Poste/Entreprise", "rating": 5}},
        {{"text": "Autre témoignage spécifique", "name": "Autre nom", "role": "Autre poste", "rating": 5}}
    ]
}}""",

            'footer': f"""Génère le contenu pour un footer professionnel.

CONTEXTE :
- Prompt utilisateur : {prompt}
- Type de site : {site_analysis['type']}
- Secteur : {site_analysis['industry']}

INSTRUCTIONS :
Crée un footer avec liens organisés par catégories.

Réponds UNIQUEMENT avec un JSON valide :
{{
    "brandName": "Nom de marque",
    "description": "Description courte de l'entreprise (max 100 caractères)",
    "links": {{
        "company": ["À propos", "Notre équipe", "Carrières"],
        "services": ["Service 1", "Service 2", "Service 3"],
        "support": ["Contact", "FAQ", "Support"]
    }},
    "contact": {{
        "email": "contact@exemple.com",
        "phone": "+33 1 23 45 67 89"
    }}
}}"""
        }

        if component_type not in content_prompts:
            return None

        print(f"🤖 IA #2 - Génération contenu pour {component_type}...")
        
        response = client.chat.completions.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "Tu es un expert en copywriting et marketing digital. Tu crées du contenu qui convertit et qui est adapté au secteur d'activité. Réponds UNIQUEMENT avec du JSON valide, sans commentaires ni formatage markdown."},
                {"role": "user", "content": content_prompts[component_type]}
            ],
            temperature=0.7,
            max_tokens=800
        )

        content_text = response.choices[0].message.content.strip()
        
        if content_text.startswith('```json'):
            content_text = content_text.replace('```json', '').replace('```', '').strip()
        elif content_text.startswith('```'):
            content_text = content_text.replace('```', '').strip()
        
        content_data = json.loads(content_text)
        
        print(f"✅ IA #2 - Contenu généré pour {component_type}")
        return content_data

    except Exception as e:
        print(f"❌ Erreur IA #2 pour {component_type}: {e}")
        
        default_content = get_default_content(component_type, site_analysis)
        return default_content

def get_default_content(component_type, site_analysis):
    """📝 Contenu par défaut basé sur l'analyse"""
    defaults = {
        'navbar': {
            "brandName": f"{site_analysis['type'][:15]}",
            "navItems": ["Accueil", "Services", "À propos", "Contact"],
            "ctaText": "Commencer"
        },
        'hero': {
            "title": f"Bienvenue sur notre {site_analysis['type'].lower()}",
            "subtitle": f"Découvrez nos solutions {site_analysis['style'].lower()} pour {site_analysis['target'].lower()}",
            "ctaText": "Découvrir",
            "secondaryCtaText": "En savoir plus"
        },
        'features': {
            "sectionTitle": "Nos services",
            "sectionSubtitle": "Des solutions adaptées à vos besoins",
            "features": [
                {"title": "Service Premium", "description": "Une solution complète et personnalisée"},
                {"title": "Support Expert", "description": "Un accompagnement professionnel"},
                {"title": "Résultats Garantis", "description": "Des résultats mesurables et durables"}
            ]
        },
        'testimonials': {
            "sectionTitle": "Témoignages clients",
            "testimonials": [
                {"text": "Une expérience exceptionnelle, je recommande vivement !", "name": "Marie Dubois", "role": "Directrice Marketing", "rating": 5},
                {"text": "Des résultats au-delà de nos attentes, équipe très professionnelle.", "name": "Pierre Martin", "role": "CEO", "rating": 5}
            ]
        },
        'footer': {
            "brandName": site_analysis['type'],
            "description": f"Votre partenaire de confiance dans le {site_analysis['industry'].lower()}",
            "links": {
                "company": ["À propos", "Équipe", "Carrières"],
                "services": ["Service 1", "Service 2", "Service 3"],
                "support": ["Contact", "FAQ", "Support"]
            },
            "contact": {
                "email": "contact@exemple.com",
                "phone": "+33 1 23 45 67 89"
            }
        }
    }
    return defaults.get(component_type, {})

def get_component_type_from_name(component_name):
    """🔍 Détermine le type de composant"""
    name = component_name.lower()
    
    if 'navbar' in name or 'nav' in name:
        return 'navbar'
    elif 'hero' in name:
        return 'hero'
    elif 'feature' in name:
        return 'features'
    elif 'testimonial' in name:
        return 'testimonials'
    elif 'footer' in name:
        return 'footer'
    else:
        return 'other'

def generate_enhanced_preview_page(selected_components, components, page_id, prompt, ai_content_by_component):
    """🎨 Génère une page d'aperçu avec contenu IA personnalisé"""
    
    site_analysis = analyze_site_type(prompt)
    imports = []
    jsx_components = []
    
    for comp in selected_components:
        if comp in components:
            import_path = components[comp]
            component_name = import_path.split("/")[-1]
            component_type = get_component_type_from_name(comp)
            
            ai_content = ai_content_by_component.get(comp, {})
            
            imports.append(f'import {component_name} from "../../components/{import_path}";')
            
            if ai_content:
                props_str = json.dumps(ai_content, ensure_ascii=False).replace('"', '\\"')
                jsx_components.append(f'                    <{component_name} aiContent={{{json.dumps(ai_content, ensure_ascii=False)}}} />')
            else:
                jsx_components.append(f'                    <{component_name} />')
    
    current_time = datetime.now().strftime("%d/%m/%Y à %H:%M")
    escaped_prompt = prompt.replace('"', '\\"').replace("'", "\\'")
    
    template = f'''import React from "react";
import {{ ArrowLeft, Download, Share2, Edit, Sparkles, Bot, Zap }} from "lucide-react";
{chr(10).join(imports)}

export default function Preview{page_id}() {{
    const handleGoBack = () => {{
        window.location.href = "/landing";
    }};

    const handleBackToGenerator = () => {{
        window.location.href = "/";
    }};

    return (
        <div className="min-h-screen bg-gray-50">
            {{/* Header avec indicateurs IA */}}
            <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-3">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={{handleGoBack}}
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

            {{/* Info bar avec détails IA */}}
            <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50 border-b border-purple-200 py-4">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-start gap-3">
                            <Sparkles className="h-5 w-5 text-purple-600 mt-0.5" />
                            <div>
                                <h3 className="font-semibold text-purple-800 mb-1">Prompt utilisateur</h3>
                                <p className="text-sm text-purple-600 italic">
                                    "{escaped_prompt[:100]}{'...' if len(escaped_prompt) > 100 else ''}"
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                            <Bot className="h-5 w-5 text-blue-600 mt-0.5" />
                            <div>
                                <h3 className="font-semibold text-blue-800 mb-1">Analyse IA</h3>
                                <p className="text-sm text-blue-600">
                                    {site_analysis['type']} • {site_analysis['style']} • {site_analysis['target']}
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                            <Zap className="h-5 w-5 text-indigo-600 mt-0.5" />
                            <div>
                                <h3 className="font-semibold text-indigo-800 mb-1">Génération</h3>
                                <p className="text-sm text-indigo-600">
                                    {len(selected_components)} composant(s) • Contenu personnalisé
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {{/* Badge flottant IA */}}
            <div className="absolute top-20 left-4 z-40">
                <div className="bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg flex items-center gap-2">
                    <Bot className="h-4 w-4" />
                    Double IA • {site_analysis['industry']}
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
            </div>

            {{/* Contenu généré */}}
            <div className="website-content">
{chr(10).join(jsx_components)}
            </div>

            {{/* Footer d'information */}}
            <div className="bg-gradient-to-r from-purple-100 via-blue-100 to-indigo-100 border-t border-purple-200 py-6">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <Bot className="h-5 w-5 text-purple-600" />
                            <Zap className="h-5 w-5 text-blue-600" />
                            <span className="font-semibold text-gray-800">Site généré par Double IA</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">
                            Composants sélectionnés automatiquement • Contenu personnalisé • {current_time}
                        </p>
                        <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
                            <span>IA #1: Sélection composants</span>
                            <span>•</span>
                            <span>IA #2: Génération contenu</span>
                            <span>•</span>
                            <span>ID: {page_id[:8]}...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}}'''
    
    return template

@app.post("/generate-landing")
async def generate_landing(request: PromptRequest):
    """🚀 Génération complète avec double IA"""
    prompt = request.prompt
    
    print(f"🚀 === DÉBUT GÉNÉRATION DOUBLE IA ===")
    print(f"📝 Prompt: {prompt}")
    
    components, component_categories = get_available_components()
    
    if not components:
        raise HTTPException(status_code=400, detail="Aucun composant disponible")
    
    site_analysis = analyze_site_type(prompt)
    print(f"📊 Analyse: {site_analysis}")
    
    print(f"🤖 IA #1 - Sélection des composants...")
    selected_components = advanced_ai_selection(prompt, components, component_categories)
    
    if not selected_components or len(selected_components) < 2:
        selected_components = ['navbar1', 'hero1', 'features1', 'footer1']
        print(f"⚠️ Fallback sélection: {selected_components}")
    
    print(f"🤖 IA #2 - Génération du contenu personnalisé...")
    ai_content_by_component = {}
    
    for comp in selected_components:
        component_type = get_component_type_from_name(comp)
        if component_type != 'other':
            print(f"  📝 Génération contenu pour {comp} ({component_type})")
            ai_content = generate_content_with_ai(prompt, component_type, site_analysis)
            if ai_content:
                ai_content_by_component[comp] = ai_content
                print(f"  ✅ Contenu généré pour {comp}")
            else:
                print(f"  ⚠️ Contenu par défaut pour {comp}")
    
    page_id = str(uuid.uuid4()).replace("-", "")
    preview_code = generate_enhanced_preview_page(
        selected_components, 
        components, 
        page_id, 
        prompt, 
        ai_content_by_component
    )
    
    preview_path = os.path.join(GENERATED_PAGES_DIR, f"Preview{page_id}.jsx")
    
    try:
        with open(preview_path, "w", encoding="utf-8") as f:
            f.write(preview_code)
        print(f"✅ Page sauvée: {preview_path}")
    except Exception as e:
        print(f"❌ Erreur sauvegarde: {e}")
        raise HTTPException(status_code=500, detail=f"Erreur sauvegarde: {e}")
    
    metadata = {
        "page_id": page_id,
        "prompt": prompt,
        "site_analysis": site_analysis,
        "selected_components": selected_components,
        "ai_content": ai_content_by_component,
        "created_at": datetime.now().timestamp()
    }
    
    metadata_path = os.path.join(GENERATED_PAGES_DIR, f"metadata_{page_id}.json")
    try:
        with open(metadata_path, "w", encoding="utf-8") as f:
            json.dump(metadata, f, ensure_ascii=False, indent=2)
        print(f"✅ Métadonnées sauvées: {metadata_path}")
    except Exception as e:
        print(f"⚠️ Erreur sauvegarde métadonnées: {e}")
    
    print(f"🎉 === GÉNÉRATION COMPLÈTE ===")
    
    return {
        "message": "Site généré avec double IA",
        "page_id": page_id,
        "preview_url": f"/preview/{page_id}",
        "components": selected_components,
        "site_analysis": site_analysis,
        "ai_content_generated": True,
        "ai_selection_used": True,
        "ai_content_components": list(ai_content_by_component.keys()),
        "total_ai_content_pieces": len(ai_content_by_component)
    }

@app.get("/generated-pages")
async def list_generated_pages():
    """📋 Liste des pages générées"""
    if not os.path.exists(GENERATED_PAGES_DIR):
        return {"pages": []}
    
    pages = []
    for filename in os.listdir(GENERATED_PAGES_DIR):
        if filename.endswith(".jsx"):
            page_id = filename.replace("Preview", "").replace(".jsx", "")
            file_path = os.path.join(GENERATED_PAGES_DIR, filename)
            metadata_path = os.path.join(GENERATED_PAGES_DIR, f"metadata_{page_id}.json")
            
            metadata = {}
            if os.path.exists(metadata_path):
                try:
                    with open(metadata_path, "r", encoding="utf-8") as f:
                        metadata = json.load(f)
                except:
                    pass
            
            pages.append({
                "id": page_id,
                "filename": filename,
                "url": f"/preview/{page_id}",
                "created_at": os.path.getctime(file_path),
                "prompt": metadata.get("prompt", ""),
                "site_type": metadata.get("site_analysis", {}).get("type", ""),
                "components_count": len(metadata.get("selected_components", [])),
                "ai_content_count": len(metadata.get("ai_content", {}))
            })
    
    pages.sort(key=lambda x: x["created_at"], reverse=True)
    return {"pages": pages}

@app.get("/preview/{page_id}/components")
async def get_preview_components(page_id: str):
    """🔍 Récupère les composants d'une page"""
    preview_path = os.path.join(GENERATED_PAGES_DIR, f"Preview{page_id}.jsx")
    metadata_path = os.path.join(GENERATED_PAGES_DIR, f"metadata_{page_id}.json")
    
    if not os.path.exists(preview_path):
        raise HTTPException(status_code=404, detail="Page non trouvée")
    
    try:
        with open(preview_path, "r", encoding="utf-8") as f:
            content = f.read()
        
        metadata = {}
        if os.path.exists(metadata_path):
            with open(metadata_path, "r", encoding="utf-8") as f:
                metadata = json.load(f)
        
        import_lines = []
        component_tags = []
        
        for line in content.split('\n'):
            if line.strip().startswith('import ') and 'from "../../components/' in line:
                import_lines.append(line.strip())
                component_name = line.split('import ')[1].split(' from')[0].strip()
                component_tags.append(component_name)
        
        return {
            "page_id": page_id,
            "imports": import_lines,
            "components": component_tags,
            "ai_generated": True,
            "created_at": os.path.getctime(preview_path),
            "prompt": metadata.get("prompt", ""),
            "site_analysis": metadata.get("site_analysis", {}),
            "ai_content": metadata.get("ai_content", {}),
            "double_ai_used": True
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erreur: {e}")

if __name__ == "__main__":
    import uvicorn
    print("🚀 === DÉMARRAGE SERVEUR DOUBLE IA ===")
    print(f"🔑 OpenAI: {'✅ Configuré' if OPENAI_API_KEY else '❌ Manquant'}")
    print(f"🤖 IA #1: Sélection des composants")
    print(f"🤖 IA #2: Génération du contenu")
    print(f"📁 Composants: {COMPONENTS_DIR}")
    print(f"📄 Pages générées: {GENERATED_PAGES_DIR}")
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)