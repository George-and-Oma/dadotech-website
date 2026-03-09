export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  icon: string;
  color: string;
  fullDescription?: string;
  features?: string[];
  benefits?: string[];
  process?: ProcessStep[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  icon: string;
  challenges?: string[];
  solutions?: string[];
}

export interface Project {
  id: string;
  title: string;
  client: string;
  industry: string;
  services: string[];
  description: string;
  results: string[];
  image?: string;
  featured?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image?: string;
  readTime: number;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
  linkedin?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}
