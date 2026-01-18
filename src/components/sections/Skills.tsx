
import { motion } from 'framer-motion';
import { Code, Layout, Server, Cpu, Terminal, Globe, Smartphone } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { AnimatedBackground } from '../ui/AnimatedBackground';
import { Frameworks } from '../ui/Frameworks';

const iconMap: Record<string, any> = {
    'Programming Languages': Code,
    'Core Technologies': Cpu,
    'Web Frameworks': Globe,
    'App Frameworks': Smartphone,
    'UI & Design Tools': Server,
    'DevOps & Tools': Terminal,
};

const categoryColorMap: Record<string, { color: string, border: string, bg: string, accent: string }> = {
    'Programming Languages': { color: 'text-red-400', border: 'border-red-500/20', bg: 'bg-red-500/5', accent: 'bg-red-500' },
    'Core Technologies': { color: 'text-yellow-400', border: 'border-yellow-500/20', bg: 'bg-yellow-500/5', accent: 'bg-yellow-500' },
    'Web Frameworks': { color: 'text-cyan-400', border: 'border-cyan-500/20', bg: 'bg-cyan-500/5', accent: 'bg-cyan-500' },
    'App Frameworks': { color: 'text-fuchsia-400', border: 'border-fuchsia-500/20', bg: 'bg-fuchsia-500/5', accent: 'bg-fuchsia-500' },
    'UI & Design Tools': { color: 'text-emerald-400', border: 'border-emerald-500/20', bg: 'bg-emerald-500/5', accent: 'bg-emerald-500' },
    'DevOps & Tools': { color: 'text-purple-400', border: 'border-purple-500/20', bg: 'bg-purple-500/5', accent: 'bg-purple-500' },
};

const skillToSlug: Record<string, string> = {
    'Java': 'openjdk',
    'Python': 'python',
    'C': 'c',
    'C++': 'cplusplus',
    'HTML5': 'html5',
    'CSS3': 'css3',
    'JavaScript (ES6+)': 'javascript',
    'TypeScript': 'typescript',
    'React.js': 'react',
    'Next.js': 'nextdotjs',
    'Django': 'django',
    'Tailwind CSS': 'tailwindcss',
    'Flutter': 'flutter',
    'React Native': 'react',
    'Git': 'git',
    'GitHub': 'github',
    'Figma': 'figma',
};

export const Skills = () => {
    // Split skills into two columns for the "center circle" layout
    const leftSkills = portfolioData.skills.slice(0, Math.ceil(portfolioData.skills.length / 2));
    const rightSkills = portfolioData.skills.slice(Math.ceil(portfolioData.skills.length / 2));

    return (
        <section id="skills" className="py-24 relative overflow-hidden bg-charcoal-900/50">
            <AnimatedBackground />

            <div className="section-container relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-white uppercase tracking-widest mb-4 opacity-80">
                        Expertise
                    </h2>
                    <h3 className="text-4xl lg:text-5xl font-bold font-display text-white">
                        Technical <span className="text-gradient">Stack</span>
                    </h3>
                </div>

                <div className="relative flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0 max-w-6xl mx-auto">
                    {/* Left Column */}
                    <div className="flex-1 w-full space-y-12 z-20">
                        {leftSkills.map((category, i) => (
                            <SkillCard key={i} category={category} index={i} side="left" />
                        ))}
                    </div>

                    {/* Center Column - Infinity Helix Path */}
                    <div className="relative w-full lg:w-[300px] h-[800px] flex items-center justify-center pointer-events-none">
                        <div className="absolute inset-0">
                            <Frameworks />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex-1 w-full space-y-12 z-20">
                        {rightSkills.map((category, i) => (
                            <SkillCard key={i} category={category} index={i} side="right" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const SkillCard = ({ category, index, side }: { category: any, index: number, side: string }) => {
    const Icon = iconMap[category.category] || Layout;
    const theme = categoryColorMap[category.category as keyof typeof categoryColorMap] || { color: 'text-emerald-400', border: 'border-emerald-500/20', bg: 'bg-emerald-500/5', accent: 'bg-emerald-500' };

    // Use radial mask to create a perfect circular cutout that wraps around the vertical central helix
    const maskImage = side === 'left'
        ? 'radial-gradient(circle 220px at calc(100% + 120px) 50%, transparent 60%, black 61%)'
        : 'radial-gradient(circle 220px at -120px 50%, transparent 60%, black 61%)';

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, x: side === 'left' ? -40 : 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.02, x: side === 'left' ? 5 : -5 }}
            style={{
                WebkitMaskImage: maskImage,
                maskImage: maskImage
            } as any}
            className={`glass p-8 pb-10 rounded-[2.5rem] border border-white/5 hover:border-white/20 transition-all duration-300 group relative
                ${side === 'left' ? 'text-left pr-20' : 'text-right pl-20'}
                overflow-hidden cursor-default bg-gradient-to-br from-white/10 to-transparent shadow-2xl
            `}
        >
            {/* Thematic Glow */}
            <div className={`absolute inset-0 ${theme.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            <div className={`flex flex-col ${side === 'left' ? 'items-start' : 'items-end'} gap-3 mb-6 relative z-10`}>
                <div className={`p-4 rounded-2xl ${theme.bg} ${theme.border} border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-xl`}>
                    <Icon className={`w-6 h-6 ${theme.color}`} />
                </div>
                <h4 className="text-2xl font-bold font-display text-white tracking-widest">{category.category}</h4>
            </div>

            <div className={`flex flex-wrap ${side === 'left' ? 'justify-start' : 'justify-end'} gap-3 relative z-10`}>
                {category.items.map((skill: string, j: number) => {
                    const slug = skillToSlug[skill] || null;
                    return (
                        <span
                            key={j}
                            className={`flex items-center gap-2.5 px-4 py-2 text-[12px] rounded-xl bg-charcoal-900/60 border border-white/10 text-white font-bold hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300 backdrop-blur-xl shadow-lg`}
                        >
                            {slug && (
                                <img
                                    src={`https://cdn.simpleicons.org/${slug}`}
                                    className="w-4 h-4 object-contain filter drop-shadow-sm"
                                    alt={skill}
                                />
                            )}
                            {skill}
                        </span>
                    );
                })}
            </div>
        </motion.div>
    );
};
