"use client";

import { motion } from "framer-motion";
import { Settings } from "lucide-react";

export default function CartoonGear() {
    return (
        <div className="relative w-32 h-32 flex items-center justify-center">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="relative w-24 h-24 bg-gray-300 border-4 border-black rounded-full flex items-center justify-center"
            >
                {/* Gear Teeth */}
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-6 h-6 bg-gray-300 border-4 border-black -z-10"
                        style={{
                            transform: `rotate(${i * 45}deg) translateY(-18px)`,
                        }}
                    />
                ))}

                {/* Inner Circle (Face) */}
                <div className="w-12 h-12 bg-white border-4 border-black rounded-full flex items-center justify-center relative z-10">
                    <div className="flex gap-2">
                        <div className="w-2 h-2 bg-black rounded-full" />
                        <div className="w-2 h-2 bg-black rounded-full" />
                    </div>
                    <div className="absolute bottom-3 w-4 h-2 border-b-2 border-black rounded-full" />
                </div>
            </motion.div>
        </div>
    );
}
