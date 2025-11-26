"use client";

import { motion } from "framer-motion";

export default function CartoonEnvelope() {
    return (
        <div className="relative w-32 h-32 flex items-center justify-center">
            <motion.div
                animate={{ y: [-10, 10, -10], rotate: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-28 h-20 bg-white border-4 border-black rounded-lg relative overflow-hidden shadow-cartoon flex items-center justify-center"
            >
                {/* Flap Lines */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-0 left-0 w-full h-1/2 border-b-4 border-black transform origin-top scale-y-100" />
                    <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[50px] border-l-transparent border-b-[40px] border-b-black/10 border-r-[50px] border-r-transparent" />
                </div>

                {/* Face */}
                <div className="relative z-10 flex flex-col items-center mt-4">
                    <div className="flex gap-3">
                        <div className="w-2 h-2 bg-black rounded-full" />
                        <div className="w-2 h-2 bg-black rounded-full" />
                    </div>
                    <div className="w-3 h-1 bg-black rounded-full mt-1" />
                </div>
            </motion.div>
        </div>
    );
}
