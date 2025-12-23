import React from 'react';
import { Mail, MapPin, Twitter, Linkedin, Instagram } from 'lucide-react';
import { PROFILE, SectionId } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-dark dark:to-darker transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 flex items-center gap-3">
          <span className="text-primary text-center"></span> Get In Touch
          <span className="h-px bg-gray-200 dark:bg-white/10 flex-grow ml-4"></span>
        </h2>

        <div className="flex flex-col items-center text-center space-y-8 max-w-2xl mx-auto">
          < h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Let's work together.I get the Job Done.</h1>
          <p className="text-gray-600 dark:text-slate-300 text-lg leading-relaxed">
            I'm currently looking for new opportunities and projects to work on. Whether you have a question about my work, want to collaborate on a project, or just want to say hi, Reach out Via email or connect with me on social media. Let's create something amazing together!!
          </p>

          <div className="flex flex-wrap justify-center gap-8 pt-8">
            <div className="flex items-center gap-3 text-gray-600 dark:text-slate-300">
              <Mail className="w-5 h-5 text-primary" />
              <span>{PROFILE.email}</span>
            </div>

            <div className="flex items-center gap-3 text-gray-600 dark:text-slate-300">
              <MapPin className="w-5 h-5 text-primary" />
              <span>{PROFILE.location}</span>
            </div>
          </div>

          <a 
            href={`mailto:${PROFILE.email}`}
            className="inline-block mt-8 bg-transparent border border-primary text-primary hover:bg-primary/10 px-8 py-4 rounded-lg font-medium transition-all"
          >
            Say Hello
          </a>

          {/* Social Icons with purple hover */}
          <div className="flex gap-8 mt-12 pt-8 border-t border-gray-200 dark:border-white/10 w-full justify-center">
            <a href={PROFILE.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-500 transition-colors transform hover:scale-110">
              <Twitter className="w-6 h-6" />
            </a>
            <a href={PROFILE.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-500 transition-colors transform hover:scale-110">
              <Instagram className="w-6 h-6" />
            </a>
            <a href={`mailto:${PROFILE.email}`} className="text-gray-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-500 transition-colors transform hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;