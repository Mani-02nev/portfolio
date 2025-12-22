import { motion } from 'framer-motion';
import { ExternalLink, Sparkles } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const Projects = () => {
    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="section-container">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-emerald-500 uppercase tracking-widest mb-4">
                        Innovation
                    </h2>
                    <h3 className="text-4xl font-bold font-display">
                        Featured <span className="text-gradient">Projects</span>
                    </h3>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Showcasing intelligent solutions and creative engineering.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.projects.map((project, i) => (
                        <motion.a
                            key={i}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="group block relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative h-full glass p-8 rounded-2xl border border-white/10 group-hover:border-emerald-500/30 transition-all duration-300 flex flex-col">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 rounded-xl bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
                                        <Sparkles className="w-6 h-6 text-emerald-500" />
                                    </div>
                                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-emerald-500 transition-colors" />
                                </div>

                                <h4 className="text-xl font-bold font-display mb-3 group-hover:text-emerald-400 transition-colors">
                                    {project.title}
                                </h4>

                                <p className="text-gray-400 mb-6 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag, j) => (
                                        <span
                                            key={j}
                                            className="px-3 py-1 text-xs font-medium rounded-full bg-charcoal-800 text-gray-300 border border-white/5 group-hover:border-emerald-500/20 transition-colors"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};
