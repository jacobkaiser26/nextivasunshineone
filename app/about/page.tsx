import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Halo } from "@/components/ui/halo";
import { Reveal } from "@/components/ui/reveal";
import { Counter } from "@/components/ui/counter";
import { FinalCTA } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Sunshineone is a software consulting and digital transformation studio. Meet the team and the principles behind the work.",
};

const values = [
  { title: "Senior or nothing", body: "Every engineer who touches client code has shipped production systems at scale. No bait-and-switch staffing." },
  { title: "Outcomes over hours", body: "We bill for results, not timesheets. Engagements are scoped to milestones our clients can defend to a board." },
  { title: "Decisions in writing", body: "Every architectural call is documented as an ADR. Future-you should never have to guess why past-us made a choice." },
  { title: "Boring where it counts", body: "We don't chase frameworks. We pick the boring, battle-tested stack for everything that doesn't need to be novel." },
  { title: "Ship to learn", body: "Production teaches things a design doc can't. We get to real users early and adjust faster than the competition." },
  { title: "Leave it better", body: "When we hand off, your team should be more capable than we found them. Knowledge transfer is part of the build." },
];

const timeline = [
  { year: "2019", title: "Founded", body: "Two engineers, one thesis: senior teams, embedded delivery." },
  { year: "2021", title: "First enterprise client", body: "Helix Bank. Underwriting platform shipped in 16 weeks." },
  { year: "2023", title: "AI practice launched", body: "Dedicated team for production LLM systems. First 10 wins inside a quarter." },
  { year: "2026", title: "120+ engagements", body: "Teams across NA, EU, and South Asia. Same senior-first model." },
];

const leaders = [
  { initials: "AR", name: "Aiden Rao", role: "Co-founder · CEO", bio: "Previously staff engineer at Stripe. Loves distributed systems and bad coffee." },
  { initials: "ML", name: "Mira Leclerc", role: "Co-founder · CTO", bio: "Ex-Anthropic ML platform. Built the company's eval-first AI delivery framework." },
  { initials: "JT", name: "Jonas Thurman", role: "VP · Platform", bio: "Cloud architect with FedRAMP, HIPAA, and SOC 2 reps. Quiet, exacting." },
  { initials: "SO", name: "Sade Okonkwo", role: "VP · Design", bio: "Design systems at scale. Believes constraint is the parent of clarity." },
];

export default function AboutPage() {
  return (
    <>
      {/* HEADER */}
      <section className="relative overflow-hidden pb-20 pt-44">
        <Halo className="-right-24 -top-52" />
        <div className="container relative">
          <Reveal>
            <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "About" }]} />
          </Reveal>
          <Reveal delay={0.05}>
            <Eyebrow className="mb-6">The company</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="h-display mb-7">
              We&apos;re engineers who happened to{" "}
              <span className="accent-text">start a firm.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="lede max-w-[60ch]">
              Sunshineone was founded by senior engineers who&apos;d watched too
              many transformation programs fail at the seams between strategy
              and execution. We built the firm we&apos;d have wanted as
              clients: small, senior, accountable, technical.
            </p>
          </Reveal>
        </div>
      </section>

      {/* STORY + MISSION/VISION */}
      <section className="py-28">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <Reveal>
              <Eyebrow className="mb-4">01 · Our story</Eyebrow>
              <h2 className="h1 mb-6">
                Founded in 2019. Built around a thesis that hasn&apos;t changed.
              </h2>
              <p className="lede mb-5">
                Most &quot;digital transformation&quot; fails because it&apos;s
                run by people who don&apos;t ship code. We started Sunshineone with
                a different premise: hire only senior engineers, deliver in
                two-week increments, and stay accountable to production
                outcomes — not slide decks.
              </p>
              <p className="lede">
                Five years and 120+ engagements later, the thesis is intact. The
                work has only gotten more interesting as AI rewires what
                software can do.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-5">
                <div className="card-surface p-8">
                  <Eyebrow className="mb-4">Mission</Eyebrow>
                  <p className="text-[18px] leading-snug tracking-[-0.3px]">
                    To engineer the systems that compound advantage for the
                    businesses brave enough to invest in them.
                  </p>
                </div>
                <div className="card-surface p-8">
                  <Eyebrow className="mb-4">Vision</Eyebrow>
                  <p className="text-[18px] leading-snug tracking-[-0.3px]">
                    A world where every ambitious team — regardless of geography
                    — has access to the kind of engineering bench that used to
                    be reserved for FAANG.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-28">
        <div className="container">
          <Reveal>
            <div className="mb-16">
              <Eyebrow className="mb-4">02 · How we operate</Eyebrow>
              <h2 className="h1">Six values, non-negotiable.</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="card-surface p-8">
                  <div className="mb-4 font-mono text-xs tracking-[2px] text-brand-cyan">
                    / 0{i + 1}
                  </div>
                  <h3 className="h3 mb-2.5">{v.title}</h3>
                  <p className="text-[14.5px] leading-relaxed text-ink-3">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-28">
        <div className="container">
          <div className="mb-16 grid grid-cols-1 items-end gap-6 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <Eyebrow className="mb-4">03 · Journey</Eyebrow>
              <h2 className="h1">From two engineers to a global studio.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lede lg:ml-auto lg:max-w-[460px]">
                We grew on purpose. Slowly. Hiring only when we found the right
                person, never when we needed the headcount.
              </p>
            </Reveal>
          </div>
          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {timeline.map((t, i) => (
                <div
                  key={t.year}
                  className={`border-t border-line p-8 ${
                    i < timeline.length - 1 ? "lg:border-r" : ""
                  }`}
                >
                  <div className="mb-4 font-mono text-[11px] tracking-[2px] text-brand-cyan">
                    {t.year}
                  </div>
                  <h4 className="mb-2 text-[18px] font-semibold tracking-[-0.3px]">
                    {t.title}
                  </h4>
                  <p className="text-[13.5px] leading-relaxed text-ink-3">{t.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-28">
        <div className="container">
          <Reveal>
            <div className="mb-16">
              <Eyebrow className="mb-4">04 · Leadership</Eyebrow>
              <h2 className="h1">Engineers leading engineers.</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {leaders.map((l, i) => (
              <Reveal key={l.initials} delay={i * 0.06}>
                <div className="card-surface overflow-hidden p-0">
                  <div className="flex aspect-square items-center justify-center bg-gradient-to-br from-[#0F1F38] to-[#051026] text-[64px] font-bold tracking-[-3px] text-brand-cyan">
                    {l.initials}
                  </div>
                  <div className="p-6">
                    <h4 className="text-base font-semibold tracking-[-0.3px]">{l.name}</h4>
                    <div className="mt-1 font-mono text-[10.5px] uppercase tracking-wide text-ink-3">
                      {l.role}
                    </div>
                    <p className="mt-3 text-[13px] leading-relaxed text-ink-3">{l.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL PRESENCE */}
      <section className="py-28">
        <div className="container">
          <Reveal>
            <div className="relative overflow-hidden rounded-xl border border-line bg-gradient-to-br from-bg-2 to-[#051026] p-10 lg:p-16">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-[10%] -top-[50%] h-[600px] w-[600px] blur-[60px]"
                style={{
                  background:
                    "radial-gradient(circle, rgba(0,102,255,0.25), transparent 60%)",
                }}
              />
              <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                <div>
                  <Eyebrow className="mb-4">05 · Global presence</Eyebrow>
                  <h2 className="h1 mb-6">
                    Distributed by design. Senior in every timezone.
                  </h2>
                  <p className="lede mb-9">
                    Offices in San Francisco, London, Berlin, and Singapore —
                    supported by remote senior engineers across 14 countries. We
                    staff every engagement with at least 4 hours of overlap with
                    your team.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <OfficeChip region="HQ · Americas" location="San Francisco" />
                    <OfficeChip region="Europe" location="London · Berlin" />
                    <OfficeChip region="APAC" location="Singapore" />
                    <OfficeChip region="Distributed" location="14 countries" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <PresenceStat value={42} label="Engineers" />
                  <PresenceStat value={14} label="Countries" />
                  <PresenceStat value={98} suffix="%" label="Retention rate" />
                  <PresenceStat value={11} label="Avg years experience" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCTA
        eyebrow="Work with us"
        title={<>Bring us the <span className="accent-text">hard problem.</span></>}
        description="If you're solving something genuinely difficult, we want to hear about it."
        primary={{ href: "/contact", label: "Get in touch" }}
        secondary={{ href: "/work", label: "See our work" }}
      />
    </>
  );
}

function Breadcrumbs({ items }: { items: { href?: string; label: string }[] }) {
  return (
    <div className="mb-8 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[1.5px] text-ink-3">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          {item.href ? (
            <Link href={item.href} className="hover:text-ink">
              {item.label}
            </Link>
          ) : (
            <span>{item.label}</span>
          )}
          {i < items.length - 1 && <ChevronRight className="h-3 w-3 text-muted" />}
        </span>
      ))}
    </div>
  );
}

function OfficeChip({ region, location }: { region: string; location: string }) {
  return (
    <div className="rounded-md border border-line p-5">
      <div className="mb-2 font-mono text-[11px] uppercase tracking-[1.5px] text-ink-3">
        {region}
      </div>
      <div className="text-[17px] font-semibold">{location}</div>
    </div>
  );
}

function PresenceStat({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  return (
    <div className="rounded-lg border border-line bg-white/[0.025] p-7">
      <div className="accent-text text-[clamp(36px,4.5vw,52px)] font-bold leading-none tracking-[-2px]">
        <Counter value={value} suffix={suffix} />
      </div>
      <div className="mt-3 font-mono text-[11px] uppercase tracking-[1.5px] text-ink-3">
        {label}
      </div>
    </div>
  );
}
