import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, Mail, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'id' | 'en';
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, lang }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('UI/UX Design');
  const [budget, setBudget] = useState('$3,000 - $5,000');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError(lang === 'id' ? 'Mohon lengkapi nama, email, dan pesan Anda.' : 'Please fill in your name, email, and message.');
      return;
    }
    setError('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-950/80 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSubmitted ? (
            <div>
              <div className="mb-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-1">
                  {lang === 'id' ? 'Kolaborasi Proyek' : 'Start a Collaboration'}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
                  {lang === 'id' ? 'Ayo Bicara Tentang Proyek Anda' : "Let's Talk About Your Project"}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {lang === 'id'
                    ? 'Saya siap membantu mewujudkan produk impian Anda. Biasanya membalas dalam kurun 24 jam.'
                    : 'Available for freelance contracts, full product redesigns, and advisory roles.'}
                </p>
              </div>

              {error && (
                <div className="p-3 mb-4 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 text-xs text-rose-600 dark:text-rose-400 font-medium">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      {lang === 'id' ? 'Nama Lengkap' : 'Your Name'} *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={lang === 'id' ? 'cth. Alex Sander' : 'e.g. Alex Vance'}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      {lang === 'id' ? 'Alamat Email' : 'Email Address'} *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={lang === 'id' ? 'alex@company.com' : 'alex@company.com'}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    {lang === 'id' ? 'Tipe Kebutuhan Proyek' : 'What do you need help with?'}
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {['UI/UX Design', 'Frontend Web', 'Mobile App', 'Design System'].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setProjectType(type)}
                        className={`py-2 px-3 rounded-xl text-xs font-semibold text-center border transition-all cursor-pointer ${
                          projectType === type
                            ? 'bg-purple-600 text-white border-purple-600 shadow-sm'
                            : 'bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-purple-300'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {lang === 'id' ? 'Detail Proyek / Pesan' : 'Project Details & Goals'} *
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={
                      lang === 'id'
                        ? 'Ceritakan tentang produk, target pengguna, dan jadwal peluncuran...'
                        : 'Tell me about the goals, timeline, and current design state...'
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-sm resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-purple-600/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>{lang === 'id' ? 'Kirim Pesan Sekarang' : 'Send Project Proposal'}</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </div>
          ) : (
            /* Success confirmation */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-10 text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-3xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/20">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 font-display">
                {lang === 'id' ? 'Pesan Terkirim dengan Sukses!' : 'Message Received!'}
              </h3>

              <p className="text-slate-600 dark:text-slate-300 text-sm max-w-sm mb-6">
                {lang === 'id'
                  ? `Terima kasih, ${name}! Saya telah menerima rincian proyek Anda dan akan menghubungi kembali dalam 24 jam.`
                  : `Thank you, ${name}! I've received your project inquiry and will get back to you within 24 hours.`}
              </p>

              <button
                onClick={resetForm}
                className="px-6 py-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-xs shadow-md transition-all hover:opacity-90"
              >
                {lang === 'id' ? 'Selesai & Tutup' : 'Done & Close'}
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
