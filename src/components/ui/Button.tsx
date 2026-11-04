import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  accent:
    "bg-primary-container text-on-primary-container shadow-[0_0_32px_rgba(0,240,255,0.4)] hover:shadow-[0_0_48px_rgba(0,240,255,0.65)] hover:scale-[1.02] active:scale-[0.98]",
  primary:
    "bg-surface-container-high text-on-surface hover:bg-primary-container hover:text-on-primary-container glow-cyan-sm",
  ghost:
    "bg-surface-container/80 backdrop-blur-md text-on-surface hover:bg-surface-container-high",
} as const;

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: keyof typeof variants;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
};

export function Button({
  children,
  href,
  variant = "accent",
  className,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex h-12 items-center justify-center gap-2 rounded-lg px-6 font-[family-name:var(--font-headline)] text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
