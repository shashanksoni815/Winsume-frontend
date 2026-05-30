import { Section } from "./Section";

const channels = [
  { label: "Email", value: "shashanksoni815@gmail.com", href: "mailto:shashanksoni815@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/shashank-soni815", href: "https://linkedin.com/in/shashank-soni815" },
  { label: "GitHub", value: "github.com/shashanksoni815", href: "https://github.com/shashanksoni815" },
];

export function Contact() {
  return (
    <Section id="contact" eyebrow="05 — Contact" title="Let's build something durable.">
      <p className="mb-12 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        Open to full-time opportunities, freelance projects, startup collaborations, and automation solutions. The fastest way to reach me is through email.
      </p>
      <ul className="divide-y divide-border border-y border-border">
        {channels.map((c) => (
          <li key={c.label}>
            <a
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col gap-1 py-6 transition-all duration-300 hover:-translate-y-1 sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground sm:w-32">
                {c.label}
              </span>
              <span className="flex-1 text-lg tracking-tight transition-colors duration-300 group-hover:text-foreground sm:text-xl">
                {c.value}
              </span>
              <span className="text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground">
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}