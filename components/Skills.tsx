import React from 'react';
import { Layout, Server, Brain } from 'lucide-react';
import { SKILLS, EXPERTISE, SectionId } from '../constants';

const iconMap = {
  layout: Layout,
  server: Server,
  brain: Brain
};

const Skills: React.FC = () => {
  return (
    <section id={SectionId.SKILLS} className="py-8 bg-white dark:bg-darker border-t border-gray-200 dark:border-white/5 text-center transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-16 flex items-center gap-3">
          <span className="text-primary"></span> Expertise
          <span className="h-px bg-gray-200 dark:bg-white/10 flex-grow ml-4"></span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {EXPERTISE.map((area) => {
            const Icon = iconMap[area.icon];
            const areaSkills = SKILLS.filter(s => s.category === area.skillCategory);

            return (
              <div key={area.id} className="group bg-white dark:bg-card p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col h-full">
                {/* Header with Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-primary dark:text-primary-light" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                    {area.description}
                  </p>
                </div>

                {/* Skills with Ratings */}
                <div className="mt-auto pt-6 border-t border-gray-100 dark:border-white/5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-slate-500 mb-4">Core Technologies</h4>
                  <div className="space-y-4">
                    {areaSkills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1.5">
                          <span className="text-sm font-medium text-gray-700 dark:text-slate-300">
                            {skill.name}
                          </span>
                          <span className="text-xs text-primary font-mono">{skill.level}%</span>
                        </div>
                        <div className="h-2 w-full bg-gray-100 dark:bg-black/40 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary/80 rounded-full"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;