import React, { useState } from 'react';
import { CompetitorCard } from './CompetitorCard';
import { CompetitorDetail } from './CompetitorDetail';
import { Competitor } from '../types/competitor';

interface CompetitorListProps {
  competitors: Competitor[];
}

export const CompetitorList = ({ competitors }: CompetitorListProps) => {
  const [selectedCompetitor, setSelectedCompetitor] = useState<Competitor | null>(null);

  const handleSelectCompetitor = (competitor: Competitor) => {
    setSelectedCompetitor(competitor);
  };

  const handleCloseDetail = () => {
    setSelectedCompetitor(null);
  };

  return (
    <div>
      {competitors.length === 0 ? (
        <div className="text-center py-10">
          <div className="text-gray-400 mb-2">No competitors found</div>
          <p className="text-gray-500">Try adjusting your search or filters</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {competitors.map((competitor) => (
            <CompetitorCard 
              key={competitor.id} 
              competitor={competitor} 
              onClick={() => handleSelectCompetitor(competitor)}
            />
          ))}
        </div>
      )}

      {selectedCompetitor && (
        <CompetitorDetail 
          competitor={selectedCompetitor} 
          onClose={handleCloseDetail}
        />
      )}
    </div>
  );
};