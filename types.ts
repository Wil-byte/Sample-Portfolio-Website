export interface PROFILE { // Or whatever you named your Profile interface
   name: string;
  primaryTitle: string;
  secondaryTitles: string[];
  bio: string;
  location: string;
  email: string;
  avatar: string;
  socials: {
    github: string;
    twitter: string;
    instagram: string;
    resolvingIncInstagram?: string;
    mail?: string;
    linkedin?: string;
  };
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string; // New
  fullDescription: string;   // New
  technologies: string[];  // Renamed from 'tags'
  coverImage: string;      // Renamed from 'imageUrl'
  videoUrl?: string;       // Optional
  galleryImages?: string[]; // Optional
  demoUrl?: string;
  repoUrl?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'tools' | 'soft-skills';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  PROJECTS = 'projects',
  SKILLS = 'skills',
  CONTACT = 'contact'
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}