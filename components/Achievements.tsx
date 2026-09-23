"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { achievements } from "@/data/achievements";

export default function Achievements() {
    return (
        <section id="achievements" className="bg-off-white py-24">
            <div className="max-w-6xl mx-auto px-6">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="font-heading font-semibold text-navy-ink/50 text-sm tracking-wide mb-3"
                >
                    PRESTASI & SERTIFIKASI
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="font-heading font-bold text-3xl sm:text-4xl text-navy-ink mb-10"
                >
                    Pencapaian di Luar Kode.
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {achievements.map((item, i) => (
                        <motion.div
                            key={item.title + item.event}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`rounded-3xl overflow-hidden border-2 ${item.highlight
                                    ? "bg-white border-navy-ink shadow-[6px_6px_0px_#0A0E23]"
                                    : "bg-white/60 border-navy-ink/15"
                                }`}
                        >
                            {/* Certificate image */}
                            <div className="relative aspect-video border-b-2 border-navy-ink/10 bg-off-white">
                                <Image
                                    src={item.image}
                                    alt={`${item.title} — ${item.event}`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 100vw, 50vw"
                                />
                            </div>

                            <div className="p-5">
                                <div className="flex items-center gap-2 mb-2">
                                    <span
                                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm shrink-0 ${item.highlight
                                                ? "bg-volt text-navy-ink"
                                                : "bg-navy-ink/10 text-navy-ink"
                                            }`}
                                    >
                                        {item.highlight ? "🥇" : "✓"}
                                    </span>
                                    <h3 className="font-heading font-bold text-navy-ink">
                                        {item.title}
                                    </h3>
                                </div>
                                <p className="font-body text-navy-ink/70 text-sm">
                                    {item.event}
                                </p>
                                <p className="font-body text-navy-ink/50 text-xs mt-1">
                                    {item.organizer} · {item.date}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}