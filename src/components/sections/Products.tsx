import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Sparkles, LayoutGrid, Layers, Globe, Code } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { AnimatedBackground } from '../ui/AnimatedBackground';
import { useState } from 'react';

export const Products = () => {
    const [filter, setFilter] = useState('All');
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const productsList = portfolioData.products || [];

    const categories = [
        'All',
        ...Array.from(new Set(productsList.flatMap((product: any) => product.tags)))
    ];

    const filteredProducts = productsList.filter((product: any) =>
        filter === 'All' ? true : product.tags.includes(filter)
    );

    // Grid container animations
    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.05 }
        }
    };

    // Card entry animation
    const cardVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.98 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 150,
                damping: 18,
                mass: 0.6
            }
        },
        exit: {
            opacity: 0,
            scale: 0.96,
            y: 15,
            transition: { duration: 0.2, ease: 'easeIn' }
        }
    };

    return (
        <section id="products" className="py-28 relative overflow-hidden bg-[#070014]/30">
            <AnimatedBackground />

            {/* Subtle background glow orbs */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[10%] left-[-10%] w-[450px] h-[450px] rounded-full bg-emerald-500/5 filter blur-[100px] opacity-70" />
                <div className="absolute bottom-[10%] right-[-10%] w-[550px] h-[550px] rounded-full bg-blue-500/5 filter blur-[120px] opacity-70" />
            </div>

            <div className="section-container relative z-10">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
                            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">MR K AI ECOSYSTEM</span>
                        </div>

                        <h3 className="text-3xl md:text-5xl font-bold font-display text-white tracking-tight">
                            Products & <span className="text-gradient">Value Cards</span>
                        </h3>

                        <p className="text-gray-400 mt-4 max-w-2xl text-sm md:text-base leading-relaxed">
                            Premium project showcases with clean card design, clear business value, and polished production focus.
                        </p>

                    </motion.div>
                </div>

                {/* Categories Filter Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="flex flex-wrap justify-center gap-2.5 mb-14"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`px-4.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border transition-all duration-300 ${filter === category
                                ? 'bg-emerald-500 text-slate-950 border-emerald-500 shadow-[0_12px_30px_rgba(16,185,129,0.22)]'
                                : 'bg-white/[0.02] text-gray-400 border-white/[0.06] hover:text-white hover:border-white/10 hover:bg-white/[0.04]'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Products Grid */}
                <motion.div
                    layout
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product: any, index: number) => (
                            <motion.div
                                layout
                                key={product.title}
                                variants={cardVariants}
                                exit="exit"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="group h-full flex"
                            >
                                <div className="w-full relative overflow-hidden rounded-[32px] bg-slate-950/90 ring-1 ring-white/10 border border-white/10 shadow-[0_40px_90px_rgba(15,23,42,0.26)] transition-all duration-500 hover:-translate-y-1 hover:ring-emerald-400/20">

                                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-violet-500 to-sky-400" />
                                    <div className="absolute top-4 left-4 rounded-full bg-white/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-200 border border-white/10 shadow-[0_6px_18px_rgba(15,23,42,0.24)] backdrop-blur-sm">
                                        Value Card
                                    </div>

                                    {/* Image Section */}
                                    <div className="relative h-56 overflow-hidden bg-slate-950/20 border-b border-white/10">
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-95 z-10" />

                                        <motion.img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 group-hover:scale-[1.05] transition-all duration-500"
                                            loading="lazy"
                                        />

                                        <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
                                            {product.link !== '#' ? (
                                                <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.24em] bg-emerald-500/15 text-emerald-300 border border-emerald-500/20 px-3 py-1 rounded-full backdrop-blur-sm">
                                                    <Globe className="w-3 h-3" /> Live
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.24em] bg-white/10 text-slate-200 border border-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                                                    <Code className="w-3 h-3" /> Code
                                                </span>
                                            )}
                                            <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.24em] bg-slate-900/70 text-slate-300 border border-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                                                {product.tags.length} Stacks
                                            </span>
                                        </div>
                                    </div>

                                    {/* Card Details */}
                                    <div className="p-7 flex flex-col flex-grow text-left">

                                        <div className="mb-5">
                                            <h4 className="text-2xl font-semibold text-white group-hover:text-emerald-300 transition-colors duration-300 leading-tight">
                                                {product.title}
                                            </h4>
                                            <p className="mt-4 text-sm text-slate-400 max-w-xl leading-7">
                                                {product.description}
                                            </p>
                                        </div>

                                        <div className="flex flex-col gap-3 mt-auto sm:flex-row sm:items-center sm:justify-between pt-5 border-t border-white/10">
                                            <div className="flex flex-1 gap-3 sm:max-w-xs flex-wrap">
                                                {product.link !== '#' && (
                                                    <a
                                                        href={product.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex-1 inline-flex min-w-[120px] items-center justify-center gap-2 rounded-2xl border border-transparent bg-gradient-to-r from-emerald-500 to-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:scale-[1.01]"
                                                    >
                                                        <ExternalLink className="w-4 h-4" />
                                                        Launch App
                                                    </a>
                                                )}

                                                {product.github && (
                                                    <a
                                                        href={product.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex min-w-[120px] items-center justify-center gap-2 rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white/20 hover:bg-slate-900/95"
                                                    >
                                                        <Github className="w-4 h-4" />
                                                        Source Code
                                                    </a>
                                                )}
                                            </div>
                                            <span className="text-xs uppercase tracking-[0.3em] text-slate-500 sm:text-right">
                                                {product.tags.length} focus areas
                                            </span>
                                        </div>

                                    </div>

                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
};
