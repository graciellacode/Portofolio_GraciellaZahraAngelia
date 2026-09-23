"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/Projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
    return (
        <section id="projects" className="bg-off-white py-24">
            <div className="max-w-6xl mx-auto px-6">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="font-heading font-semibold text-navy-ink/50 text-sm tracking-wide mb-3"
                >
                    PROYEK UNGGULAN
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="font-heading font-bold text-3xl sm:text-4xl text-navy-ink mb-10"
                >
                    Karya yang Telah Saya Bangun.
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.title} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}