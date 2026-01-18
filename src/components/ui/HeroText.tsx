import { FlipWords } from "../ui/FlipWords";
import { motion } from "motion/react";


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
                        Computer Engineering Graduate specializing in AI/ML & Full-Stack Development.
                        Transforming ideas into reality through code and innovation.
                    </motion.p>
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
            </div>
        </div>
    );
};

export default HeroText;
