import React from 'react';
import { motion } from 'framer-motion';
import { FiX, FiDownload } from 'react-icons/fi';

const ResumeModal = ({ isOpen, onClose, pdfUrl }) => {
    if (!isOpen) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] flex items-center justify-center p-4 md:p-6"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
                onClick={onClose}
            />

            {/* Modal */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ type: 'spring', duration: 0.4 }}
                className="relative w-full max-w-4xl h-[90vh] flex flex-col rounded-3xl overflow-hidden border border-white/10 dark:border-slate-700 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-slate-700 flex-shrink-0">
                    <div>
                        <h2 className="text-lg font-heading font-bold text-white">Rajeev Upadhyay — Resume</h2>
                        <p className="text-xs text-slate-400">Cloud & Infrastructure Engineering</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <a
                            href={pdfUrl}
                            download="RAJEEV_UPADHYAY_Resume.pdf"
                            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition-colors border border-slate-700"
                        >
                            <FiDownload size={14} />
                            Download PDF
                        </a>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors border border-slate-700"
                            aria-label="Close"
                        >
                            <FiX size={18} />
                        </button>
                    </div>
                </div>

                {/* PDF Embed */}
                <div className="flex-1 bg-slate-800">
                    <object
                        data={pdfUrl}
                        type="application/pdf"
                        className="w-full h-full"
                        title="Resume PDF"
                    >
                        <div className="flex flex-col items-center justify-center h-full gap-4 text-slate-300 p-8 text-center">
                            <p className="text-lg font-semibold">Unable to display PDF in browser.</p>
                            <p className="text-sm text-slate-400">Your browser may not support inline PDF viewing.</p>
                            <a
                                href={pdfUrl}
                                download="RAJEEV_UPADHYAY_Resume.pdf"
                                className="flex items-center gap-2 px-4 py-2 bg-brand-600 hover:bg-brand-500 text-white rounded-xl text-sm font-semibold transition-colors"
                            >
                                <FiDownload size={16} />
                                Download PDF Instead
                            </a>
                        </div>
                    </object>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ResumeModal;
