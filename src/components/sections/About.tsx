
import { motion } from 'framer-motion';
import { GraduationCap, Award, Zap, Users } from 'lucide-react';
import profilePic from '../../assets/profil.jpeg';
import { portfolioData } from '../../data/portfolioData';

const iconMap: Record<string, any> = {
    'Technical Depth': GraduationCap,
    'Learning Velocity': Zap,
    'Leadership': Users,
    'Projects': Award,
};

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
                                {portfolioData.personal.bio}
                            </p>

                            <div className="pl-4 border-l-2 border-emerald-500/30">
                                <h4 className="text-white font-bold mb-2 text-base">Academic Foundation</h4>
                                <p className="text-sm">
                                    Currently pursuing my degree at <span className="text-emerald-400 font-medium">{portfolioData.experience[0].company}</span> in {portfolioData.experience[0].location}.
                                    {portfolioData.experience[0].description}
                                </p>
                            </div>

                            <div className="pl-4 border-l-2 border-blue-500/30">
                                <h4 className="text-white font-bold mb-2 text-base">Professional Experience</h4>
                                <p className="text-sm">
                                    During my tenure at <span className="text-blue-400 font-medium">{portfolioData.experience[1].company}</span> as an {portfolioData.experience[1].role},
                                    I specialized in AI, ML, and Data Visualization. {portfolioData.experience[1].description}
                                </p>
                            </div>

                            <p>
                                I thrive in collaborative environments where communication and leadership are as
                                critical as the code itself. My approach is holistic: I don't just build features;
                                I design solutions that consider DevOps efficiency, user experience, and long-term scalability.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 mt-12">
                            {portfolioData.stats.map((stat, i) => {
                                const Icon = iconMap[stat.label] || Award;
                                return (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                                            <Icon className="w-6 h-6 text-emerald-500" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">{stat.label}</p>
                                            <p className="text-xl font-bold font-display">{stat.value}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative group max-w-sm mx-auto">
                            {/* Animated Background Rings */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 rounded-full blur-2xl group-hover:opacity-75 transition duration-500" />

                            <div className="relative aspect-square rounded-full overflow-hidden glass p-3 border border-white/10">
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent" />

                                <div className="relative w-full h-full rounded-full overflow-hidden bg-charcoal-900 border border-white/5">
                                    <img
                                        src={profilePic}
                                        alt="Profile"
                                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
                                    />

                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent opacity-60" />
                                </div>
                            </div>

                            {/* Experience Badge */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                                className="absolute -bottom-6 -right-6 glass p-4 rounded-2xl shadow-2xl border-emerald-500/20"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-charcoal-900">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-emerald-400 font-bold uppercase tracking-wider">Ready to</p>
                                        <p className="text-lg font-bold">Innovate</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};


