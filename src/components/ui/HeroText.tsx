import { FlipWords } from "../ui/FlipWords";
import { motion } from "framer-motion";
import { FileDown, Sparkles, ArrowRight } from "lucide-react";

const HeroText = () => {
    const words = ["Intelligent", "Scalable", "Innovative"];
    const variants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <div
            className="z-10 mt-20 
  text-center md:mt-40 md:text-left rounded-3xl bg-clip-text"
        >
            <div className="flex-col hidden md:flex c-space">
                <motion.h1
                    className="text-3xl font-medium text-fuchsia"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1 }}
                >
                    Hi, I'm Karuppasamy M
                </motion.h1>
                <div className="flex flex-col items-start">
                    <motion.p
                        className="text-5xl font-medium text-gray-200"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.2 }}
                    >
                        {" "}
                        Building <br />
                        The Future with
                    </motion.p>
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.5 }}
                    >
                        <FlipWords
                            words={words}
                            className="font-black text-white text-8xl"
                        />
                    </motion.div>
                    <motion.p
                        className="text-4xl font-medium bg-gradient-to-r from-fuchsia via-lavender to-mint bg-clip-text text-transparent"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.8 }}
                    >
                        {" "}
                        AI & Web Solutions
                    </motion.p>
                    <motion.p
                        className="text-lg text-gray-300 mt-6 max-w-2xl"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 2 }}
                    >
                        Founder of Mr K AI Ecosystem — Building intelligent systems
                        that redefine possibilities through AI innovation and scalable engineering.
                    </motion.p>

                    {/* Quick CTA Actions */}
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 2.2 }}
                        className="flex flex-wrap items-center gap-4 mt-8"
                    >
                        <a
                            href="/Karuppasamy_M_Resume.pdf"
                            download="Karuppasamy_M_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#C084FC] text-white font-bold text-sm md:text-base shadow-[0_0_30px_rgba(139,92,246,0.35)] hover:shadow-[0_0_40px_rgba(236,72,153,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
                        >
                            <FileDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                            Download Resume
                        </a>

                        <a
                            href="#experience"
                            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm md:text-base transition-all duration-300 group"
                        >
                            <span>Explore Experience</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                </div>
            </div>

            <div className="flex flex-col space-y-6 md:hidden px-4">
                <motion.p className="text-4xl font-medium text-fuchsia">Hi, I'm Karuppasamy M</motion.p>
                <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1.5 }}>
                    <motion.p className="text-4xl font-black text-gray-200">
                        Building The Future with
                    </motion.p>
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.8 }}
                    >
                        <FlipWords
                            words={words}
                            className="font-bold text-white text-6xl"
                        />
                    </motion.div>
                    <motion.p className="text-3xl font-black bg-gradient-to-r from-fuchsia via-lavender to-mint bg-clip-text text-transparent">
                        AI & Web Solutions
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 2.1 }}
                    className="flex flex-col gap-3 pt-2"
                >
                    <a
                        href="/Karuppasamy_M_Resume.pdf"
                        download="Karuppasamy_M_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white font-bold text-sm shadow-lg shadow-purple-500/25"
                    >
                        <FileDown className="w-4 h-4" />
                        Download Resume
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default HeroText;
