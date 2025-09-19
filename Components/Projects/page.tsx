import React from "react";
import { BlurFade } from "../ui/blur-fade";
import { projects } from "@/data/projects";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/Components/ui/card";
import Image from "next/image";
import { Button } from "@/Components/ui/button";

export default function Projects() {
  return (
    <section className="flex justify-center py-2 sm:py-10">
      <BlurFade delay={0.1} inView>
        <div className=" max-w-2xl sm:max-w-2xl mx-auto text-center px-4">
          {/* Heading + Subtitle */}
          <div className="flex flex-col justify-center space-y-4 mb-10">
            <h3 className="text-6xl font-bold">What I&apos;ve Built</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              I love turning ideas into working products. These projects
              highlight my ability to design, develop, and deploy solutions that
              solve real problems.
            </p>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <Card
                key={idx}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Project Image */}
                <div className="relative w-full h-56">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Project Content */}
                <CardHeader>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex flex-wrap gap-2 justify-center">
                  {project.Technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-sm bg-gray-100 text-black px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </CardContent>

                {/* Links */}
                <CardFooter className="flex justify-center gap-4">
                  <Button variant="default" asChild>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </Button>
                  {project.githubLink && (
                    <Button variant="outline" asChild>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
