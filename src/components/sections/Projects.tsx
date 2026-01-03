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
                            whileHover={{ y: -10 }}
                            className="group block relative h-full"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative h-full glass rounded-2xl border border-white/10 group-hover:border-emerald-500/30 transition-all duration-300 flex flex-col overflow-hidden">
                                {/* Image Container */}
                                <div className="relative h-48 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 to-transparent z-10 opacity-60" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 right-4 z-20 p-2 rounded-xl bg-charcoal-900/50 backdrop-blur-md border border-white/10 group-hover:bg-emerald-500/20 transition-colors">
                                        <ExternalLink className="w-5 h-5 text-white group-hover:text-emerald-500 transition-colors" />
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="mb-4">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="p-2 rounded-lg bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
                                                <Sparkles className="w-5 h-5 text-emerald-500" />
                                            </div>
                                            <h4 className="text-xl font-bold font-display group-hover:text-emerald-400 transition-colors">
                                                {project.title}
                                            </h4>
                                        </div>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                                        {project.tags.map((tag, j) => (
                                            <span
                                                key={j}
                                                className="px-2.5 py-1 text-xs font-medium rounded-full bg-charcoal-800 text-gray-400 border border-white/5 group-hover:border-emerald-500/20 transition-colors"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};
