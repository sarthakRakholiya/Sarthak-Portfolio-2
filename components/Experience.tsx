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
        <section id="experience" className="py-10 md:py-20 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header with Prop */}
                <div className="flex items-center justify-center gap-3 md:gap-4 mb-8 md:mb-16">
                    <CartoonCalendar />
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-6xl font-black text-center uppercase tracking-tight"
                    >
                        Adventure <span className="text-accent">Log</span>
                    </motion.h2>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Map Path (Dashed Line) */}
                    <div className="absolute left-4 md:left-1/2 top-10 bottom-10 w-2 md:-translate-x-1/2 flex flex-col items-center justify-between z-0">
                        <div className="w-full h-full border-l-4 border-black border-dashed" />
                    </div>

                    <div className="space-y-10 md:space-y-20">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className={`flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-8 pl-8 md:pl-0 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Level Node (Center) */}
                                <div className="absolute left-0 md:relative md:left-auto z-10 flex-shrink-0 w-8 h-8 md:w-16 md:h-16 bg-white border-2 md:border-4 border-black rounded-full flex items-center justify-center shadow-cartoon">
                                    {exp.status === "current" ? (
                                        <MapPin className="w-4 h-4 md:w-8 md:h-8 text-red-500 animate-bounce" />
                                    ) : (
                                        <Trophy className="w-4 h-4 md:w-8 md:h-8 text-yellow-500" />
                                    )}
                                </div>

                                {/* Content Card */}
                                <div className="flex-1 w-full">
                                    <div className={`relative bg-white border-2 md:border-4 border-black shadow-cartoon p-3 md:p-6 rounded-xl group hover:scale-[1.02] transition-transform ${exp.color}`}>
                                        {/* Level Badge */}
                                        <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-black text-white px-2 py-0.5 md:px-3 md:py-1 font-black border-2 border-white rounded-lg rotate-3 shadow-cartoon-sm text-[10px] md:text-base">
                                            LEVEL {exp.level}
                                        </div>

                                        <h3 className="text-lg md:text-2xl font-black text-black mb-1">{exp.title}</h3>
                                        <div className="font-bold text-gray-800 mb-2 md:mb-4 flex flex-wrap items-center gap-2 text-xs md:text-base">
                                            <span>@{exp.company}</span>
                                            <span className="w-1.5 h-1.5 bg-black rounded-full hidden md:block" />
                                            <span className="block md:inline w-full md:w-auto text-gray-500 md:text-gray-800">{exp.period}</span>
                                        </div>

                                        <p className="font-medium text-black leading-relaxed bg-white/50 p-2 md:p-3 rounded-lg border-2 border-black/10 text-xs md:text-base">
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
