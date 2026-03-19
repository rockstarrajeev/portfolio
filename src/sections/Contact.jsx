import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import SectionContainer from '../components/SectionContainer';
import { personalInfo } from '../utils/data';

const WHATSAPP_NUMBER = '19292664560';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Build a WhatsApp message with the form data
        const text = `Hi, I'm *${formData.name}* (${formData.email}).\n\n${formData.message}`;
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
        window.open(whatsappUrl, '_blank');

        // Short delay for success UI
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setIsSuccess(false), 5000);
        }, 1000);
    };

    return (
        <SectionContainer id="contact" title="Get In Touch">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                <motion.div
                    className="lg:w-1/3"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                        I'm currently open for new opportunities. Whether you have a question, want to collaborate on a project, or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center">
                            <div className="w-12 h-12 flex items-center justify-center bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 rounded-lg mr-4 border border-brand-200 dark:border-brand-800">
                                <FiMail size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 uppercase font-semibold tracking-wider">Email</p>
                                <a href={`mailto:${personalInfo.email}`} className="text-lg font-medium text-slate-800 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                                    {personalInfo.email}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="w-12 h-12 flex items-center justify-center bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 rounded-lg mr-4 border border-brand-200 dark:border-brand-800">
                                <FiMapPin size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 uppercase font-semibold tracking-wider">Location</p>
                                <p className="text-lg font-medium text-slate-800 dark:text-slate-200">
                                    {personalInfo.location}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="lg:w-2/3"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="glass bg-white/70 dark:bg-slate-800/70 p-8 md:p-10 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 transition-colors text-slate-800 dark:text-slate-100 placeholder-slate-400"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 transition-colors text-slate-800 dark:text-slate-100 placeholder-slate-400"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 transition-colors text-slate-800 dark:text-slate-100 placeholder-slate-400 resize-none"
                                    placeholder="How can I help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full md:w-auto px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-green-500/30"
                            >
                                {isSubmitting ? 'Sending...' : (
                                    <>
                                        Send via WhatsApp <FaWhatsapp size={20} />
                                    </>
                                )}
                            </button>

                            {isSuccess && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-green-600 dark:text-green-400 font-medium text-center mt-4"
                                >
                                    Message sent successfully! I will get back to you soon.
                                </motion.p>
                            )}
                        </form>
                    </div>
                </motion.div>
            </div>
        </SectionContainer>
    );
};

export default Contact;
