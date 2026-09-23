"use client";

import { motion } from "framer-motion";

const learning = [
    "Next.js Tingkat Lanjut",
    "Pengembangan Backend",
    "Pengembangan API",
    "Desain UI/UX",
    "Pengalaman Membuat Website",
];

export default function CurrentlyLearning() {
    return (
        <section className="bg-off-white pb-24">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white border-2 border-dashed border-navy-ink/30 rounded-3xl p-8 sm:p-10"
                >
                    <p className="font-heading font-semibold text-navy-ink/50 text-sm tracking-wide mb-4">
                        SEDANG DIPELAJARI
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {learning.map((item, i) => (
                            <motion.span
                                key={item}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.07 }}
                                className={`font-heading font-bold text-sm px-4 py-2 rounded-full ${i % 2 === 0
                                    ? "bg-electric text-white"
                                    : "bg-volt text-navy-ink"
                                    }`}
                            >
                                {item}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}