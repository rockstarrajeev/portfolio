import React from 'react';
import { motion } from 'framer-motion';
import SectionContainer from '../components/SectionContainer';
import { experienceData } from '../utils/data';

const Experience = () => {
    return (
        <SectionContainer id="experience" title="Work Experience">
            <div className="relative ml-3 md:ml-6 pb-2">
                {/* Timeline vertical bar */}
                <div className="absolute left-[11px] md:left-[23px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-brand-500 via-accent-500 to-transparent dark:from-brand-600/40 dark:via-accent-600/20 dark:to-transparent" />

                {experienceData.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
                        className="mb-14 ml-8 md:ml-12 relative"
                    >
                        {/* Dynamic pulsing timeline dot */}
                        <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-[45px] md:-left-[61px] bg-slate-50 dark:bg-slate-950">
                            <span className="w-3.5 h-3.5 bg-gradient-to-br from-brand-500 to-accent-500 rounded-full shadow-lg shadow-brand-500/40 animate-ping absolute opacity-70" />
                            <span className="w-2.5 h-2.5 bg-gradient-to-br from-brand-600 to-accent-600 rounded-full shadow-md z-10" />
                        </span>

                        {/* Experience Card */}
                        <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl p-6.5 md:p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800/80 hover:shadow-2xl hover:shadow-brand-500/5 hover:border-brand-500/25 transition-all duration-500 hover:-translate-y-1">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-5">
                                <div>
                                    <h3 className="text-2xl font-heading font-extrabold text-slate-800 dark:text-slate-100 leading-snug">
                                        {exp.role}
                                    </h3>
                                    <p className="text-brand-600 dark:text-brand-400 font-semibold mt-1">
                                        @ {exp.company}
                                    </p>
                                </div>
                                <span className="mt-3 md:mt-0 px-3.5 py-1.5 bg-brand-50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-350 text-xs font-bold uppercase tracking-wider rounded-full w-max border border-brand-200/40 dark:border-brand-850">
                                    {exp.period}
                                </span>
                            </div>

                            <p className="text-slate-600 dark:text-slate-450 mb-6 leading-relaxed text-sm">
                                {exp.description}
                            </p>

                            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
                                Key Achievements
                            </h4>
                            <ul className="list-none space-y-3.5">
                                {exp.achievements.map((achievement, i) => (
                                    <li key={i} className="flex items-start text-slate-750 dark:text-slate-300 text-sm leading-relaxed">
                                        <span className="text-brand-500 dark:text-brand-400 mr-3 mt-1 text-xs">▹</span>
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
