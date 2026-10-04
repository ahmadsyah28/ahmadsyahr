// Type definitions for portfolio components

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  github: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface NavItem {
  name: string;
  href: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
