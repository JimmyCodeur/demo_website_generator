import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-4">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Copyright */}
        <div className="text-sm">
          &copy; 2025 Your Company, Inc. All rights reserved.
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" className="hover:text-gray-200" aria-label="Facebook">
            <FaFacebook size={20} />
          </a>
          <a href="https://instagram.com" className="hover:text-gray-200" aria-label="Instagram">
            <FaInstagram size={20} />
          </a>
          <a href="https://twitter.com" className="hover:text-gray-200" aria-label="Twitter">
            <FaTwitter size={20} />
          </a>
          <a href="https://github.com" className="hover:text-gray-200" aria-label="GitHub">
            <FaGithub size={20} />
          </a>
          <a href="https://youtube.com" className="hover:text-gray-200" aria-label="YouTube">
            <FaYoutube size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
