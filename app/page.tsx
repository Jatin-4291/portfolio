"use client"; // make entire page a client component
import Header from "@/Components/Header/page";
import About from "@/Components/About/page";
import WorkExperience from "@/Components/WorkExperience/page";
import Skills from "@/Components/Skills/page";
import { ModeToggle } from "@/Components/ThemeButton/page";
import Projects from "@/Components/Projects/page";
import ProblemSolving from "@/Components/ProblemSolving/page";
import Contact from "@/Components/Contact/page";
export default function Home() {
  return (
    <div>
      <ModeToggle />
      <div className="flex flex-col w-3/5 mx-auto min-h-screen py-2">
        <div>
          <Header />
          <About />
          <WorkExperience />
          <Skills />
          <Projects />
          <ProblemSolving />
          <Contact />
        </div>
        {/* <ProgressiveBlur height="20%" position="bottom" /> */}
      </div>
    </div>
  );
}
