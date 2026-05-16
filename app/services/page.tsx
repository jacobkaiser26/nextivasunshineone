import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Halo } from "@/components/ui/halo";
import { Reveal } from "@/components/ui/reveal";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { FinalCTA } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Sunshineone services — AI, custom software, cloud, DevOps, cybersecurity, mobile, design, and digital transformation.",
};

const services = [
  { num: "01", title: "AI & Automation", body: "Production-grade LLM systems, retrieval pipelines, agent workflows, and intelligent process automation — built with evals, guardrails, and cost telemetry from day one.", tags: ["RAG", "Agents", "Evals", "Vector DBs", "Anthropic"] },
  { num: "02", title: "Custom Software Development", body: "Enterprise platforms, internal tools, and product engineering — TypeScript, Python, Go. We staff full-stack teams that work like product engineers, not contractors.", tags: ["TypeScript", "Next.js", "Python", "Go", "Postgres"] },
  { num: "03", title: "Web Development", body: "Marketing sites, dashboards, and customer-facing applications built for speed, accessibility, and SEO. Sub-second TTFB, perfect Lighthouse scores.", tags: ["Next.js", "React", "Svelte", "Tailwind"] },
  { num: "04", title: "Mobile Apps", body: "iOS and Android — native (Swift / Kotlin) or cross-platform (React Native, Flutter). Tightly integrated with cloud backends and offline-first when needed.", tags: ["Swift", "Kotlin", "React Native", "Flutter"] },
  { num: "05", title: "DevOps & Cloud Engineering", body: "Cloud architecture (AWS, GCP, Azure), Kubernetes operations, CI/CD pipelines, IaC, observability. We bring SRE discipline to teams that need it.", tags: ["K8s", "Terraform", "AWS", "GCP", "Datadog"] },
  { num: "06", title: "Cybersecurity", body: "Threat modeling, SOC 2 / ISO 27001 readiness, pen testing, IAM architecture, and continuous security across cloud and application layers.", tags: ["SOC 2", "Pen Test", "IAM", "SAST/DAST"] },
  { num: "07", title: "UI/UX Design", body: "Product design, design systems, and brand identity. Our designers ship code-level specs, not pretty pictures. Engineers love working with them.", tags: ["Figma", "Design Systems", "Prototyping"] },
  { num: "08", title: "SaaS Product Development", body: "From validated idea to launched product. Multi-tenant architecture, billing, auth, observability — the platform plumbing that takes most teams a year, in a quarter.", tags: ["Multi-tenant", "Stripe", "Auth"] },
  { num: "09", title: "API & Integrations", body: "REST, GraphQL, gRPC, event-driven architectures, and integrations across SaaS ecosystems. We design APIs your future self won't curse.", tags: ["REST", "GraphQL", "gRPC", "Webhooks"] },
  { num: "10", title: "IT & Digital Transformation Consulting", body: "Technology strategy, architectural audits, fractional CTO, and roadmaps for organizations modernizing for the AI era. Senior leadership, not McKinsey deck-builders.", tags: ["Strategy", "Audits", "Fractional CTO"] },
];

const faqs = [
  { q: "How quickly can you start?", a: "Discovery typically begins within two weeks of contract signature. For urgent engagements, we maintain a small bench for emergency platform work." },
  { q: "Do you work with existing engineering teams?", a: "Yes — about half our engagements are augmenting in-house teams. We adapt to your tooling, your CI, your review process. We're additive, not disruptive." },
  { q: "Can you work under our compliance framework?", a: "We routinely operate under SOC 2, HIPAA, GDPR, PCI, and FedRAMP environments. We provide BAAs and DPAs as standard for engagements that require them." },
  { q: "What happens after the engagement ends?", a: "Two paths. Either we hand off to your team with runbooks, ADRs, and training — or we transition to a monthly retainer to keep operating and evolving what we built. Your call." },
];

const processSteps = [
  { title: "Discover", body: "Stakeholder interviews, systems audit, success metrics. Output: a north-star and phased plan in 1–2 weeks." },
  { title: "Design", body: "Architecture, UX, data flows mapped end-to-end. Risk surfaced early, tradeoffs documented in ADRs." },
  { title: "Build", body: "Senior engineers ship in 2-week sprints with continuous demos. Tested, instrumented, reviewed from day one." },
  { title: "Scale", body: "Production hardening, observability, knowledge transfer. We hand off cleanly — or stay as your platform partner." },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-20 pt-44">
        <Halo className="-right-24 -top-52" />
        <div className="container relative">
          <Reveal>
            <div className="mb-8 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[1.5px] text-ink-3">
              <Link href="/" className="hover:text-ink">Home</Link>
              <ChevronRight className="h-3 w-3 text-muted" />
              <span>Services</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <Eyebrow className="mb-6">What we do</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="h-display mb-7">
              Ten capabilities. <span className="accent-text">One standard.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="lede max-w-[60ch]">
              Every service we offer is delivered by senior engineers and held
              to the same engineering bar. No junior staffing, no handoff
              factories, no &quot;discovery phase&quot; theatre.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICE GRID */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.num} delay={(i % 2) * 0.08}>
                <div className="card-surface p-10">
                  <div className="mb-6 flex items-start justify-between">
                    <div className="h-12 w-12 rounded-lg border border-brand-blue/20 bg-gradient-to-br from-brand-blue/15 to-brand-cyan/[0.08]" />
                    <div className="font-mono text-[11px] tracking-[1.8px] text-ink-3">
                      {s.num}
                    </div>
                  </div>
                  <h3 className="h3 mb-3.5">{s.title}</h3>
                  <p className="mb-6 text-[14.5px] leading-relaxed text-ink-3">{s.body}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((t) => <Badge key={t}>{t}</Badge>)}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-28">
        <div className="container">
          <div className="mb-16 grid grid-cols-1 items-end gap-6 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <Eyebrow className="mb-4">How we engage</Eyebrow>
              <h2 className="h1">A predictable process for unpredictable problems.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lede lg:ml-auto lg:max-w-[460px]">
                Same four phases across every engagement, scaled to the
                complexity of the work. Transparent at every step.
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

      {/* PRICING APPROACH */}
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
                  <Eyebrow className="mb-4">Pricing approach</Eyebrow>
                  <h2 className="h1 mb-6">
                    Fixed-scope when we can. Embedded retainer when we should.
                  </h2>
                  <p className="lede mb-8">
                    We don&apos;t dress up time-and-materials as anything else.
                    Most engagements run as fixed-price milestones; long-term
                    work runs as monthly retainers with clear deliverables.
                  </p>
                  <Button asChild>
                    <Link href="/pricing">
                      View pricing details <ArrowRight className="h-[18px] w-[18px]" />
                    </Link>
                  </Button>
                </div>
                <div className="space-y-3.5">
                  <ApproachCard label="Fixed scope" body="For well-defined builds with a clear endpoint. Milestone-based, capped invoices." />
                  <ApproachCard label="Embedded team" body="Monthly retainer for a dedicated senior team. Best for product-stage scale-ups." />
                  <ApproachCard label="Fractional leadership" body="Fractional CTO, principal architect, or platform lead for clients who need senior reps on tap." />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28">
        <div className="container">
          <Reveal>
            <div className="mb-12 text-center">
              <Eyebrow centered className="mb-4">FAQ</Eyebrow>
              <h2 className="h1">Common questions about engagements.</h2>
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

      <FinalCTA
        eyebrow="Ready to talk"
        title={<>A 30-min call. <span className="accent-text">Real engineers.</span></>}
        description="No sales engineers, no qualification gauntlets. Just a senior engineer who'll listen to your problem."
      />
    </>
  );
}

function ApproachCard({ label, body }: { label: string; body: string }) {
  return (
    <div className="rounded-lg border border-line bg-white/5 p-6">
      <Eyebrow className="mb-3">{label}</Eyebrow>
      <p className="text-[15px] text-ink-2">{body}</p>
    </div>
  );
}
