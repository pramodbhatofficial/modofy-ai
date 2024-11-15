export interface TechStack {
  ingestion: string[];
  storage: string[];
  processing: string[];
  visualization: string[];
  ai: string[];
}

export interface Solution {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}
