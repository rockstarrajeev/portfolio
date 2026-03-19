import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'GitHub', to: 'github' },
    { name: 'Certifications', to: 'certifications' },
    { name: 'Contact', to: 'contact' }
];

const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
        opacity: 1,
        height: 'auto',
        transition: { duration: 0.35, ease: 'easeOut', staggerChildren: 0.06, delayChildren: 0.1 }
    },
    exit: {
        opacity: 0,
        height: 0,
        transition: { duration: 0.25, ease: 'easeIn' }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: -20 }
};

const Navbar = ({ isDark, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setIsOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                isScrolled
                    ? 'glass py-2 shadow-xl shadow-brand-500/5'
                    : 'bg-transparent py-4'
            }`}
        >
            <div className="container mx-auto px-5 sm:px-6 lg:px-12 flex justify-between items-center">
                {/* Logo */}
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="cursor-pointer flex items-center group"
                >
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-accent-500 rounded-full opacity-0 group-hover:opacity-70 blur transition-opacity duration-500" />
                        <img
                            src="/nav-logo.jpg"
                            alt="Logo"
                            className="relative h-10 w-10 md:h-11 md:w-11 rounded-full object-cover border-2 border-brand-400 group-hover:border-accent-400 transition-all duration-300 group-hover:scale-110"
                        />
                    </div>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
                    <ul className="flex items-center space-x-1 lg:space-x-2">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.to}
                                    href={`#${link.to}`}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    activeClass="nav-active"
                                    className="nav-glow px-3 py-2 text-sm lg:text-base font-medium text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 cursor-pointer rounded-lg hover:bg-brand-50/60 dark:hover:bg-brand-950/40 transition-all duration-300"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <motion.button
                        onClick={toggleTheme}
                        whileTap={{ rotate: 180, scale: 0.85 }}
                        transition={{ duration: 0.4 }}
                        className="p-2.5 ml-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-brand-100 dark:hover:bg-brand-900/40 hover:text-brand-600 dark:hover:text-brand-400 transition-colors cursor-pointer border border-slate-200 dark:border-slate-700"
                        aria-label="Toggle Theme"
                    >
                        {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
                    </motion.button>
                </nav>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center gap-2">
                    <motion.button
                        onClick={toggleTheme}
                        whileTap={{ rotate: 180, scale: 0.85 }}
                        transition={{ duration: 0.4 }}
                        className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 cursor-pointer"
                        aria-label="Toggle Theme"
                    >
                        {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
                    </motion.button>
                    <motion.button
                        onClick={() => setIsOpen(!isOpen)}
                        whileTap={{ scale: 0.9 }}
                        className="p-2.5 rounded-xl text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none cursor-pointer"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="md:hidden overflow-hidden border-t border-slate-200/50 dark:border-slate-700/50"
                    >
                        <div className="bg-white/90 dark:bg-slate-900/95 backdrop-blur-2xl px-5 py-4">
                            <ul className="flex flex-col gap-1.5">
                                {navLinks.map((link) => (
                                    <motion.li key={link.name} variants={itemVariants}>
                                        <Link
                                            to={link.to}
                                            href={`#${link.to}`}
                                            smooth={true}
                                            duration={500}
                                            onClick={() => setIsOpen(false)}
                                            className="block w-full px-4 py-3 text-base font-medium text-slate-700 dark:text-slate-200 rounded-xl hover:bg-gradient-to-r hover:from-brand-500/10 hover:to-accent-500/10 dark:hover:from-brand-500/20 dark:hover:to-accent-500/15 hover:text-brand-600 dark:hover:text-brand-400 cursor-pointer transition-all duration-200 active:scale-[0.98]"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
