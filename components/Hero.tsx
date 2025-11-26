"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import CartoonDeveloper from "./CartoonDeveloper";
import SectionDivider from "./SectionDivider";

export default function Hero() {
    return (
        <section className="min-h-screen w-full flex items-center justify-center bg-primary/20 relative">
            {/* Decorative Background Elements */}
            {/* Animated Background Scene */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Sun */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-10 right-10 md:right-20 w-24 h-24 bg-yellow-400 border-4 border-black rounded-full flex items-center justify-center shadow-cartoon-lg z-0"
                >
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-4 h-8 bg-yellow-400 border-2 border-black -z-10"
                            style={{
                                transform: `rotate(${i * 45}deg) translateY(-24px)`,
                            }}
                        />
                    ))}
                </motion.div>

                {/* Cloud 1 */}
                <motion.div
                    animate={{ x: [-100, 100, -100] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-32 left-10 md:left-20"
                >
                    <div className="relative">
                        <div className="w-20 h-20 bg-white rounded-full border-4 border-black absolute top-0 left-0 z-10" />
                        <div className="w-16 h-16 bg-white rounded-full border-4 border-black absolute top-4 -left-8 z-0" />
                        <div className="w-16 h-16 bg-white rounded-full border-4 border-black absolute top-4 left-12 z-0" />
                        {/* Fixed Base: Wider and shifted left to cover all circles */}
                        <div className="w-40 h-10 bg-white border-4 border-black absolute top-10 -left-8 z-10 border-t-0 rounded-full rounded-t-none" />
                    </div>
                </motion.div>

                {/* Cloud 2 (Small) */}
                <motion.div
                    animate={{ x: [50, -50, 50] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-60 right-40 opacity-50 scale-75 hidden md:block"
                >
                    <div className="relative">
                        <div className="w-16 h-16 bg-white rounded-full border-4 border-black absolute top-0 left-0 z-10" />
                        <div className="w-12 h-12 bg-white rounded-full border-4 border-black absolute top-2 -left-6 z-0" />
                        <div className="w-12 h-12 bg-white rounded-full border-4 border-black absolute top-2 left-10 z-0" />
                        {/* Added Base for consistency */}
                        <div className="w-32 h-8 bg-white border-4 border-black absolute top-8 -left-6 z-10 border-t-0 rounded-full rounded-t-none" />
                    </div>
                </motion.div>
            </div>

            <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Left Side: Text */}
                <div className="text-center md:text-left md:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="inline-block mb-6 px-6 py-2 bg-white text-black border-4 border-black shadow-cartoon rotate-[-2deg]"
                    >
                        <span className="text-xl font-bold">👋 Hello, I'm Sarthak!</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight"
                    >
                        CREATIVE
                        <br />
                        <span className="text-secondary drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">DEVELOPER</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl font-bold mb-10 max-w-2xl mx-auto md:mx-0"
                    >
                        Building playful & robust web experiences with React & Next.js.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap justify-center md:justify-start gap-6"
                    >
                        <Link
                            href="#projects"
                            className="px-8 py-4 bg-primary text-black font-black text-lg border-4 border-black shadow-cartoon hover:shadow-cartoon-hover hover:translate-x-[2px] hover:translate-y-[2px] transition-all rounded-xl"
                        >
                            SEE MY WORK
                        </Link>
                        <Link
                            href="#contact"
                            className="px-8 py-4 bg-white text-black font-black text-lg border-4 border-black shadow-cartoon hover:shadow-cartoon-hover hover:translate-x-[2px] hover:translate-y-[2px] transition-all rounded-xl"
                        >
                            CONTACT ME
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="flex justify-center md:justify-start gap-6 mt-12"
                    >
                        {[
                            { Icon: Github, href: "#" },
                            { Icon: Linkedin, href: "#" },
                            { Icon: Mail, href: "mailto:sarthak@example.com" },
                        ].map(({ Icon, href }, index) => (
                            <a
                                key={index}
                                href={href}
                                className="p-3 bg-white text-black border-4 border-black shadow-cartoon hover:shadow-cartoon-hover hover:translate-x-[2px] hover:translate-y-[2px] transition-all rounded-full"
                            >
                                <Icon className="w-6 h-6" />
                            </a>
                        ))}
                    </motion.div>
                </div>

                {/* Right Side: Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: 50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="md:w-1/2 flex justify-center md:justify-end"
                >
                    <CartoonDeveloper />
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <ArrowDown className="w-8 h-8" />
            </div>

            <SectionDivider fill="fill-primary/20" />
        </section>
    );
}
