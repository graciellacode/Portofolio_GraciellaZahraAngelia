export type ProjectStatus = "Selesai" | "Dalam Proses" | "Prototipe" | "Konsep";

export interface Project {
    title: string;
    role: string;
    description: string;
    features?: string[];
    tech: string[];
    status: ProjectStatus;
    githubUrl?: string;
    liveUrl?: string;
    image?: string;
}

// Featured Projects: proyek sesuai CV & Portofolio
export const projects: Project[] = [
    {
        title: "Sistem Antrian Digital Rumah Sakit (RSUD App)",
        role: "Full Stack Developer",
        description:
            "Sistem antrean digital rumah sakit yang dirancang untuk membantu pasien mengambil nomor antrean secara mandiri dan memfasilitasi staf dalam mengelola antrean secara real-time.",
        features: [
            "Membangun antarmuka bagi pasien untuk mengambil nomor antrean secara mandiri dan staf memanggil antrean per poli secara real-time",
            "Mengembangkan halaman admin untuk mengelola data dokter dan mengatur akses halaman sesuai peran pengguna (pasien, staf, admin)",
            "Informasi Jam Pelayanan terintegrasi",
        ],
        tech: ["Next.js", "NestJS", "MySQL", "TypeScript"],
        status: "Selesai",
        liveUrl: "https://rsud-frontend.vercel.app/",
        githubUrl: "https://github.com/graciellacode/RSUD-app.git",
        image: "/projects/Screenshot 2026-09-23 142557.png",
    },
    {
        title: "Bank Sampah Digital",
        role: "Frontend Developer",
        description:
            "Platform digital untuk mencatat penyetoran sampah daur ulang, mengelola poin nasabah, dan menukarnya dengan hadiah — dikelola langsung oleh unit bank sampah Anda.",
        features: [
            "Mengembangkan platform digital untuk pencatatan penyetoran sampah daur ulang, pengelolaan poin nasabah, dan penukaran poin dengan hadiah",
            "Mengembangkan fitur pengajuan setor sampah, pemantauan status, histori transaksi, serta pengelolaan data melalui halaman admin",
            "Rekapitulasi tonase sampah bulanan",
        ],
        tech: ["Next.js", "NestJS", "TypeScript"],
        status: "Selesai",
        liveUrl: "https://bank-sampah-digital-one.vercel.app/",
        githubUrl: "https://github.com/graciellacode/bank-sampah-digital.git",
        image: "/projects/Screenshot 2026-09-23 142709.png",
    },
    {
        title: "Bankku — Platform Perbankan Digital",
        role: "Full Stack Developer",
        description:
            "Platform perbankan digital masa kini yang dirancang untuk memberikan kendali penuh atas masa depan finansial Anda dalam satu genggaman — terpercaya & diawasi OJK.",
        features: [
            "Sistem keamanan terpercaya & diawasi OJK",
            "Fitur pertumbuhan tabungan hingga +12.5%",
            "Manajemen saldo total & lacak transaksi terakhir",
            "Autentikasi login & pendaftaran akun yang aman",
        ],
        tech: ["Next.js", "NestJS", "TypeScript"],
        status: "Selesai",
        liveUrl: "https://bank-frontend-app-omega.vercel.app/",
        githubUrl: "https://github.com/graciellacode/bank-app.git",
        image: "/projects/Screenshot 2026-09-23 142639.png",
    },
];

// Explorations & Concepts: ide/rencana yang belum benar-benar dibangun.
export const explorations: Project[] = [
    {
        title: "SchoolTrack",
        role: "Konsep",
        description:
            "Konsep sistem manajemen sekolah untuk membantu siswa dan pihak sekolah mengelola informasi akademik secara efisien.",
        tech: ["Next.js", "NestJS"],
        status: "Konsep",
    },
    {
        title: "Skill Match",
        role: "Konsep",
        description:
            "Konsep platform pencocokan keterampilan siswa dengan peluang karir dan jalur pembelajaran yang sesuai.",
        tech: ["Next.js", "UI/UX"],
        status: "Konsep",
    },
];