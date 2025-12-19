
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Database, Laptop, Sparkles, Brain } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            <div className="section-container relative z-10">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8"
                    >
                        <Sparkles className="w-4 h-4" />
                        <span>Ready for MNC Opportunities</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold font-display leading-[1.1] mb-6"
                    >
                        Architecting <span className="text-gradient">Intelligent</span> <br />
                        Systems & AI-Driven <br />
                        User <span className="text-gradient">Experiences</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12"
                    >
                        Computer Engineering Graduate specialized in <span className="text-white font-medium">AI & ML</span>.
                        Building scalable solutions with modern tech stacks and data-driven insights.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a href="#experience" className="btn-primary group">
                            Explore Experience
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#contact" className="btn-secondary">
                            Get In Touch
                        </a>
                        <a href="/resume.pdf" target="_blank" className="btn-outline">
                            Download Resume
                        </a>
                    </motion.div>

                    {/* Tech Stack Preview */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="mt-20 pt-10 border-t border-white/5"
                    >
                        <p className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-8">
                            Core Expertise
                        </p>
                        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 text-gray-400">
                            <div className="flex items-center gap-2">
                                <Brain className="w-6 h-6" />
                                <span className="font-semibold text-lg">AI & Machine Learning</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Code2 className="w-6 h-6" />
                                <span className="font-semibold text-lg">Full-Stack Dev</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Database className="w-6 h-6" />
                                <span className="font-semibold text-lg">Data Visualization</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Laptop className="w-6 h-6" />
                                <span className="font-semibold text-lg">Modern UI/UX</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

