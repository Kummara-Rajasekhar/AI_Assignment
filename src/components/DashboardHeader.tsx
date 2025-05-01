import React from 'react';
import { DownloadIcon, RefreshCw, Calendar } from 'lucide-react';

export const DashboardHeader = () => {
  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Competitive Intelligence</h1>
          <div className="flex items-center mt-2 text-gray-500">
            <span className="flex items-center">
              <Calendar size={16} className="mr-1" />
              Last updated: June 12, 2025
            </span>
            <span className="mx-2">•</span>
            <span className="text-[#00B6AD] font-medium">Virgin Media</span>
          </div>
        </div>
        
        <div className="flex mt-4 md:mt-0 space-x-2">
          <button className="flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200">
            <DownloadIcon size={16} className="mr-2" />
            Export
          </button>
          <button className="flex items-center justify-center px-4 py-2 bg-[#0033A0] text-white rounded-lg hover:bg-blue-800 transition-colors duration-200">
            <RefreshCw size={16} className="mr-2" />
            Refresh Data
          </button>
        </div>
      </div>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm text-gray-500">Total Competitors</div>
          <div className="text-2xl font-bold text-gray-800 mt-1">12</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm text-gray-500">Current Partnerships</div>
          <div className="text-2xl font-bold text-[#00B6AD] mt-1">7</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm text-gray-500">Strategic Threats</div>
          <div className="text-2xl font-bold text-orange-500 mt-1">4</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm text-gray-500">Evidence Sources</div>
          <div className="text-2xl font-bold text-gray-800 mt-1">24</div>
        </div>
      </div>
    </div>
  );
};