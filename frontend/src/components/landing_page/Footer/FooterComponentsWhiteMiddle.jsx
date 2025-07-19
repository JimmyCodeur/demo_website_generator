import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 py-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Links */}
        <div className="flex justify-center space-x-6 text-sm font-medium mb-6">
          <a href="/about" className="hover:text-gray-900">
            About
          </a>
          <a href="/blog" className="hover:text-gray-900">
            Blog
          </a>
          <a href="/jobs" className="hover:text-gray-900">
            Jobs
          </a>
          <a href="/press" className="hover:text-gray-900">
            Press
          </a>
          <a href="/accessibility" className="hover:text-gray-900">
            Accessibility
          </a>
          <a href="/partners" className="hover:text-gray-900">
            Partners
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 mb-6">
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

        {/* Copyright */}
        <div className="text-center text-sm">
          &copy; 2025 Your Company, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
