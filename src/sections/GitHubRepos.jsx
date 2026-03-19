import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiStar, FiCode } from 'react-icons/fi';
import SectionContainer from '../components/SectionContainer';
import { githubRepos, personalInfo } from '../utils/data';

const GitHubRepos = () => {
    return (
        <SectionContainer id="github" title="GitHub Repositories">
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                    Explore my open-source projects and code repositories. I believe in learning by building and sharing knowledge with the community.
                </p>
                <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-semibold text-sm rounded-xl hover:bg-slate-800 dark:hover:bg-white transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap w-max"
                >
                    <FiGithub size={18} />
                    View All Repos
                </a>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {githubRepos.map((repo, index) => (
                    <motion.a
                        key={repo.id}
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ y: -4, scale: 1.01 }}
                        className="group block p-6 rounded-2xl glass bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 hover:border-brand-400 dark:hover:border-brand-500 transition-all duration-300 hover:shadow-xl hover:shadow-brand-500/10 cursor-pointer"
                    >
                        {/* Header */}
                        <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-2.5">
                                <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 group-hover:bg-brand-50 dark:group-hover:bg-brand-900/30 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                                    <FiCode size={18} />
                                </div>
                                <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-slate-100 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                                    {repo.name}
                                </h3>
                            </div>
                            <FiExternalLink
                                size={16}
                                className="text-slate-400 group-hover:text-brand-500 transition-colors mt-1 opacity-0 group-hover:opacity-100"
                            />
                        </div>

                        {/* Description */}
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 line-clamp-2">
                            {repo.description}
                        </p>

                        {/* Footer: Language + Stars */}
                        <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-500">
                            <span className="flex items-center gap-1.5">
                                <span
                                    className="w-3 h-3 rounded-full inline-block"
                                    style={{ backgroundColor: repo.languageColor }}
                                />
                                <span className="font-medium">{repo.language}</span>
                            </span>
                            {repo.stars > 0 && (
                                <span className="flex items-center gap-1">
                                    <FiStar size={13} />
                                    {repo.stars}
                                </span>
                            )}
                        </div>
                    </motion.a>
                ))}
            </div>
        </SectionContainer>
    );
};

export default GitHubRepos;
