import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  svgClassName?: string;
  withWordmark?: boolean;
  href?: string;
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-7 w-auto", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0066FF" />
          <stop offset="100%" stopColor="#00D4FF" />
        </linearGradient>
      </defs>
      <path d="M 50 0 L 120 0 L 95 30 L 50 30 Z" fill="url(#logoGrad)" />
      <rect x="50" y="0" width="22" height="120" fill="url(#logoGrad)" />
      <path d="M 0 90 L 72 90 L 72 120 L 25 120 Z" fill="url(#logoGrad)" />
    </svg>
  );
}

export function Logo({
  className,
  svgClassName,
  withWordmark = true,
  href = "/",
}: LogoProps) {
  return (
    <Link href={href} className={cn("flex items-center gap-2.5", className)}>
      <LogoMark className={svgClassName} />
      {withWordmark && (
        <span className="text-[19px] font-bold tracking-[-0.6px]">
          Sunshine
          <span className="bg-brand-gradient bg-clip-text text-transparent">
            one
          </span>
        </span>
      )}
    </Link>
  );
}
