import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, CheckCircle2, Code2, Palette } from 'lucide-react';
import { HERO_IMAGE } from '../data/portfolioData';

interface HeroProps {
  onOpenContact: () => void;
  lang: 'id' | 'en';
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, lang }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 lg:py-0 overflow-hidden">
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-purple-500/10 via-indigo-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Presentation matching reference image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-5 flex flex-col items-start z-10"
          >
            {/* Kicker from reference */}
            <motion.span
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl text-slate-400 dark:text-slate-400 font-light mb-2 font-display"
            >
              {lang === 'id' ? 'Halo,' : 'Hello,'}
            </motion.span>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-6xl xl:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.08] mb-4 font-display"
            >
              {lang === 'id' ? 'Saya' : 'I Am'}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800 dark:from-purple-400 dark:via-indigo-300 dark:to-purple-200">
                MH Somaida
              </span>
            </motion.h1>

            {/* Subtitle matching reference */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl sm:text-2xl font-medium text-slate-600 dark:text-slate-300 mb-6 flex items-center gap-2"
            >
              <span>UI/UX Designer</span>
              <span className="text-purple-600 font-semibold">·</span>
              <span className="text-slate-500 dark:text-slate-400 font-normal text-lg">
                Frontend Developer
              </span>
            </motion.p>

            {/* Concise lead copy */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-slate-600 dark:text-slate-400 text-base leading-relaxed max-w-lg mb-8"
            >
              {lang === 'id'
                ? 'Membangun antarmuka digital modern dengan estetika presisi, sistem desain terstruktur, dan transisi animasi dinamis yang memikat pengguna.'
                : 'Crafting modern digital products with pixel precision, scalable design systems, and fluid anime-grade kinetic micro-interactions that elevate user experiences.'}
            </motion.p>

            {/* Action Button matching the "Let's talk ->" style in reference image */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4"
            >
              <motion.button
                onClick={onOpenContact}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="group relative inline-flex items-center gap-3 px-8 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 rounded-2xl shadow-xl shadow-purple-600/30 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Subtle shine sweep */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-in-out" />
                <span>{lang === 'id' ? 'Ayo Bicara' : "Let's talk"}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>

              <a
                href="#portfolio"
                className="px-6 py-3.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-purple-300 dark:hover:border-purple-700/50 transition-all"
              >
                {lang === 'id' ? 'Lihat Portofolio' : 'Explore Portfolio'}
              </a>
            </motion.div>

            {/* Proof indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-6 text-xs text-slate-500 dark:text-slate-400 font-medium"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                <span>{lang === 'id' ? 'Tersedia untuk Proyek Baru' : 'Available for Select Projects'}</span>
              </div>
              <span aria-hidden="true" className="hidden sm:inline text-slate-300 dark:text-slate-700">·</span>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{lang === 'id' ? 'Victoria, Australia / Global' : 'Victoria, AU & Remote'}</span>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Hero Visual with Organic Curved Wave Backdrop from reference */}
          <div className="lg:col-span-6 xl:col-span-7 relative flex justify-center items-center">
            
            {/* The Signature Purple Organic Fluid Wave Backdrop (matching the mockup) */}
            <div className="relative w-full max-w-[540px] aspect-[4/5] sm:aspect-square flex items-center justify-center">
              
              {/* Organic Fluid Curved Shape */}
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-800 shadow-2xl shadow-purple-600/35 overflow-hidden"
                style={{
                  borderRadius: '38% 62% 63% 37% / 41% 44% 56% 59%',
                }}
              >
                {/* Subtle radial inner glow */}
                <div className="absolute inset-0 bg-radial-gradient from-white/10 to-transparent pointer-events-none" />
              </motion.div>

              {/* High-Fidelity Portrait Photo matching reference pose & outfit */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-[88%] h-[92%] flex items-end justify-center overflow-hidden"
              >
                <img
                  src={HERO_IMAGE}
                  alt="MH Somaida - UI/UX Designer and Frontend Developer"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top drop-shadow-2xl rounded-b-[40px] transition-transform duration-700 hover:scale-[1.02]"
                />
              </motion.div>

              {/* Floating Decorative Sphere (safely positioned at lower side) */}
              <motion.div
                animate={{ y: [-8, 8, -8], rotate: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="hidden sm:block absolute -right-6 top-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-purple-500 to-indigo-700 shadow-lg shadow-purple-500/40 pointer-events-none z-20"
              />

              {/* Desktop Floating Badge 1: UI/UX (positioned at lower-left, far below face) */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                whileHover={{ scale: 1.06, y: -4 }}
                className="hidden sm:flex absolute -left-6 md:-left-10 lg:-left-14 bottom-4 md:bottom-8 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 p-3.5 rounded-2xl shadow-xl shadow-purple-950/15 items-center gap-3 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                  <Palette className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-white whitespace-nowrap">
                    UI/UX & Design Systems
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 whitespace-nowrap">
                    5+ Years Crafting Digital Experiences
                  </div>
                </div>
              </motion.div>

              {/* Desktop Floating Badge 2: Frontend Tech (positioned at lower-right waist level, completely away from face) */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.06, y: -4 }}
                className="hidden sm:flex absolute -right-6 md:-right-10 lg:-right-14 bottom-24 md:bottom-28 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 p-3.5 rounded-2xl shadow-xl shadow-purple-950/15 items-center gap-3 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-white whitespace-nowrap">
                    React 19 & Fluid Motion
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 whitespace-nowrap">
                    80+ Production Deployments
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Mobile Feature Badges - Displayed cleanly below the portrait so the face is 100% visible and unobstructed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="sm:hidden mt-6 flex flex-col gap-3 w-full max-w-sm"
            >
              <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 p-3.5 rounded-2xl shadow-sm flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                  <Palette className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-white">
                    UI/UX & Design Systems
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">
                    5+ Tahun Membangun Pengalaman Digital
                  </div>
                </div>
              </div>

              <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 p-3.5 rounded-2xl shadow-sm flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-white">
                    React 19 & Fluid Motion
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">
                    80+ Deploy Produksi Berkinerja Tinggi
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
