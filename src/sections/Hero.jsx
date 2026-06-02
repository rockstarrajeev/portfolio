import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion, useScroll, useTransform } from 'framer-motion';
import { personalInfo } from '../utils/data';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 150]);
    const y2 = useTransform(scrollY, [0, 500], [0, -50]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
            {/* Developer grid backgrounds */}
            <div className="absolute inset-0 bg-grid opacity-70 pointer-events-none" />
            <div className="absolute inset-0 bg-dot-glow opacity-80 pointer-events-none" />

            {/* Glowing organic radial blobs */}
            <motion.div
                className="absolute top-1/4 left-1/12 w-[35rem] h-[35rem] bg-gradient-to-tr from-brand-500/15 to-indigo-500/5 rounded-full filter blur-[120px] pointer-events-none animate-float-slow"
                style={{ y: y1 }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/12 w-[38rem] h-[38rem] bg-gradient-to-bl from-accent-500/12 to-purple-500/5 rounded-full filter blur-[130px] pointer-events-none animate-pulse-slow"
                style={{ y: y2 }}
            />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    style={{ opacity }}
                >
                    <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full glass border border-brand-500/25 text-brand-600 dark:text-brand-400 font-semibold text-sm tracking-wider uppercase mb-8 shadow-lg shadow-brand-500/5">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                        </span>
                        Available for Opportunities
                    </div>
                    
                    <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-medium mb-3 tracking-wide">
                        Hello, my name is
                    </p>
                    <h1 className="text-6xl md:text-8xl font-heading font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-none">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-100 dark:to-slate-300">
                            {personalInfo.name}
                        </span>
                        <span className="text-brand-500">.</span>
                    </h1>
                    <div className="h-20 sm:h-24 md:h-32">
                        <h2 className="text-4xl md:text-7xl font-heading font-bold text-slate-500 mb-6 drop-shadow-sm">
                            <TypeAnimation
                                sequence={[
                                    'I am a Sr. Software Engineer.',
                                    2000,
                                    'I design scalable platforms.',
                                    2000,
                                    'I automate enterprise clouds.',
                                    2000,
                                    'I secure IT environments.',
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                cursor={true}
                                repeat={Infinity}
                            />
                        </h2>
                    </div>

                    <p className="max-w-2xl text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
                        {personalInfo.bio}
                    </p>

                    <div className="flex flex-wrap gap-5">
                        <a
                            href="#projects"
                            className="group relative px-9 py-4.5 bg-gradient-to-r from-brand-600 via-indigo-600 to-accent-600 hover:from-brand-500 hover:to-accent-500 text-white font-semibold rounded-2xl transition-all duration-300 shadow-xl shadow-brand-500/25 hover:shadow-2xl hover:shadow-brand-500/35 hover:-translate-y-1 text-lg flex items-center justify-center overflow-hidden border border-white/10"
                        >
                            <span className="relative z-10">View My Work</span>
                            <div className="absolute inset-0 bg-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </a>
                        <a
                            href="#contact"
                            className="px-9 py-4.5 bg-transparent border-2 border-slate-300 dark:border-slate-800 hover:border-brand-500 dark:hover:border-brand-500 text-slate-800 dark:text-slate-200 font-semibold rounded-2xl transition-all duration-300 hover:-translate-y-1 text-lg hover:shadow-lg hover:shadow-slate-400/5 dark:hover:shadow-brand-500/5 hover:bg-slate-500/5"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                style={{ opacity }}
            >
                <p className="text-xs text-slate-400 dark:text-slate-500 mb-2 font-medium tracking-widest uppercase">Scroll Down</p>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                    className="w-5 h-9 border-2 border-slate-400 dark:border-slate-700 rounded-full flex justify-center p-1"
                >
                    <div className="w-1 h-2 bg-brand-500 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
