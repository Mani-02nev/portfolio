
import { motion } from 'framer-motion';
import { Users, MessageSquare, Target, Zap, HeartHandshake, ShieldCheck } from 'lucide-react';

const softSkills = [
    {
        title: 'Leadership',
        description: 'Proven ability to guide teams towards shared goals, fostering a culture of excellence and accountability.',
        icon: Target,
    },
    {
        title: 'Communication',
        description: 'Expertise in translating complex technical concepts for non-technical stakeholders and cross-functional teams.',
        icon: MessageSquare,
    },
    {
        title: 'People Management',
        description: 'Committed to mentoring peers and managing group dynamics to optimize productivity and morale.',
        icon: Users,
    },
    {
        title: 'Time & Task Management',
        description: 'Detail-oriented approach to project timelines and task prioritization, ensuring high-quality delivery under pressure.',
        icon: Zap,
    },
    {
        title: 'Collaboration',
        description: 'Prioritizing team success through active listening, conflict resolution, and shared responsibility.',
        icon: HeartHandshake,
    },
    {
        title: 'Professional Integrity',
        description: 'Upholding high standards of ethics, reliability, and engineering discipline in every project.',
        icon: ShieldCheck,
    },
];

export const Leadership = () => {
    return (
        <section id="leadership" className="py-24 bg-charcoal-800/30">
            <div className="section-container">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-emerald-500 uppercase tracking-widest mb-4">
                        Soft Power
                    </h2>
                    <h3 className="text-4xl font-bold font-display">
                        Leadership & <span className="text-gradient">Communication</span>
                    </h3>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Beyond the code, I bring a commitment to organizational growth and people-centric
                        problem solving.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {softSkills.map((skill, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass p-8 rounded-2xl group hover:bg-emerald-500/5 transition-all duration-300"
                        >
                            <div className="w-14 h-14 rounded-xl bg-charcoal-900 border border-white/5 flex items-center justify-center mb-6 group-hover:border-emerald-500/30 transition-colors">
                                <skill.icon className="w-7 h-7 text-emerald-500" />
                            </div>
                            <h4 className="text-xl font-bold mb-3 font-display">{skill.title}</h4>
                            <p className="text-gray-400 leading-relaxed">
                                {skill.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
