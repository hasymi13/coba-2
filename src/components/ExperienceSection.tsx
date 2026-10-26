import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

interface ExperienceSectionProps {
  lang: 'id' | 'en';
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ lang }) => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2">
            {lang === 'id' ? 'Jejak Karir & Pengalaman' : 'Career Journey'}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 font-display">
            {lang === 'id' ? 'Pengalaman Profesional' : 'Experience & Proven Track Record'}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            {lang === 'id'
              ? 'Telah memimpin tim desain produk dan rekayasa antarmuka di berbagai studio digital terkemuka di Australia dan global.'
              : 'Over 5 years of hands-on design leadership, architecting design systems and shipping mission-critical user interfaces.'}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-purple-200 dark:border-purple-900/60 ml-4 sm:ml-6 space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative pl-8 sm:pl-10 group"
            >
              {/* Timeline Node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-purple-600 group-hover:scale-125 group-hover:bg-purple-600 transition-all duration-200" />

              <div className="bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-7 sm:p-8 shadow-xs hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-600/40 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-display">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full w-fit">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{exp.location}</span>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                  {exp.achievements.map((ach) => (
                    <div key={ach} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
