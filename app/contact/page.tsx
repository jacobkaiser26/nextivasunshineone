"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, ArrowRight, Mail, Phone, MapPin, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Halo } from "@/components/ui/halo";
import { Reveal } from "@/components/ui/reveal";

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  type: string;
  budget: string;
  message: string;
  smsConsent: boolean;
}

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  type: "",
  budget: "",
  message: "",
  smsConsent: false,
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [consentError, setConsentError] = useState(false);

  const update = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setConsentError(false);

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in name, email, and the message.");
      return;
    }

    if (!form.smsConsent) {
      setConsentError(true);
      setError("You must check the consent box before submitting.");
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          type: form.type,
          budget: form.budget,
          message: form.message,
          smsConsent: form.smsConsent,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(data?.error || "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="relative overflow-hidden pb-20 pt-44">
        <Halo className="-right-24 -top-52" />
        <div className="container relative">
          <Reveal>
            <div className="mb-8 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[1.5px] text-ink-3">
              <Link href="/" className="hover:text-ink">Home</Link>
              <ChevronRight className="h-3 w-3 text-muted" />
              <span>Contact</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}><Eyebrow className="mb-6">Get in touch</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h1 className="h-display mb-7">
              Tell us what you&apos;re <span className="accent-text">building.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="lede max-w-[60ch]">
              A senior engineer will respond within one business day. Not a
              salesperson — the same person who would lead your engagement.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
            {/* FORM */}
            <Reveal>
              <div className="card-surface p-10">
                {submitted ? (
                  <div className="py-10 text-center">
                    <Eyebrow centered className="mb-4">Message sent</Eyebrow>
                    <h2 className="h2 mb-4">Got it. We&apos;ll be in touch.</h2>
                    <p className="lede mx-auto">
                      A senior engineer will respond within one business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <Eyebrow className="mb-2">Project inquiry</Eyebrow>
                    <h2 className="h3 mb-6">Send us a brief.</h2>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <FormField label="Full name" name="name" type="text" required value={form.name} onChange={update("name")} />
                      <FormField label="Work email" name="email" type="email" required value={form.email} onChange={update("email")} />
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <FormField
                        label="Phone (optional)"
                        name="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={form.phone}
                        onChange={update("phone")}
                      />
                      <FormField label="Company" name="company" type="text" value={form.company} onChange={update("company")} />
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <FormSelect
                        label="Engagement type"
                        name="type"
                        value={form.type}
                        onChange={update("type")}
                        options={["Fixed-scope build", "Embedded team", "Fractional leadership", "Not sure yet"]}
                      />
                      <FormSelect
                        label="Budget range"
                        name="budget"
                        value={form.budget}
                        onChange={update("budget")}
                        options={["< $25k", "$25k – $75k", "$75k – $200k", "$200k+", "TBD"]}
                      />
                    </div>

                    <FormField
                      label="Tell us about the project"
                      name="message"
                      type="textarea"
                      required
                      value={form.message}
                      onChange={update("message")}
                    />

                    {/* SMS Consent */}
                    <div className={`flex items-start gap-3 rounded-[10px] border p-4 transition-colors ${consentError ? "border-[#FF6057]/60 bg-[#FF6057]/[0.06]" : "border-line bg-white/[0.025]"}`}>
                      <input
                        type="checkbox"
                        id="smsConsent"
                        checked={form.smsConsent}
                        onChange={(e) => {
                          setForm((f) => ({ ...f, smsConsent: e.target.checked }));
                          if (e.target.checked) {
                            setConsentError(false);
                            setError(null);
                          }
                        }}
                        className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-brand-cyan"
                      />
                      <label htmlFor="smsConsent" className="cursor-pointer text-xs leading-relaxed text-ink-3">
                        <span className="text-sm font-semibold text-ink">
                          I consent to receive text messages from{" "}
                          <span className="font-bold text-brand-cyan">SUNSHINEONE LLC</span>{" "}
                          regarding my inquiry and project updates
                        </span>
                        <br />
                        By checking this box, you agree to receive SMS text messages from{" "}
                        <span className="font-bold text-brand-cyan">SUNSHINEONE LLC</span>{" "}
                        at the phone number provided, related to your inquiry, project updates, appointment
                        coordination, service notifications, and customer support. Message frequency varies.
                        Message and data rates may apply. Reply HELP for help or STOP to unsubscribe at any
                        time. Consent is not a condition of any purchase. See our{" "}
                        <Link href="/privacy" className="text-brand-cyan hover:underline">
                          Privacy Policy
                        </Link>
                        {" "}and{" "}
                        <Link href="/terms" className="text-brand-cyan hover:underline">
                          Terms &amp; Conditions
                        </Link>
                        {" "}for details on how we handle your information.
                      </label>
                    </div>

                    {error && (
                      <div className="flex items-start gap-3 rounded-md border border-[#FF6057]/35 bg-[#FF6057]/[0.08] p-4 text-sm text-[#FFB4AF]">
                        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                        <span>{error}</span>
                      </div>
                    )}

                    <Button type="submit" size="lg" className="w-full" disabled={submitting}>
                      {submitting ? (
                        "Sending…"
                      ) : (
                        <>
                          Submit inquiry <ArrowRight className="h-[18px] w-[18px]" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </Reveal>

            {/* INFO COLUMN */}
            <Reveal delay={0.1}>
              <div className="space-y-5">
                <div className="card-surface p-7">
                  <Eyebrow className="mb-4">Direct lines</Eyebrow>
                  <div className="space-y-4">
                    <ContactRow icon={Mail} label="Email" value="contact@sunshineonellc.com" href="mailto:contact@sunshineonellc.com" />
                    <ContactRow icon={Phone} label="Customer support" value="(352) 702-9127" href="tel:+13527029127" />
                    <ContactRow icon={MapPin} label="Office" value="2955 Weiss Lake Blvd, Leesburg, AL 35983" />
                  </div>
                </div>
                <div className="rounded-lg border border-brand-cyan/25 bg-brand-blue/[0.05] p-7">
                  <Eyebrow className="mb-3">Live chat</Eyebrow>
                  <p className="text-sm text-ink-2">
                    Office hours: Mon–Fri, 9am–6pm CT. Our chat widget is on the
                    bottom-right of every page.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

/* -------------------------- Reusable form parts -------------------------- */

interface FormFieldProps {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  hint?: string;
}

function FormField({ label, name, type, required, value, onChange, placeholder, hint }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="font-mono text-[11px] uppercase tracking-[1.5px] text-ink-3">
        {label} {required && <span className="text-brand-cyan">*</span>}
      </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          rows={5}
          placeholder={placeholder}
          className="resize-y rounded-[10px] border border-line bg-white/[0.025] px-4 py-3.5 text-[15px] text-ink outline-none transition-all placeholder:text-muted focus:border-brand-blue focus:bg-brand-blue/[0.05]"
        />
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="rounded-[10px] border border-line bg-white/[0.025] px-4 py-3.5 text-[15px] text-ink outline-none transition-all placeholder:text-muted focus:border-brand-blue focus:bg-brand-blue/[0.05]"
        />
      )}
      {hint && (
        <span className="font-mono text-[10.5px] tracking-wide text-muted">{hint}</span>
      )}
    </div>
  );
}

interface FormSelectProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}

function FormSelect({ label, name, value, onChange, options }: FormSelectProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="font-mono text-[11px] uppercase tracking-[1.5px] text-ink-3">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="rounded-[10px] border border-line bg-white/[0.025] px-4 py-3.5 text-[15px] text-ink outline-none transition-all focus:border-brand-blue"
      >
        <option value="" disabled>Select…</option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-bg-2">
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-brand-blue/20 bg-brand-blue/10 text-brand-cyan">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <div className="mb-0.5 font-mono text-[10.5px] uppercase tracking-[1.2px] text-ink-3">
          {label}
        </div>
        <div className="text-sm text-ink">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block transition-opacity hover:opacity-80">
      {content}
    </a>
  ) : (
    content
  );
}
