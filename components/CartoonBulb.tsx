"use client";

import { motion } from "framer-motion";

export default function CartoonBulb() {
    return (
        <div className="relative w-32 h-32 flex items-center justify-center">
            <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
            >
                {/* Glow */}
                <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-yellow-400 rounded-full blur-xl -z-10"
                />

                {/* Bulb Body */}
                <div className="w-20 h-20 bg-yellow-300 border-4 border-black rounded-full flex flex-col items-center justify-center relative z-10">
                    {/* Face */}
                    <div className="flex gap-3">
                        <div className="w-3 h-3 bg-black rounded-full" />
                        <div className="w-3 h-3 bg-black rounded-full" />
                    </div>
                    <div className="w-4 h-4 border-b-4 border-black rounded-full mt-[-6px]" />
                </div>

                {/* Base */}
                <div className="w-10 h-8 bg-gray-400 border-4 border-black mx-auto -mt-2 rounded-b-lg flex flex-col gap-1 p-1">
                    <div className="w-full h-1 bg-black/20" />
                    <div className="w-full h-1 bg-black/20" />
                </div>
            </motion.div>
        </div>
    );
}
