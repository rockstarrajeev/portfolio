import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index, onClick }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group relative cursor-pointer"
            onClick={onClick}
        >
            {/* Ambient card background glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500 to-accent-500 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-md -z-10" />

            {/* Card Content wrapper */}
            <div className="relative overflow-hidden rounded-2xl glass-premium h-[420px] flex flex-col justify-end p-8 transform transition duration-500 hover:-translate-y-2.5 hover:shadow-2xl hover:shadow-brand-500/10">
                <div className="absolute inset-0 z-0">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-25 group-hover:opacity-40 transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent dark:from-slate-950 dark:via-slate-950/70 dark:to-transparent"></div>
                </div>

                <div className="relative z-10 flex flex-col items-start translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-brand-400 font-semibold mb-2 bg-brand-500/10 px-3 py-1 rounded-full text-xs border border-brand-500/20">
                        {project.category}
                    </span>
                    <h3 className="text-2xl font-heading font-extrabold text-white mb-4 drop-shadow-lg leading-snug">
                        {project.title}
                    </h3>
                    <p className="text-slate-300 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2 text-sm leading-relaxed">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {project.tools.slice(0, 3).map((tool, i) => (
                            <span key={i} className="px-2.5 py-1 bg-white/10 backdrop-blur-sm rounded-lg text-xs text-white/90">
                                {tool}
                            </span>
                        ))}
                        {project.tools.length > 3 && (
                            <span className="px-2.5 py-1 bg-white/10 backdrop-blur-sm rounded-lg text-xs text-white/90">
                                +{project.tools.length - 3}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
