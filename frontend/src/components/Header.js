import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Monitor, Palette, Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const location = useLocation();
  const { themeMode, setTheme, accentColor, updateAccentColor } = useTheme();
  const [isColorMenuOpen, setIsColorMenuOpen] = useState(false);
  const colorMenuRef = useRef(null);

  const accentColors = [
    { name: 'Emerald', hsl: '161 94% 30%', bg: 'bg-emerald-500' },
    { name: 'Sapphire', hsl: '221 83% 53%', bg: 'bg-blue-600' },
    { name: 'Indigo', hsl: '239 84% 67%', bg: 'bg-indigo-500' },
    { name: 'Violet', hsl: '262 83% 58%', bg: 'bg-violet-500' },
    { name: 'Persian Blue', hsl: '231 48% 48%', bg: 'bg-indigo-600' },
    { name: 'Teal', hsl: '173 58% 39%', bg: 'bg-teal-600' },
    { name: 'Cyan', hsl: '193 95% 68%', bg: 'bg-cyan-400' },
    { name: 'Sage', hsl: '142 71% 45%', bg: 'bg-green-500' },
    { name: 'Amber', hsl: '38 92% 50%', bg: 'bg-amber-500' },
    { name: 'Orange', hsl: '25 95% 53%', bg: 'bg-orange-500' },
    { name: 'Rose', hsl: '341 81% 54%', bg: 'bg-rose-500' },
    { name: 'Crimson', hsl: '347 77% 50%', bg: 'bg-red-600' },
  ];
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
      if (colorMenuRef.current && !colorMenuRef.current.contains(event.target)) {
        setIsColorMenuOpen(false);
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
    <>
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
              {/* Desktop Color Picker */}
              <div className="relative" ref={colorMenuRef}>
                <button
                  onClick={() => {
                    setIsColorMenuOpen(!isColorMenuOpen);
                    setIsThemeMenuOpen(false);
                  }}
                  className="flex items-center gap-1.5 rounded-full bg-slate-100 dark:bg-white/5 p-1.5 pl-1.5 pr-2.5 transition-all duration-300 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/5 shadow-sm active:scale-95 group"
                  aria-label="Accent color"
                >
                  <div className={`h-6 w-6 rounded-full ${accentColors.find(c => c.hsl === accentColor)?.bg || 'bg-emerald-500'} shadow-sm ring-1 ring-black/5 dark:ring-white/10`} />
                  <Palette className="h-4 w-4 text-slate-500 dark:text-neutral-400 group-hover:text-emerald-500 transition-colors" />
                </button>

                {isColorMenuOpen && (
                  <div className="absolute right-0 mt-4 w-60 rounded-[24px] border border-gray-200 dark:border-white/10 bg-white/95 dark:bg-[#0b0f0f]/95 p-4 shadow-2xl z-[60] backdrop-blur-xl animate-in fade-in zoom-in duration-200">
                    <p className="mb-4 px-1 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-neutral-500">Accent Color</p>
                    <div className="grid grid-cols-4 gap-3 p-1">
                      {accentColors.map((color) => {
                        const isActive = accentColor === color.hsl;
                        return (
                          <button
                            key={color.name}
                            onClick={() => {
                              updateAccentColor(color.hsl);
                              setIsColorMenuOpen(false);
                            }}
                            title={color.name}
                            className={`group relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 active:scale-90 ${
                              isActive ? 'shadow-lg shadow-emerald-500/20' : ''
                            }`}
                          >
                            {/* Outer ring for active color */}
                            {isActive && (
                              <div className="absolute -inset-1 rounded-full border-2 border-emerald-500 dark:border-emerald-400" />
                            )}
                            
                            <div className={`h-full w-full rounded-full shadow-inner ${color.bg} bg-gradient-to-br from-white/20 to-black/10`} />
                            
                            {isActive && (
                              <Check className="absolute h-5 w-5 text-white drop-shadow-md" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Desktop Theme Toggle */}
              <div className="relative" ref={themeMenuRef}>
                <button
                  onClick={() => {
                    setIsThemeMenuOpen((open) => !open);
                    setIsColorMenuOpen(false);
                  }}
                  className="rounded-xl bg-slate-100 dark:bg-slate-800 p-3 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:bg-slate-200 dark:hover:bg-slate-700 shadow-sm"
                  aria-label="Change theme"
                >
                  <ActiveThemeIcon className="h-5 w-5" />
                </button>

                {isThemeMenuOpen && (
                  <div className="absolute right-0 mt-3 w-40 rounded-2xl border border-gray-200 dark:border-gray-800/50 bg-white dark:bg-[#0b0f0f] p-2 shadow-2xl z-[60]">
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
                              ? 'bg-emerald-500/15 text-emerald-500'
                              : 'text-slate-600 dark:text-neutral-400 hover:bg-slate-100 dark:hover:bg-neutral-900 hover:text-slate-900 dark:hover:text-white'
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

            {/* Mobile menu toggle (hamburger) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden rounded-xl bg-slate-100 dark:bg-neutral-900 p-2.5 text-slate-900 dark:text-white transition-colors hover:bg-slate-200 dark:hover:bg-neutral-800 border border-slate-200 dark:border-transparent flex items-center justify-center relative z-[100]"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm lg:hidden animate-in fade-in duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div 
        className={`fixed inset-y-0 right-0 z-[120] w-[280px] transition-transform duration-500 ease-out transform lg:hidden px-6 pb-8 pt-4 flex flex-col border-l border-slate-100 dark:border-white/10 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ 
          backgroundColor: themeMode === 'dark' ? '#000000' : '#ffffff',
          opacity: 1
        }}
      >
        <div className="flex items-center justify-end mb-2">
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="rounded-full bg-slate-50 dark:bg-white/5 p-2 text-slate-400 dark:text-neutral-500 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-col space-y-1 mb-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`group flex items-center justify-between font-headline text-sm font-bold py-2.5 transition-all ${
                  isActive ? 'text-emerald-500' : 'text-slate-600 dark:text-neutral-400 hover:text-emerald-500 dark:hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                <div className={`h-1 w-1 rounded-full bg-emerald-500 transition-all scale-0 group-hover:scale-100 ${isActive ? 'scale-100' : ''}`} />
              </Link>
            );
          })}
        </nav>
        
        <div className="border-t border-slate-100 dark:border-white/5 pt-8 space-y-8">
          <div className="space-y-4">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-neutral-500 px-1">Accent Color</p>
            <div className="grid grid-cols-6 gap-2 rounded-2xl bg-slate-50 dark:bg-white/5 p-2 border border-slate-100 dark:border-white/5 shadow-inner">
              {accentColors.map((color) => {
                const isActive = accentColor === color.hsl;
                return (
                  <button
                    key={color.name}
                    onClick={() => {
                      updateAccentColor(color.hsl);
                      setIsMenuOpen(false);
                    }}
                    className={`group relative flex h-7 w-7 items-center justify-center rounded-full transition-all duration-200 active:scale-90 ${
                      isActive ? 'ring-2 ring-emerald-500 ring-offset-2 dark:ring-offset-black shadow-lg shadow-emerald-500/20' : ''
                    }`}
                  >
                    <div className={`h-full w-full rounded-full shadow-inner ${color.bg} bg-gradient-to-br from-white/20 to-black/10`} />
                    {isActive && (
                      <Check className="absolute h-3 w-3 text-white drop-shadow-md" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-neutral-500 px-1">Theme Mode</p>
            <div className="grid grid-cols-3 gap-2 rounded-2xl bg-slate-50 dark:bg-white/5 p-1 border border-slate-100 dark:border-white/5 shadow-inner">
              {themeOptions.map((option) => {
                const OptionIcon = option.icon;
                const isSelected = themeMode === option.value;
                return (
                  <button
                    key={option.value}
                    onClick={() => {
                      setTheme(option.value);
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center justify-center gap-2 rounded-xl py-2 transition-all ${
                      isSelected
                        ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-400/20'
                        : 'text-slate-500 dark:text-neutral-400'
                    }`}
                  >
                    <OptionIcon className="h-3.5 w-3.5" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
