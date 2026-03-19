import React from 'react';
import { motion } from 'framer-motion';
import SectionContainer from '../components/SectionContainer';
import { skillsData } from '../utils/data';

const Skills = () => {
    return (
        <SectionContainer id="skills" title="Technical Skills">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                <div className="space-y-6">
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                        I've worked with a diverse spectrum of technologies, encompassing frontend engineering down to low-level system administration and cloud infrastructure.
                        Here is a breakdown of my proficiency across key platforms and languages.
                    </p>

                    <div className="p-8 rounded-2xl glass">
                        <h3 className="text-xl font-heading font-semibold text-slate-800 dark:text-slate-200 mb-4">Core Competencies</h3>
                        <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
                            <li>High-Availability System Architecture</li>
                            <li>Infrastructure as Code (IaC)</li>
                            <li>Container Orchestration</li>
                            <li>Microservices Design Patterns</li>
                            <li>Continuous Integration/Deployment Pipeline</li>
                            <li>Performance Monitoring & Tuning</li>
                        </ul>
                    </div>
                </div>

                <div className="space-y-6">
                    {skillsData.map((skill, index) => (
                        <div key={index} className="w-full">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-widest">{skill.name}</span>
                                <span className="text-sm font-semibold text-brand-600 dark:text-brand-400">{skill.level}%</span>
                            </div>
                            <div className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                                    className="h-full bg-brand-500 rounded-full"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionContainer>
    );
};

export default Skills;
