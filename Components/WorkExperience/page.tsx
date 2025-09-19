import React from "react";
import { BlurFade } from "../ui/blur-fade";
import { workExperience } from "@/data/workExperience";
import Image from "next/image";

export default function Work() {
  return (
    <section className="ml-2 sm:ml-24 py-2 sm:py-10">
      <BlurFade delay={0.1} inView>
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col justify-start space-y-4">
            <h3 className="text-xl font-bold mb-2">Work Experience</h3>

            {workExperience.map((exp, index) => (
              <div
                key={index}
                // CHANGED: Removed 'justify-between', changed to 'items-start'
                className="flex items-start justify-between sm:gap-4 gap-0.5 p-3 mt-3 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                {/*
                  CHANGED: Added 'flex-grow' to make this section fill available space
                  and push the timeline to the right.
                */}
                <div className="flex gap-4 items-center min-w-0 flex-grow">
                  <Image
                    src={exp.logo}
                    width={100}
                    height={200}
                    alt={exp.organisation}
                    className="w-14 h-14 rounded-full object-contain border flex-shrink-0"
                  />

                  <div className="flex flex-col">
                    <span className="font-semibold text-base">
                      {exp.position}
                    </span>
                    <span className="text-gray-600 text-sm">
                      {exp.organisation}
                    </span>
                  </div>
                </div>

                {/* This part remains the same, refusing to shrink */}
                <span className="text-gray-500 text-sm sm:text-base flex-shrink-0">
                  {exp.timeline}
                </span>
              </div>
            ))}
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
