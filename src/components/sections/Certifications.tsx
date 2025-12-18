import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, FileText } from 'lucide-react';

const certifications = [
    {
        title: 'Google Core Skills Certification',
        issuer: 'Google',
        date: '2025',
        link: '/certificates/gogle.jpeg',
        icon: Award,
        color: 'from-blue-500/20 to-blue-600/20'
    },
    {
        title: 'Machine Learning Internship',
        issuer: 'Professional Development',
        date: '2025',
        link: '/certificates/KARUPPASAMY M (1).pdf',
        icon: ShieldCheck,
        color: 'from-emerald-500/20 to-emerald-600/20'
    },
    {
        title: 'Artificial Intelligence Internship',
        issuer: 'Technical Institute',
        date: '2025',
        link: '/certificates/KARUPPASAMY M (2).pdf',
        icon: FileText,
        color: 'from-purple-500/20 to-purple-600/20'
    },
    {
        title: 'Data Analytics Internship',
        issuer: 'Novi Tech Certification',
        date: '2025',
        link: '/certificates/KARUPPASAMY M (3).pdf',
        icon: Award,
        color: 'from-orange-500/20 to-orange-600/20'
    },
    {
        title: 'Artificial Intelligence 30day masterclass',
        issuer: 'Technical Excellence',
        date: '2025',
        link: '/certificates/KARUPPASAMY M.pdf',
        icon: ShieldCheck,
        color: 'from-cyan-500/20 to-cyan-600/20'
    },
    {
        title: 'Artificial Intelligence ROAD MAP',
        issuer: 'Technical Excellence',
        date: '2025',
        link: '/certificates/HCL GUVI Certification - 1h6nM1sg71C5972067.png',
        icon: ShieldCheck,
        color: 'from-blue-500/20 to-blue-600/20'
    },
    {
        title: '5-Day AI Agents Intensive Course',
        issuer: 'Google Cloud / technical Excellence',
        date: '2025',
        link: '/certificates/5-Day AI Agents Intensive Course with Google.png',
        icon: Award,
        color: 'from-emerald-500/20 to-emerald-600/20'
    }
];

export const Certifications = () => {
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

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="relative group h-full"
                        >
                            {/* Hover glow effect */}
                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${cert.color} rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500`} />

                            <div className="relative glass p-8 rounded-2xl h-full flex flex-col border-white/5 group-hover:border-white/10 transition-colors">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="w-14 h-14 rounded-xl bg-charcoal-900 border border-white/5 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300">
                                        <cert.icon className="w-7 h-7 text-emerald-500" />
                                    </div>
                                    <div className="text-xs font-bold text-gray-500 bg-white/5 px-2 py-1 rounded">
                                        {cert.date}
                                    </div>
                                </div>

                                <h4 className="text-xl font-bold mb-2 font-display leading-tight group-hover:text-emerald-400 transition-colors">
                                    {cert.title}
                                </h4>
                                <p className="text-emerald-500/80 text-sm font-medium mb-4">{cert.issuer}</p>

                                <div className="mt-auto pt-6 flex items-center justify-between">
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors font-semibold group/link"
                                    >
                                        View Certificate
                                        <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                    </a>

                                    <div className="w-2 h-2 rounded-full bg-emerald-500/50 group-hover:animate-ping" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
