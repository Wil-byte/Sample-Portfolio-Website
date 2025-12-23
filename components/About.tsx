import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { EXPERIENCE, SectionId } from '../constants';

const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-8 bg-white dark:bg-darker border-t border-gray-200 dark:border-white/5 text-center transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 flex items-center gap-3">
          <span className="text-primary"></span> About Me
          <span className="h-px bg-gray-200 dark:bg-white/10 flex-grow ml-4"></span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6 text-gray-600 dark:text-slate-300 leading-relaxed">
            <p>
              yours.</p>

<p>yours </p>
            <p>
              yours</p>
            <p>
             yours</p>

            <p>yours</p>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-primary" /> Experience
            </h3>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 dark:before:via-white/10 before:to-transparent">
              {EXPERIENCE.map((exp) => (
                <div key={exp.id} className="relative flex items-start group">
                   <div className="absolute left-0 mt-1.5 ml-3.5 h-3 w-3 rounded-full border-2 border-primary bg-gray-50 dark:bg-darker z-10"></div>
                   <div className="ml-10">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-primary transition-colors">{exp.role}</h4>
                    <p className="text-primary/80 font-medium mb-1">{exp.company}</p>
                    <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-slate-500 mb-2 font-mono uppercase tracking-wide">
                      <Calendar className="w-3 h-3" /> {exp.period}
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
                          • {desc}
                        </li>
                      ))}
                    </ul>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;