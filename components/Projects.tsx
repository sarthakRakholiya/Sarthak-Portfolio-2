"use client";

import { motion } from "framer-motion";
import { ExternalLink, Zap, Globe, Layout, Database, Server, Smartphone, Layers, Brain } from "lucide-react";
import SectionDivider from "./SectionDivider";
import CartoonBulb from "./CartoonBulb";

export default function Projects() {
    const projects = [
        {
            title: "Ravel Trip",
            description: "Interactive travel planning platform with real-time location integration.",
            features: ["Trip scheduling", "Real-time data", "User auth", "SEO-optimized"],
            tech: ["Next.js", "Redux", "HTML", "CSS"],
            color: "bg-yellow-400",
            icon: Globe,
        },
        {
            title: "ZigCalender",
            description: "Responsive scheduling application for managing availability and appointments.",
            features: ["Calendar views", "Real-time booking", "PWA support", "Vuexy theme"],
            tech: ["React.js", "Redux", "SCSS"],
            color: "bg-blue-400",
            icon: Layout,
        },
        {
            title: "ZigHRMS",
            description: "Modern HR management platform for leave, expense, and document handling.",
            features: ["Leave management", "Expense tracking", "Document handling"],
            tech: ["React.js", "Redux", "Vuexy"],
            link: "https://hrms.zignuts.dev/home",
            color: "bg-pink-400",
            icon: Database,
        },
        {
            title: "Mento AI",
            description: "AI-driven platform for personal and professional goal management.",
            features: ["AI goal setting", "Interactive flows", "Real-time updates"],
            tech: ["Next.js", "TypeScript", "MUI"],
            color: "bg-green-400",
            icon: Brain,
        },
        {
            title: "Cravenow",
            description: "Comprehensive platform for multi-store management and employee scheduling.",
            features: ["Multi-store", "Employee scheduling", "Menu uploads"],
            tech: ["Next.js", "Tailwind", "MUI"],
            color: "bg-purple-400",
            icon: Smartphone,
        },
        {
            title: "Mosaic",
            description: "AI-driven resource management platform for project planning.",
            features: ["AI Forecasting", "Resource Allocation", "Utilization Tracking"],
            tech: ["React", "Styled Components"],
            color: "bg-orange-400",
            icon: Layers,
        },
        {
            title: "Axon-Park",
            description: "Web platform for delivering and managing educational courses.",
            features: ["Course Management", "Interactive Learning", "Role-Based Auth"],
            tech: ["Next.js", "Tailwind", "MUI"],
            color: "bg-cyan-400",
            icon: Server,
        },
    ];

    // Helper component for the icon since we can't use dynamic components easily in the array
    const ProjectIcon = ({ icon: Icon }: { icon: any }) => <Icon className="w-12 h-12 text-black" />;

    return (
        <section id="projects" className="py-20 bg-muted relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header with Prop */}
                <div className="flex items-center justify-center gap-4 mb-16">
                    <CartoonBulb />
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-center uppercase tracking-tight"
                    >
                        Featured <span className="text-primary">Issues</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10, rotate: 2, scale: 1.02 }}
                            className="group relative bg-white border-4 border-black shadow-cartoon hover:shadow-cartoon-lg transition-all rounded-sm flex flex-col h-full"
                        >
                            {/* Issue Number Badge */}
                            <div className="absolute -top-4 -left-4 bg-red-500 text-white w-12 h-12 flex items-center justify-center font-black border-4 border-black rounded-full shadow-cartoon-sm z-20 -rotate-12">
                                #{index + 1}
                            </div>

                            {/* Cover Art */}
                            <div className={`h-48 ${project.color} border-b-4 border-black relative overflow-hidden flex items-center justify-center`}>
                                <div className="absolute inset-0 opacity-20"
                                    style={{ backgroundImage: "radial-gradient(#000 2px, transparent 2px)", backgroundSize: "16px 16px" }}
                                />
                                <div className="bg-white p-4 border-4 border-black rounded-full shadow-cartoon transform group-hover:scale-110 transition-transform duration-300">
                                    <ProjectIcon icon={project.icon} />
                                </div>

                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute top-2 right-2 bg-white p-1.5 rounded-full border-2 border-black hover:bg-black hover:text-white transition-colors z-10"
                                        title="View Live"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-grow flex flex-col">
                                <h3 className="text-2xl font-black text-black mb-2 uppercase italic">
                                    {project.title}
                                </h3>

                                <div className="mb-4">
                                    <span className="text-xs font-black bg-black text-white px-2 py-0.5 uppercase tracking-widest">The Plot</span>
                                    <p className="text-black font-medium mt-2 leading-relaxed border-l-4 border-gray-300 pl-3">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="mt-auto">
                                    <span className="text-xs font-black bg-black text-white px-2 py-0.5 uppercase tracking-widest">The Cast</span>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-1 text-xs font-bold text-black border-2 border-black rounded-md bg-gray-100"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Barcode Decoration */}
                            <div className="h-4 bg-white border-t-4 border-black flex items-center justify-center gap-1 overflow-hidden px-2">
                                {[...Array(20)].map((_, i) => (
                                    <div key={i} className={`h-full w-${Math.random() > 0.5 ? '1' : '2'} bg-black`} />
                                ))}
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
            <SectionDivider fill="fill-muted" />
        </section>
    );
}
