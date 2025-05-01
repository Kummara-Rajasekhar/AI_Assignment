import React, { useState } from 'react';
import { CompetitorList } from './CompetitorList';
import { DashboardHeader } from './DashboardHeader';
import { FilterBar } from './FilterBar';
import { competitors } from '../data/competitors';

export const Dashboard = () => {
  const [filteredCompetitors, setFilteredCompetitors] = useState(competitors);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (!term) {
      handleFilter(activeFilter);
      return;
    }
    
    const filtered = competitors.filter(competitor => 
      competitor.name.toLowerCase().includes(term.toLowerCase()) ||
      competitor.description.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredCompetitors(filtered);
  };

  const handleFilter = (filter: string) => {
    setActiveFilter(filter);
    let filtered = [...competitors];
    
    if (filter === 'current') {
      filtered = competitors.filter(c => c.status === 'Current');
    } else if (filter === 'past') {
      filtered = competitors.filter(c => c.status === 'Past');
    } else if (filter === 'strategic') {
      filtered = competitors.filter(c => c.strategic);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(competitor => 
        competitor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        competitor.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredCompetitors(filtered);
  };

  const handleSort = (sortBy: string) => {
    let sorted = [...filteredCompetitors];
    
    if (sortBy === 'name') {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'year') {
      sorted.sort((a, b) => b.year - a.year);
    } else if (sortBy === 'relevance') {
      sorted.sort((a, b) => b.relevanceScore - a.relevanceScore);
    }
    
    setFilteredCompetitors(sorted);
  };

  return (
    <section className="container mx-auto px-4 py-6">
      <DashboardHeader />
      
      <FilterBar 
        onSearch={handleSearch} 
        onFilter={handleFilter} 
        onSort={handleSort} 
        activeFilter={activeFilter} 
      />
      
      <CompetitorList competitors={filteredCompetitors} />
    </section>
  );
};