import { motion } from 'framer-motion';
import { Rocket, ExternalLink, ShieldCheck, Zap, Globe } from 'lucide-react';
import { AnimatedBackground } from '../ui/AnimatedBackground';

export const Founder = () => {
    return (
        <section id="founder" className="py-32 bg-[#070015] relative overflow-hidden">
            <AnimatedBackground />

            {/* Ambient glows */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#8B5CF6]/5 via-transparent to-transparent blur-[120px]" />
                <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#EC4899]/5 via-transparent to-transparent blur-[130px]" />
            </div>

            <div className="section-container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-sm font-bold text-[#EC4899] uppercase tracking-widest mb-4">
                        Solo Founder
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-white mb-6">
                        The Pickup <span className="text-gradient">Ecosystem</span>
                    </h3>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto font-light">
                        A world-class, production-ready learning platform built from scratch to rival Udemy and Coursera, empowering users to Learn, Grow, and Succeed.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Platform Overview */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group"
                        style={{ background: 'rgba(255,255,255,0.02)' }}
                    >
                        <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                            <Rocket className="w-24 h-24 text-[#8B5CF6]" />
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-4">Learn. Grow. Succeed.</h4>
                        <p className="text-white/60 leading-relaxed mb-8">
                            As a solo founder, I designed and architected The Pickup to provide a seamless, robust, and scalable educational experience. Every line of code, from the interactive UI to the robust backend architecture, represents a commitment to accessible, high-quality education.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                { icon: Globe, text: "Global scale infrastructure" },
                                { icon: ShieldCheck, text: "Enterprise-grade security" },
                                { icon: Zap, text: "Ultra-fast content delivery" }
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white/80">
                                    <div className="p-1.5 rounded-lg bg-[#8B5CF6]/20 text-[#C084FC]">
                                        <item.icon className="w-4 h-4" />
                                    </div>
                                    <span className="font-medium text-sm">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                        
                        <a 
                            href="https://pick-up02.vercel.app/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-[#8B5CF6]/20 border border-white/10 hover:border-[#8B5CF6]/50 text-white font-semibold transition-all duration-300"
                        >
                            Explore The Platform
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </motion.div>

                    {/* Visual representation or Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="relative h-full min-h-[400px] rounded-3xl border border-[#EC4899]/20 overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-[#1a0b2e] to-[#070015]"
                    >
                        <div className="absolute inset-0 bg-[url('https://pick-up02.vercel.app/og-image.jpg')] bg-cover bg-center opacity-30 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-700" />
                        
                        <div className="relative z-10 text-center p-8 backdrop-blur-sm bg-black/40 rounded-2xl border border-white/10 m-6">
                            <h5 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#C084FC] mb-2">
                                Vision Realized
                            </h5>
                            <p className="text-white/80 font-medium">
                                Redefining the modern learning ecosystem with intelligent design and scalable web architecture.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
