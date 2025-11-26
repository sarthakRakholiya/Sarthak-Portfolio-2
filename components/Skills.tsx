"use client";

import { motion } from "framer-motion";
import SectionDivider from "./SectionDivider";
import { useRef } from "react";
import CartoonGear from "./CartoonGear";

export default function Skills() {
    const containerRef = useRef(null);

    const skillCategories = [
        {
            title: "Technologies",
            skills: ["Javascript", "Typescript", "React Js", "Next Js"],
            color: "bg-yellow-400",
            rotate: [2, -3, 4, -2],
        },
        {
            title: "State Management",
            skills: ["Redux", "Context API", "Zustand"],
            color: "bg-blue-400",
            rotate: [-2, 3, -4],
        },
        {
            title: "Styling",
            skills: ["Tailwind", "MUI", "Bootstrap", "SCSS"],
            color: "bg-pink-400",
            rotate: [3, -2, 4, -3],
        },
        {
            title: "Tools & DevOps",
            skills: ["Git", "Docker", "AWS", "Firebase"],
            color: "bg-green-400",
            rotate: [-3, 2, -4, 3],
        },
    ];

    return (
        <section id="skills" className="py-20 bg-muted relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header with Prop */}
                <div className="flex items-center justify-center gap-4 mb-16">
                    <CartoonGear />
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-center uppercase tracking-tight"
                    >
                        Skill <span className="text-secondary">Set</span>
                    </motion.h2>
                </div>

                <div
                    ref={containerRef}
                    className="relative min-h-[600px] bg-white text-black border-4 border-black shadow-cartoon-lg rounded-xl p-8 overflow-hidden"
                    style={{
                        backgroundImage: "radial-gradient(rgba(0,0,0,0.1) 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                    }}
                >
                    {/* Laptop Lid / Desk Surface Metaphor */}
                    <div className="absolute top-0 left-0 w-full h-8 bg-gray-200 border-b-4 border-black flex items-center px-4 gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500 border border-black" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500 border border-black" />
                        <div className="w-3 h-3 rounded-full bg-green-500 border border-black" />
                    </div>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {skillCategories.map((category, catIndex) => (
                            <div key={catIndex} className="space-y-6">
                                <h3 className="text-xl font-black text-center uppercase border-b-4 border-black inline-block mx-auto px-2">
                                    {category.title}
                                </h3>
                                <div className="flex flex-wrap justify-center gap-4">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.div
                                            key={skillIndex}
                                            drag
                                            dragConstraints={containerRef}
                                            whileDrag={{ scale: 1.2, zIndex: 50, rotate: 0 }}
                                            whileHover={{ scale: 1.1, rotate: 0, cursor: "grab" }}
                                            whileTap={{ cursor: "grabbing" }}
                                            initial={{ rotate: category.rotate[skillIndex % category.rotate.length] }}
                                            className={`${category.color} px-4 py-2 border-4 border-black shadow-cartoon font-black text-black whitespace-nowrap select-none`}
                                        >
                                            {skill}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Decorative Random Stickers */}
                    <motion.div
                        drag dragConstraints={containerRef}
                        className="absolute bottom-10 right-10 w-20 h-20 bg-purple-500 rounded-full border-4 border-black flex items-center justify-center shadow-cartoon rotate-12"
                    >
                        <span className="text-2xl">🚀</span>
                    </motion.div>

                    <motion.div
                        drag dragConstraints={containerRef}
                        className="absolute top-20 left-10 w-16 h-16 bg-orange-400 rotate-45 border-4 border-black flex items-center justify-center shadow-cartoon"
                    >
                        <span className="text-2xl">⚡️</span>
                    </motion.div>

                </div>
            </div>
            <SectionDivider fill="fill-muted" />
        </section>
    );
}
