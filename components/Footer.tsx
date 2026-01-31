import React from 'react';
import { PROFILE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-white dark:bg-darker border-t border-gray-200 dark:border-white/5 text-center transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-gray-600 dark:text-slate-500 text-sm">
          Designed & Built by {PROFILE.name}
        </p>
        <p className="text-gray-500 dark:text-slate-600 text-xs mt-2 font-mono">
          Powered by Jst_wil Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;