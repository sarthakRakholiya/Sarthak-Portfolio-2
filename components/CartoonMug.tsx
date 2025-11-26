"use client";

import { motion } from "framer-motion";

export default function CartoonMug() {
    return (
        <div className="relative w-32 h-32">
            <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
            >
                {/* Steam */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex gap-2">
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            animate={{ y: [-5, -15], opacity: [0, 0.6, 0] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                            className="w-2 h-6 bg-gray-400/50 rounded-full blur-sm"
                        />
                    ))}
                </div>

                {/* Mug Body */}
                <div className="w-24 h-28 bg-amber-700 border-4 border-black rounded-b-3xl relative z-10 flex items-center justify-center overflow-hidden">
                    {/* Face */}
                    <div className="flex gap-4 items-center mt-4">
                        <motion.div
                            animate={{ scaleY: [1, 0.1, 1] }}
                            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                            className="w-3 h-3 bg-black rounded-full"
                        />
                        <motion.div
                            animate={{ scaleY: [1, 0.1, 1] }}
                            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                            className="w-3 h-3 bg-black rounded-full"
                        />
                    </div>
                    <div className="absolute bottom-8 w-4 h-2 border-b-2 border-black rounded-full" />
                </div>

                {/* Handle */}
                <div className="absolute top-6 -right-6 w-10 h-16 border-4 border-black rounded-r-2xl border-l-0 z-0" />
            </motion.div>
        </div>
    );
}
