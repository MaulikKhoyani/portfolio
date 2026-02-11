import { About } from "@/app/components/sections/About"
import { Contact } from "@/app/components/sections/Contact"
import { Experience } from "@/app/components/sections/Experience"
import { Hero } from "@/app/components/sections/Hero"
import { Projects } from "@/app/components/sections/Projects"
import { Services } from "@/app/components/sections/Services"
import { Skills } from "@/app/components/sections/Skills"
import { Testimonials } from "@/app/components/sections/Testimonials"

export default function Home() {
  return (
    <div className="flex flex-col gap-0 bg-background text-foreground overflow-x-hidden">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
}
