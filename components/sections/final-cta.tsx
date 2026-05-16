import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";

interface FinalCTAProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}

export function FinalCTA({
  eyebrow = "Ready when you are",
  title,
  description,
  primary = { href: "/contact", label: "Book a consultation" },
  secondary,
}: FinalCTAProps) {
  return (
    <section className="py-20">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-xl border border-line bg-gradient-to-br from-[#061233] to-[#0A1628] px-7 py-16 text-center sm:px-12 lg:px-20 lg:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 50% 0%, rgba(0,102,255,0.3), transparent 60%)",
              }}
            />
            <div className="relative">
              <div className="mb-6 flex justify-center">
                <Eyebrow centered>{eyebrow}</Eyebrow>
              </div>
              <h2 className="mx-auto mb-5 max-w-[22ch] text-[clamp(36px,5vw,68px)] font-bold leading-[1.05] tracking-[-2.5px]">
                {title}
              </h2>
              {description && (
                <p className="mx-auto mb-9 max-w-[56ch] text-[clamp(17px,1.4vw,19px)] leading-snug text-ink-2">
                  {description}
                </p>
              )}
              <div className="flex flex-wrap justify-center gap-3">
                <Button asChild size="lg">
                  <Link href={primary.href}>
                    {primary.label}
                    <ArrowRight className="h-[18px] w-[18px]" />
                  </Link>
                </Button>
                {secondary && (
                  <Button asChild variant="ghost" size="lg">
                    <Link href={secondary.href}>{secondary.label}</Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
