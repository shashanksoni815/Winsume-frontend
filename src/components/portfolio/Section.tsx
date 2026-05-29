import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section
      id={id}
      className="border-t border-border px-6 py-24 sm:px-10 md:px-16 lg:px-24 lg:py-32"
    >
      <div className="max-w-5xl">
        <div className="mb-12 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span className="h-px w-8 bg-border" />
          {eyebrow}
        </div>
        <h2 className="mb-12 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}