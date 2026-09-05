import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, FileText, Brain, X, Eye, Download, Sparkles } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const iconMap: Record<string, any> = {
    'Award': Award,
    'ShieldCheck': ShieldCheck,
    'FileText': FileText,
    'Brain': Brain
};

export const Certifications = () => {
    const [previewCert, setPreviewCert] = useState<any | null>(null);
    const [isHoveredRow1, setIsHoveredRow1] = useState(false);
    const [isHoveredRow2, setIsHoveredRow2] = useState(false);

    const allCerts = portfolioData.certifications || [];
    
    // Split into 2 balanced rows
    const row1 = allCerts.filter((_, idx) => idx % 2 === 0);
    const row2 = allCerts.filter((_, idx) => idx % 2 !== 0);

    // Duplicate arrays for seamless infinite looping
    const row1Doubled = [...row1, ...row1, ...row1];
    const row2Doubled = [...row2, ...row2, ...row2];

    const renderCard = (cert: any, index: number) => {
        const Icon = iconMap[cert.icon] || Award;

        return (
            <div
                key={`${cert.title}-${index}`}
                onClick={() => setPreviewCert(cert)}
                className="w-[320px] sm:w-[360px] md:w-[380px] shrink-0 p-1 cursor-pointer select-none group"
            >
                {/* Glow wrap */}
                <div className="relative h-full rounded-2xl transition-all duration-300 group-hover:-translate-y-1">
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${cert.color} rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500`} />

                    <div className="relative glass p-6 rounded-2xl h-full flex flex-col border border-white/10 bg-slate-950/80 backdrop-blur-xl group-hover:border-white/20 transition-all duration-300 shadow-xl">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-12 h-12 rounded-xl bg-charcoal-900 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300">
                                <Icon className="w-6 h-6 text-emerald-400" />
                            </div>
                            <span className="text-[11px] font-bold text-gray-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                                {cert.date}
                            </span>
                        </div>

                        <h4 className="text-lg font-bold mb-1.5 font-display text-white group-hover:text-emerald-300 transition-colors line-clamp-2 leading-snug">
                            {cert.title}
                        </h4>
                        <p className="text-emerald-400/90 text-xs font-semibold mb-5">{cert.issuer}</p>

                        {/* Interactive Buttons: Preview vs Download */}
                        <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/10 gap-2">
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setPreviewCert(cert);
                                }}
                                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 px-3 py-1.5 rounded-lg transition-all"
                            >
                                <Eye className="w-3.5 h-3.5" />
                                Preview
                            </button>

                            <a
                                href={cert.link}
                                download
                                target="_blank"
                                rel="noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/70 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded-lg transition-all"
                                title="Download Credential"
                            >
                                <Download className="w-3.5 h-3.5 text-white/80" />
                                Download
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section id="certifications" className="py-28 relative overflow-hidden bg-[#070014]/40">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] -z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#8B5CF6]/5 rounded-full blur-[140px] -z-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4"
                >
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">CREDENTIAL SHOWCASE</span>
                </motion.div>

                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-5xl font-bold font-display text-white tracking-tight"
                >
                    Verified <span className="text-gradient">Certifications</span>
                </motion.h3>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm md:text-base font-light"
                >
                    Auto-scrolling dual-track gallery. Hover over any certificate to pause the showcase, preview full resolution, or download directly.
                </motion.p>
            </div>

            {/* ── ROW 1: Auto-Slide Left (Opposite Direction) ── */}
            <div
                className="relative w-full overflow-hidden mb-6"
                onMouseEnter={() => setIsHoveredRow1(true)}
                onMouseLeave={() => setIsHoveredRow1(false)}
            >
                {/* Side Fade Gradients */}
                <div className="absolute left-0 inset-y-0 w-20 bg-gradient-to-r from-[#0d0221] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 inset-y-0 w-20 bg-gradient-to-l from-[#0d0221] to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex gap-4 w-max"
                    animate={{ x: isHoveredRow1 ? undefined : ['0%', '-50%'] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: 'loop',
                            duration: 35,
                            ease: 'linear',
                        },
                    }}
                >
                    {row1Doubled.map((cert, idx) => renderCard(cert, idx))}
                </motion.div>
            </div>

            {/* ── ROW 2: Auto-Slide Right (Opposite Direction) ── */}
            <div
                className="relative w-full overflow-hidden"
                onMouseEnter={() => setIsHoveredRow2(true)}
                onMouseLeave={() => setIsHoveredRow2(false)}
            >
                {/* Side Fade Gradients */}
                <div className="absolute left-0 inset-y-0 w-20 bg-gradient-to-r from-[#0d0221] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 inset-y-0 w-20 bg-gradient-to-l from-[#0d0221] to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex gap-4 w-max"
                    animate={{ x: isHoveredRow2 ? undefined : ['-50%', '0%'] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: 'loop',
                            duration: 35,
                            ease: 'linear',
                        },
                    }}
                >
                    {row2Doubled.map((cert, idx) => renderCard(cert, idx))}
                </motion.div>
            </div>

            {/* ── CLEAN INTERACTIVE PREVIEW MODAL (NO AUTO-DOWNLOAD ON CLICK) ── */}
            <AnimatePresence>
                {previewCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setPreviewCert(null)}
                        className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-[#0f0b1e] border border-white/10 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl relative"
                        >
                            {/* Modal Header */}
                            <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
                                <div className="pr-4 min-w-0">
                                    <h3 className="text-lg sm:text-xl font-bold text-white font-display truncate">
                                        {previewCert.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-emerald-400 font-medium mt-0.5">
                                        {previewCert.issuer} • Issued {previewCert.date}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                    <a
                                        href={previewCert.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors border border-white/10"
                                        title="Open in new tab"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                    <button
                                        type="button"
                                        onClick={() => setPreviewCert(null)}
                                        className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors border border-white/10"
                                        title="Close preview"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Modal Content Preview */}
                            <div className="p-4 sm:p-6 overflow-auto flex-1 flex items-center justify-center bg-black/50 min-h-[350px] max-h-[60vh]">
                                {previewCert.link.endsWith('.pdf') ? (
                                    <iframe
                                        src={previewCert.link}
                                        title={previewCert.title}
                                        className="w-full h-[500px] rounded-xl border border-white/10 shadow-lg"
                                    />
                                ) : (
                                    <img
                                        src={previewCert.link}
                                        alt={previewCert.title}
                                        className="max-h-[500px] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
                                    />
                                )}
                            </div>

                            {/* Modal Footer with Download Action */}
                            <div className="p-4 sm:p-5 border-t border-white/10 flex items-center justify-between bg-[#0b0816]">
                                <span className="text-xs text-gray-400 hidden sm:inline">
                                    Verified Credential Preview
                                </span>
                                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                                    <button
                                        type="button"
                                        onClick={() => setPreviewCert(null)}
                                        className="px-4 py-2 rounded-xl text-xs font-semibold text-gray-400 hover:text-white transition-colors"
                                    >
                                        Close
                                    </button>
                                    <a
                                        href={previewCert.link}
                                        download
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn-primary py-2.5 px-5 text-xs font-bold inline-flex items-center gap-2"
                                    >
                                        <Download className="w-4 h-4" />
                                        Download Credential
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};
