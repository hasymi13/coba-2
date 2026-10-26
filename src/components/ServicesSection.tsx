import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Layout, Code2, Smartphone, Sparkles, ChevronRight, Check } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';
import { Service } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: Service) => void;
  lang: 'id' | 'en';
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, lang }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Layout':
        return Layout;
      case 'Code2':
        return Code2;
      case 'Smartphone':
        return Smartphone;
      case 'Sparkles':
      default:
        return Sparkles;
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2">
            {lang === 'id' ? 'Layanan & Spesialisasi' : 'Services & Capabilities'}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 font-display">
            {lang === 'id' ? 'Keahlian untuk Produk Digital Anda' : 'Tailored Craft for High-Impact Products'}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            {lang === 'id'
              ? 'Dari konsep awal, arsitektur wireframe, desain sistem berskala besar, hingga kode frontend produksi dengan animasi kelas dunia.'
              : 'From early architectural blueprints and design tokens to production-ready frontend code built with speed and cinematic motion.'}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, idx) => {
            const IconComponent = getIcon(service.iconName);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-8 sm:p-10 shadow-xs hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-300 dark:hover:border-purple-600/40 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Icon & Numbering */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors font-display">
                    {service.title}
                  </h3>
                  <div className="text-xs font-semibold text-purple-600 dark:text-purple-400 mb-4">
                    {service.subtitle}
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Clean unboxed skill highlights with dot separators */}
                  <div className="flex flex-wrap items-center gap-y-1.5 gap-x-2 text-xs text-slate-500 dark:text-slate-400 mb-8 pt-4 border-t border-slate-100 dark:border-slate-800">
                    {service.skills.map((skill, sIdx) => (
                      <React.Fragment key={skill}>
                        <span>{skill}</span>
                        {sIdx < service.skills.length - 1 && (
                          <span aria-hidden="true" className="text-purple-500 font-bold">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Footer Link */}
                <button
                  onClick={() => onSelectService(service)}
                  className="inline-flex items-center gap-2 text-xs font-bold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors group-hover:translate-x-1 duration-200 cursor-pointer pt-2"
                >
                  <span>{lang === 'id' ? 'Lihat Detail & Output' : 'View Scope & Deliverables'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
