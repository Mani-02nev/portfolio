
import { motion } from 'framer-motion';
import { Code, Layout, Server, Cpu, Terminal, Globe, Smartphone } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const iconMap: Record<string, any> = {
    'Programming Languages': Code,
    'Core Technologies': Cpu,
    'Web Frameworks': Globe,
    'App Frameworks': Smartphone,
    'UI & Design Tools': Server,
    'DevOps & Tools': Terminal,
};

export const Skills = () => {
    return (
        <section id="skills" className="py-24">
            <div className="section-container">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-emerald-500 uppercase tracking-widest mb-4">
                        Expertise
                    </h2>
                    <h3 className="text-4xl font-bold font-display">
                        Technical <span className="text-gradient">Stack</span>
                    </h3>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Bridging the gap between high-end technical implementation and effective
                        human-centric leadership and task management.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.skills.map((category, i) => {
                        const Icon = iconMap[category.category] || Layout;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass p-8 rounded-2xl hover:border-emerald-500/30 transition-colors group"
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 rounded-xl bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
                                        <Icon className="w-6 h-6 text-emerald-500" />
                                    </div>
                                    <h4 className="text-xl font-bold font-display">{category.category}</h4>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    {category.items.map((skill, j) => (
                                        <div
                                            key={j}
                                            className="flex items-center gap-3 p-3 rounded-xl bg-charcoal-900 border border-white/5 hover:border-emerald-500/30 transition-all group/skill"
                                        >
                                            <span className="text-sm text-gray-300 font-medium group-hover/skill:text-emerald-400 transition-colors">
                                                {skill}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

