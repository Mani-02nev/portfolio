
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, MinusCircle } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

interface Message {
    id: string;
    text: string;
    sender: 'bot' | 'user';
    timestamp: Date;
}

export const ChatBot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: `Hi! I'm Karuppasamy's virtual assistant. Ask me anything about his experience, skills, or how to contact him!`,
            sender: 'bot',
            timestamp: new Date(),
        },
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: input,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, userMessage]);
        setInput('');

        // Simulate bot response
        setTimeout(() => {
            const botResponse = generateResponse(input);
            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: botResponse,
                sender: 'bot',
                timestamp: new Date(),
            };
            setMessages(prev => [...prev, botMessage]);
        }, 1000);
    };

    const generateResponse = (query: string): string => {
        const q = query.toLowerCase();

        if (q.includes('skill') || q.includes('tech') || q.includes('know')) {
            const allSkills = portfolioData.skills.map(s => s.items.join(', ')).join(', ');
            return `Karuppasamy is proficient in: ${allSkills}. His expertise spans across ${portfolioData.skills.map(s => s.category).join(', ')}.`;
        }

        if (q.includes('experience') || q.includes('work') || q.includes('job') || q.includes('internship')) {
            const exp = portfolioData.experience[0];
            return `He is currently an ${exp.role} at ${exp.company} (${exp.period}). He has worked on ${exp.description} and achieved things like: ${exp.achievements.slice(0, 2).join(' and ')}.`;
        }

        if (q.includes('contact') || q.includes('email') || q.includes('reach') || q.includes('hire')) {
            return `You can reach Karuppasamy at ${portfolioData.personal.email}. You can also find him on LinkedIn: ${portfolioData.personal.linkedin} or GitHub: ${portfolioData.personal.github}.`;
        }

        if (q.includes('project')) {
            return `Karuppasamy has completed over 10+ projects. One of his notable works was architecting a real-time data visualization dashboard using React!`;
        }

        if (q.includes('who') || q.includes('about') || q.includes('name')) {
            return `I'm an assistant for ${portfolioData.personal.name}. ${portfolioData.personal.bio}`;
        }

        return "I'm not sure I understand. You can ask about his skills, experience, projects, or contact information!";
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="glass mb-4 w-80 md:w-96 h-[500px] flex flex-col rounded-2xl overflow-hidden shadow-2xl border-white/10"
                    >
                        {/* Header */}
                        <div className="p-4 bg-emerald-500 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                    <Bot className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm">Portfolio Assistant</h4>
                                    <div className="flex items-center gap-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-200 animate-pulse" />
                                        <span className="text-emerald-100 text-[10px] uppercase font-bold tracking-wider">Online</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white/80 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-charcoal-900/50">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`flex gap-2 max-w-[80%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                                        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${msg.sender === 'user' ? 'bg-charcoal-800' : 'bg-emerald-500/20'
                                            }`}>
                                            {msg.sender === 'user' ? <User className="w-4 h-4 text-emerald-500" /> : <Bot className="w-4 h-4 text-emerald-500" />}
                                        </div>
                                        <div className={`p-3 rounded-2xl text-sm ${msg.sender === 'user'
                                                ? 'bg-emerald-500 text-white rounded-tr-none'
                                                : 'bg-charcoal-800 text-gray-200 border border-white/5 rounded-tl-none'
                                            }`}>
                                            {msg.text}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-4 bg-charcoal-800 border-t border-white/5">
                            <form
                                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                                className="flex gap-2"
                            >
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask something..."
                                    className="flex-1 bg-charcoal-900 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                                />
                                <button
                                    type="submit"
                                    className="p-2 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-colors"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${isOpen ? 'bg-charcoal-800 text-emerald-500' : 'bg-emerald-500 text-white'
                    }`}
            >
                {isOpen ? <MinusCircle className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
            </motion.button>
        </div>
    );
};
