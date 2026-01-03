
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-charcoal-800/30">
            <div className="section-container">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-emerald-500 uppercase tracking-widest mb-4">
                        Professional Journey
                    </h2>
                    <h3 className="text-4xl font-bold font-display">
                        Experience & <span className="text-gradient">Internship</span>
                    </h3>
                </div>

                <div className="max-w-4xl mx-auto">
                    {portfolioData.experience.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative pl-12 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-white/10"
                        >
                            <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]" />

                            <div className="glass p-8 rounded-2xl mb-12 relative group overflow-hidden">
                                {/* Decorative background glow */}
                                <div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-colors" />

                                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                                    <div>
                                        <h4 className="text-2xl font-bold text-white mb-2">{exp.role}</h4>
                                        <div className="flex items-center gap-2 text-emerald-400 font-medium text-lg">
                                            <Briefcase className="w-5 h-5" />
                                            <span>{exp.company}</span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="flex items-center gap-2 text-gray-400 mb-2 md:justify-end">
                                            <Calendar className="w-4 h-4" />
                                            <span>{exp.period}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-500 md:justify-end">
                                            <MapPin className="w-4 h-4" />
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-300 mb-6 text-lg">
                                    {exp.description}
                                </p>

                                <div className="space-y-3 mb-8">
                                    {exp.achievements.map((item, index) => (
                                        <div key={index} className="flex gap-3 text-gray-400">
                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500/50 shrink-0" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {exp.tech.map((t, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 rounded-full bg-charcoal-700 text-gray-400 text-sm border border-white/5"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap justify-between items-center gap-4">
                                    <a
                                        href={exp.companyUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-sm text-emerald-500 hover:text-emerald-400 flex items-center gap-1 font-medium group/btn"
                                    >
                                        {exp.role.includes('Student') ? 'College Website' : 'Company Website'} <ExternalLink className="w-4 h-4" />
                                    </a>

                                    {exp.certificateUrl && (
                                        <a
                                            href={exp.certificateUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="btn-outline py-2 px-4 text-xs"
                                        >
                                            View Internship Certificate
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

