import React from 'react';
import { motion } from 'motion/react';
import { FolderCheck, Smile, Award, Sparkles } from 'lucide-react';

interface StatsStripProps {
  lang: 'id' | 'en';
}

export const StatsStrip: React.FC<StatsStripProps> = ({ lang }) => {
  const stats = [
    {
      icon: FolderCheck,
      value: '85+',
      label: lang === 'id' ? 'Proyek Selesai' : 'Projects Completed',
      sub: lang === 'id' ? 'Web & Aplikasi Mobile' : 'Web & Mobile Apps',
    },
    {
      icon: Smile,
      value: '99%',
      label: lang === 'id' ? 'Klien Puas' : 'Client Satisfaction',
      sub: lang === 'id' ? 'Ulasan Bintang 5' : '5-Star Verified Ratings',
    },
    {
      icon: Sparkles,
      value: '5+',
      label: lang === 'id' ? 'Tahun Pengalaman' : 'Years Experience',
      sub: lang === 'id' ? 'Desain UI/UX & Frontend' : 'UI/UX & Modern Frontend',
    },
    {
      icon: Award,
      value: '14',
      label: lang === 'id' ? 'Penghargaan Desain' : 'Design Accolades',
      sub: lang === 'id' ? 'Awwwards & CSSDA Honoree' : 'Awwwards & CSSDA Honoree',
    },
  ];

  return (
    <section className="py-10 border-y border-slate-100 dark:border-slate-800/80 bg-slate-50/60 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-400 dark:text-slate-500">
                    {stat.sub}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
