// src/components/ProjectModal.tsx (assuming filename is now ProjectModal.tsx)
import React, { useState } from 'react';
import { X, ExternalLink, Play, Image as ImageIcon, Maximize } from 'lucide-react'; // Added Maximize icon
import { Project } from '../types';

interface ProjectModalProps { // Interface name updated to match component convention
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

// Renamed component to ProjectModal (uppercase 'M') for convention
const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'media' | 'details'>('media');
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null); // New state for fullscreen image

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop: Remains dark in both themes as it's a modal overlay */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content Container */}
      {/* Background & border: white/gray-200 in light, dark-card/dark-border in dark */}
      <div className="relative w-full max-w-5xl bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-slide-up">

        {/* Header */}
        {/* Background & border: gray-50/gray-200 in light, dark-bg/50/dark-border in dark */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-bg/50">
          {/* Title text: dark gray in light, white in dark */}
          <h2 className="text-xl font-bold text-gray-900 dark:text-white tracking-wide">{project.title}</h2>
          {/* Close button text/hover: gray-500/gray-900 in light, slate-400/white in dark */}
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors text-gray-500 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col lg:flex-row h-full">

            {/* Left: Media Column */}
            {/* Background: gray-100 in light, black/40 in dark */}
            <div className="w-full lg:w-2/3 bg-gray-100 dark:bg-black/40 p-6 flex flex-col gap-6">

              {/* Video Section (if available) */}
              {project.videoUrl && (
                <div className="w-full aspect-video bg-black rounded-lg overflow-hidden border border-gray-200 dark:border-dark-border shadow-lg group relative">
                  <div className="absolute top-2 left-2 z-10 bg-black/60 px-2 py-1 rounded text-xs text-white flex items-center gap-1">
                     <Play className="w-3 h-3" /> Project Demo
                  </div>
                  <video
                    src={project.videoUrl}
                    controls
                    className="w-full h-full object-cover"
                    poster={project.coverImage}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}

              {/* Gallery Section */}
              {project.galleryImages && project.galleryImages.length > 0 && ( // Conditionally render gallery if images exist
                 <div className="space-y-2">
                    {/* Gallery title text: dark gray in light, slate-300 in dark */}
                    <div className="flex items-center gap-2 text-gray-700 dark:text-slate-300 text-sm font-semibold mb-2">
                       <ImageIcon className="w-4 h-4" /> Gallery
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {project.galleryImages.map((img, idx) => (
                        // Gallery image border: gray-200 in light, dark-border in dark
                        <div
                          key={idx}
                          onClick={() => setFullscreenImage(img)} // Enable full-screen on click
                          className="aspect-video relative rounded-lg overflow-hidden border border-gray-200 dark:border-dark-border cursor-pointer hover:border-primary/50 dark:hover:border-brand-500 transition-colors group"
                        >
                          <img
                            src={img}
                            alt={`Gallery ${idx + 1}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Maximize className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      ))}
                    </div>
                 </div>
              )}
            </div>

            {/* Right: Details Column */}
            {/* Background & border: white/gray-200 in light, dark-card/dark-border in dark */}
            <div className="w-full lg:w-1/3 p-6 bg-white dark:bg-dark-card flex flex-col gap-6 border-l border-gray-200 dark:border-dark-border">

              <div>
                {/* About Project title: primary in light, brand-400 in dark */}
                <h3 className="text-primary dark:text-brand-400 font-semibold mb-2 uppercase text-xs tracking-wider">About Project</h3>
                {/* Description text: dark gray in light, slate-300 in dark */}
                <p className="text-gray-700 dark:text-slate-300 leading-relaxed text-sm lg:text-base">
                  {project.fullDescription}
                </p>
              </div>

              <div>
                {/* Technologies title: primary in light, brand-400 in dark */}
                <h3 className="text-primary dark:text-brand-400 font-semibold mb-2 uppercase text-xs tracking-wider">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    // Tag styling: light gray bg/dark gray text in light, slate-800 bg/slate-300 text in dark
                    <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 text-xs rounded-full border border-gray-200 dark:border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-gray-200 dark:border-dark-border flex flex-col gap-3">
                {project.demoUrl && ( // Conditionally render demo button
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-primary hover:bg-blue-600 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-primary/25 dark:hover:shadow-brand-500/25"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                )}

              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Fullscreen Image Overlay */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setFullscreenImage(null)}
        >
          <img
            src={fullscreenImage}
            alt="Full-screen view"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
          />
          <button
            onClick={() => setFullscreenImage(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close full-screen image"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectModal;