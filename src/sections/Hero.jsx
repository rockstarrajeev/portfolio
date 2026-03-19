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
            {/* Decorative background elements */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"
                style={{ y: y1 }}
            />
            <motion.div
                className="absolute top-1/3 right-1/4 w-72 h-72 bg-accent-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"
                style={{ y: y2 }}
            />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ opacity }}
                >
                    <p className="text-xl md:text-2xl text-brand-600 dark:text-brand-400 font-medium mb-4 tracking-wide">
                        Hello, my name is
                    </p>
                    <h1 className="text-6xl md:text-8xl font-heading font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
                        {personalInfo.name}.
                    </h1>
                    <div className="h-20 sm:h-24 md:h-32">
                        <h2 className="text-4xl md:text-7xl font-heading font-bold text-slate-500 mb-6">
                            <TypeAnimation
                                sequence={[
                                    'I am a Systems Engineer.',
                                    2000,
                                    'I build scalable platforms.',
                                    2000,
                                    'I automate infrastructure.',
                                    2000,
                                    'I solve complex problems.',
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                cursor={true}
                                repeat={Infinity}
                            />
                        </h2>
                    </div>

                    <p className="max-w-2xl text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
                        {personalInfo.bio}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-gradient-to-r from-brand-600 to-accent-600 hover:from-brand-500 hover:to-accent-500 text-white font-medium rounded-xl transition-all duration-300 shadow-lg shadow-brand-500/30 hover:shadow-xl hover:shadow-brand-500/40 hover:scale-105 text-lg"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-transparent border-2 border-slate-300 dark:border-slate-700 hover:border-brand-500 dark:hover:border-brand-400 text-slate-800 dark:text-slate-200 font-medium rounded-xl transition-all duration-300 hover:scale-105 text-lg"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                style={{ opacity }}
            >
                <p className="text-sm text-slate-500 mb-2 font-medium tracking-widest uppercase">Scroll Down</p>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex justify-center p-1"
                >
                    <div className="w-1.5 h-3 bg-brand-500 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
