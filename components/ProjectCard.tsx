"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/data/Projects";

const statusStyle: Record<Project["status"], string> = {
    Selesai: "bg-volt text-navy-ink",
    "Dalam Proses": "bg-electric text-white",
    Prototipe: "bg-white border-2 border-navy-ink text-navy-ink",
    Konsep: "bg-navy-ink text-white",
};

export default function ProjectCard({
    project,
    index,
}: {
    project: Project;
    index: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white border-2 border-navy-ink rounded-3xl overflow-hidden shadow-[6px_6px_0px_#0A0E23] hover:-translate-y-1 transition-transform flex flex-col justify-between"
        >
            {/* Image Container */}
            <div className="relative aspect-video w-full bg-gradient-to-br from-electric to-navy-ink flex items-center justify-center border-b-2 border-navy-ink overflow-hidden">
                {project.image ? (
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top hover:scale-105 transition-transform duration-300"
                    />
                ) : (
                    <span className="font-heading font-bold text-white/70 text-sm tracking-wide">
                        [GAMBAR PROYEK]
                    </span>
                )}
                <span
                    className={`absolute top-3 left-3 z-10 font-heading font-bold text-xs px-3 py-1 rounded-full shadow-md ${statusStyle[project.status]
                        }`}
                >
                    {project.status.toUpperCase()}
                </span>
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                    <h3 className="font-heading font-bold text-xl text-navy-ink">
                        {project.title}
                    </h3>
                    <span className="font-heading font-bold text-[11px] text-electric tracking-wide">
                        {project.role.toUpperCase()}
                    </span>
                </div>

                <p className="font-body text-navy-ink/70 text-sm mt-2 leading-relaxed">
                    {project.description}
                </p>

                {project.features && project.features.length > 0 && (
                    <ul className="mt-3 space-y-1">
                        {project.features.map((f) => (
                            <li
                                key={f}
                                className="font-body text-navy-ink/60 text-xs flex items-start gap-2"
                            >
                                <span className="text-volt mt-0.5">●</span>
                                {f}
                            </li>
                        ))}
                    </ul>
                )}

                <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((t, i) => (
                        <span
                            key={t}
                            className={`text-xs font-heading font-bold px-3 py-1 rounded-full ${i % 2 === 0
                                    ? "bg-electric text-white"
                                    : "bg-volt text-navy-ink"
                                }`}
                        >
                            {t}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-4 mt-5">
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-heading font-bold text-sm text-navy-ink underline underline-offset-4 hover:text-electric transition-colors"
                        >
                            Lihat Proyek
                        </a>
                    )}
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-heading font-bold text-sm text-navy-ink underline underline-offset-4 hover:text-electric transition-colors"
                        >
                            GitHub
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}