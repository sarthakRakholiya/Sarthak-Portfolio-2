"use client";

import { motion } from "framer-motion";
import { Star, Trophy, MapPin } from "lucide-react";
import SectionDivider from "./SectionDivider";
import CartoonCalendar from "./CartoonCalendar";

export default function Experience() {
    const experiences = [
        {
            level: 2,
            title: "Software Development Engineer",
            company: "Zignuts Technolab",
            period: "Jul, 2023 - Present",
            description: "Leading the party in developing responsive web apps. Integrated REST APIs and boosted SEO stats.",
            status: "current",
            color: "bg-yellow-400",
        },
        {
            level: 1,
            title: "Jr. SDE",
            company: "Zignuts Technolab",
            period: "Dec, 2021 - Jul, 2023",
            description: "Started the journey. Contributed to feature quests, designed interfaces, and supported the backend guild.",
            status: "cleared",
            color: "bg-green-400",
        },
    ];

    return (
        <section id="experience" className="py-20 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header with Prop */}
                <div className="flex items-center justify-center gap-4 mb-16">
                    <CartoonCalendar />
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-center uppercase tracking-tight"
                    >
                        Adventure <span className="text-accent">Log</span>
                    </motion.h2>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Map Path (Dashed Line) */}
                    <div className="absolute left-8 md:left-1/2 top-10 bottom-10 w-2 md:-translate-x-1/2 flex flex-col items-center justify-between z-0">
                        <div className="w-full h-full border-l-4 border-black border-dashed" />
                    </div>

                    <div className="space-y-20">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Level Node (Center) */}
                                <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-white border-4 border-black rounded-full flex items-center justify-center shadow-cartoon">
                                    {exp.status === "current" ? (
                                        <MapPin className="w-8 h-8 text-red-500 animate-bounce" />
                                    ) : (
                                        <Trophy className="w-8 h-8 text-yellow-500" />
                                    )}
                                </div>

                                {/* Content Card */}
                                <div className="flex-1 w-full">
                                    <div className={`relative bg-white border-4 border-black shadow-cartoon p-6 rounded-xl group hover:scale-[1.02] transition-transform ${exp.color}`}>
                                        {/* Level Badge */}
                                        <div className="absolute -top-4 -right-4 bg-black text-white px-3 py-1 font-black border-2 border-white rounded-lg rotate-3 shadow-cartoon-sm">
                                            LEVEL {exp.level}
                                        </div>

                                        <h3 className="text-2xl font-black text-black mb-1">{exp.title}</h3>
                                        <div className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                                            <span>@{exp.company}</span>
                                            <span className="w-1.5 h-1.5 bg-black rounded-full" />
                                            <span>{exp.period}</span>
                                        </div>

                                        <p className="font-medium text-black leading-relaxed bg-white/50 p-3 rounded-lg border-2 border-black/10">
                                            {exp.description}
                                        </p>

                                        {/* Stars Rating (Just for fun) */}
                                        <div className="mt-4 flex gap-1">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star key={star} className="w-5 h-5 fill-black text-black" />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Empty space for the other side of the timeline */}
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>

                    {/* Start Point */}
                    <div className="flex justify-center mt-12 relative z-10">
                        <div className="bg-black text-white px-6 py-2 font-black rounded-full border-4 border-white shadow-cartoon">
                            START GAME
                        </div>
                    </div>

                </div>
            </div>
            <SectionDivider fill="fill-background" />
        </section>
    );
}
