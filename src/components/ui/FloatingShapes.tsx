
import { motion } from 'framer-motion';

export const FloatingShapes = () => {
    return (
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 90, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[10%] left-[5%] w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px]"
            />
            <motion.div
                animate={{
                    y: [0, 30, 0],
                    rotate: [0, -45, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px]"
            />
            <motion.div
                animate={{
                    x: [0, -40, 0],
                    scale: [1, 0.8, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[40%] right-[30%] w-48 h-48 bg-purple-500/5 rounded-full blur-[60px]"
            />
            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                    rotate: [0, 180, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute text-emerald-900/10 dark:text-emerald-500/5 top-[60%] left-[20%] w-72 h-72 bg-blue-500/5 rounded-full blur-[90px]"
            />
        </div>
    );
};
