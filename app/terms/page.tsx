import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowRight, Shield, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Halo } from "@/components/ui/halo";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "SUNSHINEONE LLC Terms and Conditions — the agreement that governs your use of our website, services, and SMS communications.",
};

const toc = [
  { num: "01", label: "About Us" },
  { num: "02", label: "Eligibility" },
  { num: "03", label: "Use of the Site" },
  { num: "04", label: "Our Services" },
  { num: "05", label: "SMS Communications" },
  { num: "06", label: "Intellectual Property" },
  { num: "07", label: "User Submissions" },
  { num: "08", label: "Third-Party Links & Services" },
  { num: "09", label: "Disclaimers" },
  { num: "10", label: "Limitation of Liability" },
  { num: "11", label: "Indemnification" },
  { num: "12", label: "Governing Law & Disputes" },
  { num: "13", label: "Changes to These Terms" },
  { num: "14", label: "Miscellaneous" },
  { num: "15", label: "Contact Us" },
];

export default function TermsPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-10 pt-44">
        <Halo className="-right-24 -top-52" opacity={0.4} />
        <div className="container relative">
          <div className="mx-auto max-w-[820px]">
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
                The agreement that governs your use of our website, services, and SMS communications.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-28 pt-10">
        <div className="container">
          <div className="mx-auto max-w-[820px]">
            <Reveal>

              {/* Dates bar */}
              <div className="mb-10 flex flex-wrap items-center gap-x-6 gap-y-2 rounded-xl border border-line bg-white/[0.025] px-5 py-4 font-mono text-[11.5px] uppercase tracking-wide text-ink-3">
                <span className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-success shadow-[0_0_6px_#00E5A0]" />
                  Last updated · May 20, 2026
                </span>
                <span className="hidden text-line sm:block">|</span>
                <span>Effective date · May 20, 2026</span>
              </div>

              {/* Table of Contents */}
              <div className="mb-14 rounded-2xl border border-line bg-white/[0.02] p-6">
                <p className="mb-4 font-mono text-[10.5px] uppercase tracking-[1.8px] text-ink-3">Table of Contents</p>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {toc.map(({ num, label }) => (
                    <a
                      key={num}
                      href={`#section-${num}`}
                      className="group flex items-center gap-3 rounded-lg px-3 py-2 transition-colors hover:bg-white/[0.05]"
                    >
                      <span className="font-mono text-[10px] text-brand-cyan">{num}</span>
                      <span className="text-[13px] text-ink-2 transition-colors group-hover:text-ink">{label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Intro */}
              <div className="mb-6 rounded-2xl border border-line bg-white/[0.02] p-8">
                <p className="text-[15px] leading-[1.8] text-ink-2">
                  These Terms and Conditions (the &ldquo;Terms&rdquo;) govern your access to and use of the website{" "}
                  <a href="https://www.sunshineonellc.com" className="text-brand-cyan hover:underline">https://www.sunshineonellc.com</a>{" "}
                  (the &ldquo;Site&rdquo;), the services offered by <BrandName /> (the &ldquo;Services&rdquo;), and any SMS text-message communications you receive from us. By accessing the Site, engaging our Services, or opting in to SMS communications, you agree to be bound by these Terms. If you do not agree, please do not use the Site, engage our Services, or opt in to SMS communications.
                </p>
              </div>

              {/* ── 01 ── */}
              <PolicySection id="section-01" num="01" title="About Us">
                <p className="text-[15px] leading-[1.8] text-ink-2">
                  <BrandName /> (&ldquo;SunShineone,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is a limited liability company organized under the laws of the State of Alabama, United States. We operate as a software consulting and digital transformation studio providing services including, but not limited to, custom software engineering, AI and automation, DevOps and cloud engineering, cybersecurity, mobile application development, and related advisory services.
                </p>
                <div className="mt-5 rounded-xl border border-line bg-gradient-to-b from-white/[0.05] to-white/[0.025] p-6">
                  <p className="mb-3 font-mono text-[10.5px] uppercase tracking-[1.8px] text-ink-3">Registered office</p>
                  <p className="text-[15px] leading-relaxed text-ink-2">2955 Weiss Lake Blvd</p>
                  <p className="text-[15px] leading-relaxed text-ink-2">Leesburg, AL 35983</p>
                  <p className="text-[15px] leading-relaxed text-ink-2">United States</p>
                </div>
              </PolicySection>

              {/* ── 02 ── */}
              <PolicySection id="section-02" num="02" title="Eligibility">
                <p className="text-[15px] leading-[1.8] text-ink-2">
                  You must be at least 18 years of age and capable of forming a legally binding contract under applicable law to use the Site or engage our Services. By using the Site, you represent and warrant that you meet these requirements. If you are accessing the Site or engaging our Services on behalf of a company or other legal entity, you represent that you have the authority to bind that entity to these Terms.
                </p>
              </PolicySection>

              {/* ── 03 ── */}
              <PolicySection id="section-03" num="03" title="Use of the Site">
                <p className="mb-5 text-[15px] leading-[1.8] text-ink-2">
                  You may use the Site only for lawful purposes and in accordance with these Terms. You agree not to:
                </p>
                <BulletList items={[
                  "Use the Site in any way that violates applicable law or regulation",
                  "Attempt to gain unauthorized access to any portion of the Site, our systems, or any related network",
                  "Use any automated means (including bots, scrapers, or crawlers) to access the Site without our prior written permission",
                  "Interfere with or disrupt the operation of the Site or the servers and networks that host it",
                  "Impersonate any person or entity or misrepresent your affiliation with any person or entity",
                  "Use the Site to transmit malware, spam, or any other harmful content",
                  "Collect or harvest information about other users without their consent",
                ]} />
                <p className="mt-5 text-[15px] leading-[1.8] text-ink-2">
                  We reserve the right to restrict, suspend, or terminate your access to the Site at any time, without notice, if we believe you have violated these Terms.
                </p>
              </PolicySection>

              {/* ── 04 ── */}
              <PolicySection id="section-04" num="04" title="Our Services">
                <Subsection title="Engagement Process">
                  <p className="text-[15px] leading-[1.8] text-ink-2">
                    Our consulting Services are provided pursuant to a separate written agreement, statement of work, or master services agreement signed by both parties (an &ldquo;Engagement Agreement&rdquo;). Nothing on the Site constitutes a binding offer to provide Services. Submitting a project inquiry through the Site does not, by itself, create a contractual relationship between you and <BrandName />.
                  </p>
                </Subsection>
                <Subsection title="Scope, Fees, and Deliverables">
                  <p className="text-[15px] leading-[1.8] text-ink-2">
                    The specific scope, deliverables, timeline, fees, and payment terms applicable to any engagement will be set out in the applicable Engagement Agreement. Any pricing or service descriptions appearing on the Site are illustrative only and may change without notice.
                  </p>
                </Subsection>
                <Subsection title="Confidentiality">
                  <p className="text-[15px] leading-[1.8] text-ink-2">
                    Engagement-specific confidentiality obligations will be addressed in the applicable Engagement Agreement or in a separate non-disclosure agreement (NDA) signed by both parties.
                  </p>
                </Subsection>
              </PolicySection>

              {/* ── 05 ── */}
              <PolicySection id="section-05" num="05" title="SMS (Text Message) Communications">
                <Subsection title="Consent to Receive SMS">
                  <p className="text-[15px] leading-[1.8] text-ink-2">
                    By providing your phone number and opting in through one of our published opt-in channels — including, but not limited to, the SMS opt-in checkbox on our contact form at{" "}
                    <a href="https://www.sunshineonellc.com/contact" className="text-brand-cyan hover:underline">https://www.sunshineonellc.com/contact</a>{" "}
                    — you expressly consent to receive SMS text messages from <BrandName /> at the phone number you provide. Consent to receive SMS messages is not a condition of any purchase or engagement.
                  </p>
                </Subsection>

                <Subsection title="Types of Messages You May Receive">
                  <p className="mb-4 text-[15px] leading-[1.8] text-ink-2">If you have opted in, you may receive SMS messages related to:</p>
                  <BulletList items={[
                    "Project updates and status notifications",
                    "Appointment scheduling and coordination",
                    "Service-related notifications and reminders",
                    "Responses to your inquiries and customer support communications",
                    <>Occasional marketing or promotional updates from <BrandName /></>,
                  ]} />
                </Subsection>

                <Subsection title="Message Frequency">
                  <p className="text-[15px] leading-[1.8] text-ink-2">
                    Message frequency varies depending on project activity and your interactions with us.
                  </p>
                </Subsection>

                <Subsection title="Message and Data Rates">
                  <p className="text-[15px] leading-[1.8] text-ink-2">
                    Message and data rates may apply. Charges depend on your mobile carrier and your wireless plan. <BrandName /> is not responsible for carrier charges incurred by you in receiving SMS messages.
                  </p>
                </Subsection>

                <Subsection title="How to Opt Out">
                  <p className="mb-4 text-[15px] leading-[1.8] text-ink-2">
                    You may opt out of receiving SMS messages at any time by replying STOP to any text message you receive from us. After you reply STOP, you will receive a one-time confirmation message and will no longer receive SMS messages from <BrandName />. To resubscribe, reply START or opt in again through our website.
                  </p>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-brand-cyan/25 bg-brand-blue/[0.07] p-5">
                      <p className="mb-1 font-mono text-[13px] font-bold tracking-wider text-brand-cyan">Reply STOP</p>
                      <p className="text-[13.5px] leading-relaxed text-ink-2">to unsubscribe from all SMS communications at any time.</p>
                    </div>
                    <div className="rounded-xl border border-brand-cyan/25 bg-brand-blue/[0.07] p-5">
                      <p className="mb-1 font-mono text-[13px] font-bold tracking-wider text-brand-cyan">Reply START</p>
                      <p className="text-[13.5px] leading-relaxed text-ink-2">to resubscribe after opting out, or opt in again through our website.</p>
                    </div>
                  </div>
                </Subsection>

                <Subsection title="How to Get Help">
                  <div className="rounded-xl border border-brand-cyan/25 bg-brand-blue/[0.07] p-5">
                    <p className="mb-1 font-mono text-[13px] font-bold tracking-wider text-brand-cyan">Reply HELP</p>
                    <p className="text-[13.5px] leading-relaxed text-ink-2">to any text message to receive contact information and assistance, or contact us using the details in Section 15.</p>
                  </div>
                </Subsection>

                <Subsection title="Carrier Disclaimer">
                  <div className="flex items-start gap-3 rounded-lg border border-amber-500/25 bg-amber-500/[0.05] px-5 py-4">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                    <p className="text-[14px] leading-relaxed text-ink-2">
                      Mobile carriers (including, without limitation, AT&amp;T, T-Mobile, and Verizon) are not liable for delayed or undelivered messages. SMS delivery is dependent on carrier networks and is not guaranteed.
                    </p>
                  </div>
                </Subsection>

                <Subsection title="Privacy of Your Mobile Information">
                  <div className="flex items-start gap-3 rounded-lg border border-success/25 bg-success/[0.05] px-5 py-4">
                    <Shield className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    <p className="text-[14px] leading-relaxed text-ink-2">
                      No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. All other categories of information described in our Privacy Policy exclude text messaging originator opt-in data and consent — this information will not be shared with any third parties under any circumstances except as required by law. For complete information on how we handle your mobile and personal information, see our{" "}
                      <Link href="/privacy" className="text-brand-cyan hover:underline">Privacy Policy</Link>.
                    </p>
                  </div>
                </Subsection>
              </PolicySection>

              {/* ── 06 ── */}
              <PolicySection id="section-06" num="06" title="Intellectual Property">
                <Subsection title="Our Content">
                  <p className="text-[15px] leading-[1.8] text-ink-2">
                    All content on the Site — including text, graphics, logos, icons, images, audio clips, software, and design elements — is the property of <BrandName /> or its licensors and is protected by United States and international copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, or otherwise exploit any content from the Site without our prior written consent, except as expressly permitted by these Terms or applicable law.
                  </p>
                </Subsection>
                <Subsection title="Trademarks">
                  <p className="text-[15px] leading-[1.8] text-ink-2">
                    &ldquo;SUNSHINEONE,&rdquo; &ldquo;SunShineone,&rdquo; and the SunShineone logo are trademarks of <BrandName />. Other trademarks, service marks, and trade names that appear on the Site are the property of their respective owners.
                  </p>
                </Subsection>
                <Subsection title="Client Work and Deliverables">
                  <p className="text-[15px] leading-[1.8] text-ink-2">
                    Ownership of intellectual property created during an engagement is governed by the applicable Engagement Agreement. Nothing on the Site or in these Terms constitutes a transfer of intellectual property rights outside of a signed Engagement Agreement.
                  </p>
                </Subsection>
              </PolicySection>

              {/* ── 07 ── */}
              <PolicySection id="section-07" num="07" title="User Submissions">
                <p className="text-[15px] leading-[1.8] text-ink-2">
                  Any feedback, suggestions, ideas, or other information you submit to us through the Site (other than personal information governed by our Privacy Policy) will be treated as non-confidential and non-proprietary. You grant <BrandName /> a worldwide, royalty-free, perpetual, irrevocable, sublicensable license to use, reproduce, modify, and distribute such submissions for any lawful business purpose.
                </p>
              </PolicySection>

              {/* ── 08 ── */}
              <PolicySection id="section-08" num="08" title="Third-Party Links and Services">
                <p className="text-[15px] leading-[1.8] text-ink-2">
                  The Site may contain links to third-party websites, products, or services that are not owned or controlled by <BrandName />. We are not responsible for the content, privacy practices, or any other aspect of third-party sites or services. Your interactions with any third party found on or through the Site are solely between you and the third party.
                </p>
              </PolicySection>

              {/* ── 09 ── */}
              <PolicySection id="section-09" num="09" title="Disclaimers">
                <div className="rounded-xl border border-line bg-white/[0.03] p-6">
                  <p className="font-mono text-[12px] leading-[1.9] text-ink-2">
                    THE SITE AND ITS CONTENT ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, <span className="font-bold text-brand-cyan">SUNSHINEONE LLC</span> DISCLAIMS ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                  </p>
                </div>
                <p className="mt-5 text-[15px] leading-[1.8] text-ink-2">
                  We do not warrant that the Site will be uninterrupted, error-free, secure, or free of viruses or other harmful components. Any reliance on Site content is at your own risk.
                </p>
                <p className="mt-4 text-[15px] leading-[1.8] text-ink-2">
                  The disclaimers in this Section do not affect the warranties or service commitments that may be expressly stated in an Engagement Agreement between you and <BrandName />.
                </p>
              </PolicySection>

              {/* ── 10 ── */}
              <PolicySection id="section-10" num="10" title="Limitation of Liability">
                <div className="rounded-xl border border-line bg-white/[0.03] p-6">
                  <p className="font-mono text-[12px] leading-[1.9] text-ink-2">
                    TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL <span className="font-bold text-brand-cyan">SUNSHINEONE LLC</span>, ITS OFFICERS, MEMBERS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES — INCLUDING, BUT NOT LIMITED TO, LOSS OF PROFITS, REVENUE, DATA, OR GOODWILL — ARISING OUT OF OR RELATING TO YOUR USE OF THE SITE OR THESE TERMS, WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR ANY OTHER LEGAL THEORY, EVEN IF <span className="font-bold text-brand-cyan">SUNSHINEONE LLC</span> HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                  </p>
                </div>
                <p className="mt-5 text-[15px] leading-[1.8] text-ink-2">
                  The aggregate liability of <BrandName /> arising out of or relating to these Terms or your use of the Site will not exceed one hundred United States dollars ($100). Liability arising from a signed Engagement Agreement is governed by the terms of that Engagement Agreement.
                </p>
              </PolicySection>

              {/* ── 11 ── */}
              <PolicySection id="section-11" num="11" title="Indemnification">
                <p className="text-[15px] leading-[1.8] text-ink-2">
                  You agree to defend, indemnify, and hold harmless <BrandName /> and its officers, members, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys&rsquo; fees) arising out of or in any way connected with: (a) your violation of these Terms; (b) your violation of any applicable law or third-party right; or (c) your misuse of the Site.
                </p>
              </PolicySection>

              {/* ── 12 ── */}
              <PolicySection id="section-12" num="12" title="Governing Law and Dispute Resolution">
                <p className="mb-4 text-[15px] leading-[1.8] text-ink-2">
                  These Terms are governed by and construed in accordance with the laws of the State of Alabama, United States, without regard to its conflict-of-laws principles. Any dispute arising out of or relating to these Terms, the Site, or SMS communications will be resolved exclusively in the state or federal courts located in the State of Alabama, and you consent to the personal jurisdiction of those courts.
                </p>
                <p className="text-[15px] leading-[1.8] text-ink-2">
                  Nothing in this Section limits either party&rsquo;s right to seek injunctive or other equitable relief in any court of competent jurisdiction for breach of intellectual property rights or confidentiality obligations.
                </p>
              </PolicySection>

              {/* ── 13 ── */}
              <PolicySection id="section-13" num="13" title="Changes to These Terms">
                <p className="text-[15px] leading-[1.8] text-ink-2">
                  We may update these Terms from time to time to reflect changes in our business, technology, or legal requirements. Updates will be posted on this page with a revised &ldquo;Last Updated&rdquo; date. Material changes will be highlighted on the Site when posted. Your continued use of the Site or our Services after the effective date of any update constitutes your acceptance of the updated Terms.
                </p>
              </PolicySection>

              {/* ── 14 ── */}
              <PolicySection id="section-14" num="14" title="Miscellaneous">
                <Subsection title="Entire Agreement">
                  <p className="text-[15px] leading-[1.8] text-ink-2">
                    These Terms, together with our Privacy Policy and any applicable Engagement Agreement, constitute the entire agreement between you and <BrandName /> regarding your use of the Site and SMS communications, and supersede any prior or contemporaneous communications.
                  </p>
                </Subsection>
                <Subsection title="Severability">
                  <p className="text-[15px] leading-[1.8] text-ink-2">
                    If any provision of these Terms is held invalid, illegal, or unenforceable, that provision will be severed and the remaining provisions will continue in full force and effect.
                  </p>
                </Subsection>
                <Subsection title="No Waiver">
                  <p className="text-[15px] leading-[1.8] text-ink-2">
                    Our failure to enforce any right or provision of these Terms will not be considered a waiver of that right or provision.
                  </p>
                </Subsection>
                <Subsection title="Assignment">
                  <p className="text-[15px] leading-[1.8] text-ink-2">
                    You may not assign or transfer these Terms, by operation of law or otherwise, without our prior written consent. We may assign these Terms freely.
                  </p>
                </Subsection>
                <Subsection title="Relationship of the Parties">
                  <p className="text-[15px] leading-[1.8] text-ink-2">
                    Nothing in these Terms creates a partnership, joint venture, employment, or agency relationship between you and <BrandName />.
                  </p>
                </Subsection>
              </PolicySection>

              {/* ── 15 ── */}
              <PolicySection id="section-15" num="15" title="Contact Us">
                <p className="mb-6 text-[15px] leading-[1.8] text-ink-2">
                  If you have any questions or concerns about these Terms, please contact us:
                </p>
                <div className="rounded-xl border border-line bg-gradient-to-b from-white/[0.05] to-white/[0.025] p-8">
                  <div className="mb-4 font-mono text-[11px] uppercase tracking-[1.8px] text-ink-3">Contact details</div>
                  <div className="mb-3"><BrandName /></div>
                  <div className="mb-0.5 text-[15px] leading-relaxed text-ink-2">2955 Weiss Lake Blvd</div>
                  <div className="mb-0.5 text-[15px] leading-relaxed text-ink-2">Leesburg, AL 35983</div>
                  <div className="mb-5 text-[15px] leading-relaxed text-ink-2">United States</div>
                  <div className="space-y-1.5">
                    <div className="text-[15px] text-ink-2">
                      <span className="font-semibold text-ink">Phone: </span>
                      <a href="tel:+13527029127" className="text-brand-cyan hover:underline">+1 (352) 702-9127</a>
                    </div>
                    <div className="text-[15px] text-ink-2">
                      <span className="font-semibold text-ink">Email: </span>
                      <a href="mailto:contact@sunshineonellc.com" className="text-brand-cyan hover:underline">contact@sunshineonellc.com</a>
                    </div>
                    <div className="text-[15px] text-ink-2">
                      <span className="font-semibold text-ink">Website: </span>
                      <a href="https://www.sunshineonellc.com" className="text-brand-cyan hover:underline">https://www.sunshineonellc.com</a>
                    </div>
                    <div className="text-[15px] text-ink-2">
                      <span className="font-semibold text-ink">Privacy Policy: </span>
                      <Link href="/privacy" className="text-brand-cyan hover:underline">View our Privacy Policy</Link>
                    </div>
                  </div>
                </div>
              </PolicySection>

              {/* Footer link */}
              <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-line pt-8">
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

/* ── Brand name highlight ── */
function BrandName() {
  return (
    <span className="font-bold text-[1.1em] text-brand-cyan" style={{ letterSpacing: "-0.2px" }}>
      SUNSHINEONE LLC
    </span>
  );
}

/* ── Layout components ── */

function PolicySection({
  id,
  num,
  title,
  children,
}: {
  id: string;
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} className="mb-6 scroll-mt-28 rounded-2xl border border-line bg-white/[0.02] p-8">
      <div className="mb-6 flex items-center gap-4 border-b border-line pb-5">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-brand-blue/10 font-mono text-[11px] font-bold tracking-wider text-brand-cyan">
          {num}
        </span>
        <h2 className="text-[19px] font-semibold tracking-[-0.4px] text-ink">{title}</h2>
      </div>
      <div className="space-y-6">{children}</div>
    </div>
  );
}

function Subsection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-3 border-l-2 border-brand-cyan/50 pl-4 text-[14px] font-semibold uppercase tracking-[0.6px] text-ink">
        {title}
      </h3>
      {children}
    </div>
  );
}

function BulletList({ items }: { items: (React.ReactNode)[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-[15px] leading-[1.7] text-ink-2">
          <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-cyan/60" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
