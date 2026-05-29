import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shashank Soni — Full Stack Developer & Software Engineer" },
      { name: "description", content: "Shashank Soni builds scalable web applications, business automation systems, and modern digital experiences with the MERN stack." },
      { property: "og:title", content: "Shashank Soni — Full Stack Developer" },
      { property: "og:description", content: "Building scalable web applications, business automation systems, and modern digital experiences." },
    ],
  }),
  component: Index,
});

import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
