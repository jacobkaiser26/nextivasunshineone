import { cn } from "@/lib/utils";

interface TerminalProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Terminal({ title, children, className }: TerminalProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-md border border-line bg-[#020817] font-mono text-[13px]",
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-line bg-white/[0.02] px-4 py-3">
        <span className="h-[9px] w-[9px] rounded-full bg-[#FF6057]" />
        <span className="h-[9px] w-[9px] rounded-full bg-[#FFBD2E]" />
        <span className="h-[9px] w-[9px] rounded-full bg-[#28CA42]" />
        {title && (
          <span className="ml-2 text-[11.5px] tracking-wide text-muted">
            {title}
          </span>
        )}
      </div>
      <div className="space-y-1 p-5 leading-relaxed text-ink-2">{children}</div>
    </div>
  );
}
