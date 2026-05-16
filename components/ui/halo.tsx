import { cn } from "@/lib/utils";

interface HaloProps {
  className?: string;
  opacity?: number;
}

export function Halo({ className, opacity = 1 }: HaloProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute -z-0 h-[600px] w-[600px] rounded-full blur-[80px]",
        className
      )}
      style={{
        background:
          "radial-gradient(circle, rgba(0,102,255,0.35) 0%, rgba(0,212,255,0.1) 35%, transparent 70%)",
        opacity,
      }}
    />
  );
}
