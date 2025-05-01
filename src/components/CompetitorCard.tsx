import React from 'react';
import { ExternalLink, Calendar, Award, AlertTriangle } from 'lucide-react';
import { Competitor } from '../types/competitor';

interface CompetitorCardProps {
  competitor: Competitor;
  onClick: () => void;
}

export const CompetitorCard = ({ competitor, onClick }: CompetitorCardProps) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200 cursor-pointer"
      onClick={onClick}
    >
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-800">{competitor.name}</h3>
          <div className="flex space-x-1">
            {competitor.strategic && (
              <span className="inline-flex items-center px-2 py-0.5 bg-orange-100 text-orange-600 text-xs font-medium rounded-full">
                <AlertTriangle size={12} className="mr-1" />
                Strategic
              </span>
            )}
            <span className={`inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full ${
              competitor.status === 'Current' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
            }`}>
              {competitor.status}
            </span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {competitor.description}
        </p>
        
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Calendar size={14} className="mr-1" />
          <span>{competitor.year}</span>
          {competitor.ongoing && (
            <span className="ml-1">- Present</span>
          )}
        </div>
        
        <div className="space-y-2 mb-4">
          {competitor.keyPoints.slice(0, 2).map((point, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-1.5 h-1.5 bg-[#00B6AD] rounded-full"></div>
              </div>
              <p className="ml-2 text-xs text-gray-600">{point}</p>
            </div>
          ))}
          {competitor.keyPoints.length > 2 && (
            <div className="text-xs text-gray-500">+ {competitor.keyPoints.length - 2} more points</div>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Award size={14} className="text-[#0033A0] mr-1" />
            <span className="text-xs text-gray-600">Relevance: <span className="font-semibold">{competitor.relevanceScore}/10</span></span>
          </div>
          <button className="flex items-center text-xs text-[#0033A0] hover:text-blue-700 transition-colors duration-200">
            <span>View details</span>
            <ExternalLink size={12} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};