"use client";

import { motion } from "framer-motion";

const chips = [
  { label: "Frontend", top: "18%", left: "4%", rotate: -8 },
  { label: "Backend", top: "62%", left: "3%", rotate: 6 },
  { label: "Full-Stack", top: "86%", left: "38%", rotate: -4 },
  { label: "UI/UX", top: "16%", left: "75%", rotate: 5 },
];

function AvatarIllustration() {
  return (
    <svg
      className="w-full h-full rounded-full bg-navy-ink/90 p-2"
      viewBox="0 0 100 100"
      fill="none"
    >
      <circle cx="50" cy="50" r="45" fill="#0A0E23" />
      <path
        d="M26 45 C26 22, 74 22, 74 45 C74 52, 26 52, 26 45 Z"
        fill="#FFE0BD"
      />
      <rect
        x="24"
        y="36"
        width="22"
        height="14"
        rx="3"
        fill="#0A0E23"
        stroke="#CCFF00"
        strokeWidth="2.5"
      />
      <rect
        x="54"
        y="36"
        width="22"
        height="14"
        rx="3"
        fill="#0A0E23"
        stroke="#CCFF00"
        strokeWidth="2.5"
      />
      <line x1="46" y1="43" x2="54" y2="43" stroke="#CCFF00" strokeWidth="3" />
      <polygon points="26,38 34,38 30,48" fill="white" opacity="0.8" />
      <polygon points="56,38 64,38 60,48" fill="white" opacity="0.8" />
      <path
        d="M40 64 Q50 72 60 64"
        stroke="#CCFF00"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path d="M18 88 C18 70, 82 70, 82 88 Z" fill="#2563EB" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-electric bg-grid-pattern overflow-hidden pt-32 pb-20 min-h-[85vh] flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6 w-full relative">
        {/* Main Content Area */}
        <div className="max-w-2xl lg:max-w-3xl relative z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/90 rounded-full px-4 py-1.5 mb-6 shadow-md"
          >
            <span className="w-2 h-2 rounded-full bg-volt animate-ping" />
            <span className="text-xs font-semibold tracking-wide text-navy-ink">
              TERBUKA UNTUK MAGANG
            </span>
          </motion.div>

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading font-semibold text-white/80 text-lg mb-2"
          >
            Halo, Saya
          </motion.p>

          {/* Big name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-heading font-black text-shadow-hard leading-[0.88] tracking-tighter uppercase text-[12vw] sm:text-[8vw] lg:text-[5.5rem] xl:text-[6.2rem]"
          >
            <span className="block text-volt">GRACIELLA</span>
            <span className="block text-white">ZAHRA ANGELIA</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="font-body text-white text-base sm:text-lg max-w-xl mt-6 leading-relaxed"
          >
            Frontend Developer dengan pengalaman dalam pengembangan web, integrasi backend, dan desain UI/UX.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 mt-8 relative z-20"
          >
            <a
              href="#projects"
              className="bg-volt text-navy-ink font-heading font-bold px-7 py-3.5 rounded-full hover:scale-105 transition-transform shadow-[0_10px_25px_rgba(204,255,0,0.3)] flex items-center gap-2"
            >
              <span>Lihat Karya Saya</span>
              <span>→</span>
            </a>
            <a
              href="#about"
              className="border-2 border-white/40 text-white font-heading font-semibold px-6 py-3.5 rounded-full hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm text-sm"
            >
              Tentang Saya
            </a>
          </motion.div>
        </div>

        {/* Floating Cards Cluster — Bounded inside max-w-6xl container */}
        <div className="hidden lg:block absolute top-0 right-0 w-[340px] h-full pointer-events-none z-20">
          {/* Card 1: Full-Stack Dev (Atas) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: { duration: 0.6, delay: 0.3 },
              y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute top-0 right-0 bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-5 w-64 shadow-2xl pointer-events-auto hover:border-volt hover:bg-white/15 transition-all cursor-default group"
          >
            <div className="relative w-20 h-20 mx-auto mb-3 rounded-full bg-gradient-to-tr from-volt via-white to-electric p-0.5 shadow-lg group-hover:scale-105 transition-transform">
              <AvatarIllustration />
            </div>
            <p className="font-heading font-bold text-white text-lg text-center leading-tight">
              Full-Stack Dev
            </p>
            <p className="font-body text-white/80 text-xs text-center mt-1">
              Siswi RPL · SMK Telkom
            </p>
            <div className="mt-3 flex items-center justify-center gap-1.5 bg-volt/20 text-volt border border-volt/40 text-[10px] font-bold py-1 px-3 rounded-full w-fit mx-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-volt animate-ping" />
              Pengalaman Proyek
            </div>
          </motion.div>

          {/* Card 2: Frontend Dev (Tengah Kiri) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: [0, -8, 0],
            }}
            transition={{
              opacity: { duration: 0.6, delay: 0.4 },
              y: { duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
            }}
            className="absolute top-[13.5rem] -left-8 bg-white/10 backdrop-blur-xl border border-white/25 rounded-2xl p-3.5 w-52 shadow-xl pointer-events-auto hover:border-volt hover:bg-white/15 transition-all cursor-default group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-volt text-navy-ink font-heading font-bold flex items-center justify-center text-xs shadow-md group-hover:rotate-6 transition-transform shrink-0">
                ⚡
              </div>
              <div>
                <p className="font-heading font-bold text-white text-xs leading-tight">
                  Frontend Dev
                </p>
                <p className="font-body text-white/70 text-[11px] mt-0.5">
                  React & Next.js
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Backend Dev (Tengah Kanan) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: [0, -9, 0],
            }}
            transition={{
              opacity: { duration: 0.6, delay: 0.5 },
              y: { duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
            }}
            className="absolute top-[18.5rem] right-0 bg-white/10 backdrop-blur-xl border border-white/25 rounded-2xl p-3.5 w-52 shadow-xl pointer-events-auto hover:border-volt hover:bg-white/15 transition-all cursor-default group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white text-electric font-heading font-bold flex items-center justify-center text-xs shadow-md group-hover:rotate-6 transition-transform shrink-0">
                🛠️
              </div>
              <div>
                <p className="font-heading font-bold text-white text-xs leading-tight">
                  Backend Dev
                </p>
                <p className="font-body text-white/70 text-[11px] mt-0.5">
                  NestJS & MySQL
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 4: UI/UX Dev (Bawah) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: [0, -7, 0],
            }}
            transition={{
              opacity: { duration: 0.6, delay: 0.6 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.9 },
            }}
            className="absolute top-[23.5rem] -left-4 bg-white/10 backdrop-blur-xl border border-white/25 rounded-2xl p-3.5 w-52 shadow-xl pointer-events-auto hover:border-volt hover:bg-white/15 transition-all cursor-default group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-volt text-navy-ink font-heading font-bold flex items-center justify-center text-xs shadow-md group-hover:rotate-6 transition-transform shrink-0">
                🎨
              </div>
              <div>
                <p className="font-heading font-bold text-white text-xs leading-tight">
                  UI/UX Dev
                </p>
                <p className="font-body text-white/70 text-[11px] mt-0.5">
                  Figma & Prototyping
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative Code Badges */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="hidden xl:block absolute -top-8 left-72 bg-white/10 backdrop-blur-md border border-white/20 text-volt font-mono text-[11px] px-2.5 py-1 rounded-lg shadow-sm"
        >
          &lt;CleanCode /&gt;
        </motion.div>
      </div>
    </section>
  );
}