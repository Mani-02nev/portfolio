
import { motion } from 'framer-motion';
import { GraduationCap, Award, Zap, Users } from 'lucide-react';

const stats = [
    { label: 'Technical Depth', value: 'High', icon: GraduationCap },
    { label: 'Learning Velocity', value: 'Rapid', icon: Zap },
    { label: 'Leadership', value: 'Core', icon: Users },
    { label: 'Projects', value: '10+', icon: Award },
];

export const About = () => {
    return (
        <section id="about" className="py-24 bg-charcoal-800/30">
            <div className="section-container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-sm font-bold text-emerald-500 uppercase tracking-widest mb-4">
                            About Me
                        </h2>
                        <h3 className="text-4xl font-bold font-display mb-6">
                            Engineering <span className="text-gradient">Maturity</span> Meets Innovation
                        </h3>
                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                            <p>
                                As a Computer Engineering graduate, I’ve built a solid foundation in computer science
                                principles. My journey is defined by a relentless drive to solve complex problems using
                                intelligent systems and scalable architectures.
                            </p>
                            <p>
                                During my internship at <span className="text-white font-medium">Novi Tech Company</span>,
                                I specialized in AI, ML, and Data Visualization, where I learned to transform raw data
                                into actionable insights and deploy machine learning models that deliver real value.
                            </p>
                            <p>
                                I thrive in collaborative environments where communication and leadership are as
                                critical as the code itself. My approach is holistic: I don't just build features;
                                I design solutions that consider DevOps efficiency, user experience, and long-term scalability.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 mt-12">
                            {stats.map((stat, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                                        <stat.icon className="w-6 h-6 text-emerald-500" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">{stat.label}</p>
                                        <p className="text-xl font-bold font-display">{stat.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-2xl overflow-hidden glass relative z-10 p-2">
                            {/* Note to User: Replace with actual professional photo */}
                            <div className="w-full h-full bg-gradient-to-br from-charcoal-800 to-emerald-900/20 rounded-xl flex items-center justify-center border border-white/5">
                                <div className="text-center">
                                    <div className="w-48 h-48 mx-auto rounded-full bg-charcoal-900 border-2 border-emerald-500/50 flex items-center justify-center mb-6">
                                        <span className="text-4xl font-bold text-emerald-500">K</span>
                                    </div>
                                    <p className="text-emerald-500/50 font-display">Professional Avatar Placeholder</p>
                                </div>
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl" />
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
