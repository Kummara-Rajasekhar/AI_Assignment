import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <span className="font-semibold text-gray-700">CompetitorScan</span>
              <span className="text-xs bg-[#00B6AD] text-white px-2 py-0.5 rounded-full ml-2">BETA</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">© 2025 AI Competitive Intelligence</p>
          </div>
          
          <div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a href="#" className="text-sm text-gray-600 hover:text-[#0033A0] transition-colors duration-200">Terms</a>
              <a href="#" className="text-sm text-gray-600 hover:text-[#0033A0] transition-colors duration-200">Privacy</a>
              <a href="#" className="text-sm text-gray-600 hover:text-[#0033A0] transition-colors duration-200">Contact</a>
              <a href="#" className="text-sm text-gray-600 hover:text-[#0033A0] transition-colors duration-200">Help</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};