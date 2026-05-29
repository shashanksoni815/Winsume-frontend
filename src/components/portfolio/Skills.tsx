import { Section } from "./Section";

const skills = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JavaScript",
  "TypeScript",
  "Git & GitHub",
  "REST APIs",
  "Tailwind CSS",
  "Lead Generation",
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="02 — Skills" title="Tools and technologies I work with daily.">
      <ul className="grid grid-cols-2 gap-px bg-border sm:grid-cols-3 lg:grid-cols-5">
        {skills.map((s, i) => (
          <li
            key={s}
            className="group bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-muted"
          >
            <div className="mb-8 text-xs tabular-nums text-muted-foreground">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="text-base font-medium tracking-tight">{s}</div>
          </li>
        ))}
      </ul>
    </Section>
  );
}