import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiBriefcase, FiAward, FiCpu, FiMapPin } from 'react-icons/fi';
import SectionContainer from '../components/SectionContainer';
import { personalInfo, techStack } from '../utils/data';

const resumeHighlights = [
    { icon: <FiBriefcase size={16} />, label: 'Systems Engineer at TCS' },
    { icon: <FiCpu size={16} />, label: '6+ Years Experience' },
    { icon: <FiAward size={16} />, label: '6 Certifications' },
    { icon: <FiMapPin size={16} />, label: personalInfo.location },
];

const About = () => {
    return (
        <SectionContainer id="about" title="About Me">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
                {/* Bio Section */}
                <motion.div
                    className="lg:w-1/2"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed space-y-6">
                        <div className="mb-8 w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-slate-200 dark:border-slate-800 shadow-xl mx-auto lg:mx-0">
                            <img src="/Rajeev_WhiteSuit.jpg" alt={personalInfo.name} className="w-full h-full object-cover object-top" />
                        </div>
                        <p>
                            Hello! I'm Rajeev, a Systems Engineer passionate about bridging the gap between development and operations. My journey started with a deep curiosity about how large-scale applications operate behind the scenes.
                        </p>
                        <p>
                            Over the years, I've had the privilege of working in various environments, from agile startups to massive enterprise infrastructure. My main focus these days is building robust microservices, automating cloud deployments, and ensuring high system reliability.
                        </p>
                        <p>
                            When I'm not configuring servers or writing code, you can find me exploring new open-source tools, writing technical blogs, or hiking in the mountains.
                        </p>

                        {/* Resume Hover Card */}
                        <motion.div
                            className="pt-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <div className="group relative w-full max-w-sm rounded-2xl overflow-hidden cursor-pointer">
                                {/* Gradient border */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500 via-accent-500 to-brand-400 rounded-2xl opacity-40 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

                                <div className="relative bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/50 dark:border-slate-700/50">
                                    {/* Default state — label */}
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white shadow-md">
                                                <FiDownload size={18} />
                                            </div>
                                            <div>
                                                <p className="font-heading font-semibold text-sm text-slate-800 dark:text-slate-100">My Resume</p>
                                                <p className="text-xs text-slate-400 dark:text-slate-500">Hover to preview</p>
                                            </div>
                                        </div>
                                        <div className="text-xs font-medium text-brand-500 bg-brand-50 dark:bg-brand-950/40 px-2.5 py-1 rounded-full">
                                            PDF
                                        </div>
                                    </div>

                                    {/* Hover reveal — highlights */}
                                    <div className="max-h-0 group-hover:max-h-60 overflow-hidden transition-all duration-500 ease-in-out">
                                        <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
                                            {resumeHighlights.map((item, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400"
                                                    style={{ transitionDelay: `${i * 80}ms` }}
                                                >
                                                    <span className="text-brand-500">{item.icon}</span>
                                                    <span>{item.label}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Download button */}
                                        <div className="pt-4">
                                            <a
                                                href={personalInfo.resumeUrl}
                                                download="Rajeev_Upadhyay_Resume.pdf"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-brand-600 to-accent-600 hover:from-brand-500 hover:to-accent-500 text-white text-sm font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/40 hover:scale-[1.02] active:scale-[0.98]"
                                            >
                                                <FiDownload size={16} />
                                                Download Resume
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Tech Stack Grid */}
                <motion.div
                    className="lg:w-1/2 w-full"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="p-6 md:p-8 rounded-2xl glass">
                        <h3 className="text-xl font-heading font-semibold text-slate-800 dark:text-slate-200 mb-6 text-center">
                            Technologies I Work With
                        </h3>
                        <div className="grid grid-cols-4 sm:grid-cols-5 gap-4 md:gap-5">
                            {techStack.map((tech, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.03 }}
                                    whileHover={{ y: -5, scale: 1.15 }}
                                    className="flex flex-col items-center justify-center p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors cursor-default"
                                    title={tech.name}
                                >
                                    {tech.icon}
                                    <span className="text-[10px] sm:text-xs mt-1.5 text-slate-600 dark:text-slate-400 text-center font-medium leading-tight">
                                        {tech.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </SectionContainer>
    );
};

export default About;
