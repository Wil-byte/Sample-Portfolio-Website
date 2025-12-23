import React from 'react';
import { ArrowRight, Twitter, Instagram } from 'lucide-react'; 
import { PROFILE, SectionId } from '../constants';

import heroBackgroundImage from '../src/assets/images/background.png'; // Make sure this path and filename are correct

interface HeroProps {
  scrollToSection: (id: SectionId) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id={SectionId.HOME} className="min-h-screen flex items-center pt-16 relative overflow-hidden bg-white dark:bg-dark transition-colors duration-300">
      
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackgroundImage})` }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black opacity-40 dark:opacity-60"></div> 
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          
          {/* Avatar Section */}
          <div className="relative group flex-shrink-0 mt-8 md:mt-0">
             <div className="absolute -inset-0.5 bg-gradient-to-br from-primary to-secondary rounded-full blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
             <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white dark:border-darker shadow-2xl">
               <img 
                 src={PROFILE.avatar} 
                 alt={PROFILE.name} 
                 className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
               />
             </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left space-y-6">
            
            {/* Social Icons - Above Name (Twitter & Instagram) */}
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a href={PROFILE.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 dark:bg-white/5 rounded-full text-gray-600 dark:text-slate-300 hover:text-primary dark:hover:text-white hover:bg-white dark:hover:bg-white/10 transition-all hover:-translate-y-1">
                <Twitter className="w-5 h-5" />
              </a>
              <a href={PROFILE.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 dark:bg-white/5 rounded-full text-gray-600 dark:text-slate-300 hover:text-primary dark:hover:text-white hover:bg-white dark:hover:bg-white/10 transition-all hover:-translate-y-1">
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            <div className="space-y-2"> {/* This is the correct and only space-y-2 block */}
              {/* --- UPDATED: Primary Title with Instagram Icon --- */}
              <h2 className="text-primary font-semibold tracking-wide uppercase text-sm md:text-base flex items-center justify-center md:justify-start gap-2">
                {PROFILE.primaryTitle} {/* "Founder – ResolvingInc" */}
                  {PROFILE.socials.instagram && ( // Conditionally show if Instagram social is available
                  <a 
                    href={PROFILE.socials.resolvingIncInstagram}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-600 dark:text-slate-300 hover:text-primary dark:hover:text-white transition-colors"
                  >
                    <Instagram className="w-4 h-4" /> {/* Smaller icon for inline */}
                  </a>
                )}
              </h2>
              
              {/* --- MODIFIED: Name rendering, ensuring it's not duplicated and smaller font size --- */}
              <div className="inline-block relative">
                 <div className="absolute inset-0 bg-gray-900/5 dark:bg-white/5 rounded-xl -skew-x-3 transform translate-y-1 scale-105"></div>
                 <h1 className="relative text-4xl md:text-6xl font-bold text-white dark:text-white tracking-tight leading-tight px-2"> {/* --- MODIFIED: Smaller Name Font Size --- */}
                  {PROFILE.name}
                </h1>
              </div>
              {/* --- NEW: Secondary Titles --- */}
              {PROFILE.secondaryTitles.map((title, index) => (
                <p key={index} className="text-lg md:text-xl text-white dark:text-slate-300 font-medium">
                  {title}
                </p>
              ))}
              {/* --- END NEW: Secondary Titles --- */}
            </div>
            
              <p className="text-lg text-white dark:text-slate-300 max-w-2xl leading-relaxed mx-auto md:mx-0">
              {PROFILE.bio}
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
              <button 
                onClick={() => scrollToSection(SectionId.PROJECTS)}
                className="group flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40"
              >
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                 onClick={() => scrollToSection(SectionId.CONTACT)}
                className="flex items-center gap-2 bg-white dark:bg-white/5 hover:bg-gray-50 dark:hover:bg-white/10 text-gray-900 dark:text-white px-8 py-3 rounded-full font-medium border border-gray-200 dark:border-white/10 transition-all"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;