import { Section } from "./Section";

const focus = [
  "Full Stack Development",
  "MERN Stack",
  "REST APIs",
  "Business Automation",
  "Lead Generation",
  "Problem Solving",
];

export function About() {
  return (
    <Section id="about" eyebrow="01 — About" title="Engineer building reliable systems end to end.">
      <div className="grid gap-12 md:grid-cols-5">
        <div className="md:col-span-3 space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            I&apos;m a Full Stack Developer focused on shipping production-grade
            web applications and automation systems. I work across the MERN
            stack — designing APIs, modeling data, and building interfaces that
            feel fast and intentional.
          </p>
          <p>
            Beyond engineering, I help teams scale through business automation
            and lead generation workflows that turn manual work into repeatable
            systems. I care about clean code, measurable outcomes, and solving
            the actual problem.
          </p>
        </div>
        <ul className="md:col-span-2 space-y-3 text-sm">
          {focus.map((f) => (
            <li
              key={f}
              className="flex items-center gap-3 border-b border-border pb-3 text-muted-foreground"
            >
              <span className="text-foreground/40">→</span>
              <span className="text-foreground">{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}