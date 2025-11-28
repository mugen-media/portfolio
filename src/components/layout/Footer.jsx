import React from 'react';
import { MugenTextLogo } from '../ui/MugenTextLogo';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-900 py-12 text-center md:text-left">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <MugenTextLogo />
            <p className="text-gray-500 text-sm mt-4">© 2025 Mugen Media. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;