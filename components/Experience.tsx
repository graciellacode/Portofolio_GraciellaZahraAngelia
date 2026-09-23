"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/Experience";

export default function Experience() {
    return (
        <section id="experience" className="bg-off-white py-24">
            <div className="max-w-4xl mx-auto px-6">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="font-heading font-semibold text-navy-ink/50 text-sm tracking-wide mb-3"
                >
                    PENGALAMAN
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="font-heading font-bold text-3xl sm:text-4xl text-navy-ink mb-10"
                >
                    Jejak Langkah & Organisasi.
                </motion.h2>

                {/* Education */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 bg-white border-2 border-navy-ink rounded-3xl p-6 sm:p-7 shadow-[6px_6px_0px_#0A0E23]"
                >
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                        <span className="inline-block bg-volt text-navy-ink font-heading font-bold text-xs px-3 py-1 rounded-full">
                            PENDIDIKAN
                        </span>
                        <span className="font-body text-navy-ink/60 text-xs sm:text-sm">
                            2024 — Sekarang
                        </span>
                    </div>
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-navy-ink">
                        SMK Telkom Malang
                    </h3>
                    <p className="font-body text-navy-ink/70 text-sm mt-1">
                        Rekayasa Perangkat Lunak
                    </p>
                    <p className="font-body text-navy-ink/70 mt-3 leading-relaxed">
                        Mempelajari dasar-dasar rekayasa perangkat lunak, pengembangan web,
                        manajemen basis data, serta pembuatan aplikasi secara komprehensif.
                    </p>
                    <p className="font-heading font-semibold text-navy-ink text-sm mt-3">
                        Fokus Utama: Pengembangan Web Full-Stack
                    </p>
                </motion.div>

                <div className="relative pl-8 border-l-2 border-navy-ink/15 space-y-12">
                    {experience.map((item, i) => (
                        <motion.div
                            key={item.role + item.org}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="relative"
                        >
                            <span className="absolute -left-[2.55rem] top-1 w-4 h-4 rounded-full bg-electric border-4 border-off-white" />

                            <span className="inline-block bg-volt text-navy-ink font-heading font-bold text-xs px-3 py-1 rounded-full mb-2">
                                {item.tag.toUpperCase()}
                            </span>
                            <h3 className="font-heading font-bold text-xl text-navy-ink">
                                {item.role} · {item.org}
                            </h3>
                            <p className="font-body text-navy-ink/50 text-sm mt-1">
                                {item.period}
                            </p>
                            <p className="font-body text-navy-ink/70 mt-3 leading-relaxed font-medium">
                                {item.description}
                            </p>
                            {item.responsibilities && item.responsibilities.length > 0 && (
                                <ul className="mt-3 space-y-1.5">
                                    {item.responsibilities.map((task) => (
                                        <li
                                            key={task}
                                            className="font-body text-navy-ink/70 text-sm flex items-start gap-2"
                                        >
                                            <span className="text-electric font-bold text-xs mt-0.5">●</span>
                                            <span className="leading-relaxed">{task}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}