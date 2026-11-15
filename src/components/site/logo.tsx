import { cn } from "@/lib/utils";

export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <span className={cn("inline-flex flex-col items-start leading-none", className)}>
      <span
        className={cn(
          "font-display font-light italic tracking-[0.02em]",
          compact ? "text-2xl" : "text-4xl",
        )}
      >
        Terrazzo
      </span>
      <span
        className={cn(
          "mt-1 font-sans font-medium uppercase text-gold",
          compact ? "text-[0.55rem] tracking-[0.62em]" : "text-[0.65rem] tracking-[0.7em]",
        )}
      >
        Cucina
      </span>
    </span>
  );
}
