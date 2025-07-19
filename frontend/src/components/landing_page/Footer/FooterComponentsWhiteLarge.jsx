import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              {/* Logo */}
              <span className="text-2xl font-bold text-indigo-600">&#126;</span>
            </div>
            <p className="text-sm mb-6">
              Making the world a better place through constructing elegant hierarchies.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-gray-900" aria-label="Facebook">
                <FaFacebook size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-gray-900" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-gray-900" aria-label="Twitter">
                <FaTwitter size={20} />
              </a>
              <a href="https://github.com" className="hover:text-gray-900" aria-label="GitHub">
                <FaGithub size={20} />
              </a>
              <a href="https://youtube.com" className="hover:text-gray-900" aria-label="YouTube">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-900">Marketing</a></li>
              <li><a href="#" className="hover:text-gray-900">Analytics</a></li>
              <li><a href="#" className="hover:text-gray-900">Automation</a></li>
              <li><a href="#" className="hover:text-gray-900">Commerce</a></li>
              <li><a href="#" className="hover:text-gray-900">Insights</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-900">Submit ticket</a></li>
              <li><a href="#" className="hover:text-gray-900">Documentation</a></li>
              <li><a href="#" className="hover:text-gray-900">Guides</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-900">About</a></li>
              <li><a href="#" className="hover:text-gray-900">Blog</a></li>
              <li><a href="#" className="hover:text-gray-900">Jobs</a></li>
              <li><a href="#" className="hover:text-gray-900">Press</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-6 text-center text-sm">
          &copy; 2024 Your Company, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
