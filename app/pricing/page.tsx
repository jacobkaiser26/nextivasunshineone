import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Halo } from "@/components/ui/halo";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { FinalCTA } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent engagement pricing — fixed scope, embedded team, and fractional leadership.",
};

const tiers = [
  {
    name: "Startup",
    price: "$28k",
    period: "starting at",
    tagline: "Validated MVP to production launch. For seed-to-Series A teams.",
    features: [
      "1 senior engineer + 1 designer",
      "8-week milestone-based engagement",
      "Architecture decisions logged as ADRs",
      "CI/CD + observability baked in",
      "Handoff with runbooks & training",
    ],
    cta: "Start with Startup",
  },
  {
    name: "Growth",
    price: "$45k",
    period: "/ month",
    tagline: "Embedded senior team for product-stage scale-ups.",
    features: [
      "Dedicated team of 3 senior engineers",
      "Monthly retainer, rolling commitment",
      "Bi-weekly demos, async updates daily",
      "Fractional architectural review",
      "SOC 2 / HIPAA-ready stacks",
      "Production on-call rotation available",
    ],
    cta: "Choose Growth",
    featured: true,
    badge: "Most popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    tagline: "Multi-team programs, regulated industries, complex integrations.",
    features: [
      "Custom team composition",
      "Multi-quarter program planning",
      "Mutual NDA, DPA, BAA on day one",
      "Dedicated principal architect",
      "Quarterly executive reviews",
      "FedRAMP / PCI / ISO 27001 environments",
      "24/7 incident support",
    ],
    cta: "Talk to sales",
  },
];

const comparison = [
  { feature: "Senior engineers only", startup: true, growth: true, enterprise: true },
  { feature: "ADR-based decisions", startup: true, growth: true, enterprise: true },
  { feature: "Code in your repos from day 1", startup: true, growth: true, enterprise: true },
  { feature: "Dedicated team", startup: false, growth: true, enterprise: true },
  { feature: "Fractional architect", startup: false, growth: true, enterprise: true },
  { feature: "Principal architect", startup: false, growth: false, enterprise: true },
  { feature: "On-call rotation", startup: false, growth: "Optional", enterprise: true },
  { feature: "Regulated compliance (HIPAA, FedRAMP)", startup: false, growth: true, enterprise: true },
  { feature: "Executive QBRs", startup: false, growth: false, enterprise: true },
];

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-20 pt-44">
        <Halo className="-right-24 -top-52" />
        <div className="container relative">
          <Reveal>
            <div className="mb-8 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[1.5px] text-ink-3">
              <Link href="/" className="hover:text-ink">Home</Link>
              <ChevronRight className="h-3 w-3 text-muted" />
              <span>Pricing</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}><Eyebrow className="mb-6">Engagement pricing</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h1 className="h-display mb-7">
              Honest pricing, <span className="accent-text">no surprises.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="lede max-w-[60ch]">
              Three engagement shapes covering 90% of the work we do. If your
              project doesn&apos;t fit, the Enterprise tier is built for that.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {tiers.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <div
                  className={cn(
                    "relative flex h-full flex-col rounded-xl border p-10",
                    t.featured
                      ? "border-brand-blue/35 bg-gradient-to-b from-[#0E1E3D] to-[#051026] shadow-[0_0_60px_rgba(0,102,255,0.12)]"
                      : "border-line bg-white/[0.025]"
                  )}
                >
                  {t.badge && (
                    <div className="absolute -top-3 left-10 rounded-full bg-brand-gradient px-3.5 py-1.5 font-mono text-[10.5px] font-semibold uppercase tracking-[1.5px] text-white">
                      {t.badge}
                    </div>
                  )}
                  <div className="font-mono text-sm uppercase tracking-[1.5px] text-ink-3">
                    {t.name}
                  </div>
                  <div className="mt-4 flex items-baseline gap-2">
                    <div className="text-[56px] font-bold leading-none tracking-[-2.5px]">
                      {t.price}
                    </div>
                    {t.period && <div className="text-[15px] text-ink-3">{t.period}</div>}
                  </div>
                  <p className="mb-8 mt-2 min-h-[42px] text-sm text-ink-3">{t.tagline}</p>
                  <ul className="mb-9 flex-1 space-y-3.5">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-ink-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant={t.featured ? "default" : "ghost"} size="lg">
                    <Link href="/contact">
                      {t.cta}
                      <ArrowRight className="h-[18px] w-[18px]" />
                    </Link>
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="py-28">
        <div className="container">
          <Reveal>
            <div className="mb-12 text-center">
              <Eyebrow centered className="mb-4">Comparison</Eyebrow>
              <h2 className="h1">What&apos;s included.</h2>
            </div>
          </Reveal>
          <Reveal>
            <div className="overflow-x-auto rounded-lg border border-line">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-line bg-white/[0.02]">
                    <th className="p-5 text-left font-mono text-[11px] uppercase tracking-[1.5px] text-ink-3">Feature</th>
                    <th className="p-5 text-center font-mono text-[11px] uppercase tracking-[1.5px] text-ink-3">Startup</th>
                    <th className="p-5 text-center font-mono text-[11px] uppercase tracking-[1.5px] text-brand-cyan">Growth</th>
                    <th className="p-5 text-center font-mono text-[11px] uppercase tracking-[1.5px] text-ink-3">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row) => (
                    <tr key={row.feature} className="border-b border-line last:border-b-0">
                      <td className="p-5 text-sm text-ink-2">{row.feature}</td>
                      <ComparisonCell value={row.startup} />
                      <ComparisonCell value={row.growth} />
                      <ComparisonCell value={row.enterprise} />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CUSTOM QUOTE */}
      <section className="py-20">
        <div className="container">
          <Reveal>
            <div className="card-surface flex flex-col items-start justify-between gap-6 p-10 lg:flex-row lg:items-center">
              <div>
                <Eyebrow className="mb-3">Custom quote</Eyebrow>
                <h3 className="text-[28px] font-bold tracking-[-1.2px]">
                  Something more bespoke?
                </h3>
                <p className="mt-2 text-ink-3">
                  Tell us about the scope. We&apos;ll send a fixed quote within 5 business days.
                </p>
              </div>
              <Button asChild size="lg">
                <Link href="/contact">
                  Request a quote <ArrowRight className="h-[18px] w-[18px]" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCTA
        eyebrow="Still deciding"
        title={<>Talk to an <span className="accent-text">actual engineer.</span></>}
        description="Skip the sales call. We'll put you on a 30-minute call with the person who would lead your engagement."
      />
    </>
  );
}

function ComparisonCell({ value }: { value: boolean | string }) {
  if (typeof value === "string") {
    return <td className="p-5 text-center font-mono text-xs text-ink-3">{value}</td>;
  }
  return (
    <td className="p-5 text-center">
      {value ? (
        <Check className="mx-auto h-4 w-4 text-brand-cyan" />
      ) : (
        <span className="text-muted">—</span>
      )}
    </td>
  );
}
