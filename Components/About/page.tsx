import React from "react";
import { BlurFade } from "../ui/blur-fade";

export default function About() {
  return (
    // We wrap everything in a <section> tag
    // px-4 adds padding on the left/right for phones
    // py-8 adds padding on the top/bottom
    <section className="ml-2 sm:ml-24 py-2  sm:py-4">
      <BlurFade delay={0.1} inView>
        {/*
          - This div centers your content on the page.
          - 'max-w-3xl' prevents it from getting too wide on desktops.
          - 'mx-auto' is what centers it horizontally.
        */}
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col justify-start">
            <h3 className="text-xl font-bold">About</h3>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              I’m <span className="font-semibold">Jatin Dua</span>, a passionate{" "}
              <span className="text-blue-600 font-semibold">Web Developer</span>{" "}
              with experience in building trading platforms, e-commerce
              solutions, and real-time collaborative applications. I love
              solving DSA problems and exploring new technologies to create
              impactful projects.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              You can usually find me active on{" "}
              <a
                href="https://github.com/your-github-username"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                GitHub
              </a>{" "}
              and{" "}
              <a
                href="https://linkedin.com/in/your-linkedin-username"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                LinkedIn
              </a>
              . Feel free to check out my{" "}
              <a
                href="/resume.pdf"
                target="_blank"
                className="text-blue-500 hover:underline font-semibold"
              >
                Resume
              </a>
              .
            </p>
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
