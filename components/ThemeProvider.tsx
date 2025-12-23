import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    // Initial placeholder; actual value will be set in useEffect
    return 'light';
  });

  const applyTheme = (t: Theme) => {
    try {
      document.documentElement.classList.toggle('dark', t === 'dark');
    } catch (e) {
      // ignore
    }
  };

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem('theme');
    } catch (e) {
      /* ignore */
    }

    if (stored === 'light' || stored === 'dark') {
      setThemeState(stored as Theme);
      applyTheme(stored as Theme);
      return;
    }

    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = prefersDark ? 'dark' : 'light';
    setThemeState(initial);
    applyTheme(initial);

    // Listen to system preference changes only when user has not saved a preference
    const mql = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
    const listener = (ev: MediaQueryListEvent) => {
      try {
        const hasStored = (() => {
          try { return localStorage.getItem('theme') !== null; } catch { return false; }
        })();
        if (!hasStored) {
          const newTheme: Theme = ev.matches ? 'dark' : 'light';
          setThemeState(newTheme);
          applyTheme(newTheme);
        }
      } catch (e) { /* ignore */ }
    };
    if (mql && 'addEventListener' in mql) {
      mql.addEventListener('change', listener);
      return () => mql.removeEventListener('change', listener);
    } else if (mql && 'addListener' in mql) {
      // older browsers
      // @ts-ignore
      mql.addListener(listener);
      // @ts-ignore
      return () => mql.removeListener(listener);
    }
  }, []);

  const setTheme = (t: Theme) => {
    try {
      localStorage.setItem('theme', t);
    } catch (e) {
      // ignore
    }
    setThemeState(t);
    applyTheme(t);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextValue => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
};

export default ThemeProvider;
