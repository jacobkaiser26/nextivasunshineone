import Link from "next/link";
import { Linkedin, Github } from "lucide-react";
import { Logo } from "@/components/ui/logo";

const services = [
  { href: "/services", label: "AI & Automation" },
  { href: "/services", label: "Software Engineering" },
  { href: "/services", label: "DevOps & Cloud" },
  { href: "/services", label: "Cybersecurity" },
  { href: "/services", label: "Mobile Apps" },
];

const company = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  // { href: "/work", label: "Case studies" },  // hidden for 10DLC compliance
];

const resources = [
  // { href: "/pricing", label: "Pricing" },  // hidden for 10DLC compliance
  { href: "#", label: "Security" },
  { href: "#", label: "Brand" },
];

const legal = [
  { href: "/privacy", label: "Privacy policy" },
  { href: "/terms", label: "Terms & conditions" },
  { href: "#", label: "Cookie policy" },
];

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h5 className="mb-5 font-mono text-[11px] uppercase tracking-[1.8px] text-ink-3">
        {title}
      </h5>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="text-sm text-ink-2 transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mt-0 border-t border-line pb-10 pt-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 border-b border-line pb-14 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] lg:gap-12">
          <div className="max-w-sm lg:col-span-1">
            <Logo className="mb-5" />
            <p className="mb-6 text-sm leading-relaxed text-ink-3">
              Sunshineone LLC is a software development company based in
              Leesburg, Alabama. We build websites, mobile apps, AI tools, and
              cloud systems for our clients.
            </p>
            <div className="space-y-1.5 font-mono text-[11.5px] tracking-wide text-muted">
              <div>
                <a
                  href="mailto:contact@sunshineonellc.com"
                  className="transition-colors hover:text-ink"
                >
                  contact@sunshineonellc.com
                </a>
              </div>
              <div>
                <span className="text-ink-3">Customer support</span> ·{" "}
                <a
                  href="tel:+13527029127"
                  className="transition-colors hover:text-ink"
                >
                  (352) 702-9127
                </a>
              </div>
              <div className="mt-3 leading-relaxed not-italic">
                2955 Weiss Lake Blvd
                <br />
                Leesburg, AL 35983, USA
              </div>
            </div>
          </div>
          <FooterCol title="Services" links={services} />
          <FooterCol title="Company" links={company} />
          <FooterCol title="Resources" links={resources} />
          <FooterCol title="Legal" links={legal} />
        </div>

        <div className="flex flex-col items-start justify-between gap-4 pt-7 font-mono text-[11.5px] tracking-wide text-muted sm:flex-row sm:items-center">
          <div>
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-success shadow-[0_0_8px_#00E5A0]" />
            All systems operational · © 2026 SUNSHINEONE LLC.
          </div>
          <div className="flex gap-2">
            <Link
              href="#"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-ink-3 transition-all hover:border-line-strong hover:bg-white/5 hover:text-ink"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link
              href="#"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-ink-3 transition-all hover:border-line-strong hover:bg-white/5 hover:text-ink"
            >
              <Github className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
