
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

export const Contact = () => {
    return (
        <section id="contact" className="py-24">
            <div className="section-container">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-emerald-500 uppercase tracking-widest mb-4">
                        Get In Touch
                    </h2>
                    <h3 className="text-4xl font-bold font-display">
                        Let's Build Something <span className="text-gradient">Legendary</span>
                    </h3>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <div>
                            <h4 className="text-2xl font-bold mb-6">Contact Information</h4>
                            <p className="text-gray-400 text-lg mb-8">
                                I'm always open to discussing new projects, creative ideas, or
                                opportunities to be part of your vision.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-xl bg-charcoal-800 flex items-center justify-center group-hover:bg-emerald-500/10 border border-white/5 transition-colors">
                                        <Mail className="w-5 h-5 text-emerald-500" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Email</p>
                                        <a href="mailto:karuppasamy.murugesan02@gmail.com" className="text-white font-medium hover:text-emerald-400 transition-colors">
                                            karuppasamy.murugesan02@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-xl bg-charcoal-800 flex items-center justify-center group-hover:bg-emerald-500/10 border border-white/5 transition-colors">
                                        <Linkedin className="w-5 h-5 text-emerald-500" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">LinkedIn</p>
                                        <a href="#" className="text-white font-medium hover:text-emerald-400 transition-colors">
                                            linkedin.com/in/karuppasamy-m
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-xl bg-charcoal-800 flex items-center justify-center group-hover:bg-emerald-500/10 border border-white/5 transition-colors">
                                        <Github className="w-5 h-5 text-emerald-500" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">GitHub</p>
                                        <a href="https://github.com/Mani-02nev" target="_blank" rel="noreferrer" className="text-white font-medium hover:text-emerald-400 transition-colors">
                                            github.com/Mani-02nev
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="glass p-8 rounded-2xl border-emerald-500/20">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-emerald-400 font-bold uppercase tracking-widest text-xs">Open for Collaboration</span>
                            </div>
                            <p className="text-gray-300">
                                Currently looking for <span className="text-white font-bold">MNC opportunities</span> and high-impact software engineering roles.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-10 rounded-3xl border-white/5"
                    >
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-400">FullName</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-5 py-4 rounded-xl bg-charcoal-900 border border-white/10 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-400">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-5 py-4 rounded-xl bg-charcoal-900 border border-white/10 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-gray-400">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-5 py-4 rounded-xl bg-charcoal-900 border border-white/10 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-400">Your Message</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full px-5 py-4 rounded-xl bg-charcoal-900 border border-white/10 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all resize-none"
                                    placeholder="How can I help you?"
                                />
                            </div>

                            <button type="submit" className="btn-primary w-full py-5 text-lg group">
                                Send Message
                                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
