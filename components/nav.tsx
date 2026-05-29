"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/logo";

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed left-0 right-0 top-0 z-50 border-b border-transparent py-[18px] transition-all duration-300",
        scrolled &&
          "border-line bg-bg/[0.78] backdrop-blur-xl"
      )}
    >
      <div className="container flex items-center justify-between">
        <Logo />

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-ink"
                    : "text-ink-2 hover:bg-white/5 hover:text-ink"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2.5">
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-[10px] bg-brand-gradient px-5 py-2.5 text-sm font-medium text-white shadow-[0_8px_24px_-8px_rgba(0,102,255,0.55),inset_0_1px_0_rgba(255,255,255,0.15)] transition-all hover:-translate-y-px hover:shadow-[0_14px_36px_-8px_rgba(0,102,255,0.65),inset_0_1px_0_rgba(255,255,255,0.2)] sm:inline-flex"
          >
            Contact
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-line md:hidden"
            aria-label="Menu"
          >
            {mobileOpen ? (
              <X className="h-[18px] w-[18px]" />
            ) : (
              <Menu className="h-[18px] w-[18px]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="container mt-4 flex flex-col gap-1 border-t border-line pt-4 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3.5 py-3 text-sm font-medium text-ink-2 transition-colors hover:bg-white/5 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
