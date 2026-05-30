import { Section } from "./Section";

const projects = [
  {
    name: "Inventory Pro",
    description:
      "Multi-tenant Inventory & Franchise Management SaaS built for businesses managing multiple franchises. Features role-based access control, sales analytics, order management, QR-based inventory tracking, real-time dashboards, notifications, and advanced reporting systems.",
    stack: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "REST APIs",
    ],
    github: "#",
    demo: "#",
  },

  {
    name: "MEDZO",
    description:
      "Healthcare SaaS platform connecting hospitals, doctors, and patients through a scalable backend architecture. Includes 18+ REST APIs, geospatial search, resource discovery, AI-powered assistance, payment modules, and healthcare workflow management.",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Geospatial Queries",
      "AI Integration",
    ],
    github: "#",
    demo: "#",
  },

  {
    name: "Winsume Lifts",
    description:
      "Production-grade business platform for lift manufacturing and sales operations. Features dynamic product catalog management, inquiry workflow automation, lead generation system, customer authentication, and admin dashboard for sales tracking.",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Authentication",
      "Admin Dashboard",
    ],
    github: "#",
    demo: "#",
  },

  {
    name: "Dhasu Wallet",
    description:
      "Smart expense management platform designed for personal and group finance tracking. Includes automated expense splitting, trip budgeting, interactive dashboards, JWT authentication, and real-time financial insights.",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Finance Analytics",
    ],
    github: "#",
    demo: "#",
  },

  // {
  //   name: "Lead Engine",
  //   description:
  //     "Lead generation and automation platform for sourcing, qualification, CRM integration, lead tracking, outreach management, and business growth workflows.",
  //   stack: [
  //     "Node.js",
  //     "MongoDB",
  //     "REST APIs",
  //     "CRM Integration",
  //     "Automation",
  //   ],
  //   github: "#",
  //   demo: "#",
  // },
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

// export function Projects() {
//   return (
//     <Section id="projects" eyebrow="03 — Projects" title="Selected work and case studies.">
//       <div className="grid gap-px bg-border sm:grid-cols-2">
//         {projects.map((p, i) => (
//           <article
//             key={p.name}
//             className="group flex flex-col gap-8 bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-muted sm:p-10"
//           >
//             <div className="flex items-start justify-between">
//               <span className="text-xs tabular-nums text-muted-foreground">
//                 {String(i + 1).padStart(2, "0")}
//               </span>
//               <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
//                 Project
//               </span>
//             </div>
//             <div>
//               <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
//                 {p.name}
//               </h3>
//               <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
//                 {p.description}
//               </p>
//             </div>
//             <ul className="flex flex-wrap gap-2 text-xs text-muted-foreground">
//               {p.stack.map((s) => (
//                 <li key={s} className="border border-border px-2.5 py-1">
//                   {s}
//                 </li>
//               ))}
//             </ul>
//             <div className="mt-auto flex gap-6 pt-4 text-xs uppercase tracking-[0.2em]">
//               <a
//                 href={p.github}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="group/link inline-flex items-center gap-2 text-muted-foreground transition-colors duration-300 hover:text-foreground"
//               >
//                 GitHub <Arrow />
//               </a>
//               <a
//                 href={p.demo}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="group/link inline-flex items-center gap-2 text-muted-foreground transition-colors duration-300 hover:text-foreground"
//               >
//                 Live Demo <Arrow />
//               </a>
//             </div>
//           </article>
//         ))}
//       </div>
//     </Section>
//   );
// }

export function Projects() {
  const cols = 2; // matches sm:grid-cols-2

  // Number of filler cells needed to complete the last row
  const remainder = projects.length % cols;
  const fillerCount = remainder === 0 ? 0 : cols - remainder;

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

        {/* Filler cells — only rendered on sm+ (grid-cols-2), hidden on mobile (grid-cols-1) */}
        {Array.from({ length: fillerCount }).map((_, i) => (
          <div
            key={`filler-${i}`}
            className="hidden sm:block bg-background"
            aria-hidden="true"
          />
        ))}
      </div>
    </Section>
  );
}