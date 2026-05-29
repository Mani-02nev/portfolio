import { motion } from 'framer-motion';
import { GraduationCap, Award, Zap, Users } from 'lucide-react';
import profilePic from '../../assets/profile-01.png';
import { portfolioData } from '../../data/portfolioData';
import { AnimatedBackground } from '../ui/AnimatedBackground';

const iconMap: Record<string, any> = {
    'Technical Depth': GraduationCap,
    'Learning Velocity': Zap,
    'Leadership': Users,
    'Projects': Award,
};

export const About = () => {
    return (
        <section id="about" className="py-32 bg-[#070015] relative overflow-hidden">
            <AnimatedBackground />
            
            {/* Ambient glows matching brand tokens */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#8B5CF6]/5 via-transparent to-transparent blur-[120px]" />
                <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#EC4899]/5 via-transparent to-transparent blur-[130px]" />
            </div>

            <div className="section-container relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 items-center">
                    
                    {/* Left Column Text Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.04)" }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                                delay: 0.2
                            }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 group hover:border-[#8B5CF6]/30 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.02)] hover:shadow-[0_0_20px_rgba(139,92,246,0.1)] cursor-default overflow-hidden animate-pulse-slow"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EC4899] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8B5CF6]"></span>
                            </span>
                            <motion.span
                                initial={{ width: 0 }}
                                whileInView={{ width: "auto" }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="text-sm font-semibold text-white tracking-widest uppercase whitespace-nowrap overflow-hidden border-r-2 border-white/30 pr-1 font-display"
                            >
                                Hi! I'm {portfolioData.personal.name.split(' ')[0]}
                            </motion.span>
                        </motion.div>

                        <h2 className="text-sm font-bold text-[#C084FC] uppercase tracking-widest mb-4">
                            About Me
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold font-display mb-6 tracking-tight text-white leading-tight">
                            Engineering <span className="text-gradient">Maturity</span> Meets Innovation
                        </h3>
                        <div className="space-y-6 text-white/60 text-lg font-light leading-relaxed text-left">
                            <p>
                                {portfolioData.personal.bio}
                            </p>

                            <div className="pl-4 border-l-2 border-[#8B5CF6]/30">
                                <h4 className="text-white font-bold mb-1.5 text-base">Academic Foundation</h4>
                                <p className="text-sm font-normal text-white/50 leading-relaxed">
                                    Currently pursuing my degree at <span className="text-[#C084FC] font-semibold">{portfolioData.experience[0].company}</span> in {portfolioData.experience[0].location}. {portfolioData.experience[0].description}
                                </p>
                            </div>

                            <div className="pl-4 border-l-2 border-[#EC4899]/30">
                                <h4 className="text-white font-bold mb-1.5 text-base">Professional Experience</h4>
                                <p className="text-sm font-normal text-white/50 leading-relaxed">
                                    During my tenure at <span className="text-[#EC4899] font-semibold">{portfolioData.experience[1].company}</span> as an {portfolioData.experience[1].role},
                                    I specialized in AI, ML, and Data Visualization. {portfolioData.experience[1].description}
                                </p>
                            </div>

                            <p>
                                I thrive in collaborative environments where communication and leadership are as
                                critical as the code itself. My approach is holistic: I don't just build features;
                                I design solutions that consider DevOps efficiency, user experience, and long-term scalability.
                            </p>
                        </div>

                        {/* Metric stats badges */}
                        <div className="grid grid-cols-2 gap-6 mt-12">
                            {portfolioData.stats.map((stat, i) => {
                                const Icon = iconMap[stat.label] || Award;
                                return (
                                    <div key={i} className="flex items-center gap-4 group/stat">
                                        <div className="p-3 rounded-2xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 transition-all duration-300 group-hover/stat:bg-[#8B5CF6]/20 group-hover/stat:border-[#8B5CF6]/40 shadow-inner">
                                            <Icon className="w-6 h-6 text-[#C084FC]" />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-xs font-bold text-white/40 uppercase tracking-widest">{stat.label}</p>
                                            <p className="text-xl font-bold font-display text-white mt-0.5">{stat.value}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Right Column Profile Image - Perfectly visible and increased size */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-5 relative flex flex-col gap-6"
                    >
                        {/* High-End Portrait Glow Frame */}
                        <div className="relative group w-full">
                            {/* Accent Glow backdrop matching brand system */}
                            <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#8B5CF6]/60 via-[#EC4899]/40 to-[#C084FC]/60 rounded-3xl blur-2xl group-hover:opacity-100 opacity-80 transition duration-700" />

                            {/* Image Container Frame */}
                            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.8)]" style={{ background: 'rgba(7, 0, 21, 0.6)' }}>
                                {/* Apple-grade Luxury Corner Accents */}
                                <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[#8B5CF6] rounded-tl-3xl z-10" />
                                <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-[#EC4899] rounded-tr-3xl z-10" />
                                <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-[#C084FC] rounded-bl-3xl z-10" />
                                <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[#8B5CF6] rounded-br-3xl z-10" />

                                {/* Increased Image Dimension (h-[620px] full cover for perfect visibility!) */}
                                <img
                                    src={profilePic}
                                    alt="Karuppasamy - Frontend Developer & AI Specialist"
                                    className="w-full h-[620px] object-cover object-center transition-transform duration-700 group-hover:scale-[1.03] select-none"
                                    style={{ display: 'block' }}
                                />

                                {/* Ambient bottom linear gradient */}
                                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#070015] via-[#070015]/40 to-transparent pointer-events-none" />
                            </div>
                        </div>

                        {/* Interactive Status Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="self-end glass px-5 py-3.5 rounded-2xl shadow-2xl border border-[#8B5CF6]/30 flex items-center gap-3 relative overflow-hidden backdrop-blur-2xl"
                            style={{ background: 'rgba(7, 0, 21, 0.4)' }}
                        >
                            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#EC4899]/30 to-transparent" />
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] flex items-center justify-center text-white shadow-md">
                                <Zap className="w-5 h-5 text-white animate-pulse" />
                            </div>
                            <div className="text-left">
                                <p className="text-[10px] text-[#C084FC] font-extrabold uppercase tracking-widest">Ready to</p>
                                <p className="text-sm font-bold text-white tracking-tight">Innovate</p>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
