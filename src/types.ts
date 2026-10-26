export interface Project {
  id: string;
  title: string;
  category: 'ui-ux' | 'web-dev' | 'mobile';
  categoryLabel: string;
  description: string;
  longDescription: string;
  image: string;
  client: string;
  year: string;
  role: string;
  metrics: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  deliverables: string[];
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  skills: string[];
  deliverables: string[];
}

export interface Experience {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}
