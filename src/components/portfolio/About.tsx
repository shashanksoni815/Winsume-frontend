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
            I'm a Full Stack Developer focused on building production-ready web applications and automation systems. I work across the MERN stack, developing scalable APIs, modern user interfaces, and backend architectures designed for performance and maintainability.
          </p>
          <p>
            Alongside development, I work on business automation and lead generation workflows that help companies improve efficiency and streamline operations. I focus on solving real business problems through practical and scalable technology solutions.
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