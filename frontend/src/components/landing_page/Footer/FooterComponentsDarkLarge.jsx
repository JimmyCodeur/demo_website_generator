import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <div className="text-white text-xl font-semibold mb-4">
              {/* Replace with logo or text logo */}
              <span className="text-indigo-400">Your Logo</span>
            </div>
            <p className="text-sm">
              Simplifier le recrutement grâce à des solutions innovantes et inclusives.
            </p>
          </div>
          <div className="flex space-x-6 mt-6 md:mt-0">
            {/* Social media icons */}
            <a href="#" className="hover:text-gray-300">
              <span className="sr-only">Facebook</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12a10 10 0 1 0-11.4 9.9v-7h-2v-3h2v-2.2c0-2.1 1.2-3.3 3-3.3.9 0 1.9.2 1.9.2v2h-1.1c-1 0-1.3.6-1.3 1.2V12h2.6l-.4 3h-2.2v7A10 10 0 0 0 22 12Z" />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-300">
              <span className="sr-only">Instagram</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7 2C4.8 2 3 3.8 3 6v12c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4H7Zm0 2h10c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Zm9 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-5 1a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-300">
              <span className="sr-only">GitHub</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.7.6-3.3-1.3-3.3-1.3-.5-1.2-1.2-1.6-1.2-1.6-1-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.4 2.3 1 2.9.7.1-.6.3-1 .5-1.2-2.2-.3-4.5-1.1-4.5-5a4 4 0 0 1 1-2.7 3.7 3.7 0 0 1 .1-2.7s.8-.3 2.8 1a9.7 9.7 0 0 1 5.3 0c2-.1 2.8-1 2.8-1a3.7 3.7 0 0 1 .1 2.7 4 4 0 0 1 1 2.7c0 3.8-2.4 4.7-4.6 5 .3.3.6.8.6 1.5v2.2c0 .4.2.7.8.5A10 10 0 0 0 12 2Z" />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-300">
              <span className="sr-only">YouTube</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M10 15l5-3-5-3v6Zm12-3c0-1.4-.1-2.8-.2-4.2-.1-1.1-.5-2.1-1.5-2.8A4 4 0 0 0 18 4C13.4 4 8.6 4 4 4c-1.1 0-2.1.5-2.8 1.5a4 4 0 0 0-.8 2.3C0 10.6 0 13.4 0 16c0 1.1.5 2.1 1.5 2.8a4 4 0 0 0 2.3.8c4.6 0 9.4 0 14 0 1.1 0 2.1-.5 2.8-1.5a4 4 0 0 0 .8-2.3c.2-1.4.3-2.8.3-4.2Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mt-12 sm:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-400">Solutions</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-gray-300">Recrutement</a></li>
              <li><a href="#" className="hover:text-gray-300">Évaluations</a></li>
              <li><a href="#" className="hover:text-gray-300">Automatisation</a></li>
              <li><a href="#" className="hover:text-gray-300">Suivi des candidats</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-gray-300">Assistance</a></li>
              <li><a href="#" className="hover:text-gray-300">Documentation</a></li>
              <li><a href="#" className="hover:text-gray-300">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400">Entreprise</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-gray-300">À propos</a></li>
              <li><a href="#" className="hover:text-gray-300">Presse</a></li>
              <li><a href="#" className="hover:text-gray-300">Carrières</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400">Légal</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-gray-300">Conditions d'utilisation</a></li>
              <li><a href="#" className="hover:text-gray-300">Politique de confidentialité</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm">&copy; 2025 Votre Entreprise, Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
