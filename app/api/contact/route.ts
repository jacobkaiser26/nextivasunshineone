import { NextResponse } from "next/server";
import { Resend } from "resend";

/* -------------------------------------------------------------------------- */
/*  Sunshineone — contact form handler                                        */
/*                                                                            */
/*  Receives the contact-form POST, validates it, and emails the inquiry to   */
/*  the business inbox via Resend.                                            */
/*                                                                            */
/*  Required environment variables (set in .env.local for local dev, Vercel   */
/*  dashboard → Settings → Environment Variables for production):             */
/*    RESEND_API_KEY     —  your Resend API key                               */
/*    CONTACT_TO_EMAIL   —  inbox that receives form submissions              */
/*    CONTACT_FROM_EMAIL —  sender address (must be a verified Resend domain  */
/*                          or 'onboarding@resend.dev' until your domain      */
/*                          is verified inside Resend).                       */
/* -------------------------------------------------------------------------- */

// Tell Next.js this is a dynamic route — don't try to optimize/prerender it
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

// Minimal HTML-escape so user-supplied data can't inject markup into the email
function escape(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  type?: string;
  budget?: string;
  message?: string;
  smsConsent?: boolean;
}

export async function POST(req: Request) {
  // -- Environment guard --------------------------------------------------- //
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "Server email is not configured." },
      { status: 500 },
    );
  }

  const to = process.env.CONTACT_TO_EMAIL || "aznixholding@gmail.com";
  const from =
    process.env.CONTACT_FROM_EMAIL ||
    "Sunshineone Contact <onboarding@resend.dev>";

  // -- Parse body ---------------------------------------------------------- //
  let body: ContactPayload;
  try {
    body = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const {
    name = "",
    email = "",
    phone = "",
    company = "",
    type = "",
    budget = "",
    message = "",
    smsConsent = false,
  } = body;

  // -- Validation ---------------------------------------------------------- //
  if (!name.trim() || !email.trim() || !message.trim()) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  // -- Compose email ------------------------------------------------------- //
  const timestamp = new Date().toLocaleString("en-US", {
    timeZone: "America/Chicago",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const subject = `New inquiry from ${name.trim()}${
    company.trim() ? ` (${company.trim()})` : ""
  }`;

  const html = `
    <!doctype html>
    <html lang="en">
      <body style="margin:0;padding:32px 16px;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#1e293b;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e2e8f0;">
          <tr>
            <td style="background:linear-gradient(135deg,#0066FF 0%,#00D4FF 100%);padding:28px 32px;color:#ffffff;">
              <div style="font-family:'SFMono-Regular',Menlo,monospace;font-size:11px;letter-spacing:2px;text-transform:uppercase;opacity:0.85;">SUNSHINEONE · NEW INQUIRY</div>
              <div style="font-size:22px;font-weight:700;letter-spacing:-0.5px;margin-top:8px;">${escape(name)}</div>
              <div style="font-size:13px;opacity:0.85;margin-top:4px;">${escape(timestamp)} CT</div>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 32px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="font-size:14px;line-height:1.6;">
                <tr><td style="padding:6px 0;color:#64748b;width:140px;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Email</td><td style="padding:6px 0;"><a href="mailto:${escape(email)}" style="color:#0066FF;text-decoration:none;">${escape(email)}</a></td></tr>
                ${
                  phone.trim()
                    ? `<tr><td style="padding:6px 0;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Phone</td><td style="padding:6px 0;"><a href="tel:${escape(phone)}" style="color:#0066FF;text-decoration:none;">${escape(phone)}</a></td></tr>`
                    : ""
                }
                ${
                  company.trim()
                    ? `<tr><td style="padding:6px 0;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Company</td><td style="padding:6px 0;">${escape(company)}</td></tr>`
                    : ""
                }
                ${
                  type.trim()
                    ? `<tr><td style="padding:6px 0;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Engagement</td><td style="padding:6px 0;">${escape(type)}</td></tr>`
                    : ""
                }
                ${
                  budget.trim()
                    ? `<tr><td style="padding:6px 0;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Budget</td><td style="padding:6px 0;">${escape(budget)}</td></tr>`
                    : ""
                }
                ${
                  phone.trim()
                    ? `<tr><td style="padding:6px 0;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:1px;">SMS consent</td><td style="padding:6px 0;color:${smsConsent ? "#00A878" : "#94a3b8"};font-weight:600;">${smsConsent ? "✓ Granted" : "✗ Declined / not provided"}</td></tr>`
                    : ""
                }
              </table>
              <div style="margin-top:24px;padding-top:24px;border-top:1px solid #e2e8f0;">
                <div style="color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;">Message</div>
                <div style="white-space:pre-wrap;color:#1e293b;font-size:14.5px;line-height:1.65;">${escape(message)}</div>
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding:18px 32px;background:#f8fafc;color:#94a3b8;font-size:11px;font-family:'SFMono-Regular',Menlo,monospace;letter-spacing:0.5px;">
              Replying to this email will go directly to <a href="mailto:${escape(email)}" style="color:#0066FF;">${escape(email)}</a>.
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;

  const text = [
    `New inquiry — Sunshineone`,
    `From: ${name} <${email}>`,
    phone.trim()
      ? `Phone: ${phone} (SMS consent: ${smsConsent ? "yes" : "no"})`
      : null,
    company.trim() ? `Company: ${company}` : null,
    type.trim() ? `Engagement: ${type}` : null,
    budget.trim() ? `Budget: ${budget}` : null,
    `Time: ${timestamp} CT`,
    ``,
    `Message:`,
    message,
  ]
    .filter(Boolean)
    .join("\n");

  // -- Send ---------------------------------------------------------------- //
  try {
    // Resend client is instantiated here (per-request) so the module can be
    // loaded at build time without a valid API key being present.
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject,
      html,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Could not send your message. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Unexpected contact route error:", err);
    return NextResponse.json(
      { error: "Unexpected server error." },
      { status: 500 },
    );
  }
}
