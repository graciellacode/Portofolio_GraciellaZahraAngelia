"use client";

import { motion } from "framer-motion";

const cards = [
    {
        title: ["SISWI REKAYASA", "PERANGKAT LUNAK"],
        subtitle: "Jurusan Rekayasa Perangkat Lunak di SMK Telkom Malang",
        chip: { type: "avatar", text: "SMK Telkom Malang" },
    },
    {
        title: ["PENGEMBANG", "FULLSTACK"],
        subtitle: "Membangun aplikasi web mencakup bagian antarmuka (frontend) dan server (backend).",
        chip: { type: "pills", items: ["Frontend", "Backend"] },
    },
    {
        title: ["PENGGEMAR", "DESAIN UI/UX"],
        subtitle: "Tertarik merancang antarmuka yang sederhana dan mudah digunakan.",
        chip: { type: "bubble", text: "SEDANG BELAJAR" },
    },
];

export default function QuickIntro() {
    return (
        <section
            id="about-quick"
            className="relative z-20 bg-off-white rounded-t-[48px] sm:rounded-t-[80px] -mt-12 pt-20 pb-24"
        >
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                {cards.map((card, i) => (
                    <motion.div
                        key={card.title.join(" ")}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5, delay: i * 0.15 }}
                        className="bg-white rounded-3xl p-8 min-h-[260px] flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-navy-ink leading-tight">
                                {card.title[0]}
                                <br />
                                {card.title[1]}
                            </h3>
                            <p className="font-body text-navy-ink/60 text-sm mt-3">
                                {card.subtitle}
                            </p>
                        </div>

                        {card.chip.type === "avatar" && (
                            <div className="flex items-center gap-2 bg-electric text-white rounded-full pl-1.5 pr-4 py-1.5 w-fit mt-6">
                                <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center font-heading font-bold text-xs">
                                    GZ
                                </span>
                                <span className="font-heading font-bold text-xs">
                                    {card.chip.text}
                                </span>
                            </div>
                        )}

                        {card.chip.type === "pills" && (
                            <div className="flex gap-2 mt-6">
                                {card.chip.items?.map((item, idx) => (
                                    <span
                                        key={item}
                                        className={`${idx % 2 === 0 ? "bg-electric text-white" : "bg-volt text-navy-ink"
                                            } font-heading font-bold text-xs rounded-full px-4 py-2`}
                                    >
                                        {item.toUpperCase()}
                                    </span>
                                ))}
                            </div>
                        )}

                        {card.chip.type === "bubble" && (
                            <div className="relative bg-volt rounded-2xl rounded-bl-none px-5 py-3 w-fit mt-6">
                                <span className="font-heading font-bold text-sm text-navy-ink">
                                    {card.chip.text}
                                </span>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}