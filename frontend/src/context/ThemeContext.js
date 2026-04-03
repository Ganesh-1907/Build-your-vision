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

  const [accentColor, setAccentColor] = useState(() => {
    return localStorage.getItem('accent-color') || '161 94% 30%'; // Default emerald-500
  });

  const [actualTheme, setActualTheme] = useState('dark');

  useEffect(() => {
    const root = document.documentElement;
    
    // Apply Theme (Dark/Light)
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

  useEffect(() => {
    // Apply Accent Color
    const root = document.documentElement;
    root.style.setProperty('--primary-hsl', accentColor);
    localStorage.setItem('accent-color', accentColor);
  }, [accentColor]);

  const setTheme = (mode) => {
    setThemeMode(mode);
    localStorage.setItem('theme-mode', mode);
  };

  const updateAccentColor = (color) => {
    setAccentColor(color);
  };

  return (
    <ThemeContext.Provider value={{ themeMode, actualTheme, setTheme, accentColor, updateAccentColor }}>
      {children}
    </ThemeContext.Provider>
  );
};
