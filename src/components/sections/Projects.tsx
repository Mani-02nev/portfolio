import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Sparkles, X, Image as ImageIcon } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { AnimatedBackground } from '../ui/AnimatedBackground';
import { useState } from 'react';

export const Projects = () => {
    const [filter, setFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState<any>(null);
    const categories = [
        'All',
        'AI SaaS',
        'AI Platform',
        'E-Commerce',
        'Full Stack',
        'PHP',
        'React',
        'Python',
        'Node.js',
        'React Native'
    ];

    const filteredProjects = portfolioData.projects.filter(project =>
        filter === 'All' ? true : project.tags.includes(filter)
    );

    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            {/* Animated Background */}
            <AnimatedBackground />

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

                <div className="flex flex-wrap justify-center gap-4 mb-12 relative z-10">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === category
                                ? 'bg-emerald-500 text-charcoal-900 shadow-[0_0_15px_rgba(16,185,129,0.5)]'
                                : 'bg-charcoal-800 text-gray-400 hover:text-white border border-white/5 hover:border-emerald-500/30'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project: any) => (
                            <motion.a
                                layout
                                key={project.title}
                                href={project.link !== '#' ? project.link : undefined}
                                target={project.link !== '#' ? "_blank" : undefined}
                                rel={project.link !== '#' ? "noopener noreferrer" : undefined}
                                onClick={(e) => {
                                    if (project.gallery && project.gallery.length > 0) {
                                        e.preventDefault();
                                        setSelectedProject(project);
                                    }
                                }}
                                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                                transition={{ duration: 0.3 }}
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
                                            {project.gallery && project.gallery.length > 0 ? (
                                                <ImageIcon className="w-5 h-5 text-white group-hover:text-emerald-500 transition-colors" />
                                            ) : (
                                                <ExternalLink className="w-5 h-5 text-white group-hover:text-emerald-500 transition-colors" />
                                            )}
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
                                            {project.tags.map((tag: string, j: number) => (
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
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Project Gallery Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-900/90 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-5xl max-h-[90vh] glass rounded-3xl border border-white/10 overflow-hidden flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-charcoal-900/50">
                                <div>
                                    <h3 className="text-2xl font-bold font-display text-white">{selectedProject.title}</h3>
                                    <p className="text-emerald-500 text-sm mt-1">Project Previews</p>
                                </div>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="p-2 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="p-6 overflow-y-auto custom-scrollbar">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {selectedProject.gallery.map((img: string, idx: number) => (
                                        <div key={idx} className="relative rounded-xl overflow-hidden border border-white/10 group shadow-lg">
                                            <img
                                                src={img}
                                                alt={`${selectedProject.title} preview ${idx + 1}`}
                                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};
