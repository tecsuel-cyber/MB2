import type { ReactNode } from "react";

export function SectionTitle({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
        {kicker}
      </span>
      <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  );
}