import React from "react";
import { BlurFade } from "../ui/blur-fade";
import { skills } from "@/data/skills";
import { Highlighter } from "../ui/highlighter";

export default function Skills() {
  return (
    <section className="ml-2 sm:ml-24 py-2 sm:py-4">
      <BlurFade delay={0.1} inView>
        <div className="max-w-3xl sm:max-w-2xl mx-auto">
          <div className="flex flex-col justify-start space-y-4">
            <h3 className="text-xl font-bold mb-2">Skills</h3>

            <div className="flex flex-wrap gap-1">
              {skills.map((skill, idx) => (
                <Highlighter key={idx} action="underline" color="#87CEFA">
                  <p className=" px-3 py-1">{skill}</p>
                </Highlighter>
              ))}
            </div>
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
