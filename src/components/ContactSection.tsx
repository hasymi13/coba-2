import React from 'react';
import { motion } from 'motion/react';
import { Mail, MessageSquare, ArrowRight, Sparkles, MapPin } from 'lucide-react';

interface ContactSectionProps {
  onOpenContact: () => void;
  lang: 'id' | 'en';
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenContact, lang }) => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-purple-950/20 dark:via-purple-950/30 dark:to-slate-950 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="relative rounded-3xl p-10 sm:p-16 lg:p-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-950 text-white shadow-2xl shadow-purple-950/50 overflow-hidden border border-purple-500/20">
          
          {/* Animated decorative shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-300 mb-4">
              <Sparkles className="w-4 h-4 text-purple-300" />
              <span>{lang === 'id' ? 'Mulai Proyek Baru' : 'Ready for New Adventures'}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 font-display leading-[1.1]">
              {lang === 'id'
                ? 'Mari Bangun Sesuatu yang Luar Biasa Bersama.'
                : 'Have an ambitious project in mind? Let’s bring it to life.'}
            </h2>

            <p className="text-purple-200/90 text-base sm:text-xl leading-relaxed mb-10 max-w-2xl font-light">
              {lang === 'id'
                ? 'Baik Anda membutuhkan perombakan desain UI/UX menyeluruh, prototipe interaktif modern, atau kode frontend berkinerja tinggi.'
                : 'Whether you need a complete design system revamp, high-conversion mobile app UI, or a modern animated frontend architecture.'}
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenContact}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-slate-950 font-bold text-sm shadow-xl shadow-purple-950/30 hover:bg-slate-100 transition-all cursor-pointer"
              >
                <span>{lang === 'id' ? 'Mulai Diskusi' : "Let's Talk"}</span>
                <ArrowRight className="w-4 h-4 text-purple-700" />
              </motion.button>

              <a
                href="mailto:hasymisomaida@unikma.ac.id"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-purple-900/60 hover:bg-purple-800/80 text-white font-medium text-sm border border-purple-400/30 transition-all"
              >
                <Mail className="w-4 h-4 text-purple-300" />
                <span>hasymisomaida@unikma.ac.id</span>
              </a>
            </div>

            {/* Location & Status Note */}
            <div className="mt-12 pt-8 border-t border-purple-500/20 flex flex-wrap items-center gap-6 text-xs text-purple-300/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>Victoria, Australia · GMT+10</span>
              </div>
              <span aria-hidden="true">·</span>
              <span>{lang === 'id' ? 'Waktu respon biasanya < 24 jam' : 'Typical response time: < 24 hours'}</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
