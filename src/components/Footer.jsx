import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiYoutube, FiInstagram, FiFacebook, FiHeart, FiArrowUp } from 'react-icons/fi';
import { personalInfo } from '../utils/data';

const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'GitHub', to: 'github' },
    { name: 'Contact', to: 'contact' }
];

const getIcon = (name) => {
    switch (name) {
        case "LinkedIn": return <FiLinkedin size={20} />;
        case "X": return <FiTwitter size={20} />;
        case "YouTube": return <FiYoutube size={20} />;
        case "Instagram": return <FiInstagram size={20} />;
        case "Facebook": return <FiFacebook size={20} />;
        default: return <FiGithub size={20} />;
    }
};

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative mt-20">
            {/* Gradient accent line at top */}
            <div className="gradient-line" />

            <div className="bg-slate-50 dark:bg-slate-950 pt-16 pb-8">
                <div className="container mx-auto px-6 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        {/* Brand / Name */}
                        <div className="mb-8">
                            <h3 className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-3">
                                {personalInfo.name}
                            </h3>
                            <p className="text-slate-500 dark:text-slate-400 text-base max-w-md mx-auto">
                                {personalInfo.role} · Building scalable platforms & automating infrastructure.
                            </p>
                        </div>

                        {/* Quick Nav Links */}
                        <nav className="mb-10">
                            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3">
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.to}
                                            href={`#${link.to}`}
                                            smooth={true}
                                            duration={500}
                                            className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 cursor-pointer transition-colors duration-300"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Social Icons */}
                        <div className="flex justify-center gap-4 mb-10">
                            {personalInfo.socials.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, y: -3 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 hover:text-white hover:bg-gradient-to-br hover:from-brand-500 hover:to-accent-500 border border-slate-200 dark:border-slate-700/60 hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-brand-500/20"
                                >
                                    {getIcon(social.name)}
                                    <span className="sr-only">{social.name}</span>
                                </motion.a>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="gradient-line mb-6" />

                        {/* Bottom Row */}
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                            <p className="text-sm text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                                &copy; {new Date().getFullYear()} {personalInfo.name}. Made with
                                <FiHeart className="text-red-400 inline" size={14} />
                            </p>

                            <motion.button
                                onClick={scrollToTop}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer"
                                aria-label="Back to top"
                            >
                                <FiArrowUp size={18} />
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
