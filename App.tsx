// App.tsx (located at project root)
import React from 'react';
import { SectionId } from './types'; // Correct path for types.ts at root

// --- CORRECTED COMPONENT IMPORT PATHS (relative to App.tsx at root) ---
// Since App.tsx is at the root, and components are in src/components/,
// the path is './src/components/ComponentName'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';
// --- END CORRECTED IMPORTS ---

// REMOVED: import './src/index.css'; // index.tsx now imports the global CSS

const App: React.FC = () => {
  const [activeSection, setActiveSection] = React.useState<SectionId>(SectionId.HOME);

  // Intersection Observer to detect which section is in view
  React.useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id as SectionId);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when section is in middle of viewport
      threshold: 0
    });

    Object.values(SectionId).forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(id);
  };

  return (
    <ThemeProvider>
      {/* Top-level div for theme management. Use bg-gray-50 dark:bg-dark-bg for base colors. */}
      <div className="min-h-screen bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-slate-200 font-sans selection:bg-primary/30 selection:text-white transition-colors duration-300">
        <Navbar
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />
      <main>
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;