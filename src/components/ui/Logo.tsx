import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /** Kept for call-site compatibility; wordmark is already in the logo asset. */
  showWordmark?: boolean;
  priority?: boolean;
};

export function Logo({ className, priority = false }: LogoProps) {
  return (
    <Image
      src="/images/mirvate-logo-v2.png"
      alt="MIRVATE"
      width={280}
      height={72}
      priority={priority}
      unoptimized
      className={cn(
        "h-9 w-auto max-w-[160px] object-contain object-left sm:h-10 sm:max-w-[200px]",
        className,
      )}
    />
  );
}
