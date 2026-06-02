import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiStar, FiCode, FiGitBranch } from 'react-icons/fi';
import SectionContainer from '../components/SectionContainer';

// Language colors mapping for common languages
const languageColors = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    Python: '#3572A5',
    Solidity: '#AA6746',
    PowerShell: '#012456',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Java: '#b07219',
    C: '#555555',
    'C++': '#f34b7d',
    'C#': '#178600',
    Go: '#00ADD8',
    Rust: '#dea584',
    Ruby: '#701516',
    PHP: '#4F5D95',
    Swift: '#F05138',
    Kotlin: '#A97BFF',
    Dart: '#00B4AB',
    Shell: '#89e051',
    Vue: '#41b883',
    Svelte: '#ff3e00',
};

const GitHubRepos = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                setLoading(true);
                // Fetch from both profiles
                const [personalRes, orgRes] = await Promise.all([
                    fetch('https://api.github.com/users/rockstarrajeev/repos?sort=updated&per_page=6'),
                    fetch('https://api.github.com/users/wesoftcorp/repos?sort=updated&per_page=6')
                ]);

                if (!personalRes.ok || !orgRes.ok) {
                    throw new Error('Failed to fetch repositories');
                }

                const personalData = await personalRes.json();
                const orgData = await orgRes.json();

                // Combine and sort by last updated, then take top 6
                const combined = [...personalData, ...orgData]
                    .filter(repo => !repo.fork) // Optionally exclude forks
                    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
                    .slice(0, 6);

                setRepos(combined);
            } catch (err) {
                console.error("Error fetching GitHub repos:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    return (
        <SectionContainer id="github" title="GitHub Repositories">
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                    Explore my open-source projects and code repositories. I believe in learning by building and sharing knowledge with the community.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                    <a
                        href="https://github.com/rockstarrajeev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-semibold text-sm rounded-xl hover:bg-slate-800 dark:hover:bg-white transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap w-full sm:w-auto justify-center"
                    >
                        <FiGithub size={18} />
                        @rockstarrajeev
                    </a>
                    <a
                        href="https://github.com/wesoftcorp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 dark:bg-brand-500 text-white font-semibold text-sm rounded-xl hover:bg-brand-700 dark:hover:bg-brand-600 transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap w-full sm:w-auto justify-center"
                    >
                        <FiGithub size={18} />
                        @wesoftcorp
                    </a>
                </div>
            </div>

            {loading ? (
                <div className="flex justify-center items-center py-20">
                    <div className="w-10 h-10 border-4 border-brand-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            ) : error ? (
                <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-6 rounded-2xl text-center border border-red-100 dark:border-red-900/50">
                    <p>Failed to load repositories from GitHub. Please try again later.</p>
                </div>
            ) : repos.length === 0 ? (
                <div className="bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 p-6 rounded-2xl text-center border border-slate-200 dark:border-slate-700/50">
                    <p>No public repositories found.</p>
                </div>
            ) : (
                <div className="grid md:grid-cols-2 gap-6">
                    {repos.map((repo, index) => (
                        <motion.a
                            key={repo.id}
                            href={repo.html_url}
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
                                    <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-slate-100 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors truncate max-w-[200px] sm:max-w-[250px]">
                                        {repo.name}
                                    </h3>
                                </div>
                                <FiExternalLink
                                    size={16}
                                    className="text-slate-400 group-hover:text-brand-500 transition-colors mt-1 opacity-0 group-hover:opacity-100 flex-shrink-0"
                                />
                            </div>

                            {/* Description */}
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 line-clamp-2 h-10">
                                {repo.description || 'No description provided.'}
                            </p>

                            {/* Footer: Language + Stars + Forks */}
                            <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-500">
                                {repo.language && (
                                    <span className="flex items-center gap-1.5">
                                        <span
                                            className="w-3 h-3 rounded-full inline-block"
                                            style={{ backgroundColor: languageColors[repo.language] || '#8b949e' }}
                                        />
                                        <span className="font-medium">{repo.language}</span>
                                    </span>
                                )}
                                {repo.stargazers_count > 0 && (
                                    <span className="flex items-center gap-1">
                                        <FiStar size={13} />
                                        {repo.stargazers_count}
                                    </span>
                                )}
                                {repo.forks_count > 0 && (
                                    <span className="flex items-center gap-1">
                                        <FiGitBranch size={13} />
                                        {repo.forks_count}
                                    </span>
                                )}
                            </div>
                        </motion.a>
                    ))}
                </div>
            )}
        </SectionContainer>
    );
};

export default GitHubRepos;
