import React, { useState } from 'react';
import { Search, Filter, SortAsc } from 'lucide-react';

interface FilterBarProps {
  onSearch: (term: string) => void;
  onFilter: (filter: string) => void;
  onSort: (sortBy: string) => void;
  activeFilter: string;
}



export const FilterBar = ({ onSearch, onFilter, onSort, activeFilter }: FilterBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSortOptions, setShowSortOptions] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="mb-6 bg-white rounded-lg shadow-sm p-4 border border-gray-200">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative w-full md:w-64">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search competitors..."
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
          />
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
            <button 
              onClick={() => onFilter('all')}
              className={`px-3 py-1.5 text-sm rounded-md transition-colors duration-200 ${
                activeFilter === 'all' 
                  ? 'bg-[#0033A0] text-white' 
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            <button 
              onClick={() => onFilter('current')}
              className={`px-3 py-1.5 text-sm rounded-md transition-colors duration-200 ${
                activeFilter === 'current' 
                  ? 'bg-[#0033A0] text-white' 
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              Current
            </button>
            <button 
              onClick={() => onFilter('past')}
              className={`px-3 py-1.5 text-sm rounded-md transition-colors duration-200 ${
                activeFilter === 'past' 
                  ? 'bg-[#0033A0] text-white' 
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              Past
            </button>
            <button 
              onClick={() => onFilter('strategic')}
              className={`px-3 py-1.5 text-sm rounded-md transition-colors duration-200 ${
                activeFilter === 'strategic' 
                  ? 'bg-[#0033A0] text-white' 
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              Strategic
            </button>
          </div>
          
          <div className="relative">
            <button 
              onClick={() => setShowSortOptions(!showSortOptions)}
              className="flex items-center px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <SortAsc size={16} className="mr-1" />
              <span>Sort</span>
            </button>
            
            {showSortOptions && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10 border border-gray-200">
                <button 
                  onClick={() => { onSort('name'); setShowSortOptions(false); }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
                >
                  Company Name
                </button>
                <button 
                  onClick={() => { onSort('year'); setShowSortOptions(false); }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
                >
                  Most Recent
                </button>
                <button 
                  onClick={() => { onSort('relevance'); setShowSortOptions(false); }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
                >
                  Relevance
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};