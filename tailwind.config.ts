import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        // Sunshineone brand
        brand: {
          blue: "#0066FF",
          cyan: "#00D4FF",
          "blue-2": "#3B82F6",
          "cyan-2": "#00E5FF",
          navy: "#0A1628",
        },
        // Surfaces (dark)
        bg: {
          DEFAULT: "#050B17",
          2: "#0A1628",
          3: "#111E33",
        },
        ink: {
          DEFAULT: "#F8FAFC",
          2: "#CBD5E1",
          3: "#94A3B8",
        },
        muted: {
          DEFAULT: "#64748B",
        },
        line: {
          DEFAULT: "rgba(255,255,255,0.08)",
          strong: "rgba(255,255,255,0.14)",
        },
        success: "#00E5A0",
        // ShadCN-compatible tokens (mapped to Sunshineone palette)
        border: "hsl(217 33% 17%)",
        input: "hsl(217 33% 17%)",
        ring: "#0066FF",
        background: "#050B17",
        foreground: "#F8FAFC",
        primary: {
          DEFAULT: "#0066FF",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "rgba(255,255,255,0.05)",
          foreground: "#F8FAFC",
        },
        destructive: {
          DEFAULT: "#FF6057",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "rgba(255,255,255,0.05)",
          foreground: "#F8FAFC",
        },
        popover: {
          DEFAULT: "#0A1628",
          foreground: "#F8FAFC",
        },
        card: {
          DEFAULT: "rgba(255,255,255,0.025)",
          foreground: "#F8FAFC",
        },
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #0066FF 0%, #00D4FF 100%)",
        "brand-gradient-soft":
          "linear-gradient(135deg, rgba(0,102,255,0.18) 0%, rgba(0,212,255,0.12) 100%)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      borderRadius: {
        lg: "22px",
        md: "14px",
        sm: "8px",
        xl: "28px",
      },
      letterSpacing: {
        tighter: "-0.05em",
        tightest: "-0.07em",
      },
      keyframes: {
        "pulse-dot": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "pulse-dot": "pulse-dot 2.2s ease-in-out infinite",
        "accordion-down": "accordion-down 0.3s ease-out",
        "accordion-up": "accordion-up 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
