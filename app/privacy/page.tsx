import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowRight, Shield, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Halo } from "@/components/ui/halo";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "SUNSHINEONE LLC Privacy Policy — how we collect, use, disclose, and protect your information, including SMS text messaging consent and data handling.",
};

const toc = [
  { num: "01", label: "Information We Collect" },
  { num: "02", label: "How We Use Your Information" },
  { num: "03", label: "SMS Communications & Consent" },
  { num: "04", label: "Information Sharing & Disclosure" },
  { num: "05", label: "Data Security" },
  { num: "06", label: "Your Rights and Choices" },
  { num: "07", label: "Data Retention" },
  { num: "08", label: "Cookies & Tracking" },
  { num: "09", label: "Third-Party Websites" },
  { num: "10", label: "Children's Privacy" },
  { num: "11", label: "Policy Changes" },
  { num: "12", label: "Contact Us" },
];

export default function PrivacyPage() {
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
                including SMS text messaging consent and data handling.
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
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
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
              <div className="mb-10 rounded-2xl border border-line bg-white/[0.02] p-8">
                <p className="text-[15px] leading-[1.8] text-ink-2">
                  <BrandName /> (&ldquo;SunShineone,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website at{" "}
                  <a href="https://www.sunshineonellc.com" className="text-brand-cyan hover:underline">https://www.sunshineonellc.com</a>{" "}
                  (the &ldquo;Site&rdquo;), submit a project inquiry, opt in to receive text messages, or otherwise interact with us. By using our Site or services, you agree to the practices described in this Privacy Policy.
                </p>
              </div>

              {/* ── 01 ── */}
              <PolicySection id="section-01" num="01" title="Information We Collect">
                <Subsection title="Information You Provide Directly">
                  <p className="mb-4 text-[15px] leading-[1.8] text-ink-2">When you contact us through our website, by phone, or by email, we may collect information that you voluntarily provide, including:</p>
                  <BulletList items={[
                    "Full name",
                    "Business or personal email address",
                    "Phone number (mobile or landline)",
                    "Mailing or business address",
                    "Company name and role (if applicable)",
                    "Project details, budget range, and engagement type",
                    "Any other information you choose to share with us during the course of a project or inquiry",
                  ]} />
                </Subsection>
                <Subsection title="Information Collected Automatically">
                  <p className="mb-4 text-[15px] leading-[1.8] text-ink-2">When you visit our Site, we may automatically collect certain information about your device and your usage, including:</p>
                  <BulletList items={[
                    "IP address and approximate geographic location",
                    "Browser type, version, and language",
                    "Operating system and device information",
                    "Pages viewed, referring URLs, and time spent on the Site",
                    "Cookies and similar tracking technologies (see Section 08)",
                  ]} />
                </Subsection>
              </PolicySection>

              {/* ── 02 ── */}
              <PolicySection id="section-02" num="02" title="How We Use Your Information">
                <p className="mb-6 text-[15px] leading-[1.8] text-ink-2">We use the information we collect for the following business purposes:</p>
                <Subsection title="Responding to Inquiries and Delivering Services">
                  <p className="text-[15px] leading-[1.8] text-ink-2">We use your contact information to respond to project inquiries, deliver our software consulting and digital transformation services, coordinate engagements, send administrative information, and keep you informed about the status of your project.</p>
                </Subsection>
                <Subsection title="Customer Support and Project Communication">
                  <p className="text-[15px] leading-[1.8] text-ink-2">We may contact you by phone, email, or SMS (where you have opted in) regarding ongoing engagements, scheduling, service updates, and support matters.</p>
                </Subsection>
                <Subsection title="Marketing and Promotional Communications">
                  <p className="text-[15px] leading-[1.8] text-ink-2">With your express consent, we may send you newsletters, service updates, or occasional promotional communications via email or SMS. You may opt out of marketing communications at any time by following the instructions in the message or by contacting us directly. Opting out of marketing does not affect transactional or service-related messages tied to an active engagement.</p>
                </Subsection>
                <Subsection title="Improving Our Site and Services">
                  <p className="text-[15px] leading-[1.8] text-ink-2">We analyze aggregated, de-identified usage data to improve Site performance, security, and the quality of our services.</p>
                </Subsection>
                <Subsection title="Legal and Compliance">
                  <p className="text-[15px] leading-[1.8] text-ink-2">We may use your information to comply with applicable laws, regulations, and legal obligations, including responding to lawful requests from public authorities and protecting our legal rights.</p>
                </Subsection>
              </PolicySection>

              {/* ── 03 ── */}
              <PolicySection id="section-03" num="03" title="SMS (Text Message) Communications and Consent">
                <p className="mb-6 text-[15px] leading-[1.8] text-ink-2">
                  <BrandName /> offers SMS text messaging to customers and prospective customers who voluntarily opt in. You are not required to consent to receive text messages as a condition of any service or purchase.
                </p>

                <Subsection title="How You Opt In">
                  <p className="mb-4 text-[15px] leading-[1.8] text-ink-2">You may consent to receive SMS messages from <BrandName /> by:</p>
                  <BulletList items={[
                    <>Checking the SMS opt-in checkbox on our contact form at <a href="https://www.sunshineonellc.com/contact" className="text-brand-cyan hover:underline">https://www.sunshineonellc.com/contact</a></>,
                    "Providing express written or verbal consent through direct communication with our team (such as during a project call or in an email)",
                  ]} />
                  <p className="mt-4 text-[15px] leading-[1.8] text-ink-2">We only send SMS messages to phone numbers that have opted in through one of the methods above. Consent is never purchased, rented, sold, or obtained from third-party lists.</p>
                </Subsection>

                <Subsection title="What We May Send">
                  <p className="mb-4 text-[15px] leading-[1.8] text-ink-2">Once you opt in, we may send you text messages related to:</p>
                  <BulletList items={[
                    "Project updates and status notifications",
                    "Appointment scheduling and coordination",
                    "Service-related notifications and reminders",
                    "Responses to your inquiries and customer support communications",
                    <>Occasional marketing or promotional updates from <BrandName /></>,
                  ]} />
                </Subsection>

                <Subsection title="Message Frequency and Rates">
                  <p className="text-[15px] leading-[1.8] text-ink-2">Message frequency varies depending on project activity and your interactions with us. Message and data rates may apply. Charges depend on your mobile carrier and wireless plan; <BrandName /> is not responsible for carrier fees.</p>
                </Subsection>

                <Subsection title="How to Get Help or Opt Out">
                  <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-brand-cyan/25 bg-brand-blue/[0.07] p-5">
                      <p className="mb-1 font-mono text-[13px] font-bold tracking-wider text-brand-cyan">Reply HELP</p>
                      <p className="text-[13.5px] leading-relaxed text-ink-2">at any time to receive contact information and assistance.</p>
                    </div>
                    <div className="rounded-xl border border-brand-cyan/25 bg-brand-blue/[0.07] p-5">
                      <p className="mb-1 font-mono text-[13px] font-bold tracking-wider text-brand-cyan">Reply STOP</p>
                      <p className="text-[13.5px] leading-relaxed text-ink-2">at any time to unsubscribe from all SMS communications from <BrandName />.</p>
                    </div>
                  </div>
                  <p className="mt-4 text-[15px] leading-[1.8] text-ink-2">After replying STOP, you will receive a one-time confirmation message and will no longer receive SMS messages from us. To resubscribe, reply START or opt in again through our website.</p>
                </Subsection>

                <Subsection title="Carrier Disclaimer">
                  <div className="flex items-start gap-3 rounded-lg border border-amber-500/25 bg-amber-500/[0.05] px-5 py-4">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                    <p className="text-[14px] leading-relaxed text-ink-2">Carriers (including but not limited to AT&amp;T, T-Mobile, and Verizon) are not liable for delayed or undelivered messages.</p>
                  </div>
                </Subsection>

                <Subsection title="Privacy of Your Mobile Information">
                  <div className="flex items-start gap-3 rounded-lg border border-success/25 bg-success/[0.05] px-5 py-4">
                    <Shield className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    <p className="text-[14px] leading-relaxed text-ink-2">No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. All other categories of information described in this Privacy Policy exclude text messaging originator opt-in data and consent — this information will not be shared with any third parties, including service providers, partners, or affiliates, under any circumstances except as required by law.</p>
                  </div>
                </Subsection>
              </PolicySection>

              {/* ── 04 ── */}
              <PolicySection id="section-04" num="04" title="Information Sharing and Disclosure">
                <p className="mb-6 text-[15px] leading-[1.8] text-ink-2">We do not sell, rent, lease, or trade your personal information to third parties for their own marketing purposes. We may share information only as described below:</p>
                <Subsection title="Service Providers">
                  <p className="mb-3 text-[15px] leading-[1.8] text-ink-2">We may share information with vetted service providers who perform functions on our behalf, such as cloud hosting, email delivery, analytics, customer relationship management, and technical support. These providers are bound by contractual obligations to protect your information and to use it only for the services they perform for us.</p>
                  <p className="text-[15px] leading-[1.8] text-ink-2">SMS opt-in data, mobile phone numbers collected for SMS consent, and SMS consent records are excluded from this sharing. Such information is not disclosed to service providers, affiliates, or any third party for marketing or promotional purposes.</p>
                </Subsection>
                <Subsection title="Legal Requirements">
                  <p className="text-[15px] leading-[1.8] text-ink-2">We may disclose information when required by law, court order, subpoena, or other legal process, or when we believe disclosure is necessary to protect our rights, property, safety, or the rights, property, or safety of others.</p>
                </Subsection>
                <Subsection title="Business Transfers">
                  <p className="text-[15px] leading-[1.8] text-ink-2">In the event of a merger, acquisition, financing, reorganization, or sale of company assets, your information may be transferred as part of that transaction, subject to the same protections described in this Privacy Policy.</p>
                </Subsection>
                <Subsection title="With Your Consent">
                  <p className="text-[15px] leading-[1.8] text-ink-2">We may share information for any other purpose with your express consent.</p>
                </Subsection>
              </PolicySection>

              {/* ── 05 ── */}
              <PolicySection id="section-05" num="05" title="Data Security">
                <p className="mb-4 text-[15px] leading-[1.8] text-ink-2">We implement reasonable administrative, technical, and physical safeguards to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption in transit, access controls, secure cloud infrastructure, and periodic security reviews.</p>
                <p className="text-[15px] leading-[1.8] text-ink-2">No method of internet transmission or electronic storage is 100% secure. While we strive to use commercially reasonable means to protect your information, we cannot guarantee absolute security.</p>
              </PolicySection>

              {/* ── 06 ── */}
              <PolicySection id="section-06" num="06" title="Your Rights and Choices">
                <Subsection title="Opting Out of Communications">
                  <p className="mb-4 text-[15px] leading-[1.8] text-ink-2">You may opt out of marketing communications at any time by:</p>
                  <BulletList items={[
                    <><strong className="font-semibold text-ink">Replying STOP</strong> to any SMS message</>,
                    "Clicking the unsubscribe link in any marketing email",
                    "Contacting us directly using the information in Section 12",
                  ]} />
                  <p className="mt-4 text-[15px] leading-[1.8] text-ink-2">You may continue to receive transactional or service-related communications related to active engagements even after opting out of marketing.</p>
                </Subsection>
                <Subsection title="Access, Update, or Delete Information">
                  <p className="text-[15px] leading-[1.8] text-ink-2">You have the right to request access to, correction of, or deletion of the personal information we hold about you. To exercise these rights, contact us using the information in Section 12. We may need to verify your identity before processing a request.</p>
                </Subsection>
                <Subsection title="State-Specific Rights">
                  <p className="text-[15px] leading-[1.8] text-ink-2">Depending on your state of residence, you may have additional privacy rights under laws such as the California Consumer Privacy Act (CCPA) or similar state legislation. Where applicable, we honor these rights upon verified request.</p>
                </Subsection>
              </PolicySection>

              {/* ── 07 ── */}
              <PolicySection id="section-07" num="07" title="Data Retention">
                <p className="text-[15px] leading-[1.8] text-ink-2">We retain personal information only for as long as necessary to fulfill the purposes described in this Privacy Policy, comply with our legal obligations, resolve disputes, and enforce our agreements. SMS opt-in and consent records are retained for as long as required to demonstrate compliance with applicable laws and carrier requirements.</p>
              </PolicySection>

              {/* ── 08 ── */}
              <PolicySection id="section-08" num="08" title="Cookies and Tracking Technologies">
                <p className="text-[15px] leading-[1.8] text-ink-2">Our Site uses cookies and similar technologies to provide functionality, remember preferences, analyze usage, and improve your experience. You can control cookies through your browser settings. Disabling cookies may affect some features of the Site.</p>
              </PolicySection>

              {/* ── 09 ── */}
              <PolicySection id="section-09" num="09" title="Third-Party Websites">
                <p className="text-[15px] leading-[1.8] text-ink-2">Our Site may contain links to third-party websites, products, or services. We are not responsible for the privacy practices or content of those third parties. We encourage you to review the privacy policy of any third-party site you visit before sharing personal information.</p>
              </PolicySection>

              {/* ── 10 ── */}
              <PolicySection id="section-10" num="10" title="Children's Privacy">
                <p className="text-[15px] leading-[1.8] text-ink-2">Our Site and services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we learn we have collected such information, we will delete it promptly. If you believe we have collected information from a child under 13, please contact us using the information in Section 12.</p>
              </PolicySection>

              {/* ── 11 ── */}
              <PolicySection id="section-11" num="11" title="Changes to This Privacy Policy">
                <p className="text-[15px] leading-[1.8] text-ink-2">We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other operational factors. Any updates will be posted on this page with a revised &ldquo;Last Updated&rdquo; date. We encourage you to review this Privacy Policy periodically. Material changes will be highlighted on our Site when posted.</p>
              </PolicySection>

              {/* ── 12 ── */}
              <PolicySection id="section-12" num="12" title="Contact Us">
                <p className="mb-6 text-[15px] leading-[1.8] text-ink-2">If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:</p>
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
                  </div>
                </div>
              </PolicySection>

              {/* Footer link */}
              <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-line pt-8">
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
