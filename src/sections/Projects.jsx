import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';
import SectionContainer from '../components/SectionContainer';
import { projectsData } from '../utils/data';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <SectionContainer id="projects" title="Featured Projects">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
                {projectsData.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative cursor-pointer"
                        onClick={() => openModal(project)}
                    >
                        {/* Card Content wrapper */}
                        <div className="relative overflow-hidden rounded-2xl glass h-[400px] flex flex-col justify-end p-8 transform transition duration-500 hover:-translate-y-2">
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-300 dark:opacity-20 dark:group-hover:opacity-30"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent dark:from-slate-950 dark:via-slate-900/60 dark:to-transparent"></div>
                            </div>

                            <div className="relative z-10 flex flex-col items-start translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <span className="text-brand-400 font-semibold mb-2 drop-shadow-md">
                                    {project.category}
                                </span>
                                <h3 className="text-3xl font-heading font-bold text-white mb-4 drop-shadow-lg">
                                    {project.title}
                                </h3>
                                <p className="text-slate-300 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/20 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    {project.tools.slice(0, 3).map((tool, i) => (
                                        <span key={i} className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white">
                                            {tool}
                                        </span>
                                    ))}
                                    {project.tools.length > 3 && (
                                        <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white">
                                            +{project.tools.length - 3}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
                    >
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                            onClick={closeModal}
                        ></div>

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass bg-white/90 dark:bg-slate-900/90 rounded-2xl shadow-2xl p-6 md:p-10"
                        >
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-300 dark:hover:bg-slate-700 transition"
                            >
                                <FiX size={24} />
                            </button>

                            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-4">
                                <div>
                                    <div className="rounded-xl overflow-hidden mb-6 h-64 md:h-80 w-full relative">
                                        <img
                                            src={selectedProject.image}
                                            alt={selectedProject.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex gap-4 mb-8">
                                        {selectedProject.github && (
                                            <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors font-medium">
                                                <FiGithub size={20} /> GitHub
                                            </a>
                                        )}
                                        {selectedProject.demo && (
                                            <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-brand-600 hover:bg-brand-500 text-white rounded-lg transition-colors font-medium">
                                                <FiExternalLink size={20} /> Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <span className="text-brand-600 dark:text-brand-400 font-semibold mb-2 block">
                                        {selectedProject.category}
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-slate-50 mb-6">
                                        {selectedProject.title}
                                    </h2>

                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="text-xl font-heading font-semibold text-slate-800 dark:text-slate-200 mb-2">The Problem</h4>
                                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                                {selectedProject.problem}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-heading font-semibold text-slate-800 dark:text-slate-200 mb-2">The Solution</h4>
                                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                                {selectedProject.solution}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-heading font-semibold text-slate-800 dark:text-slate-200 mb-3">Technologies Used</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProject.tools.map((tool, index) => (
                                                    <span key={index} className="px-3 py-1 bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800 rounded-full text-sm font-medium">
                                                        {tool}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </SectionContainer>
    );
};

export default Projects;
