
import { motion } from 'framer-motion';

export const FloatingShapes = () => {
    return (
        <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
            {/* Soft Background Blobs */}
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

            {/* Geometric Outlines for 'Premium' Feel */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1, rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute top-[20%] right-[20%] w-32 h-32 border border-emerald-500/20 rounded-full"
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1, rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[10%] left-[10%] w-24 h-24 border border-blue-500/20 rounded-xl transform rotate-45"
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.05, y: -50 }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
                className="absolute top-[40%] left-[40%] w-40 h-40 border-2 border-dashed border-purple-500/10 rounded-full"
            />

            {/* Additional Blobs */}
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
                className="absolute top-[60%] left-[20%] w-72 h-72 bg-blue-500/5 rounded-full blur-[90px]"
            />
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute bottom-[5%] left-[30%] w-56 h-56 bg-rose-500/5 rounded-full blur-[70px]"
            />
            <motion.div
                animate={{
                    x: [0, -30, 0],
                    y: [0, 40, 0],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[20%] right-[5%] w-80 h-80 bg-amber-500/5 rounded-full blur-[110px]"
            />
        </div>
    );
};
