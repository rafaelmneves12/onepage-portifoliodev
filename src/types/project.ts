export type ProjectCategory = "React" | "WordPress" | "Landing Pages" | "Sistemas";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  cover: string;
  gallery: string[];
  technologies: string[];
  features: string[];
  date: string;
  liveUrl?: string;
  githubUrl?: string;
}