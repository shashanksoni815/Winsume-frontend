import { Section } from "./Section";

const responsibilities = [
  "Software Development",
  "Lead Generation",
  "Client Communication",
  "Web Solutions",
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="04 — Experience" title="Where I've shipped work.">
      <div className="border-t border-border">
        <div className="grid gap-8 border-b border-border py-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Present
            </div>
          </div>
          <div className="md:col-span-9">
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Full Stack Engineer
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">Jaqyi.com</p>
            <ul className="mt-8 grid gap-px bg-border sm:grid-cols-2">
              {responsibilities.map((r) => (
                <li
                  key={r}
                  className="bg-background p-5 text-sm text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:bg-muted hover:text-foreground"
                >
                  <span className="text-foreground/40">— </span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}