import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Download, ExternalLink, ArrowRight, Sparkles, Clock, Globe2 } from 'lucide-react';
import { ABOUT_IMAGE, SKILL_ITEMS } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenContact: () => void;
  lang: 'id' | 'en';
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact, lang }) => {
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadCV = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3500);
    }, 1200);
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative background blur element */}
      <div className="absolute -left-32 top-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Organic fluid curved framed photo matching user's reference */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-[500px] aspect-[4/3] sm:aspect-square flex items-center justify-center">
              
              {/* Organic Fluid Curved Mask Border Container (matching reference curve) */}
              <div
                className="relative w-full h-full p-2 bg-gradient-to-tr from-purple-700 via-indigo-600 to-purple-400 shadow-2xl shadow-purple-600/25 overflow-hidden"
                style={{
                  borderRadius: '56% 44% 71% 29% / 46% 58% 42% 54%',
                }}
              >
                <div
                  className="w-full h-full overflow-hidden bg-slate-900"
                  style={{
                    borderRadius: '54% 46% 69% 31% / 48% 56% 44% 52%',
                  }}
                >
                  <img
                    src={ABOUT_IMAGE}
                    alt="MH Somaida focused working at studio desk"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Floating Decorative Sphere from reference image */}
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-indigo-800 shadow-xl shadow-purple-600/40 pointer-events-none z-20"
              />

              {/* Interactive micro info pill (safely positioned at bottom corner away from face) */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="absolute -left-2 sm:-left-4 bottom-4 sm:bottom-6 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 p-3 rounded-2xl shadow-lg flex items-center gap-2.5"
              >
                <div className="p-1.5 rounded-lg bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-white">
                    {lang === 'id' ? 'Fokus & Dedikasi' : 'Deep Work Discipline'}
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">
                    {lang === 'id' ? 'Standar Kualitas Tertinggi' : 'Highest Engineering Standards'}
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* Right Column: About Content matching the exact wording and styling */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* Section Heading matching reference */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 font-display">
              {lang === 'id' ? 'Tentang Saya' : 'About me'}
            </h2>

            {/* Exact Reference Text */}
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              {lang === 'id'
                ? 'Halo, saya MH Somaida, seorang UI/UX Designer & Frontend Developer. Saya menciptakan pengalaman digital yang efisien dan inovatif yang menyeimbangkan kebutuhan pengguna dan tujuan bisnis secara harmonis.'
                : 'Hello, I’m MH Somaida, a UI/UX Designer & Frontend Developer. I create efficient and innovative experiences that balance user needs and business goals.'}
            </p>

            <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
              {lang === 'id'
                ? 'Dengan keahlian mendalam mulai dari penelitian wireframe di Figma hingga penulisan kode React modern bertenaga animasi interaktif, saya memastikan setiap piksel dirancang dengan tujuan dan berkinerja tinggi.'
                : 'Combining human-centered interface research with cutting-edge React architectures, I bring ideas from early whiteboard wireframes to production-grade deployments with buttery-smooth motion transitions.'}
            </p>

            {/* Core Capability Tags - Clean unboxed text as per Zero-Pill rule */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-medium text-slate-600 dark:text-slate-300 mb-8 pb-6 border-b border-slate-200 dark:border-slate-800 w-full">
              <span>Figma & Design Systems</span>
              <span aria-hidden="true" className="text-purple-500 font-bold">·</span>
              <span>React 19 & TypeScript</span>
              <span aria-hidden="true" className="text-purple-500 font-bold">·</span>
              <span>Framer Motion Physics</span>
              <span aria-hidden="true" className="text-purple-500 font-bold">·</span>
              <span>Tailwind CSS</span>
              <span aria-hidden="true" className="text-purple-500 font-bold">·</span>
              <span>WCAG Accessibility</span>
            </div>

            {/* Action Buttons matching the reference: "Hire Me" and "View Portfolio" */}
            <div className="flex flex-wrap items-center gap-4 w-full">
              {/* Primary "Hire Me" button */}
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenContact}
                className="px-8 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 rounded-full shadow-lg shadow-purple-600/30 transition-all cursor-pointer"
              >
                {lang === 'id' ? 'Rekrut Saya' : 'Hire Me'}
              </motion.button>

              {/* Secondary "View Portfolio" outline button */}
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href="#portfolio"
                className="px-8 py-3.5 text-sm font-semibold text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:border-purple-600 dark:hover:border-purple-400 rounded-full shadow-sm transition-all"
              >
                {lang === 'id' ? 'Lihat Portofolio' : 'View Portfolio'}
              </motion.a>

              {/* Download CV button */}
              <button
                onClick={handleDownloadCV}
                disabled={downloading}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-xs font-semibold text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-300 transition-colors cursor-pointer"
              >
                {downloadSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                      {lang === 'id' ? 'CV Terunduh!' : 'CV Downloaded!'}
                    </span>
                  </>
                ) : (
                  <>
                    <Download className={`w-4 h-4 ${downloading ? 'animate-bounce text-purple-600' : ''}`} />
                    <span>{downloading ? (lang === 'id' ? 'Menyiapkan...' : 'Preparing CV...') : (lang === 'id' ? 'Unduh Resume (PDF)' : 'Download CV (PDF)')}</span>
                  </>
                )}
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
