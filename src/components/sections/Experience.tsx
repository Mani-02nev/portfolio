import { useState, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Award, CheckCircle2, Sparkles, Briefcase, GraduationCap } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

import googleLogo from '../../assets/google.png';
import vdartLogo from '../../assets/vdart.png';
import novitechLogo from '../../assets/novitech.png';
import sitLogo from '../../assets/sit.png';

const logoMap: Record<string, string> = {
    'Google': googleLogo,
    'VDart Inc.': vdartLogo,
    'Novi Tech Company': novitechLogo,
    'SIT': sitLogo,
    'Seshasayee Institute of Technology': sitLogo,
};

// Symmetrical color palette for timeline stops
const accentColors = [
    '#C084FC', // SIT (Academic Base)
    '#EC4899', // Novi Tech DA (Analytics)
    '#8B5CF6', // Novi Tech AI (AI Systems)
    '#3B82F6', // VDart (Enterprise ML)
    '#ea4884', // Google (DevRel/Ambassador)
];

export const Experience = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    
    // Animate the timeline backbone fill as user scrolls the page
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });
    
    const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 20 });

    return (
        <section
            id="experience"
            ref={containerRef}
            className="py-32 relative overflow-hidden select-none bg-[#070015]"
        >
            {/* ── MNC-GRADE AMBIENT NEBULA BACKDROP ── */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#8B5CF6]/8 via-transparent to-transparent blur-[120px]" />
                <div className="absolute bottom-[20%] right-[5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#EC4899]/6 via-transparent to-transparent blur-[140px]" />
            </div>

            <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
                
                {/* ── ELITE MODERN TYPOGRAPHY HEADER (Apple Vibe) ── */}
                <div className="mb-24 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.02] border border-white/[0.06] text-xs font-semibold uppercase tracking-widest text-[#C084FC] mb-6 shadow-inner"
                    >
                        <Sparkles className="w-3.5 h-3.5 text-[#EC4899] animate-pulse" />
                        Professional Odyssey
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-none font-display mb-6"
                    >
                        Experience Track
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base md:text-lg lg:text-xl font-light text-white/50 max-w-2xl"
                    >
                        A chronological path of building intelligent systems, enterprise analytics pipelines, and leading developer communities.
                    </motion.p>
                </div>

                {/* ── VERTICAL TIMELINE CONTAINER ── */}
                <div className="relative mt-16 pl-6 sm:pl-8 lg:pl-0">
                    
                    {/* Symmetrical timeline line (visible at 25% on desktop, at 32px on mobile) */}
                    <div className="absolute left-[32px] lg:left-[25%] top-4 bottom-4 w-[1.5px] bg-white/[0.06] -translate-x-1/2 z-0">
                        <motion.div 
                            style={{ scaleY }}
                            className="w-full h-full bg-gradient-to-b from-[#8B5CF6] via-[#EC4899] to-[#C084FC] origin-top"
                        />
                    </div>

                    <div className="space-y-16 lg:space-y-24">
                        {portfolioData.experience.map((exp, idx) => {
                            const logo = logoMap[exp.company];
                            const isHovered = hoveredIndex === idx;
                            const accentColor = accentColors[idx] || '#8B5CF6';
                            const isEducation = exp.type === 'education';

                            return (
                                <div
                                    key={idx}
                                    className="relative lg:grid lg:grid-cols-12 lg:gap-8 items-start group"
                                >
                                    {/* ── LEFT DATE / METADATA COLUMN (Desktop Only) ── */}
                                    <div className="hidden lg:block lg:col-span-3 text-right pr-12 pt-6 select-none">
                                        <motion.div
                                            animate={{ 
                                                opacity: isHovered ? 1 : 0.45,
                                                x: isHovered ? -4 : 0 
                                            }}
                                            transition={{ duration: 0.3 }}
                                            className="space-y-2.5"
                                        >
                                            <span className="text-xl font-extrabold tracking-tight text-white font-display block">
                                                {exp.period}
                                            </span>
                                            
                                            <span className="flex items-center gap-1.5 justify-end text-xs font-semibold text-white/50">
                                                <MapPin className="w-3.5 h-3.5 text-white/30" />
                                                {exp.location}
                                            </span>

                                            <span 
                                                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider border"
                                                style={{ 
                                                    borderColor: `${accentColor}30`, 
                                                    backgroundColor: `${accentColor}10`,
                                                    color: accentColor
                                                }}
                                            >
                                                {isEducation ? (
                                                    <GraduationCap className="w-3 h-3" />
                                                ) : (
                                                    <Briefcase className="w-3 h-3" />
                                                )}
                                                {exp.typeLabel}
                                            </span>
                                        </motion.div>
                                    </div>

                                    {/* ── INTERACTIVE TIMELINE STOP INDICATOR ── */}
                                    <div className="absolute left-[32px] lg:left-[25%] top-[30px] -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
                                        {/* External animated glow ring */}
                                        <motion.div
                                            animate={{ 
                                                scale: isHovered ? 1.4 : 1,
                                                opacity: isHovered ? 0.35 : 0
                                            }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute w-8 h-8 rounded-full -left-2 -top-2 blur-sm"
                                            style={{ backgroundColor: accentColor }}
                                        />
                                        
                                        {/* Core Stop Dot */}
                                        <motion.div
                                            animate={{ 
                                                scale: isHovered ? 1.25 : 1,
                                                borderColor: isHovered ? accentColor : 'rgba(255,255,255,0.2)'
                                            }}
                                            transition={{ duration: 0.3 }}
                                            className="w-4 h-4 rounded-full border bg-[#070015] flex items-center justify-center transition-all duration-300"
                                        >
                                            <motion.div 
                                                animate={{ 
                                                    scale: isHovered ? 1.2 : 1,
                                                    backgroundColor: isHovered ? accentColor : 'rgba(255,255,255,0.1)'
                                                }}
                                                className="w-1.5 h-1.5 rounded-full" 
                                            />
                                        </motion.div>
                                    </div>

                                    {/* ── RIGHT EXPERIENCE CARD COLUMN ── */}
                                    <div className="lg:col-span-9 pl-12 lg:pl-12">
                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            whileHover={{ y: -6, scale: 1.005 }}
                                            onMouseEnter={() => setHoveredIndex(idx)}
                                            onMouseLeave={() => setHoveredIndex(null)}
                                            className="w-full rounded-3xl p-6 md:p-8 backdrop-blur-3xl border border-white/[0.04] bg-white/[0.01] hover:bg-white/[0.02] hover:border-white/10 shadow-[0_24px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_24px_60px_rgba(139,92,246,0.06)] relative overflow-hidden transition-all duration-300"
                                        >
                                            {/* Apple-grade ambient light top stripe */}
                                            <div 
                                                className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#8B5CF6]/30 to-transparent transition-opacity duration-300 opacity-30 group-hover:opacity-100" 
                                                style={{ backgroundImage: `linear-gradient(to right, transparent, ${accentColor}40, transparent)` }}
                                            />

                                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-6 border-b border-white/[0.06]">
                                                <div className="flex items-center gap-4">
                                                    {/* Pure corporate white box for logos */}
                                                    <div className="w-14 h-14 rounded-2xl overflow-hidden bg-white border border-white/[0.08] flex items-center justify-center p-3 shrink-0 shadow-md transition-transform duration-300 group-hover:scale-105">
                                                        {logo ? (
                                                            <img src={logo} alt={exp.company} className="w-full h-full object-contain" />
                                                        ) : (
                                                            <span className="font-bold text-[#070015] text-lg font-display">
                                                                {exp.company.charAt(0)}
                                                            </span>
                                                        )}
                                                    </div>

                                                    <div className="text-left min-w-0">
                                                        {/* Mobile/Tablet Info Row (Visible only on <lg) */}
                                                        <div className="flex flex-wrap items-center gap-2 mb-1 lg:hidden">
                                                            <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#C084FC]">
                                                                {exp.typeLabel}
                                                            </span>
                                                            <span className="text-[10px] text-white/40 font-medium">
                                                                {exp.period}
                                                            </span>
                                                        </div>

                                                        <h3 className="text-2xl font-bold text-white tracking-tight leading-tight font-display transition-colors duration-300 group-hover:text-white">
                                                            {exp.role}
                                                        </h3>
                                                        <p className="text-sm font-semibold text-white/50 mt-0.5">
                                                            {exp.company}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Desktop right metadata badge (location) */}
                                                <div className="hidden lg:flex items-center gap-1.5 text-xs text-white/40">
                                                    <MapPin className="w-3.5 h-3.5" />
                                                    <span className="font-medium">{exp.location}</span>
                                                </div>
                                            </div>

                                            {/* Detailed overview */}
                                            <p className="text-white/60 text-sm md:text-base font-light leading-relaxed mb-6 text-left">
                                                {exp.description}
                                            </p>

                                            {/* Key Achievements Bullet Console */}
                                            <div className="space-y-4 mb-8">
                                                <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40 flex items-center gap-1.5 select-none">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8B5CF6]" />
                                                    Key Accomplishments & Systems Handled
                                                </h4>
                                                <div className="grid gap-3">
                                                    {exp.achievements.map((item, i) => (
                                                        <div
                                                            key={i}
                                                            className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/[0.01] border border-white/[0.03] hover:bg-white/[0.02] hover:border-white/[0.05] transition-all duration-300"
                                                        >
                                                            <div 
                                                                className="w-1.5 h-1.5 rounded-full mt-2 shrink-0 animate-pulse" 
                                                                style={{ backgroundColor: accentColor }}
                                                            />
                                                            <span className="text-white/80 text-xs md:text-sm leading-relaxed text-left">{item}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Technology stack tags */}
                                            <div className="flex flex-wrap gap-2 mb-8">
                                                {exp.tech.map((t, i) => (
                                                    <span
                                                        key={i}
                                                        className="text-[10px] md:text-xs px-3 py-1.5 rounded-xl bg-white/5 text-gray-300 border border-white/10 hover:border-[#8B5CF6]/50 hover:bg-[#8B5CF6]/5 transition duration-200"
                                                    >
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Stripe-style Footer Action items */}
                                            <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
                                                <a
                                                    href={exp.companyUrl}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white/60 hover:text-white transition group/btn"
                                                >
                                                    <ExternalLink className="w-4 h-4 text-[#8B5CF6] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                                    Explore Company
                                                </a>

                                                {exp.certificateUrl && (
                                                    <a
                                                        href={exp.certificateUrl}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-white transition shadow-md"
                                                    >
                                                        <Award className="w-4 h-4 text-[#EC4899]" />
                                                        Verify Certificate
                                                    </a>
                                                )}
                                            </div>

                                        </motion.div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
};
