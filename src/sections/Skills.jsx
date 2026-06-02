import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiStar, FiZap } from 'react-icons/fi';
import SectionContainer from '../components/SectionContainer';
import { skillsData } from '../utils/data';

const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'infrastructure', label: 'Systems & Infrastructure', match: ['Infrastructure', 'Endpoint Management', 'Virtualization', 'VDI'] },
    { id: 'cloud', label: 'Cloud & Identity', match: ['Cloud'] },
    { id: 'scripting', label: 'Automation & Operations', match: ['Scripting', 'Monitoring'] },
    { id: 'security', label: 'Security & Emerging', match: ['Security', 'Emerging Tech'] }
];

const getProficiency = (level) => {
    if (level >= 90) return { label: 'Expert', color: 'from-brand-500 to-accent-500', icon: <FiStar className="text-amber-400 fill-amber-400" /> };
    if (level >= 80) return { label: 'Advanced', color: 'from-blue-500 to-cyan-500', icon: <FiZap className="text-blue-400 fill-blue-400" /> };
    return { label: 'Proficient', color: 'from-emerald-500 to-teal-500', icon: <FiCheckCircle className="text-emerald-400" /> };
};

const Skills = () => {
    const [activeTab, setActiveTab] = useState('all');

    const filteredSkills = skillsData.filter(skill => {
        if (activeTab === 'all') return true;
        const catObj = categories.find(c => c.id === activeTab);
        return catObj ? catObj.match.includes(skill.category) : true;
    });

    return (
        <SectionContainer id="skills" title="Technical Skills">
            <div className="flex flex-col gap-10">
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed mx-auto text-center">
                    Explore my hands-on proficiency across modern software engineering, high-availability IT platforms, 
                    and enterprise cloud environments.
                </p>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-2 justify-center pb-4">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                                activeTab === cat.id
                                    ? 'text-white font-bold'
                                    : 'text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-900/60'
                            }`}
                        >
                            {activeTab === cat.id && (
                                <motion.span
                                    layoutId="activeSkillTab"
                                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    className="absolute inset-0 bg-gradient-to-r from-brand-600 to-accent-600 rounded-full -z-10 shadow-md shadow-brand-500/20"
                                />
                            )}
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Modern Bento/Pill Grid */}
                <motion.div 
                    layout
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredSkills.map((skill) => {
                            const prof = getProficiency(skill.level);
                            
                            return (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -15, scale: 0.95 }}
                                    transition={{ duration: 0.4, type: 'spring', bounce: 0.4 }}
                                    key={skill.name}
                                    className="group relative overflow-hidden rounded-2xl glass-premium shadow-sm border border-slate-200/60 dark:border-slate-800 hover:shadow-xl hover:border-brand-500/30 transition-all duration-500 cursor-default"
                                >
                                    {/* Hover Gradient Overlay */}
                                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${prof.color} transition-opacity duration-500`} />
                                    
                                    <div className="relative p-6 flex flex-col h-full z-10">
                                        <div className="flex justify-between items-start mb-4">
                                            <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest bg-slate-100 dark:bg-slate-800/80 px-2 py-1 rounded-md">
                                                {skill.category}
                                            </span>
                                            
                                            {/* Proficiency Badge */}
                                            <div className="flex items-center gap-1.5 bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 px-2.5 py-1 rounded-full">
                                                {prof.icon}
                                                <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                                                    {prof.label}
                                                </span>
                                            </div>
                                        </div>
                                        
                                        <h4 className="text-[15px] sm:text-base font-heading font-bold text-slate-800 dark:text-slate-100 leading-snug group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors duration-300">
                                            {skill.name}
                                        </h4>
                                        
                                        {/* Abstract Level Indicator (Dots instead of Bar) */}
                                        <div className="mt-auto pt-6 flex gap-1.5 items-center">
                                            {[...Array(5)].map((_, i) => {
                                                // Convert 0-100 level to 1-5 scale
                                                const score = Math.round(skill.level / 20);
                                                const isActive = i < score;
                                                
                                                return (
                                                    <motion.div 
                                                        key={i}
                                                        initial={{ scale: 0 }}
                                                        whileInView={{ scale: 1 }}
                                                        transition={{ delay: 0.1 * i, type: 'spring' }}
                                                        viewport={{ once: true }}
                                                        className={`h-1.5 rounded-full transition-all duration-500 ${
                                                            isActive 
                                                                ? `w-4 bg-gradient-to-r ${prof.color} shadow-sm` 
                                                                : 'w-1.5 bg-slate-200 dark:bg-slate-800'
                                                        }`}
                                                    />
                                                );
                                            })}
                                        </div>
                                    </div>
                                    
                                    {/* Decorative background element */}
                                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800/40 dark:to-slate-900/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>
            </div>
        </SectionContainer>
    );
};

export default Skills;
