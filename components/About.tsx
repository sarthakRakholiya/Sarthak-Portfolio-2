"use client";

import { motion } from "framer-motion";
import { User, Code, Heart, Zap, Brain, MessageSquare } from "lucide-react";
import SectionDivider from "./SectionDivider";
import CartoonBriefcase from "./CartoonBriefcase";

export default function About() {
    return (
        <section id="about" className="py-10 md:py-20 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    {/* Section Header with Prop */}
                    <div className="flex items-center justify-center gap-3 md:gap-4 mb-8 md:mb-16">
                        <CartoonBriefcase />
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-6xl font-black text-center uppercase tracking-tight"
                        >
                            Character <span className="text-primary">Profile</span>
                        </motion.h2>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                        {/* Left Column: Animated Employee Badge */}
                        <motion.div
                            initial={{ rotate: -5, opacity: 0 }}
                            whileInView={{ rotate: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, type: "spring" }}
                            className="w-full md:w-1/3 flex-shrink-0 flex justify-center"
                        >
                            <motion.div
                                animate={{ rotate: [-2, 2, -2] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative w-full max-w-[240px] md:max-w-sm scale-90 md:scale-100 origin-top"
                            >
                                {/* Lanyard String */}
                                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-4 h-24 bg-red-500 border-x-4 border-black z-0" />
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-8 bg-gray-300 border-4 border-black rounded-lg z-10" />

                                {/* Badge Container */}
                                <div className="bg-white text-black border-4 border-black shadow-cartoon-lg rounded-xl overflow-hidden relative z-20">
                                    {/* Header */}
                                    <div className="bg-primary h-24 border-b-4 border-black relative overflow-hidden">
                                        <div className="absolute inset-0 opacity-20"
                                            style={{ backgroundImage: "radial-gradient(#000 2px, transparent 2px)", backgroundSize: "12px 12px" }}
                                        />
                                        <div className="absolute top-2 right-2 flex gap-1">
                                            <div className="w-3 h-3 rounded-full bg-red-500 border border-black" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500 border border-black" />
                                            <div className="w-3 h-3 rounded-full bg-green-500 border border-black" />
                                        </div>
                                    </div>

                                    {/* Avatar */}
                                    <div className="absolute top-8 left-1/2 -translate-x-1/2 w-32 h-32 bg-white border-4 border-black rounded-full overflow-hidden shadow-cartoon flex items-center justify-center">
                                        <User className="w-20 h-20 text-black" />
                                    </div>

                                    {/* Info */}
                                    <div className="pt-20 pb-8 px-6 text-center space-y-4">
                                        <div>
                                            <h3 className="text-2xl font-black uppercase">Sarthak Rakholiya</h3>
                                            <p className="font-bold text-gray-500">Software Development Engineer</p>
                                        </div>

                                        <div className="flex justify-center gap-2">
                                            <span className="bg-black text-white px-3 py-1 font-bold rounded-full text-sm">Lvl. 3.5+</span>
                                            <span className="bg-secondary text-white px-3 py-1 font-bold rounded-full text-sm">Full Stack</span>
                                        </div>

                                        <div className="border-t-4 border-black border-dashed pt-4 mt-4">
                                            <div className="flex justify-between text-sm font-black uppercase text-gray-400">
                                                <span>ID: #DEV-2024</span>
                                                <span>EXP: UNLIMITED</span>
                                            </div>
                                            {/* Barcode */}
                                            <div className="h-8 mt-2 flex items-end justify-center gap-1 opacity-50">
                                                {[...Array(15)].map((_, i) => (
                                                    <div key={i} className={`w-${Math.random() > 0.5 ? '1' : '2'} h-${Math.random() > 0.5 ? 'full' : '2/3'} bg-black`} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right Column: Comic Bio */}
                        <div className="w-full md:w-2/3 space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-white text-black p-4 md:p-6 border-2 md:border-4 border-black shadow-cartoon rounded-xl relative"
                            >
                                <div className="absolute -left-3 top-6 w-6 h-6 bg-white border-l-4 border-b-4 border-black rotate-45" />
                                <h3 className="text-lg md:text-2xl font-black mb-2 md:mb-4 flex items-center gap-2">
                                    <Zap className="w-6 h-6 text-yellow-500 fill-current" />
                                    The Origin Story
                                </h3>
                                <p className="font-medium text-sm md:text-lg leading-relaxed">
                                    I'm a <span className="font-black bg-yellow-200 px-1">Software Development Engineer</span> with over 3.5+ years of experience. My journey involves crafting robust web applications using <span className="font-black text-blue-600">React</span> and <span className="font-black text-black">Next.js</span>. I don't just write code; I build experiences.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="bg-white text-black p-4 md:p-6 border-2 md:border-4 border-black shadow-cartoon rounded-xl relative ml-4 md:ml-8"
                            >
                                <div className="absolute -left-3 top-6 w-6 h-6 bg-white border-l-4 border-b-4 border-black rotate-45" />
                                <h3 className="text-lg md:text-2xl font-black mb-2 md:mb-4 flex items-center gap-2">
                                    <Brain className="w-6 h-6 text-pink-500" />
                                    Technical Arsenal
                                </h3>
                                <p className="font-medium text-sm md:text-lg leading-relaxed">
                                    My inventory is stocked with deep knowledge of <span className="font-black">JavaScript (ES6+)</span> and <span className="font-black">TypeScript</span>. I wield <span className="font-black text-cyan-500">Tailwind CSS</span> and <span className="font-black text-blue-500">MUI</span> to create pixel-perfect interfaces, and manage complex state with Redux like a pro.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                                className="bg-white text-black p-4 md:p-6 border-2 md:border-4 border-black shadow-cartoon rounded-xl relative"
                            >
                                <div className="absolute -left-3 top-6 w-6 h-6 bg-white border-l-4 border-b-4 border-black rotate-45" />
                                <h3 className="text-lg md:text-2xl font-black mb-2 md:mb-4 flex items-center gap-2">
                                    <MessageSquare className="w-6 h-6 text-green-500" />
                                    Special Abilities
                                </h3>
                                <p className="font-medium text-sm md:text-lg leading-relaxed">
                                    Beyond the code, I have a passive buff in <span className="font-black bg-green-200 px-1">Mentorship</span> and <span className="font-black bg-purple-200 px-1">Communication</span>. I've architected 7+ web apps, ensuring they are scalable, testable (thanks, Cypress!), and ready for the real world.
                                </p>
                            </motion.div>
                        </div>
                    </div >
                </motion.div >
            </div >
            <SectionDivider fill="fill-background" />
        </section >
    );
}
