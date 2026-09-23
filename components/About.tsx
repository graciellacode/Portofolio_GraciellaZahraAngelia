"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const interests = ["Pengembangan Frontend", "Pengembangan Backend"];

const softSkills = [
    { label: "KERJA SAMA TIM", bg: "bg-electric text-white" },
    { label: "KOMUNIKASI", bg: "bg-volt text-navy-ink" },
    { label: "ADAPTASI", bg: "bg-electric text-white" },
    { label: "MANAJEMEN WAKTU", bg: "bg-volt text-navy-ink" },
];

export default function About() {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <section id="about" className="bg-off-white py-24">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                {/* Left: stacked interests */}
                <div>
                    <p className="font-heading font-semibold text-navy-ink/50 text-sm tracking-wide mb-6">
                        BIDANG MINAT
                    </p>
                    <div onMouseLeave={() => setHovered(null)} className="space-y-2">
                        {interests.map((item, i) => (
                            <motion.p
                                key={item}
                                onMouseEnter={() => setHovered(i)}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className={`font-heading font-bold text-4xl sm:text-5xl leading-tight transition-colors duration-300 cursor-default ${hovered === null || hovered === i
                                    ? "text-navy-ink"
                                    : "text-navy-ink/25"
                                    }`}
                            >
                                {item}
                            </motion.p>
                        ))}
                    </div>
                </div>

                {/* Right: intro text */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 mb-6 shadow-sm"
                    >
                        <span className="w-2 h-2 rounded-full bg-volt" />
                        <span className="text-xs font-semibold tracking-wide text-navy-ink">
                            SEKILAS TENTANG SAYA
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="font-heading font-bold text-3xl sm:text-4xl text-navy-ink leading-snug"
                    >
                        Mengubah ide menjadi{" "}
                        <span className="text-electric">pengalaman digital yang bermanfaat.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="font-body text-navy-ink/70 mt-5 leading-relaxed"
                    >
                        Saya adalah siswi jurusan Rekayasa Perangkat Lunak di SMK Telkom Malang
                        yang berpengalaman membangun aplikasi web melalui pengembangan frontend
                        maupun backend.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="font-body text-navy-ink/70 mt-4 leading-relaxed"
                    >
                        Saat ini saya terbuka untuk peluang magang pada posisi Frontend, Backend,
                        atau Full-Stack Developer, sembari terus mengasah keahlian melalui proyek
                        praktis.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="font-heading font-semibold text-navy-ink mt-4"
                    >
                        Saya senang belajar cara membuat karya secara langsung.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap gap-2 mt-8"
                    >
                        {softSkills.map((chip) => (
                            <span
                                key={chip.label}
                                className={`${chip.bg} font-heading font-bold text-xs rounded-full px-4 py-2`}
                            >
                                {chip.label}
                            </span>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="bg-white rounded-2xl px-5 py-4 w-fit mt-8 shadow-md"
                    >
                        <p className="font-heading font-bold text-navy-ink leading-tight">
                            Terus berkembang,
                        </p>
                        <p className="font-body text-navy-ink/60 text-sm">
                            melalui setiap proyek yang dikerjakan.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}