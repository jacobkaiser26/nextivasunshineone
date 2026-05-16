"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Check, X, ArrowRight, MessageSquare } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface SmsConsentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConsent: (consented: boolean) => void;
  phoneNumber?: string;
  submitting?: boolean;
}

export function SmsConsentModal({
  open,
  onOpenChange,
  onConsent,
  phoneNumber,
  submitting = false,
}: SmsConsentModalProps) {
  const [checked, setChecked] = useState(false);

  // Reset checkbox whenever the modal opens
  useEffect(() => {
    if (open) setChecked(false);
  }, [open]);

  const handleConfirm = () => {
    if (!checked) return;
    onConsent(true);
  };

  const handleDecline = () => {
    onConsent(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-brand-blue/30 bg-gradient-to-br from-brand-blue/20 to-brand-cyan/10">
            <MessageSquare className="h-[18px] w-[18px] text-brand-cyan" strokeWidth={1.8} />
          </div>
          <DialogTitle>One quick consent before we send.</DialogTitle>
          <DialogDescription>
            We&apos;d like permission to text you at{" "}
            {phoneNumber ? (
              <strong className="text-ink">{phoneNumber}</strong>
            ) : (
              "the number you provided"
            )}{" "}
            about your inquiry. Read the short version below.
          </DialogDescription>
        </DialogHeader>

        <div className="px-8 pb-6">
          {/* Will / Won't lists */}
          <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-md border border-brand-cyan/25 bg-brand-cyan/[0.04] p-4">
              <div className="mb-2 flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[1.5px] text-brand-cyan">
                <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                What we&apos;ll send
              </div>
              <ul className="space-y-1 text-[12.5px] leading-relaxed text-ink-2">
                <li>Project updates &amp; milestones</li>
                <li>Appointment confirmations</li>
                <li>Customer support replies</li>
                <li>Inquiry follow-ups</li>
              </ul>
            </div>
            <div className="rounded-md border border-line bg-white/[0.025] p-4">
              <div className="mb-2 flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[1.5px] text-ink-3">
                <X className="h-3.5 w-3.5" strokeWidth={2.5} />
                What we won&apos;t send
              </div>
              <ul className="space-y-1 text-[12.5px] leading-relaxed text-ink-2">
                <li>Marketing or promotions</li>
                <li>Third-party offers</li>
                <li>Newsletters or ads</li>
                <li>Anything you didn&apos;t ask for</li>
              </ul>
            </div>
          </div>

          {/* Disclosures */}
          <div className="mb-5 rounded-md border border-line bg-white/[0.02] px-4 py-3.5 font-mono text-[11px] leading-relaxed tracking-wide text-ink-3">
            <div>
              <span className="text-ink-2">Frequency:</span> Varies based on your inquiry.
            </div>
            <div>
              <span className="text-ink-2">Rates:</span> Standard message &amp; data rates may apply.
            </div>
            <div>
              <span className="text-ink-2">Opt out:</span> Reply <strong className="text-ink">STOP</strong> anytime.
            </div>
            <div>
              <span className="text-ink-2">Help:</span> Reply <strong className="text-ink">HELP</strong> or contact us.
            </div>
          </div>

          {/* Consent checkbox */}
          <label className="flex cursor-pointer items-start gap-3 rounded-md border border-line bg-white/[0.025] p-4 transition-colors hover:border-line-strong has-[:checked]:border-brand-cyan/40 has-[:checked]:bg-brand-blue/[0.04]">
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              className="mt-0.5 h-[18px] w-[18px] shrink-0 cursor-pointer accent-brand-blue"
            />
            <span className="text-[13.5px] leading-relaxed text-ink-2">
              I agree to receive SMS messages from <strong className="text-ink">Sunshineone LLC</strong> at
              the phone number I provided, for the purposes listed above. I understand consent is not
              required to receive a response, and I can opt out at any time. See our{" "}
              <Link
                href="/privacy"
                target="_blank"
                className="text-brand-cyan underline-offset-4 hover:underline"
              >
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link
                href="/terms"
                target="_blank"
                className="text-brand-cyan underline-offset-4 hover:underline"
              >
                Terms
              </Link>
              .
            </span>
          </label>
        </div>

        <DialogFooter>
          <Button
            type="button"
            variant="ghost"
            onClick={handleDecline}
            disabled={submitting}
          >
            Send without SMS
          </Button>
          <Button
            type="button"
            onClick={handleConfirm}
            disabled={!checked || submitting}
          >
            {submitting ? (
              "Sending…"
            ) : (
              <>
                Confirm &amp; send <ArrowRight className="h-[18px] w-[18px]" />
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
