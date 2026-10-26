import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, ArrowRight } from 'lucide-react';
import { Service } from '../types';

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
  onOpenContact: () => void;
  lang: 'id' | 'en';
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onOpenContact,
  lang,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-950/80 backdrop-blur-md cursor-pointer"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl p-6 sm:p-8 z-10"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              {service.subtitle}
            </span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1 font-display">
              {service.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
              {service.description}
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {lang === 'id' ? 'Cakupan & Hasil Kerja (Deliverables)' : 'Included Deliverables & Outcomes'}
            </h4>
            <div className="space-y-2">
              {service.deliverables.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-xs font-medium text-slate-800 dark:text-slate-200"
                >
                  <CheckCircle className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {lang === 'id' ? 'Tutup' : 'Close'}
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-md shadow-purple-600/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>{lang === 'id' ? 'Mulai dengan Layanan Ini' : 'Start This Service'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
