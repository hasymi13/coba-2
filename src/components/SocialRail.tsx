import React from 'react';
import { motion } from 'motion/react';
import { ArrowUp, ExternalLink } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/portfolioData';

export const SocialRail: React.FC = () => {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-6 select-none pointer-events-auto"
      aria-label="Social media connections"
    >
      {/* Links displayed vertically */}
      <div className="flex flex-col items-center gap-5">
        {SOCIAL_LINKS.map((link, idx) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="group relative text-xs tracking-wider text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors uppercase font-medium [writing-mode:vertical-rl] rotate-180 py-1"
          >
            {link.label}
            <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-0 group-hover:h-3 bg-purple-600 dark:bg-purple-400 rounded-full transition-all duration-200" />
          </motion.a>
        ))}
      </div>

      {/* Decorative arrow & indicator matching the reference design */}
      <div className="flex flex-col items-center gap-2 pt-2">
        <motion.div
          animate={{ y: [-3, 3, -3] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          className="text-slate-400 dark:text-slate-500"
        >
          <ArrowUp className="w-4 h-4" />
        </motion.div>
        <div className="w-[1px] h-12 bg-gradient-to-b from-purple-500/60 to-transparent" />
        <span className="text-[10px] tracking-widest text-slate-400 dark:text-slate-500 uppercase font-semibold [writing-mode:vertical-rl] rotate-180">
          follow me
        </span>
      </div>
    </motion.aside>
  );
};
