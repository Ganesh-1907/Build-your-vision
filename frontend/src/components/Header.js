import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const { themeMode, setTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Our Process', path: '/process' },
    { name: 'Industries', path: '/industries' },
    { name: 'Why Choose Us', path: '/why-us' },
    { name: 'Recent Work', path: '/work' },
    { name: 'Contact', path: '/contact' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const themeOptions = [
    { mode: 'light', icon: Sun, label: 'Light' },
    { mode: 'dark', icon: Moon, label: 'Dark' },
    { mode: 'system', icon: Monitor, label: 'System' },
  ];

  const CurrentThemeIcon = themeOptions.find(opt => opt.mode === themeMode)?.icon || Monitor;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 dark:bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-xl">BYV</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-gray-900 dark:text-white">Build Your Vision</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-300 hover:text-emerald-500 ${
                  location.pathname === link.path
                    ? 'text-emerald-500'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                aria-label="Toggle theme"
              >
                <CurrentThemeIcon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>
              
              {isThemeMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-1">
                  {themeOptions.map(({ mode, icon: Icon, label }) => (
                    <button
                      key={mode}
                      onClick={() => {
                        setTheme(mode);
                        setIsThemeMenuOpen(false);
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-2 text-sm transition-colors duration-200 ${
                        themeMode === mode
                          ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="hidden lg:inline-flex px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Start Your Project
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-medium transition-colors duration-300 hover:text-emerald-500 ${
                    location.pathname === link.path
                      ? 'text-emerald-500'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex justify-center px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-all duration-300"
              >
                Start Your Project
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
