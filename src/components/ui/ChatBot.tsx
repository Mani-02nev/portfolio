import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, MinusCircle, Volume2, VolumeX, StopCircle, TrendingUp, Cpu, Award, RotateCcw } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

interface Message {
    id: string;
    text: string;
    sender: 'bot' | 'user';
    timestamp: Date;
    isVisual?: boolean;
    visualType?: 'performance' | 'skills' | 'certifications';
    initialTimeframe?: 'monthly' | 'weekly' | 'daily';
}

interface PerformanceWidgetProps {
    initialTimeframe?: 'monthly' | 'weekly' | 'daily';
}

// ── ELITE PERFORMANCE WIDGET WITH DYNAMIC SWITCHER (MONTHLY, WEEKLY, DAILY) ──
const PerformanceWidget: React.FC<PerformanceWidgetProps> = ({ initialTimeframe = 'monthly' }) => {
    const [timeframe, setTimeframe] = useState<'monthly' | 'weekly' | 'daily'>(initialTimeframe);

    // Keep state updated if message prop changes
    useEffect(() => {
        setTimeframe(initialTimeframe);
    }, [initialTimeframe]);

    return (
        <div className="w-full rounded-2xl border border-white/10 bg-white/[0.02] p-4 space-y-4 shadow-xl backdrop-blur-md">
            
            {/* Header timeframe switcher */}
            <div className="flex justify-between items-center select-none">
                <span className="font-bold uppercase tracking-wider text-[8px] text-[#C084FC] flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-[#EC4899]" />
                    Activity Engine
                </span>
                
                <div className="flex gap-1 p-0.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                    {(['monthly', 'weekly', 'daily'] as const).map((t) => (
                        <button
                            key={t}
                            onClick={() => setTimeframe(t)}
                            className={`text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md transition-all ${
                                timeframe === t
                                    ? 'bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white shadow-sm'
                                    : 'text-white/40 hover:text-white/70'
                            }`}
                        >
                            {t}
                        </button>
                    ))}
                </div>
            </div>

            {/* Timeframe visual switcher */}
            {timeframe === 'monthly' && (
                <div className="space-y-4 animate-fade-in">
                    {/* SVG Performance Line Graph (Monthly Progress) */}
                    <div className="space-y-2">
                        <div className="flex justify-between items-center text-[10px] text-white/40">
                            <span className="font-medium text-white/60">Last 6 Months Progress</span>
                            <span className="text-[#EC4899] font-bold">Velocity: +142%</span>
                        </div>
                        <div className="h-28 w-full bg-[#070015]/60 rounded-lg relative overflow-hidden flex items-end px-1 border border-white/[0.04]">
                            <svg className="absolute inset-0 w-full h-full p-2 overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <line x1="0" y1="25" x2="100" y2="25" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                                <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                                <line x1="0" y1="75" x2="100" y2="75" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                                
                                <path
                                    d="M 0 95 Q 20 80, 40 55 T 80 25 T 100 5 L 100 100 L 0 100 Z"
                                    fill="url(#area-glow)"
                                    opacity="0.15"
                                />
                                <path
                                    d="M 0 95 Q 20 80, 40 55 T 80 25 T 100 5"
                                    fill="none"
                                    stroke="url(#gradient-line)"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                                <defs>
                                    <linearGradient id="gradient-line" x1="0" y1="1" x2="1" y2="0">
                                        <stop offset="0%" stopColor="#8B5CF6" />
                                        <stop offset="50%" stopColor="#EC4899" />
                                        <stop offset="100%" stopColor="#C084FC" />
                                    </linearGradient>
                                    <linearGradient id="area-glow" x1="0" y1="1" x2="1" y2="0">
                                        <stop offset="0%" stopColor="#8B5CF6" />
                                        <stop offset="100%" stopColor="#EC4899" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div className="absolute bottom-1 inset-x-2 flex justify-between text-[8px] text-white/30 font-semibold select-none">
                                <span>Dec</span>
                                <span>Jan</span>
                                <span>Feb</span>
                                <span>Mar</span>
                                <span>Apr</span>
                                <span>May</span>
                            </div>
                        </div>
                    </div>

                    {/* Triple Metric Grid */}
                    <div className="grid grid-cols-3 gap-2">
                        <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.04] text-center">
                            <span className="block text-[8px] font-bold text-white/40 uppercase tracking-widest">Accuracy</span>
                            <span className="text-xs font-bold text-[#8B5CF6]">94.8%</span>
                        </div>
                        <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.04] text-center">
                            <span className="block text-[8px] font-bold text-white/40 uppercase tracking-widest">Commits</span>
                            <span className="text-xs font-bold text-[#EC4899]">240+</span>
                        </div>
                        <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.04] text-center">
                            <span className="block text-[8px] font-bold text-white/40 uppercase tracking-widest">Deployments</span>
                            <span className="text-xs font-bold text-[#C084FC]">5 SaaS</span>
                        </div>
                    </div>
                </div>
            )}

            {timeframe === 'weekly' && (
                <div className="space-y-4 animate-fade-in">
                    {/* SVG Weekly Curve Activity Chart */}
                    <div className="space-y-2">
                        <div className="flex justify-between items-center text-[10px] text-white/40">
                            <span className="font-medium text-white/60">Weekly Git Activity (Last 4 Wks)</span>
                            <span className="text-[#EC4899] font-bold">Avg: 60 commits/wk</span>
                        </div>
                        
                        <div className="h-28 w-full bg-[#070015]/60 rounded-lg relative overflow-hidden flex items-end px-1 border border-white/[0.04]">
                            <svg className="absolute inset-0 w-full h-full p-2 overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <line x1="0" y1="25" x2="100" y2="25" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                                <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                                <line x1="0" y1="75" x2="100" y2="75" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                                
                                <path
                                    d="M 0 85 Q 25 50, 50 65 T 100 15 L 100 100 L 0 100 Z"
                                    fill="url(#weekly-area)"
                                    opacity="0.12"
                                />
                                <path
                                    d="M 0 85 Q 25 50, 50 65 T 100 15"
                                    fill="none"
                                    stroke="url(#weekly-gradient)"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                                <defs>
                                    <linearGradient id="weekly-gradient" x1="0" y1="1" x2="1" y2="0">
                                        <stop offset="0%" stopColor="#EC4899" />
                                        <stop offset="100%" stopColor="#C084FC" />
                                    </linearGradient>
                                    <linearGradient id="weekly-area" x1="0" y1="1" x2="1" y2="0">
                                        <stop offset="0%" stopColor="#EC4899" />
                                        <stop offset="100%" stopColor="#C084FC" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div className="absolute bottom-1 inset-x-4 flex justify-between text-[7px] text-white/30 font-semibold select-none">
                                <span>Week 1 (52c)</span>
                                <span>Week 2 (64c)</span>
                                <span>Week 3 (58c)</span>
                                <span>Week 4 (66c)</span>
                            </div>
                        </div>
                    </div>

                    {/* Weekly analytics indicators */}
                    <div className="grid grid-cols-2 gap-2 text-[10px] text-left text-white/70">
                        <div className="p-2 rounded-lg bg-white/[0.01] border border-white/[0.04] flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
                            <span>System focus: Deep Learning models</span>
                        </div>
                        <div className="p-2 rounded-lg bg-white/[0.01] border border-white/[0.04] flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#EC4899]" />
                            <span>UI focus: Luxury scroll animations</span>
                        </div>
                    </div>
                </div>
            )}

            {timeframe === 'daily' && (
                <div className="space-y-4 animate-fade-in">
                    {/* SVG Daily Column Charts (Activity Hours) */}
                    <div className="space-y-2">
                        <div className="flex justify-between items-center text-[10px] text-white/40">
                            <span className="font-medium text-white/60">Productive Coding Hours (Daily)</span>
                            <span className="text-[#C084FC] font-bold">Avg: 7.3 hrs/day</span>
                        </div>

                        <div className="h-28 w-full bg-[#070015]/60 rounded-lg relative overflow-hidden flex items-end justify-between px-3 pb-5 border border-white/[0.04] pt-4">
                            <div className="absolute inset-0 flex flex-col justify-between p-2 pointer-events-none opacity-20">
                                <div className="w-full border-b border-white/[0.03]" />
                                <div className="w-full border-b border-white/[0.03]" />
                                <div className="w-full border-b border-white/[0.03]" />
                            </div>

                            {[
                                { day: 'M', hrs: 8.5, active: true },
                                { day: 'T', hrs: 9.2, active: true },
                                { day: 'W', hrs: 7.8, active: true },
                                { day: 'T', hrs: 8.8, active: true },
                                { day: 'F', hrs: 9.5, active: true },
                                { day: 'S', hrs: 4.5, active: false },
                                { day: 'S', hrs: 2.0, active: false }
                            ].map((d, i) => {
                                const heightPct = (d.hrs / 10) * 100;
                                return (
                                    <div key={i} className="flex flex-col items-center gap-1.5 h-full justify-end z-10">
                                        <span className="text-[7px] text-white/50 font-bold">{d.hrs}h</span>
                                        <div className="w-2.5 md:w-3.5 bg-white/[0.04] rounded-t-sm h-14 relative overflow-hidden">
                                            <motion.div
                                                initial={{ height: 0 }}
                                                animate={{ height: `${heightPct}%` }}
                                                transition={{ duration: 0.6, delay: i * 0.05 }}
                                                className="w-full absolute bottom-0 rounded-t-sm"
                                                style={{
                                                    backgroundImage: d.active
                                                        ? 'linear-gradient(to top, #8B5CF6, #EC4899)'
                                                        : 'linear-gradient(to top, rgba(255,255,255,0.06), rgba(255,255,255,0.15))'
                                                }}
                                            />
                                        </div>
                                        <span className="text-[8px] text-white/30 font-semibold">{d.day}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Daily activity caption */}
                    <div className="text-[10px] text-left text-white/50 flex items-center gap-1.5 px-1 leading-relaxed">
                        <Cpu className="w-3.5 h-3.5 text-[#8B5CF6] shrink-0" />
                        <span>Peak efficiency achieved during weekday model optimizations.</span>
                    </div>
                </div>
            )}

            {/* Performance log footer */}
            <div className="text-[10px] text-white/70 space-y-1.5 border-t border-white/[0.06] pt-3 text-left">
                <span className="block font-bold text-white/40 uppercase tracking-wider text-[8px] mb-1">Key Performance Actions</span>
                <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
                    <span>Google Ambassador Program lead & Cloud workshops host.</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EC4899]" />
                    <span>VDart enterprise ML models & FastAPI backend pipelines deployed.</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C084FC]" />
                    <span>Novi Tech predictive models & real-time React dashboard launched.</span>
                </div>
            </div>

        </div>
    );
};

export const ChatBot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: "Hi! I'm the KS Analytics Engine. How can I help you explore Karuppasamy's career metrics today?",
            sender: 'bot',
            timestamp: new Date(),
        },
    ]);
    const [input, setInput] = useState('');
    const [isSoundOn, setIsSoundOn] = useState(false);
    const [speakingMsgId, setSpeakingMsgId] = useState<string | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const stopSpeaking = () => {
        window.speechSynthesis.cancel();
        setSpeakingMsgId(null);
    };

    const speak = (text: string, id: string) => {
        if (!window.speechSynthesis) return;

        if (speakingMsgId === id) {
            stopSpeaking();
            return;
        }

        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1;
        utterance.pitch = 1;
        utterance.volume = 1;

        utterance.onend = () => setSpeakingMsgId(null);
        utterance.onerror = () => setSpeakingMsgId(null);

        const voices = window.speechSynthesis.getVoices();
        const preferredVoice = voices.find(voice => voice.name.includes('Google') || voice.name.includes('Samantha'));
        if (preferredVoice) utterance.voice = preferredVoice;

        setSpeakingMsgId(id);
        window.speechSynthesis.speak(utterance);
    };

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: input,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, userMessage]);
        const currentInput = input;
        setInput('');

        setTimeout(() => {
            const { text, isVisual, visualType, initialTimeframe } = generateResponse(currentInput);
            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: text,
                sender: 'bot',
                timestamp: new Date(),
                isVisual,
                visualType,
                initialTimeframe
            };
            setMessages(prev => [...prev, botMessage]);
            if (isSoundOn) {
                speak(text, botMessage.id);
            }
        }, 800);
    };

    // Support suggested query pill clicks
    const handleSuggestedQuery = (qText: string) => {
        const userMessage: Message = {
            id: Date.now().toString(),
            text: qText,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, userMessage]);

        setTimeout(() => {
            const { text, isVisual, visualType, initialTimeframe } = generateResponse(qText);
            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: text,
                sender: 'bot',
                timestamp: new Date(),
                isVisual,
                visualType,
                initialTimeframe
            };
            setMessages(prev => [...prev, botMessage]);
            if (isSoundOn) {
                speak(text, botMessage.id);
            }
        }, 800);
    };

    const generateResponse = (query: string): { text: string; isVisual?: boolean; visualType?: 'performance' | 'skills' | 'certifications'; initialTimeframe?: 'monthly' | 'weekly' | 'daily' } => {
        const q = query.toLowerCase();

        // 1. GREETINGS & HELLO
        if (q.startsWith('hi') || q.startsWith('hello') || q.startsWith('hey') || q.includes('greetings') || q.includes('wassup') || q.includes('yo')) {
            return {
                text: "Hello! Welcome to the KS Analytics Engine. I'm ready to generate performance metrics, check technology stack configurations, or outline academic qualifications. How shall we begin?",
                isVisual: false
            };
        }

        // 2. SPECIFIC TIME-FRAME PERFORMANCE DEVIATIONS (Fixes the tabs pre-selection requested)
        if (q.includes('daily') || q.includes('day') || q.includes('today') || q.includes('hour')) {
            return {
                text: "Here is your requested Daily Performance Report for Karuppasamy M. It details his productive coding hours across the week, highlighting weekday optimization peaks and daily efficiency scales.",
                isVisual: true,
                visualType: 'performance',
                initialTimeframe: 'daily'
            };
        }

        if (q.includes('weekly') || q.includes('week')) {
            return {
                text: "Here is your requested Weekly Performance Report for Karuppasamy M. It outlines his Git commit volume and engineering progress over the last 4 weeks.",
                isVisual: true,
                visualType: 'performance',
                initialTimeframe: 'weekly'
            };
        }

        // General Performance Reports (Default Monthly)
        if (q.includes('performance') || q.includes('last 6') || q.includes('mounth') || q.includes('month') || q.includes('analytics') || q.includes('chart') || q.includes('report') || q.includes('velocity') || q.includes('rate')) {
            return {
                text: "Here is the performance report for Karuppasamy M over the last 6 months. He has demonstrated exponential growth (+142% learning velocity) across his software internships and Google Ambassador leadership role.",
                isVisual: true,
                visualType: 'performance',
                initialTimeframe: 'monthly'
            };
        }

        // 3. CORE SKILLS MATRIX
        if (q.includes('skill') || q.includes('tech') || q.includes('know') || q.includes('language') || q.includes('stack') || q.includes('matrix')) {
            return {
                text: `Karuppasamy has acquired deep expertise across several technology tracks:

• AI & Machine Learning (95%)
  Python, TensorFlow, NLP, Computer Vision, FastAPI systems.

• Full-Stack Development (90%)
  React.js, Next.js, Django, TypeScript, Tailwind CSS.

• Data Engineering & SQL (85%)
  Data Analytics, Tableau, Statistics, Excel, PostgreSQL.

• Cloud & DevOps (80%)
  Linux, Git, GitHub Actions, CI/CD, Containerized Services.

Inspect his domain proficiency matrix below!`,
                isVisual: true,
                visualType: 'skills'
            };
        }

        // 4. VERIFIED CERTIFICATIONS & CREDENTIALS
        if (q.includes('certif') || q.includes('award') || q.includes('course') || q.includes('paper') || q.includes('honor') || q.includes('credential')) {
            return {
                text: "Karuppasamy holds a portfolio of elite engineering certifications from Google, HCL, and GUVI. Inspect some of his verified credentials below.",
                isVisual: true,
                visualType: 'certifications'
            };
        }

        // 5. EDUCATION & ACADEMIC QUALIFICATIONS
        if (q.includes('academic') || q.includes('educat') || q.includes('study') || q.includes('qualif') || q.includes('degree') || q.includes('diploma') || q.includes('sit') || q.includes('college') || q.includes('school') || q.includes('graduat')) {
            return {
                text: `Karuppasamy has built a robust academic foundation in computer systems:

• Diploma in Computer Engineering
  Seshasayee Institute of Technology, Tiruchirappalli (2025 - 2027)

• Core Specializations:
  Algorithms, systems design, software engineering fundamentals, database management systems, and AI workflows.

• Academic Accomplishments:
  Specialization in AI & Systems, active participant in technical hackathons, and lead developer in advanced computing labs.`,
                isVisual: false
            };
        }

        // 6. PRODUCTION PROJECTS
        if (q.includes('project') || q.includes('work') || q.includes('code') || q.includes('build')) {
            return {
                text: `Karuppasamy has completed over 10+ production-grade systems, including:

1. KS AI Resume Builder
   ATS-optimized AI SaaS resume builder engine.

2. Agent K
   Autonomous browser AI web agent dashboard.

3. AC Duct ERP
   Fabrication operational systems in Dubai.

4. UNIVAULT
   Database-less e-commerce system.

You can explore these in the Projects section of the portfolio!`,
                isVisual: false
            };
        }

        // 7. VALUE PROPOSITION / WHY HIRE
        if (q.includes('why hire') || q.includes('why karuppasamy') || q.includes('value') || q.includes('hire you') || q.includes('advantage')) {
            return {
                text: "Karuppasamy brings rare technical versatility: combining solid systems foundations (Diploma in Computer Engineering) with practical AI/ML model deployment (VDart, Novi Tech) and community representation (Google Campus Ambassador). He works with high accuracy, fast turnaround, and values premium UX/UI styling.",
                isVisual: false
            };
        }

        // 8. PRACTICAL EXPERIENCE NODES
        if (q.includes('experience') || q.includes('internship') || q.includes('job') || q.includes('employ') || q.includes('milestone')) {
            return {
                text: `He has acquired highly practical systems experience:

• Google Campus Ambassador
  Developer Relations & Ecosystem leadership.

• AI & ML Engineering Intern
  VDart Inc. & Novi Tech Company.

• Data Analytics Intern
  Novi Tech Company.

His work includes training predictive neural network models, building real-time react dashboards, and deploying FastAPI pipelines.`,
                isVisual: false
            };
        }

        // 9. RESUME / CV DOWNLOAD
        if (q.includes('resume') || q.includes('cv') || q.includes('download') || q.includes('pdf')) {
            return {
                text: `You can view and inspect all detailed credentials, work experience, and educational logs directly in this interactive, scroll-driven portfolio.

If you require a formal PDF copy of his resume for your corporate database, please reach out to him directly at his primary inbox: ${portfolioData.personal.email}.`,
                isVisual: false
            };
        }

        // 10. AI / MACHINE LEARNING DISCIPLINE (Regex bound to prevent matching 'daily')
        const hasAi = /\bai\b/.test(q) || q.includes('ai/') || q.includes('ai-') || q.includes('artificial');
        const hasMl = /\bml\b/.test(q) || q.includes('ml/') || q.includes('ml-') || q.includes('machine learning') || q.includes('deep learning');
        if (hasAi || hasMl || q.includes('nlp') || q.includes('vision') || q.includes('model') || q.includes('tensor') || q.includes('python')) {
            return {
                text: `Karuppasamy has worked on industry-grade artificial intelligence workflows:

• Deployed machine learning pipelines using Python and TensorFlow.
• Built predictive analysis models during internships at VDart Inc. and Novi Tech.
• Designed NLP and computer vision agents for enterprise systems automation.
• Handled large-scale data preprocessing, feature engineering, and model fine-tuning.`,
                isVisual: false
            };
        }

        // 11. FRONTEND / REACT / WEB DEV
        if (q.includes('react') || q.includes('next') || q.includes('frontend') || q.includes('web') || q.includes('tailwind') || q.includes('ui') || q.includes('ux') || q.includes('css') || q.includes('typescript')) {
            return {
                text: `As a frontend specialist, he engineers responsive, high-performance user interfaces:

• Mastered React.js, Next.js, and TypeScript structured component design.
• Specialized in luxury styling systems using Tailwind CSS, vanilla gradients, and glassmorphism.
• Implemented advanced layout transitions with framer-motion and scroll-driven controls.
• Deployed real-time data storytelling frameworks and dashboard widgets.`,
                isVisual: false
            };
        }

        // 12. GOOGLE CAMPUS AMBASSADOR
        if (q.includes('ambassador') || q.includes('google') || q.includes('devrel') || q.includes('community') || q.includes('leader') || q.includes('relations')) {
            return {
                text: `Karuppasamy serves as the prestigious Google Campus Ambassador for 2026:

• Acts as the official advocate for the Google Developer ecosystem at the institutional level.
• Hosts technical study jams, Android development workshops, and Cloud fundamentals sessions.
• Connects student developer communities with Google resources, developer programs, and career tools.`,
                isVisual: false
            };
        }

        // 13. LOCATION & AVAILABILITY
        if (q.includes('location') || q.includes('trichy') || q.includes('india') || q.includes('remote') || q.includes('relocat') || q.includes('avail') || q.includes('co-op')) {
            return {
                text: `Karuppasamy is located in Trichy, India, and is highly versatile:

• Fully equipped for remote development with overseas teams (experienced remote worker).
• Open to systems engineering, frontend React/Next.js, or AI/ML co-op and internship roles.
• Highly receptive to relocation, co-located programs, and global opportunities.`,
                isVisual: false
            };
        }

        // 14. CONTACT & GET IN TOUCH
        if (q.includes('contact') || q.includes('email') || q.includes('reach') || q.includes('hire') || q.includes('social') || q.includes('connect')) {
            return {
                text: `You can reach Karuppasamy directly at ${portfolioData.personal.email}. You can also connect via LinkedIn: ${portfolioData.personal.linkedin} or inspect his active repositories on GitHub: ${portfolioData.personal.github}.`,
                isVisual: false
            };
        }

        // 15. BIOGRAPHY / ABOUT / BOSS
        if (q.includes('who') || q.includes('about') || q.includes('name') || q.includes('karuppasamy') || q.includes('boss') || q.includes('goal') || q.includes('future') || q.includes('vision')) {
            return {
                text: `I'm the KS Analytics Engine, an AI assistant for ${portfolioData.personal.name}. ${portfolioData.personal.bio}`,
                isVisual: false
            };
        }

        return {
            text: "I am the KS Analytics Engine. I can show Karuppasamy's metrics, skills matrix, project lists, or academic qualifications. Try typing 'performance', 'skills matrix', or 'academic credentials'!",
            isVisual: false
        };
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="glass mb-4 w-[340px] md:w-[410px] h-[550px] flex flex-col rounded-3xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.8)] border border-white/10"
                    >
                        {/* Header with deep-purple/pink brand gradient */}
                        <div className="p-4 bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#C084FC] flex justify-between items-center shadow-lg select-none">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center border border-white/15">
                                    <Bot className="w-5 h-5 text-white animate-pulse" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-white font-bold text-sm font-display tracking-tight">KS Analytics Engine</h4>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                        <span className="text-white/80 text-[9px] uppercase font-bold tracking-widest">Analytics Mode</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-0.5">
                                <button
                                    onClick={() => {
                                        stopSpeaking();
                                        setMessages([
                                            {
                                                id: '1',
                                                text: "Hi! I'm the KS Analytics Engine. How can I help you explore Karuppasamy's career metrics today?",
                                                sender: 'bot',
                                                timestamp: new Date(),
                                            }
                                        ]);
                                    }}
                                    className="p-2 text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/10"
                                    title="Reset Engine"
                                >
                                    <RotateCcw className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => {
                                        if (isSoundOn) stopSpeaking();
                                        setIsSoundOn(!isSoundOn);
                                    }}
                                    className="p-2 text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/10"
                                    title={isSoundOn ? "Mute Voice" : "Unmute Voice"}
                                >
                                    {isSoundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                                </button>
                                <button
                                    onClick={() => {
                                        stopSpeaking();
                                        setIsOpen(false);
                                    }}
                                    className="p-2 text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/10"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Messages Panel */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0d0720]/95 scrollbar-none flex flex-col justify-between">
                            <div className="space-y-4">
                                {messages.map((msg) => (
                                    <div
                                        key={msg.id}
                                        className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                                    >
                                        <div className={`flex gap-2.5 max-w-[85%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                                            <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                                                msg.sender === 'user' ? 'bg-white/[0.04] border border-white/[0.08]' : 'bg-[#8B5CF6]/20 border border-[#8B5CF6]/30'
                                            }`}>
                                                {msg.sender === 'user' ? <User className="w-4 h-4 text-[#C084FC]" /> : <Bot className="w-4 h-4 text-[#8B5CF6]" />}
                                            </div>
                                            
                                            <div className="space-y-1.5 max-w-full">
                                                <div className={`p-3.5 rounded-2xl text-xs md:text-sm group relative ${
                                                    msg.sender === 'user'
                                                        ? 'bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] text-white rounded-tr-none shadow-[0_4px_16px_rgba(139,92,246,0.15)] text-left'
                                                        : 'bg-white/[0.02] text-gray-200 border border-white/[0.05] rounded-tl-none text-left'
                                                    }`}
                                                >
                                                    <p className="leading-relaxed whitespace-pre-line">{msg.text}</p>
                                                    
                                                    {msg.sender === 'bot' && (
                                                        <button
                                                            onClick={() => speak(msg.text, msg.id)}
                                                            className={`absolute -right-8 top-1/2 -translate-y-1/2 transition-opacity p-1.5 hover:bg-white/10 rounded-full text-gray-400 hover:text-white ${
                                                                speakingMsgId === msg.id ? 'opacity-100 text-[#EC4899]' : 'opacity-0 group-hover:opacity-100'
                                                            }`}
                                                            title={speakingMsgId === msg.id ? "Stop" : "Read aloud"}
                                                        >
                                                            {speakingMsgId === msg.id ? <StopCircle className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                                                        </button>
                                                    )}
                                                </div>

                                                {/* RENDER DYNAMIC VISUAL DATA PANEL */}
                                                {msg.isVisual && msg.visualType === 'performance' && (
                                                    <PerformanceWidget initialTimeframe={msg.initialTimeframe} />
                                                )}

                                                {msg.isVisual && msg.visualType === 'skills' && (
                                                    <div className="w-full rounded-2xl border border-white/10 bg-white/[0.02] p-4 space-y-3.5 shadow-xl backdrop-blur-md">
                                                        <span className="block text-[8px] font-bold text-white/40 uppercase tracking-widest text-left">Domain Proficiency Matrix</span>
                                                        <div className="space-y-3">
                                                            {[
                                                                { name: 'AI & Machine Learning', val: 95, color: '#8B5CF6' },
                                                                { name: 'Full-Stack React/Next.js', val: 90, color: '#EC4899' },
                                                                { name: 'Data Engineering & SQL', val: 85, color: '#C084FC' },
                                                                { name: 'Cloud & DevOps', val: 80, color: '#3B82F6' }
                                                            ].map((skill, i) => (
                                                                <div key={i} className="space-y-1.5">
                                                                    <div className="flex justify-between text-[9px] font-semibold text-white/70">
                                                                        <span>{skill.name}</span>
                                                                        <span style={{ color: skill.color }}>{skill.val}%</span>
                                                                    </div>
                                                                    <div className="h-1.5 w-full bg-white/[0.04] rounded-full overflow-hidden">
                                                                        <motion.div 
                                                                            initial={{ width: 0 }}
                                                                            animate={{ width: `${skill.val}%` }}
                                                                            transition={{ duration: 0.8, delay: i * 0.1 }}
                                                                            className="h-full rounded-full"
                                                                            style={{ backgroundColor: skill.color }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {msg.isVisual && msg.visualType === 'certifications' && (
                                                    <div className="w-full rounded-2xl border border-white/10 bg-white/[0.02] p-4 space-y-3 shadow-xl backdrop-blur-md">
                                                        <span className="block text-[8px] font-bold text-white/40 uppercase tracking-widest text-left">Verified Technical Credentials</span>
                                                        <div className="grid gap-2 text-left">
                                                            {[
                                                                { title: 'Google Core Python', issuer: 'Google (2025)' },
                                                                { title: 'AI Agents Intensive Course', issuer: 'Google Cloud (2025)' },
                                                                { title: 'MAANG Career Track', issuer: 'Career Excellence (2025)' },
                                                                { title: 'Artificial Intelligence ROAD MAP', issuer: 'GUVI / HCL (2025)' }
                                                            ].map((cert, i) => (
                                                                <div key={i} className="flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.01] border border-white/[0.03]">
                                                                    <Award className="w-4 h-4 text-[#C084FC] shrink-0" />
                                                                    <div className="min-w-0">
                                                                        <h5 className="text-[11px] font-bold text-white truncate">{cert.title}</h5>
                                                                        <p className="text-[9px] text-white/50">{cert.issuer}</p>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* ── QUICK SUGGESTED QUERY PILLS (Only shown on initial open/greeting stop) ── */}
                            {messages.length === 1 && (
                                <div className="py-2 text-left space-y-2 mt-4 select-none shrink-0">
                                    <span className="block text-[8px] font-bold text-white/40 uppercase tracking-widest">Suggested Queries</span>
                                    <div className="flex flex-wrap gap-2">
                                        {[
                                            { label: '📈 Show Performance', q: 'Show last 6 months performance' },
                                            { label: '🛠️ Skill Matrix', q: 'What is your technology stack?' },
                                            { label: '🏆 Certifications', q: 'Show verified certifications' },
                                            { label: '✉️ Get in Touch', q: 'How to contact Karuppasamy?' }
                                        ].map((sug, i) => (
                                            <button
                                                key={i}
                                                onClick={() => handleSuggestedQuery(sug.q)}
                                                className="text-[10px] font-semibold px-3 py-1.5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-[#8B5CF6]/15 hover:border-[#8B5CF6]/35 text-white/70 hover:text-white transition duration-200 shadow-sm"
                                            >
                                                {sug.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input Panel */}
                        <div className="p-4 bg-[#0d0720] border-t border-white/5">
                            <form
                                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                                className="flex gap-2"
                            >
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask about performance, skills, etc..."
                                    className="flex-1 bg-white/[0.02] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#8B5CF6] transition-colors"
                                />
                                <button
                                    type="submit"
                                    className="p-2.5 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white rounded-xl hover:opacity-90 transition-all flex items-center justify-center shrink-0 shadow-md"
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
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${
                    isOpen 
                        ? 'bg-[#0d0720] text-[#8B5CF6] border border-white/10' 
                        : 'bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#C084FC] text-white shadow-[0_8px_30px_rgba(139,92,246,0.3)]'
                }`}
            >
                {isOpen ? <MinusCircle className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
            </motion.button>
        </div>
    );
};
