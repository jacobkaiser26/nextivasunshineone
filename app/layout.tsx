import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Grain } from "@/components/grain";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sunshineonellc.com"),
  title: {
    default: "Sunshineone LLC — Software Development and AI Services",
    template: "%s — Sunshineone LLC",
  },
  description:
    "Sunshineone LLC is a software development company in Leesburg, Alabama. We build custom websites, mobile apps, AI tools, and cloud systems for our clients.",
  keywords: [
    "software development",
    "web development",
    "mobile app development",
    "AI development",
    "cloud hosting",
    "cybersecurity",
    "custom software",
    "Alabama",
  ],
  authors: [{ name: "SUNSHINEONE LLC" }],
  creator: "SUNSHINEONE LLC",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.sunshineonellc.com",
    title: "Sunshineone LLC — Software Development and AI Services",
    description:
      "Sunshineone LLC is a software development company in Leesburg, Alabama. We build custom websites, mobile apps, AI tools, and cloud systems for our clients.",
    siteName: "Sunshineone LLC",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunshineone LLC — Software Development and AI Services",
    description:
      "Sunshineone LLC is a software development company in Leesburg, Alabama. We build custom websites, mobile apps, AI tools, and cloud systems for our clients.",
  },
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%230066FF'/%3E%3Cstop offset='100%25' stop-color='%2300D4FF'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='256' height='256' rx='56' fill='url(%23g)'/%3E%3Cg transform='translate(68,68)' fill='white'%3E%3Cpath d='M50 0L120 0L95 30L50 30Z'/%3E%3Crect x='50' y='0' width='22' height='120'/%3E%3Cpath d='M0 90L72 90L72 120L25 120Z'/%3E%3C/g%3E%3C/svg%3E",
        type: "image/svg+xml",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#050B17",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans">
        <Grain />
        <Nav />
        <main className="relative z-[2]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
