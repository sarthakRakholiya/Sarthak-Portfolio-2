"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Gamepad2, Heart } from "lucide-react";
import SectionDivider from "./SectionDivider";
import CartoonEnvelope from "./CartoonEnvelope";

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >
                    {/* Header with Prop */}
                    <div className="flex flex-col items-center mb-8">
                        <CartoonEnvelope />
                        <div className="inline-block bg-accent px-6 py-2 border-4 border-black shadow-cartoon mt-4 rotate-1">
                            <h2 className="text-2xl md:text-4xl font-black text-white flex items-center gap-3">
                                <Gamepad2 className="w-6 h-6 md:w-8 md:h-8" />
                                GAME OVER?
                            </h2>
                        </div>
                    </div>

                    <h3 className="text-xl md:text-4xl font-black mb-6 md:mb-8 uppercase tracking-widest">
                        Ready to Start a <span className="text-primary">New Game</span>?
                    </h3>

                    <p className="text-lg md:text-xl font-bold mb-8 md:mb-12 max-w-2xl mx-auto">
                        Insert coin (or just send an email) to continue. I'm currently looking for new co-op missions!
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        {[
                            { Icon: Mail, title: "EMAIL", text: "Send Message", href: "mailto:sarthak@example.com", color: "bg-red-500" },
                            { Icon: Linkedin, title: "LINKEDIN", text: "Connect", href: "#", color: "bg-blue-500" },
                            { Icon: Github, title: "GITHUB", text: "View Code", href: "#", color: "bg-gray-800" },
                        ].map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.href}
                                whileHover={{ scale: 1.05, y: 5 }}
                                whileTap={{ scale: 0.95, y: 10 }}
                                className="group relative"
                            >
                                {/* Button Shadow (Depth) */}
                                <div className={`absolute inset-0 translate-y-2 rounded-xl border-4 border-black bg-black`} />

                                {/* Button Top */}
                                <div className={`relative h-full p-4 md:p-6 ${item.color} border-4 border-black rounded-xl flex flex-col items-center justify-center gap-3 md:gap-4 transition-transform`}>
                                    <item.Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                                    <div className="text-center">
                                        <h3 className="text-lg md:text-xl font-black text-white uppercase tracking-wider">{item.title}</h3>
                                        <p className="font-bold text-white/80 text-xs md:text-sm uppercase">{item.text}</p>
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    <footer className="pt-12 border-t-4 border-black border-dashed relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-4">
                            <Heart className="w-8 h-8 text-red-500 fill-current animate-pulse" />
                        </div>
                        <p className="font-bold text-lg flex items-center justify-center gap-2">
                            <span>© {new Date().getFullYear()} PLAYER 1 (Sarthak Rakholiya).</span>
                            <span className="hidden md:inline">Made with <span className="text-red-500">♥</span> and <span className="text-yellow-500">☕</span>.</span>
                        </p>
                    </footer>
                </motion.div>
            </div>
            <SectionDivider position="top" fill="fill-background" />
        </section>
    );
}
