import React from 'react';
import { SearchIcon, BellIcon, UserIcon } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-[#0033A0] text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="font-bold text-xl tracking-tight">CompetitorScan</div>
          <span className="text-xs bg-[#00B6AD] px-2 py-1 rounded-full">BETA</span>
        </div>
        
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="hover:text-[#00B6AD] transition-colors duration-200">Dashboard</a>
            <a href="#" className="hover:text-[#00B6AD] transition-colors duration-200">Reports</a>
            <a href="#" className="hover:text-[#00B6AD] transition-colors duration-200">Competitors</a>
            <a href="#" className="hover:text-[#00B6AD] transition-colors duration-200">Targets</a>
          </nav>
          
          <div className="flex items-center space-x-3">
            <button className="p-1.5 rounded-full hover:bg-blue-800 transition-colors duration-200">
              <SearchIcon size={20} />
            </button>
            <button className="p-1.5 rounded-full hover:bg-blue-800 transition-colors duration-200">
              <BellIcon size={20} />
            </button>
            <button className="flex items-center space-x-2 p-1.5 rounded-full hover:bg-blue-800 transition-colors duration-200">
              <UserIcon size={20} />
              <span className="hidden md:inline">Infosys Admin</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};