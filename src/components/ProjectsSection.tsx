import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, ArrowUpRight, Sparkles, Layers } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
  lang: 'id' | 'en';
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject, lang }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ui-ux' | 'web-dev' | 'mobile'>('all');

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header and Filter Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2">
              {lang === 'id' ? 'Karya Pilihan' : 'Selected Works'}
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 font-display">
              {lang === 'id' ? 'Portofolio & Studi Kasus' : 'Crafted with Purpose & Motion'}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base">
              {lang === 'id'
                ? 'Eksplorasi proyek desain UI/UX, rekayasa frontend web modern, dan aplikasi seluler berkinerja tinggi.'
                : 'A curated selection of digital products, mobile banking interfaces, and responsive web platforms built for global scale.'}
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 dark:bg-slate-800/80 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 self-start md:self-end">
            {[
              { id: 'all', label: lang === 'id' ? 'Semua Proyek' : 'All Work' },
              { id: 'mobile', label: lang === 'id' ? 'Mobile App' : 'Mobile App' },
              { id: 'web-dev', label: lang === 'id' ? 'Web & Frontend' : 'Web Dev' },
              { id: 'ui-ux', label: lang === 'id' ? 'UI/UX Design' : 'UI/UX Design' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                  activeFilter === tab.id
                    ? 'bg-white dark:bg-slate-900 text-purple-600 dark:text-purple-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Layout */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => onSelectProject(project)}
                className="group relative bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 rounded-3xl overflow-hidden shadow-xs hover:shadow-2xl hover:shadow-purple-600/10 hover:border-purple-300 dark:hover:border-purple-600/40 transition-all duration-500 cursor-pointer flex flex-col"
              >
                {/* Media Image Showcase */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle dark gradient scrim at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Corner Expand Button */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-slate-800 dark:text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed Metadata with Typographic Separators */}
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 mb-3">
                      <span className="text-purple-600 dark:text-purple-400 font-semibold">
                        {project.categoryLabel}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{project.client}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono">{project.year}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors font-display">
                      {project.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Footer Metrics & Tags */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-mono font-medium text-slate-700 dark:text-slate-300">
                      {project.metrics}
                    </span>
                    <span className="text-purple-600 dark:text-purple-400 font-semibold group-hover:underline flex items-center gap-1">
                      {lang === 'id' ? 'Lihat Studi Kasus' : 'Case Study'} →
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
