import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, Play, Layers, Compass, Sparkles, RefreshCw, Wand2, Eye } from 'lucide-react';

interface AnimeMotionShowcaseProps {
  lang: 'id' | 'en';
}

type AnimationPreset = 'anime-pop' | 'fluid-morph' | 'stagger-burst' | 'zen-float';

export const AnimeMotionShowcase: React.FC<AnimeMotionShowcaseProps> = ({ lang }) => {
  const [activePreset, setActivePreset] = useState<AnimationPreset>('anime-pop');
  const [triggerCount, setTriggerCount] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D Card tilt calculation
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePos({
      x: (y / (rect.height / 2)) * -12, // tiltX
      y: (x / (rect.width / 2)) * 12,  // tiltY
    });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section id="motion-lab" className="py-24 relative overflow-hidden bg-slate-900 text-white">
      {/* Anime background speed line effect when triggered */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#a855f7_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Radiant ambient glow */}
      <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>{lang === 'id' ? 'Eksplorasi Transisi Animasi' : 'Kinetic Motion Laboratory'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 font-display">
            {lang === 'id' ? 'Transisi Animasi Modern & Interaktif' : 'Physics-Based & Anime-Grade Transitions'}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            {lang === 'id'
              ? 'Interaksi web tidak boleh kaku. Cobalah berbagai gaya transisi animasi di bawah ini—dari pegas dinamis ala anime hingga kurva fluid modern.'
              : 'Web interfaces should feel alive. Experiment with real-time motion physics below, featuring responsive 3D perspective tilting, dynamic spring curves, and organic fluid morphs.'}
          </p>
        </div>

        {/* Preset Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-800/80 rounded-2xl border border-slate-700/60 max-w-fit mb-12 backdrop-blur-md">
          {[
            { id: 'anime-pop', label: lang === 'id' ? '⚡ Anime Spring Pop' : '⚡ Anime Spring Pop' },
            { id: 'fluid-morph', label: lang === 'id' ? '🌊 Fluid Liquid Morph' : '🌊 Fluid Liquid Morph' },
            { id: 'stagger-burst', label: lang === 'id' ? '✨ Staggered Cascade' : '✨ Staggered Cascade' },
            { id: 'zen-float', label: lang === 'id' ? '🌌 Zen Harmonic Float' : '🌌 Zen Harmonic Float' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActivePreset(tab.id as AnimationPreset);
                setTriggerCount((c) => c + 1);
              }}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                activePreset === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Interactive Motion Sandbox Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Interactive 3D Perspective Tilt with Specular Sheen */}
          <div className="lg:col-span-6 bg-slate-800/50 border border-slate-700/60 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden backdrop-blur-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold tracking-wider uppercase text-purple-400">
                  {lang === 'id' ? 'Mikro-Interaksi 3D' : '3D Spatial Tilt'}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  tiltX: {mousePos.x.toFixed(1)}° · tiltY: {mousePos.y.toFixed(1)}°
                </span>
              </div>
              <p className="text-sm text-slate-300 mb-6">
                {lang === 'id'
                  ? 'Arahkan kursor Anda ke kartu di bawah ini untuk melihat fisika perspektif 3D yang mulus.'
                  : 'Hover and move your cursor over the card to experience live mathematical 3D gyro tilt.'}
              </p>
            </div>

            {/* 3D Tilt Element */}
            <div
              className="py-6 flex items-center justify-center [perspective:1000px]"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <motion.div
                ref={cardRef}
                animate={{
                  rotateX: mousePos.x,
                  rotateY: mousePos.y,
                }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className="relative w-full max-w-sm aspect-[16/10] rounded-2xl bg-gradient-to-br from-purple-900/90 via-indigo-900/80 to-slate-900 border border-purple-500/30 p-6 flex flex-col justify-between shadow-2xl shadow-purple-900/40 cursor-grab select-none overflow-hidden"
              >
                {/* Dynamic specular light reflection sheen */}
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle 200px at ${50 + mousePos.y * 3}% ${
                      50 - mousePos.x * 3
                    }%, rgba(255,255,255,0.2), transparent 70%)`,
                  }}
                />

                <div className="flex items-center justify-between z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-purple-400 shadow-sm shadow-purple-400" />
                    <span className="text-xs font-mono text-purple-200">KINETIC.CORE</span>
                  </div>
                  <span className="text-xs font-mono text-purple-300">120 FPS</span>
                </div>

                <div className="z-10">
                  <h4 className="text-xl font-bold text-white mb-1 font-display">
                    MH Somaida Portfolio Engine
                  </h4>
                  <p className="text-xs text-purple-200/80">
                    {lang === 'id' ? 'Transisi animasi selembut sutra' : 'Sub-pixel fluid motion responses'}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-purple-500/20 z-10 text-[11px] text-purple-300/70 font-mono">
                  <span>MOTION_ID: #8AB4AC</span>
                  <span>REACT 19 + MOTION</span>
                </div>
              </motion.div>
            </div>

            <div className="text-xs text-slate-400 text-center mt-2">
              {lang === 'id' ? '✨ Gerakkan mouse di dalam kotak untuk merasakan kemiringan' : '✨ Move cursor inside box to feel the gyro perspective'}
            </div>
          </div>

          {/* Card 2: Preset Live Sandbox Stage */}
          <div className="lg:col-span-6 bg-slate-800/50 border border-slate-700/60 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden backdrop-blur-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold tracking-wider uppercase text-indigo-400">
                  {lang === 'id' ? 'Panggung Simulasi Transisi' : 'Transition Simulation Stage'}
                </span>
                <button
                  onClick={() => setTriggerCount((c) => c + 1)}
                  className="flex items-center gap-1.5 text-xs text-purple-400 hover:text-purple-300 transition-colors font-medium cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>{lang === 'id' ? 'Ulangi Animasi' : 'Replay'}</span>
                </button>
              </div>
              <p className="text-sm text-slate-300 mb-6">
                {activePreset === 'anime-pop' &&
                  (lang === 'id'
                    ? 'Gaya Anime Pop: Kecepatan tinggi dengan pegas elastis dan skala dramatis.'
                    : 'Anime Spring Pop: High-velocity acceleration with bouncy elastic overshoot.')}
                {activePreset === 'fluid-morph' &&
                  (lang === 'id'
                    ? 'Gaya Fluid Liquid Morph: Kelokan bentuk organik dengan gradien berpendar cair.'
                    : 'Fluid Liquid Morph: Continuous organic spline morphing with luminous gradients.')}
                {activePreset === 'stagger-burst' &&
                  (lang === 'id'
                    ? 'Gaya Staggered Cascade: Urutan kemunculan berlapis yang memanjakan mata.'
                    : 'Staggered Cascade: Multi-layer domino orchestration with dimensional depth.')}
                {activePreset === 'zen-float' &&
                  (lang === 'id'
                    ? 'Gaya Zen Harmonic Float: Osilasi gravitasi santai dengan bayangan lembut.'
                    : 'Zen Harmonic Float: Weightless harmonic levitation with soft luminous diffusion.')}
              </p>
            </div>

            {/* Live Animation Stage */}
            <div className="h-64 flex items-center justify-center relative overflow-hidden bg-slate-950/60 rounded-2xl border border-slate-800 p-6">
              <AnimatePresence mode="wait">
                
                {/* 1. Anime Pop Animation */}
                {activePreset === 'anime-pop' && (
                  <motion.div
                    key={`anime-${triggerCount}`}
                    initial={{ scale: 0.1, rotate: -25, opacity: 0 }}
                    animate={{ scale: [0.1, 1.25, 0.95, 1], rotate: [ -25, 6, -2, 0 ], opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{
                      duration: 0.7,
                      times: [0, 0.6, 0.8, 1],
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                    className="flex flex-col items-center gap-3 text-center"
                  >
                    <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-purple-500 via-pink-500 to-indigo-500 p-1 shadow-2xl shadow-purple-500/50 flex items-center justify-center">
                      <div className="w-full h-full bg-slate-900 rounded-[22px] flex items-center justify-center">
                        <Zap className="w-12 h-12 text-purple-400" />
                      </div>
                    </div>
                    <div className="font-extrabold text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-display">
                      SHONEN IMPACT!
                    </div>
                    <span className="text-xs text-slate-400">Spring tension: 500 | Bounciness: 0.6</span>
                  </motion.div>
                )}

                {/* 2. Fluid Morph Animation */}
                {activePreset === 'fluid-morph' && (
                  <motion.div
                    key={`fluid-${triggerCount}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex flex-col items-center justify-center gap-3"
                  >
                    <div
                      className="w-32 h-32 bg-gradient-to-tr from-purple-600 via-indigo-500 to-cyan-400 shadow-2xl shadow-purple-600/50 animate-morph flex items-center justify-center transition-all duration-700"
                    >
                      <Sparkles className="w-10 h-10 text-white animate-spin" style={{ animationDuration: '8s' }} />
                    </div>
                    <div className="text-sm font-semibold text-purple-300">
                      Liquid Spline Morphing
                    </div>
                  </motion.div>
                )}

                {/* 3. Stagger Cascade Animation */}
                {activePreset === 'stagger-burst' && (
                  <motion.div
                    key={`stagger-${triggerCount}`}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    variants={{
                      hidden: { opacity: 0 },
                      show: {
                        opacity: 1,
                        transition: { staggerChildren: 0.12 },
                      },
                    }}
                    className="grid grid-cols-3 gap-3 w-full max-w-xs"
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <motion.div
                        key={num}
                        variants={{
                          hidden: { opacity: 0, y: 30, scale: 0.8 },
                          show: { opacity: 1, y: 0, scale: 1 },
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className="aspect-square bg-gradient-to-br from-purple-600/40 to-indigo-600/40 border border-purple-500/40 rounded-xl flex items-center justify-center font-mono font-bold text-purple-200 shadow-lg hover:border-purple-400 cursor-pointer"
                        whileHover={{ scale: 1.15, rotate: 5 }}
                      >
                        0{num}
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {/* 4. Zen Harmonic Float */}
                {activePreset === 'zen-float' && (
                  <motion.div
                    key={`zen-${triggerCount}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex flex-col items-center gap-4 text-center"
                  >
                    <motion.div
                      animate={{
                        y: [-12, 12, -12],
                        scale: [1, 1.04, 1],
                        rotate: [0, 4, -4, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="w-24 h-24 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-400 p-[2px] shadow-2xl shadow-indigo-500/30"
                    >
                      <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
                        <Wand2 className="w-8 h-8 text-purple-300" />
                      </div>
                    </motion.div>
                    <div className="text-sm font-semibold text-slate-300">
                      {lang === 'id' ? 'Harmoni Bebas Gravitasi' : 'Continuous Zero-G Levitation'}
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

            {/* Action Bar */}
            <div className="mt-6 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                {lang === 'id' ? 'Klik untuk memicu efek kembali:' : 'Trigger kinetic impulse:'}
              </span>
              <button
                onClick={() => setTriggerCount((c) => c + 1)}
                className="px-4 py-2 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-xl transition-all shadow-md shadow-purple-600/25 flex items-center gap-2 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{lang === 'id' ? 'Picukan Impuls' : 'Launch Impulse'}</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
