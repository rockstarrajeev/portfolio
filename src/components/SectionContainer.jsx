import React from 'react';
import { motion } from 'framer-motion';

const SectionContainer = ({ id, title, children, className = '' }) => {
    return (
        <section id={id} className={`py-20 lg:py-32 min-h-screen flex flex-col justify-center ${className}`}>
            <div className="container mx-auto px-6 lg:px-12">
                {title && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center mb-12"
                    >
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-800 dark:text-slate-100 mr-6">
                            {title}
                        </h2>
                        <div className="h-px bg-slate-200 dark:bg-slate-700 flex-grow max-w-sm"></div>
                    </motion.div>
                )}
                {children}
            </div>
        </section>
    );
};

export default SectionContainer;
