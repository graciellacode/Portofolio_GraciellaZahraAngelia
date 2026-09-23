"use client";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
    );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    );
}

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    );
}

const socials = [
    {
        label: "GitHub",
        href: "https://github.com/graciellacode",
        icon: GithubIcon,
        bg: "bg-volt",
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/graciella-zahra-angelia-030562393/",
        icon: LinkedinIcon,
        bg: "bg-volt",
    },
    {
        label: "Email",
        href: "mailto:graciellazahraangelia2009@gmail.com",
        icon: MailIcon,
        bg: "bg-volt",
    },
];

export default function SocialSidebar() {
    return (
        <div className="hidden sm:flex flex-col gap-3 fixed left-3 top-1/2 -translate-y-1/2 z-50">
            {socials.map((social) => {
                const Icon = social.icon;
                return (
                    <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group ${social.bg} text-navy-ink h-14 w-14 hover:w-40 flex items-center overflow-hidden rounded-2xl border-2 border-navy-ink shadow-[4px_4px_0px_#0A0E23] hover:shadow-[6px_6px_0px_#0A0E23] hover:-translate-y-0.5 transition-all duration-300 ease-out`}
                    >
                        <span className="flex items-center justify-center w-14 h-14 shrink-0">
                            <Icon width={22} height={22} />
                        </span>
                        <span className="font-heading font-bold text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-100">
                            {social.label}
                        </span>
                    </a>
                );
            })}
        </div>
    );
}