import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Halo } from "@/components/ui/halo";
import { Reveal } from "@/components/ui/reveal";
import { FinalCTA } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "About — Sunshineone LLC",
  description:
    "Sunshineone LLC is a software development company in Leesburg, Alabama. We build custom websites, mobile apps, AI tools, and cloud systems for our clients.",
};

const values = [
  {
    title: "Honest about scope",
    body: "We tell you what we can and cannot do before the project starts. We do not overpromise.",
  },
  {
    title: "Senior engineers only",
    body: "The person you talk to is the person writing the code. We do not hand work off to junior staff after the contract is signed.",
  },
  {
    title: "Written plans",
    body: "Every project starts with a written plan that lists what we will build, how long it will take, and what it will cost.",
  },
  {
    title: "Clean handoffs",
    body: "When the project is done, you get the code, the documentation, and access to everything. No lock-in.",
  },
  // Values 05 and 06 commented out for 10DLC compliance
  // {
  //   title: "Ship to learn",
  //   body: "Production teaches things a design doc can't. We get to real users early and adjust faster than the competition.",
  // },
  // {
  //   title: "Leave it better",
  //   body: "When we hand off, your team should be more capable than we found them. Knowledge transfer is part of the build.",
  // },
];

// TIMELINE — commented out for 10DLC compliance (references fictional client and dates)
// const timeline = [
//   { year: "2019", title: "Founded", body: "Two engineers, one thesis: senior teams, embedded delivery." },
//   { year: "2021", title: "First enterprise client", body: "Helix Bank. Underwriting platform shipped in 16 weeks." },
//   { year: "2023", title: "AI practice launched", body: "Dedicated team for production LLM systems. First 10 wins inside a quarter." },
//   { year: "2026", title: "120+ engagements", body: "Teams across NA, EU, and South Asia. Same senior-first model." },
// ];

// LEADERSHIP — commented out for 10DLC compliance (fictional names — not real people)
// const leaders = [
//   { initials: "AR", name: "Aiden Rao", role: "Co-founder · CEO", bio: "Previously staff engineer at Stripe. Loves distributed systems and bad coffee." },
//   { initials: "ML", name: "Mira Leclerc", role: "Co-founder · CTO", bio: "Ex-Anthropic ML platform. Built the company's eval-first AI delivery framework." },
//   { initials: "JT", name: "Jonas Thurman", role: "VP · Platform", bio: "Cloud architect with FedRAMP, HIPAA, and SOC 2 reps. Quiet, exacting." },
//   { initials: "SO", name: "Sade Okonkwo", role: "VP · Design", bio: "Design systems at scale. Believes constraint is the parent of clarity." },
// ];

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
            <Eyebrow className="mb-6">About Us</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="h-display mb-7">
              About Sunshineone
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="lede max-w-[60ch]">
              Sunshineone LLC is a small software development company based in
              Leesburg, Alabama. We build custom software, websites, mobile
              apps, and AI tools for businesses across the United States.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-28">
        <div className="container">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
            <Reveal>
              <Eyebrow className="mb-4">01 · Our story</Eyebrow>
              <h2 className="h1 mb-6">Who We Are</h2>
              <p className="lede mb-5">
                Sunshineone LLC is a registered Alabama limited liability
                company. We work with businesses that need custom software
                built. Our clients come to us through referrals or by
                contacting us directly through this website.
              </p>
              <p className="lede">
                We are a small team. We do not run advertising campaigns. We do
                not buy or sell customer lists. We do not generate leads for
                other companies. We build software for the clients who hire us,
                and we use SMS only to communicate with those clients about
                their projects.
              </p>
            </Reveal>
            {/* Mission/Vision callouts — commented out for 10DLC compliance
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
            */}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-28">
        <div className="container">
          <Reveal>
            <div className="mb-16">
              <Eyebrow className="mb-4">02 · How we operate</Eyebrow>
              <h2 className="h1">How We Work</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2">
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

      {/* TIMELINE — commented out for 10DLC compliance (fictional client references)
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
      */}

      {/* LEADERSHIP — commented out for 10DLC compliance (fictional names, not real people)
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
      */}

      {/* CONTACT (replaces leadership section) */}
      <section className="py-28">
        <div className="container">
          <Reveal>
            <div className="mb-8">
              <Eyebrow className="mb-4">03 · Contact</Eyebrow>
              <h2 className="h1 mb-6">Contact</h2>
              <p className="lede max-w-[60ch]">
                Sunshineone LLC is owned and operated by James E Soden. For
                project inquiries, please use the contact form or email{" "}
                <a
                  href="mailto:contact@sunshineonellc.com"
                  className="text-brand-cyan hover:underline"
                >
                  contact@sunshineonellc.com
                </a>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GLOBAL PRESENCE — commented out for 10DLC compliance (claimed offices in SF, London, Berlin, Singapore — not accurate)
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
      */}

      {/* WHERE WE ARE (replaces Global Presence) */}
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
              <div className="relative">
                <Eyebrow className="mb-4">04 · Location</Eyebrow>
                <h2 className="h1 mb-6">Where We Are</h2>
                <p className="lede max-w-[60ch]">
                  Sunshineone LLC is based in Leesburg, Alabama. Our office
                  address is 2955 Weiss Lake Blvd, Leesburg, AL 35983. We work
                  with clients across the United States.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS BLOCK — commented out for 10DLC compliance (all values were zero counters)
      <section className="py-20">
        <div className="container">
          <Reveal>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <PresenceStat value={0} label="Engineers" />
              <PresenceStat value={0} label="Countries" />
              <PresenceStat value={0} suffix="%" label="Retention rate" />
              <PresenceStat value={0} label="Avg years experience" />
            </div>
          </Reveal>
        </div>
      </section>
      */}

      <FinalCTA
        eyebrow="Work with us"
        title="Want to Work With Us?"
        description="If you have a software project, send us a message. We will get back to you within one business day."
        primary={{ href: "/contact", label: "Contact us" }}
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

// OfficeChip and PresenceStat kept for reference — used by the commented-out global presence section
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
        {value}{suffix}
      </div>
      <div className="mt-3 font-mono text-[11px] uppercase tracking-[1.5px] text-ink-3">
        {label}
      </div>
    </div>
  );
}
