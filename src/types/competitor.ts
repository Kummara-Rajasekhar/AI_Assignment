export interface Evidence {
  title: string;
  description: string;
  url: string;
}

export interface Competitor {
  id: number;
  name: string;
  status: 'Current' | 'Past';
  strategic: boolean;
  year: number;
  ongoing: boolean;
  description: string;
  keyPoints: string[];
  evidence: Evidence[];
  relevanceScore: number;
  analysis: string;
  recommendation: string | null;
}