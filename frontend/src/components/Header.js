import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const location = useLocation();
  const { themeMode, setTheme } = useTheme();
  const themeMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsThemeMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (themeMenuRef.current && !themeMenuRef.current.contains(event.target)) {
        setIsThemeMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/process' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Why Choose Us', path: '/why-us' },
    { name: 'Our Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  const themeOptions = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'system', label: 'System', icon: Monitor },
  ];

  const ActiveThemeIcon = themeOptions.find((option) => option.value === themeMode)?.icon || Monitor;
  const isHomePage = location.pathname === '/';
  const headerBackgroundClass = isScrolled
    ? 'bg-white/90 dark:bg-[#0b0f0f]/90 backdrop-blur-md shadow-[0_20px_40px_-15px_rgba(16,185,129,0.08)]'
    : 'bg-transparent';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBackgroundClass}`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between py-5">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400 font-headline text-2xl font-black tracking-tighter text-white uppercase shadow-lg shadow-emerald-400/20">
              BYV
            </span>
            <span className="font-headline text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Build Your Vision
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-2 rounded-full bg-slate-100 dark:bg-black/20 px-3 py-2 backdrop-blur-md xl:gap-3 border border-slate-200 dark:border-white/5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-headline rounded-full px-3 py-2 text-sm font-bold tracking-tight transition-all duration-300 ${
                    isActive
                      ? 'bg-emerald-300 text-black shadow-[0_10px_25px_-10px_rgba(110,231,183,0.9)]'
                      : 'text-slate-600 dark:text-white hover:bg-slate-200 dark:hover:bg-white/10 hover:text-emerald-600 dark:hover:text-emerald-100'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative" ref={themeMenuRef}>
              <button
                onClick={() => setIsThemeMenuOpen((open) => !open)}
                className="rounded-xl bg-slate-100 dark:bg-slate-800 p-3 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:bg-slate-200 dark:hover:bg-slate-700 shadow-sm"
                aria-label="Change theme"
              >
                <ActiveThemeIcon className="h-5 w-5" />
              </button>

              {isThemeMenuOpen && (
                <div className="absolute right-0 mt-3 w-40 rounded-2xl border border-gray-200 dark:border-gray-800/50 bg-white dark:bg-[#0b0f0f] p-2 shadow-2xl">
                  {themeOptions.map((option) => {
                    const OptionIcon = option.icon;
                    const isSelected = themeMode === option.value;

                    return (
                      <button
                        key={option.value}
                        onClick={() => {
                          setTheme(option.value);
                          setIsThemeMenuOpen(false);
                        }}
                        className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left font-headline text-sm font-bold transition-colors ${
                          isSelected
                            ? 'bg-emerald-400/15 text-emerald-300'
                            : 'text-neutral-300 hover:bg-neutral-900 hover:text-white'
                        }`}
                      >
                        <OptionIcon className="h-4 w-4" />
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="font-headline rounded-xl bg-emerald-300 px-6 py-2.5 font-bold text-black transition-all duration-300 hover:scale-105"
            >
              Start Project
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden rounded-xl bg-slate-100 dark:bg-neutral-900 p-2.5 text-slate-900 dark:text-white transition-colors hover:bg-slate-200 dark:hover:bg-neutral-800 border border-slate-200 dark:border-transparent"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-slate-100 dark:border-neutral-800 py-6 lg:hidden">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-headline text-lg font-bold transition-all ${
                    location.pathname === link.path ? 'text-emerald-500 underline underline-offset-8 decoration-2' : 'text-slate-500 dark:text-neutral-400 hover:text-emerald-500 dark:hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="grid grid-cols-3 gap-2 rounded-2xl bg-slate-100 dark:bg-neutral-900 p-2 border border-slate-200 dark:border-transparent">
                {themeOptions.map((option) => {
                  const OptionIcon = option.icon;
                  const isSelected = themeMode === option.value;

                  return (
                    <button
                      key={option.value}
                      onClick={() => setTheme(option.value)}
                      className={`flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 font-headline text-xs font-black uppercase tracking-widest transition-all ${
                        isSelected
                          ? 'bg-emerald-400 text-white shadow-lg shadow-emerald-400/20'
                          : 'text-slate-500 dark:text-neutral-400 hover:bg-slate-200 dark:hover:bg-neutral-800'
                      }`}
                    >
                      <OptionIcon className="h-4 w-4" />
                      {option.label}
                    </button>
                  );
                })}
              </div>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="font-headline inline-flex justify-center rounded-xl bg-emerald-300 px-6 py-3 font-bold text-black"
              >
                Start Project
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
