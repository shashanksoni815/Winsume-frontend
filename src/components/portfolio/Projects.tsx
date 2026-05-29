import { Section } from "./Section";

const projects = [
  {
    name: "Jaqyi Platform",
    description:
      "Full-stack web platform powering client workflows, authentication, and dashboards with a focus on speed and reliability.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/",
    demo: "https://jaqyi.com",
  },
  {
    name: "Lead Engine",
    description:
      "Automation system for sourcing, qualifying, and routing leads with custom scoring and CRM integrations.",
    stack: ["Node.js", "MongoDB", "REST APIs", "Automation"],
    github: "https://github.com/",
    demo: "#",
  },
  {
    name: "Commerce Dashboard",
    description:
      "Operational dashboard for tracking orders, revenue, and inventory in real time with role-based access.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Express"],
    github: "https://github.com/",
    demo: "#",
  },
  {
    name: "API Toolkit",
    description:
      "Reusable REST API boilerplate with auth, validation, logging, and testing baked in for rapid project starts.",
    stack: ["Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/",
    demo: "#",
  },
];

function Arrow() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
    >
      <path d="M7 17 17 7M9 7h8v8" strokeLinecap="square" />
    </svg>
  );
}

export function Projects() {
  return (
    <Section id="projects" eyebrow="03 — Projects" title="Selected work and case studies.">
      <div className="grid gap-px bg-border sm:grid-cols-2">
        {projects.map((p, i) => (
          <article
            key={p.name}
            className="group flex flex-col gap-8 bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-muted sm:p-10"
          >
            <div className="flex items-start justify-between">
              <span className="text-xs tabular-nums text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Project
              </span>
            </div>
            <div>
              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {p.name}
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                {p.description}
              </p>
            </div>
            <ul className="flex flex-wrap gap-2 text-xs text-muted-foreground">
              {p.stack.map((s) => (
                <li key={s} className="border border-border px-2.5 py-1">
                  {s}
                </li>
              ))}
            </ul>
            <div className="mt-auto flex gap-6 pt-4 text-xs uppercase tracking-[0.2em]">
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="group/link inline-flex items-center gap-2 text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                GitHub <Arrow />
              </a>
              <a
                href={p.demo}
                target="_blank"
                rel="noreferrer"
                className="group/link inline-flex items-center gap-2 text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                Live Demo <Arrow />
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}