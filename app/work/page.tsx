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
  {
    tags: ["AI", "FinTech"],
    title: "Helix · Agentic underwriting platform",
    summary: "Replaced four legacy tools with a single AI-assisted workflow. 6-day decision cycle compressed into hours.",
    metrics: [["94%", "Cycle reduction"], ["$4.2M", "Annualized"], ["14w", "Ship time"]],
    illustration: (
      <>
        {/* Helix · Agentic underwriting */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 250" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="helixGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0066FF" /><stop offset="100%" stopColor="#00D4FF" />
            </linearGradient>
            <linearGradient id="helixAreaFade" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0066FF" stopOpacity="0.35" /><stop offset="100%" stopColor="#0066FF" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[60, 120, 180, 240, 300, 360].map((x) => (
            <line key={x} x1={x} y1="20" x2={x} y2="235" stroke="white" strokeOpacity="0.07" strokeWidth="1" />
          ))}
          {[70, 110, 150, 190].map((y) => (
            <line key={y} x1="30" y1={y} x2="370" y2={y} stroke="white" strokeOpacity="0.07" strokeWidth="1" />
          ))}
          <path d="M 40 215 C 110 200 160 170 210 140 C 260 110 305 82 360 58 L 360 240 L 40 240 Z" fill="url(#helixAreaFade)" />
          <path d="M 40 215 C 110 200 160 170 210 140 C 260 110 305 82 360 58" fill="none" stroke="url(#helixGrad)" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="360" cy="58" r="14" fill="#00D4FF" fillOpacity="0.15" />
          <circle cx="360" cy="58" r="5" fill="#00D4FF" />
          <circle cx="145" cy="95" r="5" fill="none" stroke="#00D4FF" strokeOpacity="0.7" strokeWidth="1.5" />
          <circle cx="220" cy="72" r="5" fill="none" stroke="#00D4FF" strokeOpacity="0.7" strokeWidth="1.5" />
          <circle cx="295" cy="50" r="5" fill="none" stroke="#00D4FF" strokeOpacity="0.7" strokeWidth="1.5" />
          <line x1="150" y1="95" x2="215" y2="72" stroke="#00D4FF" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="4 3" />
          <line x1="225" y1="72" x2="290" y2="50" stroke="#00D4FF" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="4 3" />
        </svg>
      </>
    ),
  },
  {
    tags: ["SaaS", "Healthcare"],
    title: "Vantage · HIPAA-grade patient platform",
    summary: "Multi-tenant platform serving 10M+ patient records across 200 clinics, with end-to-end HIPAA compliance.",
    metrics: [["10M+", "Records"], ["99.99%", "Uptime"], ["200", "Tenants"]],
    illustration: (
      <>
        {/* Vantage · HIPAA patient platform */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 250" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="vantageGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0066FF" /><stop offset="100%" stopColor="#00D4FF" />
            </linearGradient>
          </defs>
          {[80, 160, 240, 320].map((x) => (
            <line key={x} x1={x} y1="20" x2={x} y2="155" stroke="white" strokeOpacity="0.07" strokeWidth="1" />
          ))}
          {[70, 110, 150].map((y) => (
            <line key={y} x1="30" y1={y} x2="370" y2={y} stroke="white" strokeOpacity="0.07" strokeWidth="1" />
          ))}
          <path
            d="M 30 110 L 148 110 C 152 105 156 100 160 105 C 164 110 167 110 173 110 L 176 118 L 185 22 L 194 148 L 200 108 C 208 103 216 106 226 110 L 370 110"
            fill="none" stroke="#00E5A0" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
          />
          {Array.from({ length: 48 }, (_, k) => (
            <circle key={k} cx={42 + (k % 16) * 21} cy={182 + Math.floor(k / 16) * 14} r="2.5" fill="white" fillOpacity="0.18" />
          ))}
        </svg>
      </>
    ),
  },
  {
    tags: ["Enterprise"],
    title: "Octo · CI/CD platform overhaul",
    summary: "Cut deployment time from 4 hours to 7 minutes across 80+ microservices, with zero failed rollouts since launch.",
    metrics: [["34x", "Faster ships"], ["0", "Failures"], ["80+", "Services"]],
    illustration: (
      <>
        {/* Octo · CI/CD deployment pipeline */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 250" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="octoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0066FF" /><stop offset="100%" stopColor="#00D4FF" />
            </linearGradient>
            <radialGradient id="octoGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.45" /><stop offset="100%" stopColor="#00D4FF" stopOpacity="0" />
            </radialGradient>
          </defs>
          <line x1="67"  y1="118" x2="119" y2="118" stroke="url(#octoGrad)" strokeWidth="1.5" strokeOpacity="0.6" />
          <line x1="143" y1="118" x2="195" y2="118" stroke="url(#octoGrad)" strokeWidth="1.5" strokeOpacity="0.6" />
          <line x1="219" y1="118" x2="271" y2="118" stroke="url(#octoGrad)" strokeWidth="1.5" strokeOpacity="0.6" />
          <line x1="295" y1="118" x2="333" y2="118" stroke="url(#octoGrad)" strokeWidth="1.5" strokeOpacity="0.6" />
          {[55, 131, 207, 283].map((x) => (
            <circle key={x} cx={x} cy="118" r="12" fill="none" stroke="url(#octoGrad)" strokeWidth="1.5" />
          ))}
          <circle cx="347" cy="118" r="26" fill="url(#octoGlow)" />
          <circle cx="347" cy="118" r="14" fill="none" stroke="url(#octoGrad)" strokeWidth="2" />
          <circle cx="347" cy="118" r="5"  fill="url(#octoGrad)" />
          {[{ x: 55, l: "build" }, { x: 131, l: "test" }, { x: 207, l: "deploy" }, { x: 283, l: "verify" }, { x: 347, l: "live" }].map(({ x, l }) => (
            <text key={l} x={x} y="146" textAnchor="middle" fill="white" fillOpacity="0.45" fontSize="8" fontFamily="monospace">{l}</text>
          ))}
        </svg>
      </>
    ),
  },
  {
    tags: ["E-commerce", "SaaS"],
    title: "Brightline · Storefront re-platforming",
    summary: "Headless commerce migration for a $200M GMV retailer. Page load times cut by 71%, conversion lifted 18%.",
    metrics: [["+18%", "Conversion"], ["-71%", "Load time"], ["$36M", "Rev impact"]],
    illustration: (
      <>
        {/* Brightline · Conversion funnel */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 250" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="brightlineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0066FF" /><stop offset="100%" stopColor="#00D4FF" />
            </linearGradient>
          </defs>
          <rect x="68" y="68"  width="265" height="24" rx="4" fill="url(#brightlineGrad)" fillOpacity="0.80" />
          <rect x="68" y="112" width="90"  height="24" rx="4" fill="url(#brightlineGrad)" fillOpacity="0.65" />
          <rect x="68" y="156" width="48"  height="24" rx="4" fill="url(#brightlineGrad)" fillOpacity="0.50" />
          <text x="58" y="85"  textAnchor="end" fill="white" fillOpacity="0.45" fontSize="9" fontFamily="monospace">visit</text>
          <text x="58" y="129" textAnchor="end" fill="white" fillOpacity="0.45" fontSize="9" fontFamily="monospace">cart</text>
          <text x="58" y="173" textAnchor="end" fill="white" fillOpacity="0.45" fontSize="9" fontFamily="monospace">buy</text>
          <text x="342" y="85"  fill="white" fillOpacity="0.65" fontSize="9" fontFamily="monospace">100%</text>
          <text x="167" y="129" fill="white" fillOpacity="0.65" fontSize="9" fontFamily="monospace">34%</text>
          <text x="125" y="173" fill="white" fillOpacity="0.65" fontSize="9" fontFamily="monospace">18%</text>
        </svg>
      </>
    ),
  },
  {
    tags: ["AI", "Enterprise"],
    title: "Forma · Knowledge agent for field operations",
    summary: "Voice-first AI assistant deployed to 3,400 field technicians, grounded on 14 years of internal documentation.",
    metrics: [["3,400", "Field users"], ["41%", "Faster jobs"], ["8w", "To prod"]],
    illustration: (
      <>
        {/* Forma · Voice AI waveform */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 250" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="formaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0066FF" /><stop offset="100%" stopColor="#00D4FF" />
            </linearGradient>
          </defs>
          {[15, 20, 28, 40, 54, 68, 80, 92, 102, 108, 112, 114, 114, 112, 108, 102, 92, 80, 68, 54, 40, 28, 20, 15].map((h, i) => (
            <rect key={i} x={71 + i * 11} y={125 - h / 2} width="6" height={h} rx="3" fill="url(#formaGrad)" />
          ))}
        </svg>
      </>
    ),
  },
  {
    tags: ["FinTech", "SaaS"],
    title: "Noda · Real-time payments rail",
    summary: "Built a real-time payment processing platform handling 42M monthly transactions with sub-200ms latency.",
    metrics: [["42M", "Tx / month"], ["180ms", "p95 latency"], ["PCI L1", "Compliance"]],
    illustration: (
      <>
        {/* Noda · Payment routing network */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 250" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="nodaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0066FF" /><stop offset="100%" stopColor="#00D4FF" />
            </linearGradient>
            <radialGradient id="nodaGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.4" /><stop offset="100%" stopColor="#00D4FF" stopOpacity="0" />
            </radialGradient>
          </defs>
          {[[105, 72], [302, 68], [335, 168], [255, 205], [132, 202], [72, 152]].map(([x, y], i) => (
            <line key={`s${i}`} x1="200" y1="122" x2={x} y2={y} stroke="url(#nodaGrad)" strokeOpacity="0.35" strokeWidth="1" />
          ))}
          <line x1="105" y1="72"  x2="302" y2="68"  stroke="url(#nodaGrad)" strokeOpacity="0.18" strokeWidth="1" />
          <line x1="302" y1="68"  x2="335" y2="168" stroke="url(#nodaGrad)" strokeOpacity="0.18" strokeWidth="1" />
          <line x1="72"  y1="152" x2="132" y2="202" stroke="url(#nodaGrad)" strokeOpacity="0.18" strokeWidth="1" />
          {[[105, 72], [302, 68], [335, 168], [255, 205], [132, 202], [72, 152]].map(([x, y], i) => (
            <circle key={`n${i}`} cx={x} cy={y} r="6" fill="none" stroke="url(#nodaGrad)" strokeWidth="1.5" />
          ))}
          <circle cx="200" cy="122" r="30" fill="url(#nodaGlow)" />
          <circle cx="200" cy="122" r="14" fill="none" stroke="url(#nodaGrad)" strokeWidth="2" />
          <circle cx="200" cy="122" r="5.5" fill="url(#nodaGrad)" />
        </svg>
      </>
    ),
  },
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
                    {c.illustration}
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
