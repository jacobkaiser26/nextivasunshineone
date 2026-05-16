import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Halo } from "@/components/ui/halo";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "SUNSHINEONE LLC Privacy Policy — how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
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
                <span>Privacy Policy</span>
              </div>
            </Reveal>
            <Reveal delay={0.05}><Eyebrow className="mb-6">Legal · Privacy</Eyebrow></Reveal>
            <Reveal delay={0.1}>
              <h1 className="mb-6 text-[clamp(38px,5.5vw,72px)] font-bold leading-[1.05] tracking-[-2.5px]">
                Privacy <span className="accent-text">Policy.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="lede">
                How we collect, use, disclose, and protect your information —
                for data collection and text messaging.
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
                <p>
                  <strong>SUNSHINEONE LLC</strong> is committed to protecting your
                  privacy. This Privacy Policy describes how we collect, use,
                  disclose, and protect your information when you visit our
                  website{" "}
                  <a href="https://www.sunshineonellc.com">www.sunshineonellc.com</a>{" "}
                  or interact with us in any other manner.
                </p>

                <SectionHeading num="01">Information We Collect</SectionHeading>
                <p>We may collect the following types of information from you:</p>

                <h3>Personal Information</h3>
                <p>When you contact us through our website, phone, or email, we may collect personal information that you provide, including your full name, phone number, email address, and mailing address.</p>

                <h3>Automatically Collected Information</h3>
                <p>When you visit our website, we may automatically collect certain information about your device and usage, including IP address, browser type, operating system, referring URLs, and pages viewed.</p>

                <SectionHeading num="02">How We Use Your Information</SectionHeading>
                <p>We use the information we collect for the following purposes:</p>

                <h3>To Communicate with You</h3>
                <p>We use your contact information to respond to your inquiries, provide services, send administrative information, and keep you informed about your case or our services.</p>

                <h3>Marketing and Promotional Communications</h3>
                <p>With your consent, we may use your information to send you updates, newsletters, or marketing communications via email, phone, or text message. You can opt out of receiving these communications at any time by following the instructions provided in the communication or contacting us directly.</p>

                <h3>Legal Compliance</h3>
                <p>We may use your information to comply with applicable laws, regulations, or legal obligations, including responding to subpoenas, court orders, or legal requests.</p>

                <SectionHeading num="03">Consent to Receive Text Messages</SectionHeading>
                <p>You are not required to consent to receiving text messages from SUNSHINEONE LLC. By providing your phone number and opting in, you consent to receive text messages from SUNSHINEONE LLC regarding your inquiry, our services, or related matters. Message and data rates may apply.</p>
                <p>You can opt out of receiving text messages at any time by replying <strong>&quot;STOP&quot;</strong> to any text message you receive from us. Please note that opting out may limit our ability to communicate with you regarding your case or services.</p>

                <SectionHeading num="04">Information Sharing and Disclosure</SectionHeading>
                <p>We do not sell or rent your personal information to third parties. We do not sell, rent, release, or transfer your SMS consent or phone number to any third party for any third-party marketing purposes.</p>
                <p>We may share your information in the following circumstances:</p>

                <h3>Service Providers</h3>
                <p>We may share your information with our service providers who perform services on our behalf, such as marketing, customer service, or technical support. These service providers are contractually obligated to protect your information and use it only for services they provide.</p>

                <h3>Legal Requirements</h3>
                <p>We may disclose your information if required by law, regulation, or legal process, or if we believe disclosure is necessary to protect our rights, property, or the safety of our users or others.</p>

                <SectionHeading num="05">Data Security</SectionHeading>
                <p>We implement reasonable security measures to protect your personal information from unauthorized access, use, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.</p>

                <SectionHeading num="06">Your Rights and Choices</SectionHeading>

                <h3>Opting Out</h3>
                <p>You may opt out of receiving marketing communications from us by following the instructions in those communications or contacting us directly. If you opt out, we may still send you non-promotional communications related to your services or our ongoing business relationship.</p>

                <h3>Access and Update Information</h3>
                <p>You have the right to access, update, or correct your personal information. To do so, please contact us using the information provided below.</p>

                <SectionHeading num="07">Third-Party Websites</SectionHeading>
                <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of any third-party websites you visit.</p>

                <SectionHeading num="08">Children&apos;s Privacy</SectionHeading>
                <p>Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have inadvertently collected personal information from a child under 13, we will take steps to delete such information.</p>

                <SectionHeading num="09">Changes to This Privacy Policy</SectionHeading>
                <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated &quot;Last Updated&quot; date. We encourage you to review this Privacy Policy periodically for any updates.</p>

                <SectionHeading num="10">Contact Us</SectionHeading>
                <p>If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:</p>

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
                    <strong className="text-ink">Website:</strong>{" "}
                    <a href="https://www.sunshineonellc.com" className="text-brand-cyan hover:underline">www.sunshineonellc.com</a>
                  </div>
                </div>
              </article>

              <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-line pt-8">
                <div className="font-mono text-[11.5px] uppercase tracking-[1.5px] text-ink-3">See also</div>
                <Button asChild variant="ghost">
                  <Link href="/terms">
                    Terms &amp; Conditions <ArrowRight className="h-[18px] w-[18px]" />
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
