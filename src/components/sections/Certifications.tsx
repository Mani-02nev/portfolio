import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, FileText, Brain, X, Eye, Download } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const iconMap: Record<string, any> = {
    'Award': Award,
    'ShieldCheck': ShieldCheck,
    'FileText': FileText,
    'Brain': Brain
};

export const Certifications = () => {
    const [previewCert, setPreviewCert] = useState<any | null>(null);

    return (
        <section id="certifications" className="py-24 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] -z-10" />

            <div className="section-container">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold text-emerald-500 uppercase tracking-widest mb-4"
                    >
                        Validation
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl font-bold font-display"
                    >
                        Professional <span className="text-gradient">Certifications</span>
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 mt-4 max-w-2xl mx-auto"
                    >
                        A curated collection of credentials that represent my journey in
                        pioneering high-impact software solutions.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {portfolioData.certifications.map((cert, i) => {
                        const Icon = iconMap[cert.icon] || Award;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="relative group h-full cursor-pointer"
                                onClick={() => setPreviewCert(cert)}
                            >
                                {/* Hover glow effect */}
                                <div className={`absolute -inset-0.5 bg-gradient-to-r ${cert.color} rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500`} />

                                <div className="relative glass p-8 rounded-2xl h-full flex flex-col border-white/5 group-hover:border-white/10 transition-colors">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-14 h-14 rounded-xl bg-charcoal-900 border border-white/5 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300">
                                            <Icon className="w-7 h-7 text-emerald-500" />
                                        </div>
                                        <div className="text-xs font-bold text-gray-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                                            {cert.date}
                                        </div>
                                    </div>

                                    <h4 className="text-xl font-bold mb-2 font-display leading-tight group-hover:text-emerald-400 transition-colors">
                                        {cert.title}
                                    </h4>
                                    <p className="text-emerald-500/80 text-sm font-medium mb-4">{cert.issuer}</p>

                                    <div className="mt-auto pt-6 flex items-center justify-between border-t border-white/5">
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setPreviewCert(cert);
                                            }}
                                            className="inline-flex items-center gap-1.5 text-sm text-emerald-400 hover:text-emerald-300 transition-colors font-semibold group/link"
                                        >
                                            <Eye className="w-4 h-4" />
                                            Preview
                                        </button>

                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="text-xs text-white/50 hover:text-white inline-flex items-center gap-1 transition-colors"
                                        >
                                            Direct
                                            <ExternalLink className="w-3 h-3" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Modal Preview */}
            <AnimatePresence>
                {previewCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setPreviewCert(null)}
                        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-charcoal-900 border border-white/10 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
                        >
                            {/* Modal Header */}
                            <div className="p-6 border-b border-white/10 flex items-center justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-white font-display">{previewCert.title}</h3>
                                    <p className="text-sm text-emerald-400 font-medium">{previewCert.issuer} • {previewCert.date}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <a
                                        href={previewCert.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                                        title="Open in new tab"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                    <button
                                        onClick={() => setPreviewCert(null)}
                                        className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="p-6 overflow-auto flex-1 flex items-center justify-center bg-black/40 min-h-[400px]">
                                {previewCert.link.endsWith('.pdf') ? (
                                    <iframe
                                        src={previewCert.link}
                                        title={previewCert.title}
                                        className="w-full h-[550px] rounded-xl border border-white/10"
                                    />
                                ) : (
                                    <img
                                        src={previewCert.link}
                                        alt={previewCert.title}
                                        className="max-h-[600px] w-auto object-contain rounded-xl shadow-lg border border-white/10"
                                    />
                                )}
                            </div>

                            {/* Modal Footer */}
                            <div className="p-4 border-t border-white/10 flex justify-end gap-3 bg-charcoal-950">
                                <a
                                    href={previewCert.link}
                                    download
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn-primary py-2 px-5 text-sm inline-flex items-center gap-2"
                                >
                                    <Download className="w-4 h-4" />
                                    Download Credential
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};
