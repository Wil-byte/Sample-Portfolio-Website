// src/components/Projects.tsx
import React, { useState } from 'react';
import { ExternalLink, Github, Folder, ArrowRight, Eye, PlayCircle } from 'lucide-react';
import { PROJECTS, SectionId } from '../constants';
import ProjectModal from './Projectmodal'; // Corrected import name to ProjectModal (uppercase 'M')
import { Project } from '../types'; // Import Project type explicitly

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    // Section background: light gray in light mode, dark-bg in dark mode
    <section id={SectionId.PROJECTS} className="py-8 bg-white dark:bg-darker border-t border-gray-200 dark:border-white/5 text-center transition-colors duration-300">
      {/* Background Elements - These blobs are typically dark-mode only, hide them in light mode */}
      <div className="absolute top-0 left-0 w-full h-full bg-transparent pointer-events-none -z-10">
         <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-900/20 rounded-full blur-3xl hidden dark:block"></div>
         <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl hidden dark:block"></div>
      </div>

      <div className="max-w-7xl mx-auto z-10">
        <div className="mb-16 text-center">
          {/* H2 title: dark gray in light mode, white in dark mode. Changed gradient span content. */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
             Personal Projects<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-500"></span> {/* Changed span content */}
          </h2>
          {/* Paragraph description: gray-600 in light mode, slate-400 in dark mode */}
          <p className="text-gray-600 dark:text-slate-300 max-w-2xl mx-auto">
            Explore a collection of digital experiences. Tap any project to view details, watch demos, and explore the code.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => handleCardClick(project)}
              // Card background and border: white/gray-200 in light, dark-card/dark-border in dark
              className="group relative bg-gray dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/20 dark:hover:shadow-brand-900/20 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay on Hover for View Details / Watch Demo */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 dark:from-dark-bg/90 via-gray-900/40 dark:via-dark-bg/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end pb-8">
                   <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex gap-4">
                     <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/20">
                        <Eye className="w-4 h-4" /> View Details
                     </span>
                     {project.videoUrl && (
                        <span className="flex items-center gap-2 px-4 py-2 bg-brand-600/90 backdrop-blur-md rounded-full text-white text-sm font-medium">
                          <PlayCircle className="w-4 h-4" /> Watch Demo
                        </span>
                     )}
                   </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  {/* H3 title: dark gray in light, white in dark, hover primary in light, brand-400 in dark */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-brand-400 transition-colors">
                    {project.title}
                  </h3>
                  {/* Arrow icon: gray-500 in light, slate-500 in dark, hover primary in light, brand-400 in dark */}
                  <ArrowRight className="w-5 h-5 text-gray-500 dark:text-slate-500 group-hover:text-primary dark:group-hover:text-brand-400 group-hover:translate-x-1 transition-all" />
                </div>
                {/* Paragraph description: gray-600 in light mode, slate-400 in dark mode */}
                <p className="text-gray-600 dark:text-slate-300 text-sm mb-4 line-clamp-2">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map(tech => (
                    // Tag styling: light gray bg/dark gray text in light, slate-800 bg/slate-300 text in dark
                    <span key={tech} className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 border border-gray-200 dark:border-slate-700">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    // "+X" Tag styling: light gray bg/gray-500 text in light, slate-800 bg/slate-500 text in dark
                    <span key="more-tags" className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-slate-500 border border-gray-200 dark:border-slate-700">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;