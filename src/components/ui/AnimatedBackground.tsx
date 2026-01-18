import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
}

export const AnimatedBackground = () => {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        const generateParticles = () => {
            const newParticles: Particle[] = [];
            for (let i = 0; i < 30; i++) {
                newParticles.push({
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    size: Math.random() * 4 + 2,
                    duration: Math.random() * 20 + 15,
                    delay: Math.random() * 5,
                });
            }
            setParticles(newParticles);
        };

        generateParticles();
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            {/* Animated gradient orbs */}
            <motion.div
                className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20"
                style={{
                    background: 'radial-gradient(circle, rgba(138, 43, 226, 0.4) 0%, transparent 70%)',
                }}
                animate={{
                    x: [0, 100, 0],
                    y: [0, -100, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            <motion.div
                className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-20"
                style={{
                    background: 'radial-gradient(circle, rgba(75, 0, 130, 0.5) 0%, transparent 70%)',
                }}
                animate={{
                    x: [0, -80, 0],
                    y: [0, 80, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            <motion.div
                className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full opacity-15"
                style={{
                    background: 'radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, transparent 70%)',
                    transform: 'translate(-50%, -50%)',
                }}
                animate={{
                    scale: [1, 1.4, 1],
                    rotate: [0, 180, 360],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            />

            {/* Floating particles */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full bg-purple-400/30"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: particle.size,
                        height: particle.size,
                    }}
                    animate={{
                        y: [0, -100, 0],
                        x: [0, Math.random() * 50 - 25, 0],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: 'easeInOut',
                    }}
                />
            ))}

            {/* Animated lines */}
            <svg className="absolute inset-0 w-full h-full opacity-10">
                <motion.path
                    d="M0,100 Q250,50 500,100 T1000,100"
                    stroke="url(#gradient1)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.path
                    d="M0,300 Q250,250 500,300 T1000,300"
                    stroke="url(#gradient2)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1,
                    }}
                />
                <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
                        <stop offset="50%" stopColor="#a78bfa" stopOpacity="1" />
                        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#7c3aed" stopOpacity="0" />
                        <stop offset="50%" stopColor="#9333ea" stopOpacity="1" />
                        <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};
