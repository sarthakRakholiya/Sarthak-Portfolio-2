"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Code, Rocket, Hand } from "lucide-react";

export default function CartoonDeveloper() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Calculate normalized position (-1 to 1) relative to window center
            const x = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
            const y = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
            setMousePosition({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Eye movement limit
    const eyeLimit = 6;

    return (
        <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* Speech Bubble */}
            <motion.div
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1, type: "spring" }}
                className="absolute -top-16 -right-10 bg-white text-black border-4 border-black px-6 py-3 rounded-2xl rounded-bl-none shadow-cartoon z-40"
            >
                <p className="font-black text-lg flex items-center gap-2">
                    Hi! I'm Sarthak!
                    <motion.div
                        animate={{ rotate: [0, 20, -10, 20, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                    >
                        <Hand className="w-5 h-5 text-yellow-500 fill-current" />
                    </motion.div>
                </p>
            </motion.div>

            {/* Floating Container */}
            <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full flex items-center justify-center"
            >
                {/* Laptop Base */}
                <div className="absolute top-[185px] w-[250px] h-4 bg-gray-800 border-4 border-black rounded-b-lg z-20 shadow-cartoon" />

                {/* Laptop Screen (The Face) */}
                <div className="absolute bottom-20 w-56 h-40 bg-white border-4 border-black rounded-t-lg z-10 flex flex-col overflow-hidden relative">
                    {/* Screen Header */}
                    <div className="h-6 bg-gray-200 border-b-4 border-black flex items-center px-2 gap-1 absolute top-0 w-full z-20">
                        <div className="w-2 h-2 rounded-full bg-red-500 border border-black" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500 border border-black" />
                        <div className="w-2 h-2 rounded-full bg-green-500 border border-black" />
                    </div>

                    {/* Face Container */}
                    <div className="flex-1 bg-blue-400 relative flex items-center justify-center gap-6 pt-4">
                        {/* Left Eye */}
                        <div className="w-10 h-10 bg-white border-4 border-black rounded-full flex items-center justify-center overflow-hidden relative">
                            <motion.div
                                className="w-4 h-4 bg-black rounded-full"
                                animate={{
                                    x: mousePosition.x * eyeLimit,
                                    y: mousePosition.y * eyeLimit
                                }}
                                transition={{ type: "spring", stiffness: 150, damping: 15 }}
                            />
                            {/* Blink Animation Overlay */}
                            <motion.div
                                className="absolute inset-0 bg-blue-400 z-10"
                                animate={{ height: ["0%", "0%", "100%", "0%"] }}
                                transition={{ duration: 4, repeat: Infinity, times: [0, 0.9, 0.95, 1] }}
                            />
                        </div>

                        {/* Right Eye */}
                        <div className="w-10 h-10 bg-white border-4 border-black rounded-full flex items-center justify-center overflow-hidden relative">
                            <motion.div
                                className="w-4 h-4 bg-black rounded-full"
                                animate={{
                                    x: mousePosition.x * eyeLimit,
                                    y: mousePosition.y * eyeLimit
                                }}
                                transition={{ type: "spring", stiffness: 150, damping: 15 }}
                            />
                            {/* Blink Animation Overlay */}
                            <motion.div
                                className="absolute inset-0 bg-blue-400 z-10"
                                animate={{ height: ["0%", "0%", "100%", "0%"] }}
                                transition={{ duration: 4, repeat: Infinity, times: [0, 0.9, 0.95, 1] }}
                            />
                        </div>

                        {/* Mouth */}
                        <div className="absolute bottom-8 w-8 h-4 border-b-4 border-black rounded-full" />

                        {/* Cheeks */}
                        <div className="absolute bottom-10 left-10 w-3 h-2 bg-pink-300 rounded-full opacity-60" />
                        <div className="absolute bottom-10 right-10 w-3 h-2 bg-pink-300 rounded-full opacity-60" />
                    </div>
                </div>

                {/* Coffee Cup */}
                <motion.div
                    className="absolute bottom-20 -right-4 z-30"
                    animate={{ rotate: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="w-12 h-14 bg-yellow-400 border-4 border-black rounded-b-xl relative shadow-cartoon-sm">
                        <div className="absolute top-2 -right-3 w-4 h-6 border-4 border-black rounded-r-full" />
                        {/* Steam */}
                        <motion.div
                            animate={{ y: [-5, -15], opacity: [0, 1, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="absolute -top-4 left-2 w-2 h-4 bg-gray-400/50 rounded-full blur-sm"
                        />
                        <motion.div
                            animate={{ y: [-5, -15], opacity: [0, 1, 0] }}
                            transition={{ duration: 1.5, delay: 0.5, repeat: Infinity }}
                            className="absolute -top-6 left-6 w-2 h-4 bg-gray-400/50 rounded-full blur-sm"
                        />
                    </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                    animate={{ y: [-5, 5, -5], rotate: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-10 -left-4 w-12 h-12 bg-accent border-4 border-black rounded-full flex items-center justify-center shadow-cartoon"
                >
                    <motion.div
                        animate={{ rotate: [0, -10, 10, -5, 5, 0], scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                        <Code className="w-6 h-6 text-white" />
                    </motion.div>
                </motion.div>

                <motion.div
                    animate={{ y: [5, -5, 5], rotate: [0, -10, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className="absolute -top-4 right-10 w-10 h-10 bg-primary border-4 border-black rounded-lg flex items-center justify-center shadow-cartoon rotate-12"
                >
                    <motion.div
                        animate={{ x: [-1, 1, -1], y: [-1, 1, -1] }}
                        transition={{ duration: 0.2, repeat: Infinity, repeatType: "mirror" }}
                    >
                        <Rocket className="w-5 h-5 text-black fill-current" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
}
