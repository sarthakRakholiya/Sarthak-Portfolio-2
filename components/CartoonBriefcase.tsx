"use client";

import { motion } from "framer-motion";

export default function CartoonBriefcase() {
    return (
        <div className="relative w-32 h-32 flex items-center justify-center">
            <motion.div
                animate={{ y: [-5, 5, -5], rotate: [-2, 2, -2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
            >
                {/* Handle */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-8 border-4 border-black rounded-t-lg z-0" />

                {/* Body */}
                <div className="w-28 h-20 bg-amber-800 border-4 border-black rounded-lg relative z-10 flex flex-col items-center justify-center shadow-cartoon">
                    {/* Flap */}
                    <div className="absolute top-0 w-full h-8 bg-amber-900 border-b-4 border-black rounded-t-sm" />

                    {/* Lock */}
                    <div className="absolute top-6 w-6 h-6 bg-yellow-400 border-4 border-black rounded-full z-20" />

                    {/* Face (on the bag) */}
                    <div className="flex gap-4 mt-6">
                        <div className="w-2 h-2 bg-black rounded-full" />
                        <div className="w-2 h-2 bg-black rounded-full" />
                    </div>
                    <div className="w-4 h-1 bg-black rounded-full mt-1" />
                </div>
            </motion.div>
        </div>
    );
}
