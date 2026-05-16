"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Halo } from "@/components/ui/halo";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { FinalCTA } from "@/components/sections/final-cta";

const filters = ["All", "AI", "SaaS", "FinTech", "Healthcare", "E-commerce", "Enterprise"];

const cases = [
  { tags: ["AI", "FinTech"], title: "Helix · Agentic underwriting platform", summary: "Replaced four legacy tools with a single AI-assisted workflow. 6-day decision cycle compressed into hours.", metrics: [["94%", "Cycle reduction"], ["$4.2M", "Annualized"], ["14w", "Ship time"]] },
  { tags: ["SaaS", "Healthcare"], title: "Vantage · HIPAA-grade patient platform", summary: "Multi-tenant platform serving 10M+ patient records across 200 clinics, with end-to-end HIPAA compliance.", metrics: [["10M+", "Records"], ["99.99%", "Uptime"], ["200", "Tenants"]] },
  { tags: ["Enterprise"], title: "Octo · CI/CD platform overhaul", summary: "Cut deployment time from 4 hours to 7 minutes across 80+ microservices, with zero failed rollouts since launch.", metrics: [["34x", "Faster ships"], ["0", "Failures"], ["80+", "Services"]] },
  { tags: ["E-commerce", "SaaS"], title: "Brightline · Storefront re-platforming", summary: "Headless commerce migration for a $200M GMV retailer. Page load times cut by 71%, conversion lifted 18%.", metrics: [["+18%", "Conversion"], ["-71%", "Load time"], ["$36M", "Rev impact"]] },
  { tags: ["AI", "Enterprise"], title: "Forma · Knowledge agent for field operations", summary: "Voice-first AI assistant deployed to 3,400 field technicians, grounded on 14 years of internal documentation.", metrics: [["3,400", "Field users"], ["41%", "Faster jobs"], ["8w", "To prod"]] },
  { tags: ["FinTech", "SaaS"], title: "Noda · Real-time payments rail", summary: "Built a real-time payment processing platform handling 42M monthly transactions with sub-200ms latency.", metrics: [["42M", "Tx / month"], ["180ms", "p95 latency"], ["PCI L1", "Compliance"]] },
];

export default function WorkPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? cases : cases.filter((c) => c.tags.includes(active));

  return (
    <>
      <section className="relative overflow-hidden pb-20 pt-44">
        <Halo className="-right-24 -top-52" />
        <div className="container relative">
          <Reveal>
            <div className="mb-8 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[1.5px] text-ink-3">
              <Link href="/" className="hover:text-ink">Home</Link>
              <ChevronRight className="h-3 w-3 text-muted" />
              <span>Work</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <Eyebrow className="mb-6">Case studies</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="h-display mb-7">
              Outcomes you can <span className="accent-text">point to.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="lede max-w-[60ch]">
              A selected sample of our work. Each engagement shipped to
              production, instrumented, and measured. The numbers below are what
              our clients actually saw — not aspirational.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="container">
          <div className="mb-10 flex flex-wrap gap-2 border-b border-line pb-7">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={cn(
                  "rounded-full border px-4 py-2 font-mono text-[11.5px] uppercase tracking-[1.2px] transition-all",
                  active === f
                    ? "border-transparent bg-brand-gradient text-white"
                    : "border-line text-ink-3 hover:border-line-strong hover:bg-white/5 hover:text-ink"
                )}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {filtered.map((c, i) => (
              <Reveal key={c.title} delay={(i % 2) * 0.08}>
                <Link
                  href="#"
                  className="card-surface flex min-h-[440px] flex-col overflow-hidden p-0 transition-all hover:-translate-y-0.5"
                >
                  <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br from-[#0F1F38] to-[#051026]">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0"
                      style={{
                        background:
                          "radial-gradient(circle at 30% 40%, rgba(0,102,255,0.25), transparent 60%)",
                      }}
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-8">
                    <div className="flex flex-wrap gap-2">
                      {c.tags.map((t) => <Badge key={t}>{t}</Badge>)}
                    </div>
                    <h3 className="text-[22px] font-semibold leading-tight tracking-[-0.7px]">
                      {c.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink-3">{c.summary}</p>
                    <div className="mt-auto flex gap-6 border-t border-line pt-4.5">
                      {c.metrics.map(([num, lbl]) => (
                        <div key={lbl}>
                          <div className="accent-text text-xl font-semibold tracking-[-0.6px]">{num}</div>
                          <div className="mt-1 font-mono text-[10px] uppercase tracking-[1.5px] text-ink-3">{lbl}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        eyebrow="Your project, next"
        title={<>What should we <span className="accent-text">build with you?</span></>}
        primary={{ href: "/contact", label: "Start a conversation" }}
      />
    </>
  );
}
