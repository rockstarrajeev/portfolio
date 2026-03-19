import React from 'react';
import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';
import SectionContainer from '../components/SectionContainer';
import { certificationsData } from '../utils/data';

const Certifications = () => {
    return (
        <SectionContainer id="certifications" title="Certifications" className="min-h-0 py-24">
            <div className="flex flex-wrap gap-6 justify-center">
                {certificationsData.map((cert, index) => (
                    <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex-1 min-w-[300px] max-w-sm glass bg-white/50 dark:bg-slate-800/50 p-6 rounded-2xl flex items-start gap-4 hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-800 shadow-sm"
                    >
                        <div className="flex-shrink-0 p-3 bg-brand-100 dark:bg-brand-900/40 rounded-full text-brand-600 dark:text-brand-400 mt-1">
                            <FiAward size={28} />
                        </div>
                        <div>
                            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-slate-100 mb-1 leading-tight">
                                {cert.name}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">
                                {cert.issuer}
                            </p>
                            <span className="inline-block px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 font-medium text-xs rounded">
                                Issued {cert.date}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionContainer>
    );
};

export default Certifications;
