// src/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="mb-4">&copy; 2024 Your Company. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="https://facebook.com" className="text-gray-400 hover:text-white transition duration-300">
            Facebook
          </a>
          <a href="https://twitter.com" className="text-gray-400 hover:text-white transition duration-300">
            Twitter
          </a>
          <a href="https://instagram.com" className="text-gray-400 hover:text-white transition duration-300">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
