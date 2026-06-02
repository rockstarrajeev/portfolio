import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto glass-premium bg-white/95 dark:bg-slate-900/95 rounded-3xl shadow-2xl p-6 md:p-10 border border-white/20 dark:border-slate-800"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 md:top-6 md:right-6 p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-800 dark:hover:text-slate-250 transition-colors shadow-sm cursor-pointer border border-slate-200/50 dark:border-slate-700"
                    aria-label="Close Modal"
                >
                    <FiX size={20} />
                </button>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-10 mt-4">
                    <div>
                        <div className="rounded-2xl overflow-hidden mb-6 h-60 md:h-76 w-full relative border border-slate-200/50 dark:border-slate-800 shadow-md">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex gap-4 mb-4">
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-800 hover:bg-slate-700 dark:bg-slate-800 dark:hover:bg-slate-750 text-white rounded-xl transition-all font-semibold shadow-sm w-full md:w-auto">
                                    <FiGithub size={18} /> GitHub
                                </a>
                            )}
                            {project.demo && (
                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-brand-600 to-accent-600 hover:from-brand-500 hover:to-accent-500 text-white rounded-xl transition-all font-semibold shadow-lg shadow-brand-500/20 w-full md:w-auto">
                                    <FiExternalLink size={18} /> Live Demo
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col justify-between">
                        <div>
                            <span className="text-brand-600 dark:text-brand-400 font-bold mb-2 block uppercase text-xs tracking-widest">
                                {project.category}
                            </span>
                            <h2 className="text-3xl font-heading font-extrabold text-slate-900 dark:text-slate-50 mb-6 tracking-tight leading-snug">
                                {project.title}
                            </h2>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1.5">The Problem</h4>
                                    <p className="text-slate-650 dark:text-slate-350 leading-relaxed text-sm">
                                        {project.problem}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1.5">The Solution</h4>
                                    <p className="text-slate-650 dark:text-slate-350 leading-relaxed text-sm">
                                        {project.solution}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2.5">Technologies Used</h4>
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.tools.map((tool, index) => (
                                            <span key={index} className="px-3 py-1 bg-brand-50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-350 border border-brand-200/50 dark:border-brand-850 rounded-lg text-xs font-semibold">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectModal;
