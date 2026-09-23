"use client";

import { motion } from "framer-motion";

interface SkillItem {
    name: string;
    icon: React.ReactNode;
}

interface Category {
    name: string;
    color: string;
    skills: SkillItem[];
}

const categories: Category[] = [
    {
        name: "FRONTEND",
        color: "bg-electric",
        skills: [
            {
                name: "HTML",
                icon: (
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#E34F26]">
                        <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622-13.048-.002.68 8.057h8.865l-.36 3.992-3.696.998-3.682-1.002-.235-2.716H4.453l.424 5.163 7.094 1.956 7.108-1.961.905-10.149H8.531z" />
                    </svg>
                ),
            },
            {
                name: "CSS",
                icon: (
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#1572B6]">
                        <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622-13.048-.002.68 8.057h8.865l-.36 3.992-3.696.998-3.682-1.002-.235-2.716H4.453l.424 5.163 7.094 1.956 7.108-1.961.905-10.149H8.531z" />
                    </svg>
                ),
            },
            {
                name: "JavaScript",
                icon: (
                    <svg viewBox="0 0 24 24" className="w-4 h-4">
                        <rect width="24" height="24" rx="3" fill="#F7DF1E" />
                        <path
                            d="M12.7 18.5c.7.4 1.6.7 2.6.7 1.4 0 2.2-.7 2.2-1.7 0-1.1-.9-1.6-2.3-2.2l-.8-.3c-2.3-1-3.5-2.2-3.5-4.4 0-2.4 1.9-4.2 4.9-4.2 1.4 0 2.4.3 3.1.7l-.8 2c-.5-.3-1.3-.6-2.3-.6-1.3 0-2 .6-2 1.5 0 1 .7 1.4 2.1 2l.8.3c2.6 1.1 3.7 2.3 3.7 4.5 0 2.8-2.1 4.4-5.4 4.4-1.6 0-2.9-.4-3.7-.8l.6-1.9zm-6.1-5.9v4.5c0 1.9 1 2.8 2.6 2.8 1.4 0 2.2-.6 2.6-1.4l1.6.9c-.8 1.5-2.3 2.5-4.5 2.5-3 0-4.8-1.8-4.8-4.8V12.6h2.5z"
                            fill="#000"
                        />
                    </svg>
                ),
            },
            {
                name: "TypeScript",
                icon: (
                    <svg viewBox="0 0 24 24" className="w-4 h-4">
                        <rect width="24" height="24" rx="3" fill="#3178C6" />
                        <path
                            d="M12.3 18.5c.7.4 1.6.7 2.6.7 1.4 0 2.2-.7 2.2-1.7 0-1.1-.9-1.6-2.3-2.2l-.8-.3c-2.3-1-3.5-2.2-3.5-4.4 0-2.4 1.9-4.2 4.9-4.2 1.4 0 2.4.3 3.1.7l-.8 2c-.5-.3-1.3-.6-2.3-.6-1.3 0-2 .6-2 1.5 0 1 .7 1.4 2.1 2l.8.3c2.6 1.1 3.7 2.3 3.7 4.5 0 2.8-2.1 4.4-5.4 4.4-1.6 0-2.9-.4-3.7-.8l.6-1.9zM5.5 8h7.8v2.2H9.6V20H7.1V10.2H5.5V8z"
                            fill="#FFF"
                        />
                    </svg>
                ),
            },
            {
                name: "React",
                icon: (
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-[#61DAFB] stroke-[1.8]">
                        <circle cx="12" cy="12" r="2" fill="#61DAFB" />
                        <ellipse cx="12" cy="12" rx="9" ry="3.5" />
                        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
                        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
                    </svg>
                ),
            },
            {
                name: "Next.js",
                icon: (
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-black">
                        <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12c0 3.107-1.18 5.94-3.125 8.082l-7.785-11.026h-2.193v10.158h1.83v-7.228l7.938 11.014zM16.59 12h1.826V6.918h-1.826V12z" />
                    </svg>
                ),
            },
            {
                name: "Tailwind CSS",
                icon: (
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#06B6D4]">
                        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
                    </svg>
                ),
            },
        ],
    },
    {
        name: "BACKEND",
        color: "bg-volt",
        skills: [
            {
                name: "NestJS",
                icon: (
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#E0234E]">
                        <path d="M21.2 4.8c-1.5-1.5-4-1.5-5.5 0L12 8.5 8.3 4.8c-1.5-1.5-4-1.5-5.5 0-1.5 1.5-1.5 4 0 5.5l9.2 9.2 9.2-9.2c1.5-1.5 1.5-4 0-5.5z" />
                    </svg>
                ),
            },
            {
                name: "Prisma",
                icon: (
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#2D3748]">
                        <path d="M21.8 17.5L13.1 1.7c-.4-.7-1.4-.7-1.8 0L2.2 17.5c-.4.7.1 1.5.9 1.5h17.8c.8 0 1.3-.8.9-1.5z" />
                    </svg>
                ),
            },
            {
                name: "MySQL",
                icon: (
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#4479A1]">
                        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.5h-2v-5h2v5zm0-7h-2V7.5h2v2z" />
                    </svg>
                ),
            },
        ],
    },
    {
        name: "DESAIN",
        color: "bg-volt",
        skills: [
            {
                name: "Figma",
                icon: (
                    <svg viewBox="0 0 24 24" className="w-4 h-4">
                        <path fill="#F24E1E" d="M8 24a4 4 0 01-4-4 4 4 0 014-4h4v4a4 4 0 01-4 4z" />
                        <path fill="#A259FF" d="M4 12a4 4 0 014-4h4v8H8a4 4 0 01-4-4z" />
                        <path fill="#F24E1E" d="M4 4a4 4 0 014-4h4v8H8a4 4 0 01-4-4z" />
                        <path fill="#FF7262" d="M12 0h4a4 4 0 014 4 4 4 0 01-4 4h-4V0z" />
                        <path fill="#1ABCFE" d="M20 12a4 4 0 01-4 4 4 4 0 01-4-4 4 4 0 014-4 4 4 0 014 4z" />
                    </svg>
                ),
            },
            {
                name: "Canva",
                icon: (
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#00C4CC]">
                        <circle cx="12" cy="12" r="10" />
                        <path fill="#FFF" d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6z" />
                    </svg>
                ),
            },
            {
                name: "UI/UX Design",
                icon: (
                    <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-[#0548FE] fill-none stroke-[2]">
                        <rect x="3" y="3" width="18" height="18" rx="4" />
                        <path d="M3 9h18M9 21V9" />
                    </svg>
                ),
            },
        ],
    },
    {
        name: "TOOLS",
        color: "bg-electric",
        skills: [
            {
                name: "Git",
                icon: (
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#F05032]">
                        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.216 1.378-.07 1.884.437.514.515.654 1.258.427 1.905l2.67 2.67c.647-.227 1.39-.087 1.905.428.706.706.706 1.85 0 2.557-.706.706-1.85.706-2.556 0-.54-.54-.672-1.332-.4-1.99L12.7 8.7c-.657.272-1.45.14-1.99-.4-.54-.54-.672-1.332-.4-1.99L7.545 3.545 1.454 9.636c-.603.605-.603 1.583 0 2.187l10.48 10.478c.604.604 1.582.604 2.186 0l10.426-10.426c.604-.604.604-1.582 0-2.186z" />
                    </svg>
                ),
            },
            {
                name: "GitHub",
                icon: (
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-black">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                ),
            },
            {
                name: "VS Code",
                icon: (
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#007ACC]">
                        <path d="M23.15 2.587L18.21.791c-.377-.137-.797.027-.992.385l-4.71 8.643L7.7 5.672c-.22-.2-.534-.247-.8-.12L.788 8.441C.314 8.665.01 9.146.01 9.67v4.66c0 .524.304 1.005.778 1.229l6.112 2.889c.266.127.58.08.8-.12l4.808-4.147 4.71 8.643c.195.358.615.522.992.385l4.94-1.796c.49-.178.842-.64.842-1.161V3.748c0-.521-.352-.983-.842-1.161z" />
                    </svg>
                ),
            },
            {
                name: "Docker",
                icon: (
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#2496ED]">
                        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm-2.954-5.43h2.118a.185.185 0 00.186-.186V3.574a.185.185 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm0 5.43h2.118a.187.187 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.186.186 0 00-.185.186v1.887c0 .102.082.185.185.185zm-2.955 0h2.119a.186.186 0 00.185-.185V9.006a.185.185 0 00-.185-.186H8.074a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm0-2.716h2.119a.186.186 0 00.185-.185V6.29a.185.185 0 00-.185-.185H8.074a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.185zm-2.954 2.716h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186H5.12a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm0-2.716h2.119a.186.186 0 00.186-.185V6.29a.185.185 0 00-.186-.185H5.12a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.185zm-2.954 2.716h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186H2.166a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zM.016 13.064c0 .887.166 1.761.493 2.585.815 2.051 2.597 3.518 4.757 3.923 5.433 1.018 11.025.26 16.035-2.17 1.58-.766 2.715-1.956 2.7-3.665-.015-1.708-1.258-2.613-2.766-2.613H.742a.726.726 0 00-.726.74z" />
                    </svg>
                ),
            },
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="bg-off-white pb-24">
            <div className="max-w-6xl mx-auto px-6">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="font-heading font-semibold text-navy-ink/50 text-sm tracking-wide mb-3"
                >
                    KEAHLIAN
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="font-heading font-bold text-3xl sm:text-4xl text-navy-ink mb-10"
                >
                    Teknologi & Peranti Utama.
                </motion.h2>

                {/* 2x2 Equal Size Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {categories.map((cat, i) => (
                        <motion.div
                            key={cat.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-white border-2 border-navy-ink rounded-3xl p-6 sm:p-7 shadow-[6px_6px_0px_#0A0E23] flex flex-col justify-between hover:-translate-y-1 transition-transform min-h-[200px]"
                        >
                            <div className="flex items-center justify-between gap-2 mb-4">
                                <div className="flex items-center gap-2">
                                    <span className={`w-3 h-3 rounded-full ${cat.color}`} />
                                    <h3 className="font-heading font-bold text-lg text-navy-ink tracking-wide">
                                        {cat.name}
                                    </h3>
                                </div>
                                <span className="font-heading font-bold text-xs bg-off-white border border-navy-ink/15 text-navy-ink/60 rounded-full px-3 py-1">
                                    {cat.skills.length} Tools
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-2.5 mt-2">
                                {cat.skills.map((skill) => (
                                    <span
                                        key={skill.name}
                                        className="bg-off-white border border-navy-ink/15 text-navy-ink font-heading font-semibold text-xs sm:text-sm rounded-full px-3.5 py-2 flex items-center gap-2 shadow-sm hover:border-electric hover:bg-white transition-all cursor-default"
                                    >
                                        <span className="shrink-0">{skill.icon}</span>
                                        <span>{skill.name}</span>
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}