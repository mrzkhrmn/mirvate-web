import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left" | "split";
  className?: string;
  sideContent?: React.ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  sideContent,
}: SectionHeadingProps) {
  if (align === "split") {
    return (
      <div
        className={cn(
          "mb-10 flex flex-col justify-between gap-4 md:mb-12 md:flex-row md:items-end",
          className,
        )}
      >
        <div>
          {eyebrow ? (
            <span className="font-[family-name:var(--font-mono)] text-xs font-medium uppercase tracking-widest text-primary">
              {eyebrow}
            </span>
          ) : null}
          <h2 className="mt-2 font-[family-name:var(--font-headline)] text-3xl font-bold tracking-tight text-on-surface md:text-5xl md:leading-[1.15]">
            {title}
          </h2>
        </div>
        {sideContent ??
          (description ? (
            <p className="max-w-md font-[family-name:var(--font-body)] text-[15px] leading-6 text-on-surface-variant">
              {description}
            </p>
          ) : null)}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "mb-10 max-w-3xl md:mb-12",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <div
          className={cn(
            "mb-2 inline-flex items-center gap-2 rounded bg-surface-container px-2 py-1 font-[family-name:var(--font-mono)] text-xs font-medium uppercase tracking-wider text-primary",
            align === "center" && "mx-auto",
          )}
        >
          {eyebrow}
        </div>
      ) : null}
      <h2 className="font-[family-name:var(--font-headline)] text-3xl font-bold tracking-tight text-on-surface md:text-5xl md:leading-[1.15]">
        {title}
      </h2>
      {description ? (
        <p className="mt-2 font-[family-name:var(--font-body)] text-[15px] leading-6 text-on-surface-variant">
          {description}
        </p>
      ) : null}
    </div>
  );
}
