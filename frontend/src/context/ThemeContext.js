import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(() => {
    return localStorage.getItem('theme-mode') || 'system';
  });

  const [actualTheme, setActualTheme] = useState('dark');

  useEffect(() => {
    const root = document.documentElement;
    
    const applyTheme = (theme) => {
      if (theme === 'dark') {
        root.classList.add('dark');
        setActualTheme('dark');
      } else {
        root.classList.remove('dark');
        setActualTheme('light');
      }
    };

    if (themeMode === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      applyTheme(mediaQuery.matches ? 'dark' : 'light');

      const handler = (e) => applyTheme(e.matches ? 'dark' : 'light');
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    } else {
      applyTheme(themeMode);
    }
  }, [themeMode]);

  const setTheme = (mode) => {
    setThemeMode(mode);
    localStorage.setItem('theme-mode', mode);
  };

  return (
    <ThemeContext.Provider value={{ themeMode, actualTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
