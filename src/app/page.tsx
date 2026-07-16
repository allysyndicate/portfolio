import GlowBackground from "@/components/GlowBackground";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import { Chapters, SideProjects, Education, Contact } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <GlowBackground />
      <NavBar />
      <div className="relative z-10 mx-auto max-w-screen-xl px-4 sm:px-6 md:px-10">
        <main>
          <Hero />
          <SelectedWork />
          <Chapters />
          <SideProjects />
          <Education />
          <Contact />
        </main>
      </div>
    </>
  );
}
