import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
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
  title: "Services — Sunshineone LLC",
  description:
    "Sunshineone LLC is a software development company in Leesburg, Alabama. We build custom websites, mobile apps, AI tools, and cloud systems for our clients.",
};

const services = [
  {
    num: "01",
    title: "Website and Web App Development",
    body: "We build websites and web applications. This includes business websites, online portals, internal tools, and dashboards. We use modern frameworks like Next.js and React.",
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    num: "02",
    title: "Mobile App Development",
    body: "We build mobile apps for iPhone and Android. We can build native apps with Swift or Kotlin, or cross-platform apps with React Native or Flutter.",
    tags: ["iOS", "Android", "React Native"],
  },
  {
    num: "03",
    title: "AI and Chatbot Development",
    body: "We build AI tools for businesses. This includes chatbots that answer customer questions, document automation tools, and software that helps employees do repetitive tasks faster.",
    tags: ["Chatbots", "Document AI", "Automation"],
  },
  {
    num: "04",
    title: "Cloud Setup and Hosting",
    body: "We set up servers and hosting on Amazon Web Services, Google Cloud, or Microsoft Azure. We make sure your software runs reliably and that backups, monitoring, and security are in place.",
    tags: ["AWS", "Google Cloud", "Azure"],
  },
  {
    num: "05",
    title: "Cybersecurity Help",
    body: "We help businesses protect their systems. This includes basic security reviews, secure login setup, and helping clients prepare for security certifications like SOC 2.",
    tags: ["Security review", "Login security", "SOC 2 prep"],
  },
  // Cards 06–10 commented out for 10DLC compliance
  // {
  //   num: "06",
  //   title: "UI/UX Design",
  //   body: "Product design, design systems, and brand identity. Our designers ship code-level specs, not pretty pictures. Engineers love working with them.",
  //   tags: ["Figma", "Design Systems", "Prototyping"],
  // },
  // {
  //   num: "07",
  //   title: "SaaS Product Development",
  //   body: "From validated idea to launched product. Multi-tenant architecture, billing, auth, observability — the platform plumbing that takes most teams a year, in a quarter.",
  //   tags: ["Multi-tenant", "Stripe", "Auth"],
  // },
  // {
  //   num: "08",
  //   title: "API & Integrations",
  //   body: "REST, GraphQL, gRPC, event-driven architectures, and integrations across SaaS ecosystems. We design APIs your future self won't curse.",
  //   tags: ["REST", "GraphQL", "gRPC", "Webhooks"],
  // },
  // {
  //   num: "09",
  //   title: "Custom Software Development",
  //   body: "Enterprise platforms, internal tools, and product engineering — TypeScript, Python, Go. We staff full-stack teams that work like product engineers, not contractors.",
  //   tags: ["TypeScript", "Next.js", "Python", "Go", "Postgres"],
  // },
  // {
  //   num: "10",
  //   title: "IT & Digital Transformation Consulting",
  //   body: "Technology strategy, architectural audits, fractional CTO, and roadmaps for organizations modernizing for the AI era. Senior leadership, not McKinsey deck-builders.",
  //   tags: ["Strategy", "Audits", "Fractional CTO"],
  // },
];

const processSteps = [
  {
    title: "Talk",
    body: "You contact us and tell us what you need. We schedule a call and ask questions to understand your project.",
  },
  {
    title: "Plan",
    body: "We write up a plan with timeline, cost, and what will be delivered. You review and approve before any work starts.",
  },
  {
    title: "Build",
    body: "We sign a contract and start the work. You get progress updates every two weeks.",
  },
  {
    title: "Support",
    body: "After launch, we can help with maintenance, updates, and answering questions if you need it.",
  },
];

const faqs = [
  {
    q: "How long does a project take?",
    a: "It depends on the size of the project. Small projects can take a few weeks. Larger projects take a few months. We always tell you the timeline before we start.",
  },
  {
    q: "Do you work with existing teams or do you replace them?",
    a: "Either one. Some clients have their own developers and we work alongside them. Other clients want us to handle everything. We are flexible.",
  },
  {
    q: "What happens after the project is done?",
    a: "We hand off the code, documentation, and access. If you want ongoing support, we offer a maintenance arrangement. If you don't, we step away cleanly.",
  },
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
            <Eyebrow className="mb-6">Our Services</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="h-display mb-7">
              What We Do for Our Clients
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="lede max-w-[60ch]">
              Sunshineone is a software development company. We build websites,
              mobile apps, AI tools, and cloud systems for businesses that hire
              us directly. Below is what we offer.
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
          <div className="mb-16">
            <Reveal>
              <Eyebrow className="mb-4">How we engage</Eyebrow>
              <h2 className="h1">How a Project Works</h2>
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

      {/* PRICING APPROACH — commented out for 10DLC compliance
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
      */}

      {/* FAQ */}
      <section className="py-28">
        <div className="container">
          <Reveal>
            <div className="mb-12 text-center">
              <Eyebrow centered className="mb-4">FAQ</Eyebrow>
              <h2 className="h1">Common questions.</h2>
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
        title="Have a Project in Mind?"
        description="Send us a message and a real engineer will get back to you within one business day."
        primary={{ href: "/contact", label: "Contact us" }}
      />
    </>
  );
}

// ApproachCard kept for reference — used by the commented-out pricing section
function ApproachCard({ label, body }: { label: string; body: string }) {
  return (
    <div className="rounded-lg border border-line bg-white/5 p-6">
      <Eyebrow className="mb-3">{label}</Eyebrow>
      <p className="text-[15px] text-ink-2">{body}</p>
    </div>
  );
}
