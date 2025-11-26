"use client";

import { motion } from "framer-motion";

export default function CartoonCalendar() {
    return (
        <div className="relative w-32 h-32">
            <motion.div
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-24 h-28 bg-white border-4 border-black rounded-lg overflow-hidden relative shadow-cartoon"
            >
                {/* Header */}
                <div className="h-8 bg-red-500 border-b-4 border-black flex items-center justify-center">
                    <div className="w-2 h-2 bg-black rounded-full mx-1" />
                    <div className="w-2 h-2 bg-black rounded-full mx-1" />
                </div>

                {/* Body */}
                <div className="p-2 flex flex-col items-center justify-center h-full pb-8">
                    <span className="text-4xl font-black">24</span>

                    {/* Face */}
                    <div className="flex gap-3 mt-2">
                        <div className="w-2 h-2 bg-black rounded-full" />
                        <div className="w-2 h-2 bg-black rounded-full" />
                    </div>
                    <div className="w-4 h-2 border-b-2 border-black rounded-full" />
                </div>
            </motion.div>
        </div>
    );
}
