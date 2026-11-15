import type { AnchorHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const ctaVariants = cva(
  "group relative inline-flex items-center justify-center gap-3 overflow-hidden whitespace-nowrap font-sans text-[0.7rem] font-medium uppercase tracking-[0.28em] transition-all duration-700 ease-[var(--ease-lux)] focus-visible:outline-1",
  {
    variants: {
      variant: {
        gold: "bg-gold text-ink hover:bg-gold-soft",
        outlineLight: "border border-ivory/40 text-ivory hover:border-gold hover:text-gold",
        outlineDark: "border border-ink/30 text-ink hover:border-gold hover:bg-ink hover:text-ivory",
        link: "px-0 text-gold after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-100 after:bg-current after:transition-transform after:duration-700 hover:after:scale-x-50",
      },
      size: {
        md: "h-12 px-7",
        lg: "h-14 px-9",
        bare: "h-auto pb-2",
      },
    },
    defaultVariants: { variant: "gold", size: "lg" },
  },
);

type CtaProps = AnchorHTMLAttributes<HTMLAnchorElement> & VariantProps<typeof ctaVariants>;

export function Cta({ className, variant, size, children, ...props }: CtaProps) {
  const external = props.href?.startsWith("http");
  return (
    <a
      className={cn(ctaVariants({ variant, size }), className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
      <span
        aria-hidden
        className="inline-block h-px w-5 bg-current transition-all duration-700 group-hover:w-8"
      />
    </a>
  );
}
