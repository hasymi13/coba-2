import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

interface TestimonialsSectionProps {
  lang: 'id' | 'en';
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ lang }) => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2">
            {lang === 'id' ? 'Ulasan Klien' : 'Client Testimonials'}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 font-display">
            {lang === 'id' ? 'Dipercaya oleh Para Pendiri & Tim Produk' : 'Trusted by Product Leaders Globally'}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            {lang === 'id'
              ? 'Testimoni nyata dari kolaborator dan pimpinan teknologi yang merasakan dampak langsung peningkatan konversi dan kepuasan pengguna.'
              : 'Verifiable feedback from product executives and founders on conversion gains, design fidelity, and rapid execution.'}
          </p>
        </div>

        {/* Testimonials 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-8 shadow-xs hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-300 dark:hover:border-purple-600/40 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-purple-200 dark:text-purple-900 mb-4" />

                <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed italic mb-8">
                  "{t.quote}"
                </p>
              </div>

              {/* Author footer */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                <img
                  src={t.avatar}
                  alt={t.author}
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover border border-purple-500/20"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {t.author}
                  </h4>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {t.role} · <span className="text-purple-600 dark:text-purple-400 font-medium">{t.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
