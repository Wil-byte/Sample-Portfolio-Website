// src/constants.ts
import { Project, Skill, Experience, SectionId } from './types';
import myAvatarImage from './src/assets/images/myavatar.jpg';


export { SectionId };

export const PROFILE = {
  name: "your name",
  primaryTitle: "Founder – ResolvingInc",
  secondaryTitles: [
    "Full Stack Developer ",],
  bio: "I create high-performance web and mobile applications .",
  location: "Abuja, Nigeria",
  email: "yourmail@gmail.com",
  avatar: myAvatarImage,
  socials: {
    github: "https://github.com/yourusername",
    twitter: "https://x.com/yourusername/",
    instagram: "https://www.instagram.com/yourusername/",
    resolvingIncInstagram:"https://www.instagram.com/yourusername/",
  }
};

// --- IMPORT ALL YOUR PROJECT IMAGES HERE WITH UNIQUE VARIABLE NAMES ---
// Path is relative from constants.ts to src/assets/images/


// Wils Plate Images
import wilsPlateCoverImage from './src/assets/images/wilsplatelogo.jpg';
import wilsplatevisual from './src/assets/images/wilsplatevisual.png';



export const PROJECTS: Project[] = [
  
  {
    id: '2',
    title: 'E-Commerce dashboard(Wils plate)',
    shortDescription: 'Wil’s Plate is a food delivery and ordering platform that connects users with fresh, delicious meals from local restaurants.',
    fullDescription: 'Wil’s Plate is a seamless food delivery and ordering platform. It connects users with fresh, delicious meals from local restaurants, providing a convenient dining experience. The platform features intuitive navigation, secure payment processing, and real-time order tracking.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'PostgreSQL', 'Express', 'React'],
    coverImage: wilsPlateCoverImage, // <-- Use the unique variable here
    videoUrl: '', 
    galleryImages: [
      wilsplatevisual,
    ],
    demoUrl: '#',
    repoUrl: '#'
  },
 
];

export const SKILLS: Skill[] = [
  // Frontend
  { name: 'React/Next.js', level: 95, category: 'frontend' },
  { name: 'TypeScript', level: 88, category: 'frontend' },
  { name: 'Tailwind CSS', level: 95, category: 'frontend' },
  { name: 'Figma', level: 80, category: 'frontend' },
  { name: 'Swift', level: 78, category: 'frontend' },
  { name: 'Flutter & Dart', level: 90, category: 'frontend'},
  { name: 'HTML,CSS & Javascript', level: 85, category: 'frontend' },
  { name: 'Kotlin', level: 80, category: 'frontend' },
  
  // Backend
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'Python', level: 89, category: 'backend' },
  { name: 'PostgreSQL', level: 70, category: 'backend' },
  { name: 'AWS', level: 60, category: 'backend' },
  { name: 'Java', level: 70, category: 'backend' },
  { name: 'Flutter & Dart', level: 90, category: 'backend'},

  // AI & Tools
  { name: 'Gemini AI', level: 90, category: 'tools' },
  { name: 'Open AI', level: 85, category: 'tools' },
  { name: 'Docker', level: 70, category: 'tools' },
  { name: 'Git/CI/CD', level: 85, category: 'tools' },
  { name: 'Firebase', level: 85, category: 'tools' },
];

export interface ExpertiseItem {
  id: string;
  title: string;
  description: string;
  icon: 'layout' | 'server' | 'brain'; // Icon mapping key
  skillCategory: 'frontend' | 'backend' | 'tools';
}

// --- THIS IS THE CRITICAL SECTION TO PASTE ---
export const EXPERTISE: ExpertiseItem[] = [
  {
    id: '1',
    title: 'Full Stack Development',
    description: 'I build diverse applications from scratch using modern technologies. I have a strong proficiency in the SDLC process and frontend + backend development.',
    icon: 'layout',
    skillCategory: 'frontend'
  },
  {
    id: '2',
    title: 'Backend Infrastructure',
    description: 'I develop the core systems that keep applications running smoothly—handling data, authentication, automation, and integrations. My approach emphasizes stability, security, and long-term efficiency.',
    icon: 'server',
    skillCategory: 'backend'
  },
  {
    id: '3',
    title: 'GenAI & Tools',
    description: 'I develop smart applications using LLMs to automate tasks and generate content. I also build secure pipelines with CI/CD tools.',
    icon: 'brain',
    skillCategory: 'tools'
  }
];
// --- END OF CRITICAL SECTION ---

export const EXPERIENCE: Experience[] = 
[
  // ... (your experience data)
  {
    id: '1',
    role: ' your role',
    company: 'your company.',
    period: '2020 - Present',
    description: [
      'yours.',
      'yours.',
      'yours',
      'yours',
      'yours',
    ]
  },
 {
    id: '2',
    role: 'your role',
    company: 'your company.',
    period: '2020 - 2022',
    description: [
      'yours',
      'yours',
    ]
  },

  {
  
    id: '3',
    role: 'your role',
    company: 'your company.',
    period: '2021 - Present',
    description: [
      'yours',
      
    ]
  },
];


export const NAV_LINKS = [
  { label: 'Home', href: SectionId.HOME },
  { label: 'About', href: SectionId.ABOUT },
  { label: 'Projects', href: SectionId.PROJECTS },
  { label: 'Skills', href: SectionId.SKILLS },
  { label: 'Contact', href: SectionId.CONTACT },
];