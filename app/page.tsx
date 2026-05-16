import Link from "next/link";
import {
  ArrowRight,
  Check,
  Sparkles,
  Code2,
  Cloud,
  Shield,
  Smartphone,
  Globe,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Halo } from "@/components/ui/halo";
import { Reveal } from "@/components/ui/reveal";
import { Counter } from "@/components/ui/counter";
import { Terminal } from "@/components/ui/terminal";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { FinalCTA } from "@/components/sections/final-cta";

const services = [
  {
    icon: Sparkles,
    title: "AI & Automation",
    body: "Production-grade LLM systems, agentic workflows, intelligent pipelines, and process automation that compound efficiency over time.",
  },
  {
    icon: Code2,
    title: "Custom Software Engineering",
    body: "Enterprise-grade applications, internal tools, and platforms — engineered with the discipline of a product company and the velocity of a startup.",
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud Engineering",
    body: "Resilient infrastructure on AWS, GCP, and Azure. CI/CD pipelines, observability, IaC, and Kubernetes operations that scale predictably.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    body: "Threat modeling, SOC 2 readiness, penetration testing, identity architecture, and continuous security across cloud and application layers.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    body: "iOS, Android, and cross-platform apps with React Native and Flutter — fast, accessible, and tightly integrated with backend systems.",
  },
  {
    icon: Globe,
    title: "Digital Transformation",
    body: "Strategy and execution for organizations modernizing legacy stacks, data infrastructure, and operating models for the AI era.",
  },
];

const processSteps = [
  {
    title: "Discover",
    body: "We embed with stakeholders, audit systems, and define success metrics. Output: a clear north-star and a phased plan.",
  },
  {
    title: "Design",
    body: "Architecture, UX, and data flows mapped end-to-end. Risk surfaced early, tradeoffs documented, decisions logged.",
  },
  {
    title: "Build",
    body: "Senior engineers ship in 2-week sprints with continuous demos. Code reviewed, tested, and instrumented from day one.",
  },
  {
    title: "Scale",
    body: "Production hardening, observability, and a handoff plan — or we stay on as your platform partner. Your choice.",
  },
];

const techStack = [
  "TypeScript", "Python", "Go", "Rust", "React", "Next.js",
  "Node.js", "PostgreSQL", "Redis", "Kafka", "Kubernetes", "Terraform",
  "AWS", "GCP", "Azure", "Snowflake", "Anthropic", "LangGraph",
];

const industries = [
  { num: "/ 01", name: "Financial Services", sub: "Underwriting · Risk · Trading" },
  { num: "/ 02", name: "Healthcare", sub: "HIPAA · EHR · Clinical AI" },
  { num: "/ 03", name: "Logistics", sub: "Routing · OMS · Fleet" },
  { num: "/ 04", name: "Retail & E-com", sub: "Storefronts · Inventory · CDP" },
  { num: "/ 05", name: "Real Estate", sub: "Proptech · Marketplaces" },
  { num: "/ 06", name: "Education", sub: "LMS · Adaptive learning" },
  { num: "/ 07", name: "Government", sub: "FedRAMP · Citizen services" },
  { num: "/ 08", name: "Startups", sub: "MVPs · Scale-up engineering" },
];

const testimonials = [
  {
    quote:
      "Sunshineone wasn't a vendor — they operated like our most senior engineering team. They shipped what we believed was a year of work in 14 weeks.",
    name: "Mira Kapoor",
    role: "VP Engineering · Helix",
    initials: "MK",
  },
  {
    quote:
      "Most 'AI consultants' deliver demos. Sunshineone delivered a production system with evals, cost ceilings, and a runbook our on-call team actually uses.",
    name: "Daniel Reyes",
    role: "CTO · Vantage Health",
    initials: "DR",
  },
  {
    quote:
      "They asked harder questions than our own product team. By week three we had clarity we'd been chasing for a year.",
    name: "Aiyana Stone",
    role: "COO · Octo Logistics",
    initials: "AS",
  },
];

const faqs = [
  {
    q: "How is Sunshineone different from a traditional agency?",
    a: "We staff exclusively senior engineers and operate as embedded teams, not handoff factories. You get principal-level architects and engineers in your standups — the same people who write the code review the design.",
  },
  {
    q: "What's a typical engagement length?",
    a: "Most projects run 12–24 weeks. We also offer fractional CTO and platform partner retainers for clients scaling beyond the initial build.",
  },
  {
    q: "Do you sign NDAs and DPAs?",
    a: "Always. We routinely operate under enterprise mutual NDAs, DPAs, BAAs (for healthcare), and FedRAMP/SOC 2 client environments.",
  },
  {
    q: "How do you handle IP and code ownership?",
    a: "You own 100% of what we build, full-stop. All code is committed to your repos under your license from day one.",
  },
  {
    q: "Where is the team based?",
    a: "A distributed team across North America, Europe, and South Asia — with full overlap windows for every client timezone. On-site engagements available for enterprise clients.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pb-28 pt-44 lg:pt-48">
        <Halo className="-right-24 -top-52" />
        <Halo className="-bottom-72 -left-52" opacity={0.6} />
        <div className="container relative">
          <Reveal>
            <Eyebrow className="mb-7">Software · AI · Cloud · Automation</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="h-display mb-7 max-w-[18ch]">
              Engineering
              <br />
              <span className="accent-text">intelligent growth</span>
              <br />
              for modern enterprises.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede mb-10">
              Sunshineone is a software consulting and digital transformation
              studio. We help ambitious teams build, scale, and automate the
              systems that move their business forward — from AI products to
              enterprise platforms.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mb-20 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/contact">
                  Start a project <ArrowRight className="h-[18px] w-[18px]" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link href="/work">See our work</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.28}>
            <div className="grid grid-cols-2 gap-8 border-t border-line pt-8 sm:grid-cols-4">
              <HeroStat value={120} suffix="+" label="Projects shipped" />
              <HeroStat value={38} label="Enterprise clients" />
              <HeroStat value={9} label="Industries served" />
              <HeroStat value={99.9} suffix="%" decimals={1} label="Uptime SLA" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* LOGOS STRIP */}
      <section className="border-y border-line py-14">
        <div className="container">
          <div className="mb-8 text-center font-mono text-[11px] uppercase tracking-[2px] text-ink-3">
            Trusted by ambitious teams from startups to enterprise
          </div>
          <div className="grid grid-cols-3 items-center gap-8 lg:grid-cols-6">
            <LogoText>VANTAGE</LogoText>
            <LogoText className="italic">Helix.</LogoText>
            <LogoText className="font-mono text-base">NODA/</LogoText>
            <LogoText>FORMA</LogoText>
            <LogoText className="italic">Brightline</LogoText>
            <LogoText className="font-mono text-base">OCTO_</LogoText>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-28">
        <div className="container">
          <div className="mb-16 grid grid-cols-1 items-end gap-6 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <Eyebrow className="mb-4">01 · Capabilities</Eyebrow>
              <h2 className="h1">
                A full-stack partner for the entire transformation journey.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lede lg:ml-auto lg:max-w-[460px]">
                From strategy to engineering to deployment — one team, one
                shared standard. We embed deeply, ship rigorously, and stay
                accountable to outcomes.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <ServiceCard {...s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AI FEATURED */}
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
              <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
                <div>
                  <Eyebrow className="mb-4">02 · Featured capability</Eyebrow>
                  <h2 className="h1 mb-6">
                    AI you can <span className="accent-text">actually deploy.</span>
                  </h2>
                  <p className="lede mb-8">
                    We move past demos. Sunshineone ships production AI systems
                    with evals, guardrails, observability, and cost controls —
                    so the value compounds instead of degrading on contact with
                    real users.
                  </p>
                  <ul className="mb-9 space-y-3.5">
                    {[
                      "Retrieval-augmented generation with grounded sources",
                      "Multi-agent orchestration with deterministic fallbacks",
                      "Continuous evals, version pinning, and rollout gates",
                      "Per-tenant cost telemetry & budget enforcement",
                    ].map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-[15px] text-ink-2"
                      >
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-cyan" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild>
                    <Link href="/services">
                      Explore AI services <ArrowRight className="h-[18px] w-[18px]" />
                    </Link>
                  </Button>
                </div>

                <div className="space-y-4">
                  <Terminal title="~/sunshineone/agent · production">
                    <div className="text-muted"># deploy intelligent workflow</div>
                    <div>
                      <span className="text-brand-cyan">$</span> sunshineone deploy agent{" "}
                      <span className="text-success">&quot;intake-triage&quot;</span>
                    </div>
                    <div className="text-ink-3">
                      → Building eval suite <span className="text-success">✓</span>
                    </div>
                    <div className="text-ink-3">
                      → Pinning model <span className="text-success">claude-opus-4-7</span> ✓
                    </div>
                    <div className="text-ink-3">→ Wiring observability ✓</div>
                    <div className="text-ink-3">
                      → Setting budget <span className="text-success">$420/day</span> ✓
                    </div>
                    <div className="text-ink-3">→ Canary rollout 10% ✓</div>
                    <div className="pt-2 text-success">
                      ▸ Live · 99.97% accuracy · 1.2s p95
                    </div>
                  </Terminal>

                  <div className="grid grid-cols-3 gap-3">
                    <MetricMini label="Latency p95" value="1.2" suffix="s" />
                    <MetricMini label="Accuracy" value="99.97" suffix="%" />
                    <MetricMini label="Cost / call" value="$0.018" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-28">
        <div className="container">
          <div className="mb-16 grid grid-cols-1 items-end gap-6 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <Eyebrow className="mb-4">03 · How we engage</Eyebrow>
              <h2 className="h1">A clear path from problem to production.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lede lg:ml-auto lg:max-w-[460px]">
                No black-box agency theatre. You get a senior team, transparent
                milestones, and shippable progress every two weeks.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <div className="border-t border-line pt-7">
                  <div className="mb-7 font-mono text-xs tracking-[2px] text-brand-cyan">
                    0{i + 1}
                  </div>
                  <h3 className="mb-2.5 text-[19px] font-semibold tracking-[-0.4px]">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-3">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20">
        <div className="container">
          <Reveal>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard value={42} suffix="M+" label="Requests served / month" />
              <StatCard value={3.4} suffix="x" decimals={1} label="Avg client efficiency gain" />
              <StatCard value={180} prefix="$" suffix="M" label="Pipeline accelerated" />
              <StatCard value={14} label="Countries delivered in" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-28">
        <div className="container">
          <div className="mb-16 grid grid-cols-1 items-end gap-6 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <Eyebrow className="mb-4">04 · Selected work</Eyebrow>
              <h2 className="h1">Outcomes our clients can put in a board deck.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lede lg:ml-auto lg:max-w-[460px]">
                A small sample of how we&apos;ve helped teams move from blocked
                roadmaps to compounding momentum.
              </p>
            </Reveal>
          </div>

          <Reveal>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.4fr_1fr]">
              {/* Featured */}
              <Link
                href="/work"
                className="group relative flex min-h-[480px] flex-col justify-between overflow-hidden rounded-xl border border-line bg-gradient-to-b from-[#0F1F38] to-[#051026] p-10 transition-all hover:-translate-y-0.5 hover:border-line-strong lg:row-span-2 lg:min-h-[780px]"
              >
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[1.5px] text-brand-cyan">
                    AI · FinTech
                  </span>
                  <h3 className="mt-3 max-w-[18ch] text-[28px] font-semibold leading-tight tracking-[-1.2px]">
                    Helix replaced four legacy underwriting tools with one
                    agentic platform.
                  </h3>
                  <p className="mt-3 max-w-[38ch] text-[14.5px] text-ink-3">
                    A regional lender shipped an AI-assisted underwriting
                    workflow in 14 weeks — collapsing a 6-day decision cycle
                    into hours.
                  </p>
                </div>
                <div className="my-8 flex flex-1 items-center justify-center">
                  <CaseChart />
                </div>
                <div className="flex gap-8 border-t border-line pt-6">
                  <CaseMetric num="94%" label="Cycle reduction" />
                  <CaseMetric num="$4.2M" label="Annualized save" />
                  <CaseMetric num="14w" label="Time to ship" />
                </div>
              </Link>

              {/* Two compact */}
              <Link
                href="/work"
                className="group flex min-h-[280px] flex-col justify-between overflow-hidden rounded-xl border border-line bg-white/[0.025] p-10 transition-all hover:-translate-y-0.5 hover:border-line-strong"
              >
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[1.5px] text-brand-cyan">
                    SaaS · Healthcare
                  </span>
                  <h3 className="mt-3 text-[24px] font-semibold leading-tight tracking-[-1px]">
                    Vantage scaled to 10M patient records on a hardened HIPAA stack.
                  </h3>
                </div>
                <div className="mt-8 flex gap-8 border-t border-line pt-6">
                  <CaseMetric num="10M+" label="Records" />
                  <CaseMetric num="99.99%" label="Uptime" />
                </div>
              </Link>

              <Link
                href="/work"
                className="group flex min-h-[280px] flex-col justify-between overflow-hidden rounded-xl border border-line bg-white/[0.025] p-10 transition-all hover:-translate-y-0.5 hover:border-line-strong"
              >
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[1.5px] text-brand-cyan">
                    DevOps · Enterprise
                  </span>
                  <h3 className="mt-3 text-[24px] font-semibold leading-tight tracking-[-1px]">
                    Octo cut deployment time from 4 hours to 7 minutes.
                  </h3>
                </div>
                <div className="mt-8 flex gap-8 border-t border-line pt-6">
                  <CaseMetric num="34x" label="Faster ships" />
                  <CaseMetric num="0" label="Failed rollouts" />
                </div>
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 text-center">
            <Button asChild variant="ghost" size="lg">
              <Link href="/work">
                View all case studies <ArrowRight className="h-[18px] w-[18px]" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-28">
        <div className="container">
          <Reveal>
            <div className="mb-16">
              <Eyebrow className="mb-4">05 · Stack</Eyebrow>
              <h2 className="h1">Modern tools, deployed with discipline.</h2>
            </div>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {techStack.map((tech) => (
                <div
                  key={tech}
                  className="rounded-md border border-line bg-white/[0.025] px-5 py-7 text-center font-mono text-[12.5px] tracking-wide text-ink-2 transition-all hover:border-brand-cyan/30 hover:bg-brand-blue/5 hover:text-brand-cyan"
                >
                  {tech}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-28">
        <div className="container">
          <div className="mb-16 grid grid-cols-1 items-end gap-6 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <Eyebrow className="mb-4">06 · Industries</Eyebrow>
              <h2 className="h1">Deep context where it matters.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lede lg:ml-auto lg:max-w-[460px]">
                We work where regulation, scale, and complexity demand more than
                a generic agency. Domain fluency is non-negotiable.
              </p>
            </Reveal>
          </div>
          <Reveal>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {industries.map((ind) => (
                <div
                  key={ind.name}
                  className="cursor-pointer rounded-md border border-line bg-white/[0.025] p-8 transition-all hover:-translate-y-0.5 hover:border-line-strong hover:bg-white/[0.05]"
                >
                  <div className="mb-4 font-mono text-[11px] tracking-[1.5px] text-muted">
                    {ind.num}
                  </div>
                  <h4 className="mb-1 text-[17px] font-semibold tracking-[-0.3px]">
                    {ind.name}
                  </h4>
                  <p className="text-[13px] text-ink-3">{ind.sub}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28">
        <div className="container">
          <Reveal>
            <div className="mb-16">
              <Eyebrow className="mb-4">07 · Voices</Eyebrow>
              <h2 className="h1">Clients who keep coming back.</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <div className="flex h-full flex-col gap-7 rounded-lg border border-line bg-white/[0.025] p-9">
                  <Quote className="h-7 w-7 text-brand-cyan" strokeWidth={1.5} />
                  <p className="text-[17px] leading-snug tracking-[-0.2px] text-ink-2">
                    {t.quote}
                  </p>
                  <div className="mt-auto flex items-center gap-3 border-t border-line pt-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient text-sm font-semibold text-white">
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-sm font-semibold tracking-[-0.2px]">
                        {t.name}
                      </div>
                      <div className="mt-0.5 font-mono text-[10.5px] uppercase tracking-wide text-ink-3">
                        {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28">
        <div className="container">
          <Reveal>
            <div className="mb-12 text-center">
              <Eyebrow centered className="mb-4">08 · FAQ</Eyebrow>
              <h2 className="h1">Questions, answered.</h2>
            </div>
          </Reveal>
          <Reveal>
            <Accordion type="single" defaultValue="item-0" collapsible className="mx-auto max-w-[880px]">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger>{f.q}</AccordionTrigger>
                  <AccordionContent>{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <FinalCTA
        title={<>Let&apos;s build something that <span className="accent-text">compounds.</span></>}
        description="Tell us about the problem you're solving. We'll send a senior engineer to your first call — not a salesperson."
        secondary={{ href: "/work", label: "See our work" }}
      />
    </>
  );
}

/* -----------  Local helpers  ----------- */

function HeroStat({
  value,
  suffix,
  decimals,
  label,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
  label: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="accent-text text-[32px] font-semibold tracking-[-1.5px]">
        <Counter value={value} suffix={suffix} decimals={decimals} />
      </div>
      <div className="font-mono text-[11px] uppercase tracking-[1.5px] text-ink-3">
        {label}
      </div>
    </div>
  );
}

function LogoText({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`text-center text-[19px] font-semibold tracking-[-0.5px] text-ink-3 opacity-70 transition-all hover:text-ink hover:opacity-100 ${className}`}
    >
      {children}
    </div>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ElementType;
  title: string;
  body: string;
}) {
  return (
    <div className="card-surface group relative flex min-h-[260px] flex-col gap-4 p-8">
      <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-brand-blue/20 bg-gradient-to-br from-brand-blue/15 to-brand-cyan/[0.08] text-brand-cyan">
        <Icon className="h-[22px] w-[22px]" strokeWidth={1.8} />
      </div>
      <h3 className="text-[19px] font-semibold tracking-[-0.4px]">{title}</h3>
      <p className="text-[14.5px] leading-relaxed text-ink-3">{body}</p>
      <Link
        href="/services"
        className="mt-auto inline-flex items-center gap-2 font-mono text-[11.5px] uppercase tracking-[1.5px] text-brand-cyan"
      >
        Explore
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}

function MetricMini({
  label,
  value,
  suffix,
}: {
  label: string;
  value: string;
  suffix?: string;
}) {
  return (
    <div className="rounded-xl border border-line bg-white/[0.025] p-4">
      <div className="mb-1.5 font-mono text-[10px] uppercase tracking-[1.5px] text-ink-3">
        {label}
      </div>
      <div className="text-xl font-semibold tracking-[-0.8px]">
        {value}
        {suffix && <span className="text-[13px] text-ink-3">{suffix}</span>}
      </div>
    </div>
  );
}

function StatCard({
  value,
  prefix,
  suffix,
  decimals,
  label,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
}) {
  return (
    <div className="rounded-lg border border-line bg-white/[0.025] px-7 py-9">
      <div className="accent-text text-[clamp(40px,5vw,64px)] font-bold leading-none tracking-[-2.5px]">
        <Counter value={value} prefix={prefix} suffix={suffix} decimals={decimals} />
      </div>
      <div className="mt-3.5 font-mono text-[11px] uppercase tracking-[1.5px] text-ink-3">
        {label}
      </div>
    </div>
  );
}

function CaseMetric({ num, label }: { num: string; label: string }) {
  return (
    <div>
      <div className="accent-text text-[22px] font-semibold tracking-[-0.8px]">
        {num}
      </div>
      <div className="mt-1 font-mono text-[10px] uppercase tracking-[1.5px] text-ink-3">
        {label}
      </div>
    </div>
  );
}

function CaseChart() {
  return (
    <svg viewBox="0 0 360 200" className="w-full">
      <defs>
        <linearGradient id="cv1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0066FF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#00D4FF" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="cvFill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0066FF" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#00D4FF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0,160 L40,150 L80,140 L120,100 L160,90 L200,60 L240,55 L280,30 L320,25 L360,10 L360,200 L0,200 Z"
        fill="url(#cvFill)"
      />
      <path
        d="M0,160 L40,150 L80,140 L120,100 L160,90 L200,60 L240,55 L280,30 L320,25 L360,10"
        fill="none"
        stroke="url(#cv1)"
        strokeWidth="2.5"
      />
      <circle cx="360" cy="10" r="6" fill="#00D4FF" />
      <circle cx="360" cy="10" r="12" fill="#00D4FF" opacity="0.2" />
    </svg>
  );
}
