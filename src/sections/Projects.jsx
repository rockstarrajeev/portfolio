import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionContainer from '../components/SectionContainer';
import { projectsData } from '../utils/data';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';

const filterTabs = [
    { id: 'all', label: 'All Work' },
    { id: 'AI & Automation', label: 'AI & Automation' },
    { id: 'Cyber Security', label: 'Cyber Security' }
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeTab, setActiveTab] = useState('all');

    const openModal = (project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'auto';
    };

    const filteredProjects = projectsData.filter(project => {
        if (activeTab === 'all') return true;
        return project.category === activeTab;
    });

    return (
        <SectionContainer id="projects" title="Featured Projects">
            <div className="flex flex-col gap-10">
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed mx-auto text-center">
                    Explore my featured projects spanning intelligent automation pipelines, core cloud orchestrations,
                    and automated security audit pipelines. Filter by field to view matching cases.
                </p>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-2 justify-center pb-4">
                    {filterTabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                                activeTab === tab.id
                                    ? 'text-white font-bold'
                                    : 'text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-900/60'
                            }`}
                        >
                            {activeTab === tab.id && (
                                <motion.span
                                    layoutId="activeProjectTab"
                                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    className="absolute inset-0 bg-gradient-to-r from-brand-600 to-accent-600 rounded-full -z-10 shadow-md shadow-brand-500/20"
                                />
                            )}
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div 
                    layout
                    className="grid md:grid-cols-2 gap-8 lg:gap-10"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                                onClick={() => openModal(project)}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={closeModal}
                    />
                )}
            </AnimatePresence>
        </SectionContainer>
    );
};

export default Projects;
