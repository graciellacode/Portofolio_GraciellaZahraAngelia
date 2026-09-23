export interface ExperienceItem {
    role: string;
    org: string;
    period: string;
    description: string;
    responsibilities?: string[];
    tag: string;
}

export const experience: ExperienceItem[] = [
    {
        role: "Kreator Konten (Content Creative)",
        org: "Media Moklet (MEMO)",
        period: "November 2025 — Agustus 2026",
        description:
            "Bertanggung jawab dalam perancangan ide konten kreatif untuk media sekolah serta koordinasi tim persiapan produksi secara menyeluruh.",
        responsibilities: [
            "Mengusulkan ide konten untuk setiap event yang akan datang",
            "Mengatur persiapan produksi konten, termasuk briefing tim",
            "Mencari dan mengoordinasikan kameramen, talent, serta penulis skrip",
        ],
        tag: "Organisasi",
    },
    {
        role: "Penulis Naskah (Script Writer)",
        org: "Moklet Education of Technology and Informatics Club (METIC)",
        period: "Agustus 2025 — Maret 2026",
        description:
            "Menyiapkan materi dan menyusun naskah konten edukasi teknologi serta mengelola alur kerja tim produksi video dari pra hingga pasca-produksi.",
        responsibilities: [
            "Menyiapkan materi yang akan diangkat menjadi konten",
            "Mencari talent untuk diajak bekerja sama dalam pembuatan materi",
            "Melakukan briefing dengan talent sebelum pengambilan video konten",
            "Mencari editor untuk proses pasca-produksi video",
            "Menulis caption untuk unggahan YouTube dan Instagram",
        ],
        tag: "Organisasi",
    },
];