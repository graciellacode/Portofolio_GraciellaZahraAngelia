"use client";

import { motion } from "framer-motion";
import Footer from "./Footer";

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative min-h-screen bg-electric bg-grid-pattern rounded-t-[48px] sm:rounded-t-[80px] -mt-8 pt-20 flex flex-col justify-between overflow-hidden"
        >
            <div className="max-w-4xl mx-auto px-6 text-center my-auto py-12">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 bg-white/90 rounded-full px-4 py-1.5 mb-8 shadow-sm"
                >
                    <span className="w-2 h-2 rounded-full bg-volt" />
                    <span className="text-xs font-semibold tracking-wide text-navy-ink">
                        MARI BERDISKUSI
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="font-heading font-bold text-white text-shadow-hard leading-[0.95] text-[10vw] sm:text-[6vw] lg:text-[4.5rem]"
                >
                    MARI KITA WUJUDKAN
                    <br />
                    <span className="text-volt">KARYA BERSAMA.</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="font-body text-white/80 text-lg sm:text-xl mt-6 max-w-lg mx-auto leading-relaxed"
                >
                    Memiliki penawaran proyek, peluang magang, atau sekadar ingin bertegur sapa?
                    Pintu komunikasi saya selalu terbuka.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-10"
                >
                    <a
                        href="mailto:graciellazahraangelia2009@gmail.com"
                        className="inline-block bg-volt text-navy-ink font-heading font-bold px-8 py-4 text-lg rounded-full hover:scale-105 transition-transform shadow-lg"
                    >
                        Kirim Pesan
                    </a>
                </motion.div>
            </div>

            <Footer />
        </section>
    );
}