export default function Footer() {
    return (
        <footer className="w-full bg-transparent border-t border-white/15 pt-12 pb-10">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                    <div className="col-span-2 sm:col-span-1">
                        <div className="flex rounded-full overflow-hidden font-heading font-bold text-sm w-fit mb-3">
                            <span className="bg-white text-navy-ink px-3 py-1.5">G</span>
                            <span className="bg-volt text-navy-ink px-3 py-1.5">Z</span>
                        </div>
                        <p className="font-body text-white/60 text-sm">
                            © 2026 Graciella Zahra Angelia.
                            <br />
                            Hak cipta dilindungi undang-undang.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-heading font-bold text-white text-sm tracking-wide mb-4">
                            NAVIGASI
                        </h4>
                        <ul className="space-y-2 font-body text-white/70 text-sm">
                            <li><a href="#home" className="hover:text-volt transition-colors">Beranda</a></li>
                            <li><a href="#about" className="hover:text-volt transition-colors">Tentang</a></li>
                            <li><a href="#projects" className="hover:text-volt transition-colors">Proyek</a></li>
                            <li><a href="#contact" className="hover:text-volt transition-colors">Kontak</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-heading font-bold text-white text-sm tracking-wide mb-4">
                            BIDANG MINAT
                        </h4>
                        <ul className="space-y-2 font-body text-white/70 text-sm">
                            <li>Frontend</li>
                            <li>Backend</li>
                            <li>Full-Stack</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-heading font-bold text-white text-sm tracking-wide mb-4">
                            MEDIA SOSIAL
                        </h4>
                        <ul className="space-y-2 font-body text-white/70 text-sm">
                            <li><a href="https://github.com/graciellacode" target="_blank" rel="noopener noreferrer" className="hover:text-volt transition-colors">GitHub</a></li>
                            <li><a href="https://www.linkedin.com/in/graciella-zahra-angelia-030562393/" target="_blank" rel="noopener noreferrer" className="hover:text-volt transition-colors">LinkedIn</a></li>
                            <li><a href="mailto:graciellazahraangelia2009@gmail.com" className="hover:text-volt transition-colors">Email</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}