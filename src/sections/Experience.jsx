import React from 'react';
import { motion } from 'framer-motion';
import SectionContainer from '../components/SectionContainer';
import { experienceData } from '../utils/data';

const Experience = () => {
    return (
        <SectionContainer id="experience" title="Work Experience">
            <div className="relative border-l border-slate-200 dark:border-slate-800 ml-3 md:ml-6">
                {experienceData.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="mb-14 ml-8 md:ml-12"
                    >
                        {/* Timeline dot */}
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-brand-100 rounded-full -left-3 ring-8 ring-slate-50 dark:ring-slate-900 dark:bg-brand-900">
                            <span className="w-2 h-2 bg-brand-600 dark:bg-brand-400 rounded-full"></span>
                        </span>

                        <div className="bg-white dark:bg-slate-800/50 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                <h3 className="text-2xl font-heading font-bold text-slate-800 dark:text-slate-100">
                                    {exp.role} <span className="text-brand-600 dark:text-brand-400">@ {exp.company}</span>
                                </h3>
                                <span className="mt-2 md:mt-0 px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-sm font-medium rounded-full w-max">
                                    {exp.period}
                                </span>
                            </div>

                            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                {exp.description}
                            </p>

                            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500 mb-3">
                                Key Achievements
                            </h4>
                            <ul className="list-none space-y-2">
                                {exp.achievements.map((achievement, i) => (
                                    <li key={i} className="flex items-start text-slate-700 dark:text-slate-300">
                                        <span className="text-brand-500 mr-2 mt-1">▹</span>
                                        {achievement}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionContainer>
    );
};

export default Experience;
