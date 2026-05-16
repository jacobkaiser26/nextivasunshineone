import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1.5 font-mono text-[11px] tracking-[1px] transition-colors",
  {
    variants: {
      variant: {
        default: "border-line bg-white/[0.025] text-ink-2",
        outline: "border-line-strong text-ink-2",
        accent:
          "border-brand-blue/30 bg-brand-blue/10 text-brand-cyan",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
