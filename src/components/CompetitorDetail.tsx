import React, { useEffect, useRef } from 'react';
import { X, ExternalLink, Calendar, MapPin, Award, CheckCircle, Link2 } from 'lucide-react';
import { Competitor } from '../types/competitor';

interface CompetitorDetailProps {
  competitor: Competitor;
  onClose: () => void;
}

export const CompetitorDetail = ({ competitor, onClose }: CompetitorDetailProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);
    
    // Prevent body scrolling
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div 
        ref={modalRef}
        className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col animate-scale-in"
      >
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-800">{competitor.name}</h2>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            <X size={20} className="text-gray-500" />
          </button>
        </div>
        
        <div className="flex-grow overflow-y-auto p-6">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              competitor.status === 'Current' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
            }`}>
              {competitor.status} Partner
            </span>
            {competitor.strategic && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                Strategic Threat
              </span>
            )}
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              IT Services
            </span>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Overview</h3>
            <p className="text-gray-600">{competitor.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Calendar size={16} className="text-gray-500 mr-2" />
                <h4 className="font-medium text-gray-800">Engagement Timeline</h4>
              </div>
              <p className="text-gray-600">Started in {competitor.year}{competitor.ongoing ? ' and ongoing' : ''}</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Award size={16} className="text-gray-500 mr-2" />
                <h4 className="font-medium text-gray-800">Relevance Score</h4>
              </div>
              <div className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                  <div 
                    className="bg-[#0033A0] h-2.5 rounded-full" 
                    style={{ width: `${competitor.relevanceScore * 10}%` }}
                  ></div>
                </div>
                <span className="text-gray-600 font-medium">{competitor.relevanceScore}/10</span>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-3">Key Points</h3>
            <div className="space-y-3">
              {competitor.keyPoints.map((point, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle size={18} className="text-[#00B6AD] flex-shrink-0 mt-0.5" />
                  <p className="ml-2 text-gray-600">{point}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-3">Evidence</h3>
            <div className="space-y-4">
              {competitor.evidence.map((evidence, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors duration-200">
                  <div className="flex items-start">
                    <Link2 size={18} className="text-blue-500 flex-shrink-0 mt-0.5" />
                    <div className="ml-2">
                      <p className="text-gray-800 font-medium">{evidence.title}</p>
                      <p className="text-gray-600 text-sm mt-1">{evidence.description}</p>
                      <div className="mt-2">
                        <a 
                          href={evidence.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm font-medium text-[#0033A0] hover:text-blue-700 transition-colors duration-200"
                        >
                          View Source <ExternalLink size={14} className="ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-3">Strategic Analysis</h3>
            <p className="text-gray-600 mb-4">{competitor.analysis}</p>
            
            {competitor.recommendation && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-medium text-blue-800 mb-2">Recommendation</h4>
                <p className="text-blue-700">{competitor.recommendation}</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="border-t border-gray-200 px-6 py-4 bg-gray-50">
          <div className="flex justify-between">
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200">
              Add to Watchlist
            </button>
            <button className="px-4 py-2 bg-[#0033A0] text-white rounded-lg hover:bg-blue-800 transition-colors duration-200">
              Export Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};