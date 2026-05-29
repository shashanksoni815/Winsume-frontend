export function Hero() {
  return (
    <section
      id="home"
      className="px-6 pb-24 pt-20 sm:px-10 sm:pt-28 md:px-16 lg:px-24 lg:pb-32 lg:pt-36"
    >
      <div className="max-w-5xl">
        <div className="mb-10 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span className="h-px w-8 bg-border" />
          Portfolio / 2026
        </div>
        <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-[8rem]">
          Shashank
          <br />
          Soni.
        </h1>
        <p className="mt-10 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Full Stack Developer{" "}
          <span className="text-foreground/60">/</span> Software Engineer{" "}
          <span className="text-foreground/60">/</span> Lead Generation Specialist
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Building scalable web applications, business automation systems, and
          modern digital experiences.
        </p>
        <div className="mt-14 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <a
            href="#projects"
            className="border border-border px-5 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-foreground hover:text-foreground"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="border border-border px-5 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-foreground hover:text-foreground"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}