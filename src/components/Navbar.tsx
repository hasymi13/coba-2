import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, ArrowRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  isDark: boolean;
  toggleTheme: () => void;
  lang: 'id' | 'en';
  toggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenContact,
  isDark,
  toggleTheme,
  lang,
  toggleLang,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: lang === 'id' ? 'Tentang' : 'About', href: '#about' },
    { label: lang === 'id' ? 'Layanan' : 'Services', href: '#services' },
    { label: lang === 'id' ? 'Portofolio' : 'Work', href: '#portfolio' },
    { label: lang === 'id' ? 'Pengalaman' : 'Experience', href: '#experience' },
    { label: lang === 'id' ? 'Animasi' : 'Motion Lab', href: '#motion-lab' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-xs border-b border-slate-100 dark:border-slate-800/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap shrink-0 group flex items-center gap-1.5"
        >
          <span>MH Somaida</span>
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 transition-transform group-hover:scale-150 duration-300" />
        </a>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 hover:text-purple-600 dark:hover:text-purple-400 transition-colors whitespace-nowrap shrink-0 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-600 dark:bg-purple-400 transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action + controls */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Subtle Locale toggle */}
          <button
            onClick={toggleLang}
            title={lang === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
            className="px-2 py-1 text-xs font-semibold rounded text-slate-500 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-300 transition-colors uppercase border border-slate-200 dark:border-slate-800"
          >
            {lang}
          </button>

          {/* Theme mode toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full text-slate-500 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-300 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Primary CTA button */}
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: '0 10px 25px -5px rgba(124, 58, 237, 0.4)' }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenContact}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 rounded-full shadow-md shadow-purple-500/20 transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>{lang === 'id' ? 'Hubungi Saya' : "Let's Talk"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.button>

          {/* Mobile hamburger menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 dark:text-slate-200 hover:text-purple-600 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-slate-800 dark:text-slate-200 hover:text-purple-600 transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full py-3 px-4 text-center text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-md shadow-purple-500/20"
                >
                  {lang === 'id' ? 'Mulai Diskusi Proyek' : "Let's Talk →"}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
