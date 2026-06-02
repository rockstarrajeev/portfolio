import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiBriefcase, FiAward, FiCpu, FiMapPin } from 'react-icons/fi';
import SectionContainer from '../components/SectionContainer';
import { personalInfo, techStack } from '../utils/data';

const resumeHighlights = [
    { icon: <FiBriefcase size={16} />, label: 'Sr. Software Engineer' },
    { icon: <FiCpu size={16} />, label: '9+ Years Experience' },
    { icon: <FiAward size={16} />, label: '7 IT Certifications' },
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
                            Hello! I'm Rajeev, a <strong className="font-semibold text-slate-800 dark:text-slate-200">Sr. Software Engineer</strong> with over 9 years of experience across enterprise IT operations, cloud infrastructure, and managed services delivery. My career has been built on driving stability, high-availability, and modern automation for critical enterprise platforms.
                        </p>
                        <p>
                            I specialize in designing, automating, and securing environments. My hands-on expertise spans <strong className="font-semibold text-slate-800 dark:text-slate-200">Azure Cloud (IaaS, monitoring, security)</strong>, <strong className="font-semibold text-slate-800 dark:text-slate-200">Citrix VDI solutions</strong>, and custom <strong className="font-semibold text-slate-800 dark:text-slate-200">PowerShell/Python automation frameworks</strong> to streamline infrastructure operations and NOC monitoring.
                        </p>
                        <p>
                            Currently, I operate <strong className="font-semibold text-slate-800 dark:text-slate-200">Softcorp Group LLC</strong>, delivering elite cloud engineering and managed services to clients across Nepal, India, and the United States. Previously, I spent six years as a Systems Engineer at <strong className="font-semibold text-slate-800 dark:text-slate-200">Tata Consultancy Services (TCS)</strong>, where I managed large-scale infrastructure comprising 3,500+ servers and supported over 5,000 users.
                        </p>

                        {/* Resume Card */}
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
                                    {/* Header */}
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white shadow-md">
                                                <FiDownload size={18} />
                                            </div>
                                            <div>
                                                <p className="font-heading font-semibold text-sm text-slate-800 dark:text-slate-100">My Resume</p>
                                                <p className="text-xs text-slate-400 dark:text-slate-500">Hover to download</p>
                                            </div>
                                        </div>
                                        <div className="text-xs font-medium text-brand-500 bg-brand-50 dark:bg-brand-950/40 px-2.5 py-1 rounded-full">
                                            CV
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

                                        {/* Download Buttons */}
                                        <div className="pt-4 grid grid-cols-2 gap-2.5">
                                            <a
                                                href={personalInfo.resumeUrl}
                                                download="RAJEEV_UPADHYAY_Resume.pdf"
                                                className="flex items-center justify-center gap-1.5 py-3 bg-gradient-to-r from-brand-600 to-accent-600 hover:from-brand-500 hover:to-accent-500 text-white text-xs font-bold rounded-xl transition-all duration-300 shadow-lg shadow-brand-500/25 hover:scale-[1.02] active:scale-[0.98]"
                                            >
                                                <FiDownload size={14} />
                                                PDF
                                            </a>
                                            <a
                                                href={personalInfo.resumeDocxUrl}
                                                download="Rajeev_Upadhyay_Resume.docx"
                                                className="flex items-center justify-center gap-1.5 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-xs font-bold rounded-xl transition-all duration-300 shadow-sm border border-slate-200/40 dark:border-slate-700/40 hover:scale-[1.02] active:scale-[0.98]"
                                            >
                                                <FiDownload size={14} />
                                                DOCX
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
                    <div className="p-6 md:p-8 rounded-2xl glass-premium shadow-2xl">
                        <h3 className="text-xl font-heading font-semibold text-slate-800 dark:text-slate-200 mb-6 text-center">
                            Technologies I Work With
                        </h3>
                        <div className="grid grid-cols-4 sm:grid-cols-5 gap-3.5 md:gap-4">
                            {techStack.map((tech, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.35, delay: index * 0.025 }}
                                    whileHover={{ y: -5, scale: 1.12, transition: { duration: 0.2 } }}
                                    className="flex flex-col items-center justify-center p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 bg-white/30 dark:bg-slate-900/40 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:shadow-lg hover:shadow-brand-500/5 transition-all duration-300 cursor-pointer"
                                    title={tech.name}
                                >
                                    <div className="transform transition duration-300 hover:rotate-6">{tech.icon}</div>
                                    <span className="text-[10px] sm:text-xs mt-2 text-slate-600 dark:text-slate-400 text-center font-semibold leading-tight">
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
