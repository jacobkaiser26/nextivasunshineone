import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Halo } from "@/components/ui/halo";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "SUNSHINEONE LLC Terms and Conditions — consent for SMS communications and service terms.",
};

export default function TermsPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-10 pt-44">
        <Halo className="-right-24 -top-52" opacity={0.4} />
        <div className="container relative">
          <div className="mx-auto max-w-[780px]">
            <Reveal>
              <div className="mb-8 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[1.5px] text-ink-3">
                <Link href="/" className="hover:text-ink">Home</Link>
                <ChevronRight className="h-3 w-3 text-muted" />
                <span>Legal</span>
                <ChevronRight className="h-3 w-3 text-muted" />
                <span>Terms &amp; Conditions</span>
              </div>
            </Reveal>
            <Reveal delay={0.05}><Eyebrow className="mb-6">Legal · Terms</Eyebrow></Reveal>
            <Reveal delay={0.1}>
              <h1 className="mb-6 text-[clamp(38px,5.5vw,72px)] font-bold leading-[1.05] tracking-[-2.5px]">
                Terms &amp; <span className="accent-text">Conditions.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="lede">
                The agreement that governs your use of our services and SMS communications.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-28 pt-10">
        <div className="container">
          <div className="mx-auto max-w-[780px]">
            <Reveal>
              <div className="mb-14 flex items-center gap-4 rounded-md border border-line bg-white/[0.025] px-5 py-4 font-mono text-[11.5px] uppercase tracking-wide text-ink-3">
                <span className="h-1.5 w-1.5 rounded-full bg-success shadow-[0_0_6px_#00E5A0]" />
                <span>Last updated · May 15, 2026</span>
              </div>

              <article className="legal-prose">
                <SectionHeading num="01">Introduction</SectionHeading>
                <p>Welcome to <strong>SUNSHINEONE LLC</strong>. By accessing or using our services, including receiving SMS communications, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with these terms, please do not engage with our services.</p>

                <SectionHeading num="02">Consent for SMS Communication</SectionHeading>
                <p>By providing your consent to receive SMS communications, you acknowledge and agree to receive text messages from SUNSHINEONE LLC at the phone number you provide. Information obtained as part of the SMS consent process will not be shared with third parties.</p>

                <SectionHeading num="03">Types of SMS Communications</SectionHeading>
                <p>If you have consented to receive text messages, you may receive SMS communications related to the following:</p>

                <h3>Customer Support and Service-Related Messages</h3>

                <h4>Customers and Guests</h4>
                <p>Updates regarding your orders, deliveries, appointments, or other relevant information.</p>

                <h4>Job Applicants</h4>
                <p>Information about your application status, onboarding materials, or other employment-related updates.</p>

                <SectionHeading num="04">Standard Messaging Disclosures</SectionHeading>

                <div className="my-6 rounded-lg border border-brand-cyan/25 bg-gradient-to-br from-brand-blue/[0.08] to-brand-cyan/[0.04] p-7">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
                    <DisclosureItem label="Message Frequency">
                      Frequency of messages may vary depending on your interactions with us.
                    </DisclosureItem>
                    <DisclosureItem label="Message & Data Rates">
                      Standard messaging and data rates may be charged by your mobile service provider.
                    </DisclosureItem>
                    <DisclosureItem label="Opt-Out">
                      You can opt out of receiving SMS messages at any time by texting{" "}
                      <strong className="text-ink">&quot;STOP&quot;</strong> to the number from which you received the message.
                    </DisclosureItem>
                    <DisclosureItem label="Help & Support">
                      For assistance, text <strong className="text-ink">&quot;HELP&quot;</strong> to any text message or contact us directly.
                    </DisclosureItem>
                  </div>
                </div>

                <SectionHeading num="05">Contact Information</SectionHeading>
                <p>If you have any questions or concerns about these Terms and Conditions, please reach out to us:</p>

                <div className="mt-6 rounded-lg border border-line bg-gradient-to-b from-white/[0.05] to-white/[0.025] p-8">
                  <div className="mb-4 font-mono text-[11px] uppercase tracking-[1.8px] text-ink-3">
                    Contact details
                  </div>
                  <div className="mb-2 text-[18px] font-semibold tracking-[-0.4px]">SUNSHINEONE LLC</div>
                  <div className="text-[15px] leading-relaxed text-ink-2">2955 Weiss Lake Blvd</div>
                  <div className="text-[15px] leading-relaxed text-ink-2">Leesburg, AL 35983, USA</div>
                  <div className="mt-3 text-[15px] leading-relaxed text-ink-2">
                    <strong className="text-ink">Phone:</strong>{" "}
                    <a href="tel:+13527029127" className="text-brand-cyan hover:underline">(352) 702-9127</a>
                  </div>
                  <div className="text-[15px] leading-relaxed text-ink-2">
                    <strong className="text-ink">Email:</strong>{" "}
                    <a href="mailto:contact@sunshineonellc.com" className="text-brand-cyan hover:underline">contact@sunshineonellc.com</a>
                  </div>
                  <div className="text-[15px] leading-relaxed text-ink-2">
                    <strong className="text-ink">Website:</strong>{" "}
                    <a href="https://www.sunshineonellc.com" className="text-brand-cyan hover:underline">www.sunshineonellc.com</a>
                  </div>
                  <div className="mt-3 text-[15px] leading-relaxed text-ink-2">
                    <strong className="text-ink">Privacy Policy:</strong>{" "}
                    <Link href="/privacy" className="text-brand-cyan hover:underline">View our Privacy Policy</Link>
                  </div>
                </div>
              </article>

              <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-line pt-8">
                <div className="font-mono text-[11.5px] uppercase tracking-[1.5px] text-ink-3">See also</div>
                <Button asChild variant="ghost">
                  <Link href="/privacy">
                    Privacy Policy <ArrowRight className="h-[18px] w-[18px]" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionHeading({ num, children }: { num: string; children: React.ReactNode }) {
  return (
    <h2>
      <span className="block font-mono text-[11px] tracking-[1.8px] text-brand-cyan">
        {num}
      </span>
      {children}
    </h2>
  );
}

function DisclosureItem({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-2 font-mono text-[11px] uppercase tracking-[1.5px] text-brand-cyan">
        {label}
      </div>
      <div className="text-[14.5px] leading-relaxed text-ink-2">{children}</div>
    </div>
  );
}
