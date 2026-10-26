import React from 'react';
import { ArrowUp } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/portfolioData';

interface FooterProps {
  lang: 'id' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
            <span className="font-bold text-slate-900 dark:text-white text-base">
              MH Somaida
            </span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span>
              UI/UX Designer & Creative Frontend Developer
            </span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span>© {new Date().getFullYear()} All rights reserved.</span>
          </div>

          {/* Social Links & Back-to-Top */}
          <div className="flex items-center gap-6 text-xs font-medium text-slate-600 dark:text-slate-400">
            {SOCIAL_LINKS.slice(0, 4).map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                {link.name}
              </a>
            ))}

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 p-2 rounded-xl text-slate-500 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
              title={lang === 'id' ? 'Kembali ke atas' : 'Back to top'}
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-[11px] font-semibold">{lang === 'id' ? 'Atas' : 'Top'}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
