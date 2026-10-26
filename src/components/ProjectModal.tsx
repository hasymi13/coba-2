import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, ExternalLink, Calendar, Building2, UserCheck, BarChart3, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenContact: () => void;
  lang: 'id' | 'en';
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenContact,
  lang,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-950/80 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-y-auto flex flex-col z-10"
        >
          {/* Header Close Bar */}
          <div className="sticky top-0 right-0 z-20 flex items-center justify-between p-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <span className="text-purple-600 dark:text-purple-400 font-semibold">
                {project.categoryLabel}
              </span>
              <span aria-hidden="true">·</span>
              <span>{project.client}</span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Hero Media */}
          <div className="w-full aspect-[16/9] bg-slate-950 relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-10 space-y-8">
            {/* Title & Metadata Strip */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-4 font-display">
                {project.title}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 px-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 text-xs">
                <div>
                  <div className="text-slate-400 mb-0.5">{lang === 'id' ? 'Klien' : 'Client'}</div>
                  <div className="font-semibold text-slate-800 dark:text-slate-200">{project.client}</div>
                </div>
                <div>
                  <div className="text-slate-400 mb-0.5">{lang === 'id' ? 'Tahun' : 'Year'}</div>
                  <div className="font-semibold text-slate-800 dark:text-slate-200 font-mono">{project.year}</div>
                </div>
                <div>
                  <div className="text-slate-400 mb-0.5">{lang === 'id' ? 'Peran' : 'Role'}</div>
                  <div className="font-semibold text-slate-800 dark:text-slate-200">{project.role}</div>
                </div>
                <div>
                  <div className="text-slate-400 mb-0.5">{lang === 'id' ? 'Hasil Kunci' : 'Key Result'}</div>
                  <div className="font-semibold text-purple-600 dark:text-purple-400 font-mono">{project.metrics}</div>
                </div>
              </div>
            </div>

            {/* In-Depth Synopsis */}
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-3">
                {lang === 'id' ? 'Ringkasan & Solusi Desain' : 'Overview & Design Challenge'}
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Deliverables Checklist */}
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-3">
                {lang === 'id' ? 'Luaran & Hasil Proyek' : 'Key Deliverables'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.deliverables.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800"
                  >
                    <CheckCircle className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                {project.tags.map((tag, tIdx) => (
                  <React.Fragment key={tag}>
                    <span>{tag}</span>
                    {tIdx < project.tags.length - 1 && <span>·</span>}
                  </React.Fragment>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    onClose();
                    onOpenContact();
                  }}
                  className="px-6 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-md shadow-purple-600/20 hover:opacity-95 transition-all cursor-pointer"
                >
                  {lang === 'id' ? 'Ajukan Proyek Serupa' : 'Discuss Similar Project'}
                </button>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
