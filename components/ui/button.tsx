import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[10px] text-sm font-medium tracking-[-0.2px] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-brand-gradient text-white shadow-[0_8px_24px_-8px_rgba(0,102,255,0.55),inset_0_1px_0_rgba(255,255,255,0.15)] hover:-translate-y-px hover:shadow-[0_14px_36px_-8px_rgba(0,102,255,0.65),inset_0_1px_0_rgba(255,255,255,0.2)]",
        ghost:
          "bg-transparent text-ink border border-line-strong hover:bg-white/5 hover:border-white/20",
        outline:
          "border border-line bg-transparent hover:bg-white/5",
        link: "text-brand-cyan underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-3",
        sm: "h-9 px-4 text-[13px]",
        lg: "h-12 px-7 text-[15px] rounded-xl",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
