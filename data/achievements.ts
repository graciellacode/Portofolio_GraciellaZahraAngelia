export interface Achievement {
    title: string;
    event: string;
    organizer: string;
    date: string;
    highlight: boolean; // true = medali/juara, false = peserta
    image: string; // path relatif ke /public
}

export const achievements: Achievement[] = [
    {
        title: "Gold Medal — Geography",
        event: "Kompetisi Akademik Ilmu Sosial III (KAIS III)",
        organizer: "Prisma Cendekia Foundation",
        date: "Sep 2025",
        highlight: true,
        image: "/certificates/kais3-geografi.png",
    },
    {
        title: "Gold Medal — History",
        event: "Kompetisi Akademik Ilmu Sosial III (KAIS III)",
        organizer: "Prisma Cendekia Foundation",
        date: "Sep 2025",
        highlight: true,
        image: "/certificates/kais3-sejarah.png",
    },
    {
        title: "Participant",
        event: "BIONIX Competition — Information Systems Expo 2025",
        organizer: "ITS Surabaya",
        date: "Sep 2025",
        highlight: false,
        image: "/certificates/bionix.png",
    },
    {
        title: "Participant",
        event: "Agropreneur 2025",
        organizer: "BEM FTP, Universitas Gadjah Mada",
        date: "2025",
        highlight: false,
        image: "/certificates/agropreneur.png",
    },
    {
        title: "Full Stack Developer — Sangat Kompeten",
        event: "Uji Unit Kompetensi (UUK) RPL — Pengembangan Aplikasi Web Menggunakan Next.js dan NestJS",
        organizer: "SMK Telkom Malang x Telkom Indonesia",
        date: "Jun 2026",
        highlight: true,
        image: "/certificates/uuk-fullstack.png",
    },
    {
        title: "Problem Solving (Basic)",
        event: "HackerRank Skill Certification Test",
        organizer: "HackerRank",
        date: "30 Jul 2026",
        highlight: true,
        image: "/certificates/hackerrank-problem-solving.png",
    },
    {
        title: "UI/UX Design",
        event: "BookII Bootcamp Kilat — UI/UX Design",
        organizer: "Harisenin.com",
        date: "14–15 Apr 2026",
        highlight: true,
        image: "/certificates/Sertifikat-Graciella-Zahra-Angelia.png",
    },
];