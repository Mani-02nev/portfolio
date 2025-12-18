
import { motion } from 'framer-motion';
import { Code, Layout, Server } from 'lucide-react';

const skillCategories = [
    {
        title: 'Programming Languages',
        icon: Code,
        skills: [
            { name: 'Java' },
            { name: 'Python' },
            { name: 'C' },
            { name: 'C++' },
        ],
    },
    {
        title: 'Core Technologies',
        icon: Layout,
        skills: [
            { name: 'HTML5' },
            { name: 'CSS3' },
            { name: 'JavaScript (ES6+)' },
            { name: 'TypeScript' },
        ],
    },
    {
        title: 'Frameworks & Libraries',
        icon: Layout,
        skills: [
            { name: 'React.js' },
            { name: 'Next.js' },
            { name: 'Tailwind CSS' },
            { name: 'Framer Motion' },
        ],
    },
    {
        title: 'UI & Design Tools',
        icon: Server,
        skills: [
            { name: 'Responsive Design' },
            { name: 'UI/UX Principles' },
            { name: 'Figma' },
            { name: 'Component Architecture' },
        ],
    },
    {
        title: 'Soft Power',
        icon: Server,
        skills: [
            { name: 'Leadership' },
            { name: 'People Management' },
            { name: 'Time & Tasking' },
            { name: 'Communication' },
        ],
    },
];

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
                    {skillCategories.map((category, i) => (
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
                                    <category.icon className="w-6 h-6 text-emerald-500" />
                                </div>
                                <h4 className="text-xl font-bold font-display">{category.title}</h4>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {category.skills.map((skill, j) => (
                                    <div
                                        key={j}
                                        className="flex items-center gap-3 p-3 rounded-xl bg-charcoal-900 border border-white/5 hover:border-emerald-500/30 transition-all group/skill"
                                    >
                                        <span className="text-sm text-gray-300 font-medium group-hover/skill:text-emerald-400 transition-colors">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
