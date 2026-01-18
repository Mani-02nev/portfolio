import { motion } from "framer-motion";

export function Frameworks() {
    const skills = [
        { name: "React", slug: "react" },
        { name: "Next.js", slug: "nextdotjs" },
        { name: "TypeScript", slug: "typescript" },
        { name: "Tailwind CSS", slug: "tailwindcss" },
        { name: "Python", slug: "python" },
        { name: "Django", slug: "django" },
        { name: "Flutter", slug: "flutter" },
        { name: "GitHub", slug: "github" },
    ];

    return (
        <div className="relative w-full h-full flex items-center justify-center py-10">
            {/* Helix Path Decoration */}
            <svg className="absolute inset-0 w-full h-full text-white/5 pointer-events-none" viewBox="0 0 300 800" fill="none">
                <path
                    d="M 150,50 C 350,200 -50,300 150,400 C 350,500 -50,600 150,750"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="10 10"
                />
            </svg>

            <div className="relative w-full h-full">
                {skills.map((skill, index) => (
                    <HelixIcon key={skill.slug} slug={skill.slug} index={index} total={skills.length} />
                ))}
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-[600px] rounded-full bg-emerald-500/5 blur-[100px] animate-pulse" />
            </div>
        </div>
    );
}

const HelixIcon = ({ slug, index, total }: { slug: string; index: number; total: number }) => {
    const delay = index * (12 / total);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: [0, 1, 1, 1, 0],
                x: [150, 260, 150, 40, 150], // Horizontal swing
                y: [0, 200, 400, 600, 800],   // Vertical progression
                scale: [0.6, 1.2, 0.8, 1.2, 0.6],
                rotate: [0, 10, 0, -10, 0]
            }}
            transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
                delay: -delay // Negative delay for immediate start
            }}
            className="absolute p-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-2xl z-30"
            style={{ width: '64px', height: '64px', x: '-50%', y: '-50%' }}
        >
            <img
                src={`https://cdn.simpleicons.org/${slug}`}
                className="w-10 h-10 object-contain"
                alt={slug}
            />
        </motion.div>
    );
};
