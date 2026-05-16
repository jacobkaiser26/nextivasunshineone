import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}

export function Eyebrow({ children, className, centered }: EyebrowProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[2.5px] text-ink-3",
        centered && "justify-center",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan shadow-[0_0_8px_#00D4FF,0_0_16px_rgba(0,212,255,0.4)] animate-pulse-dot" />
      <span>{children}</span>
    </div>
  );
}
