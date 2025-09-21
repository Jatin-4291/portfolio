import React from "react";
import Image from "next/image";
import { BlurFade } from "../ui/blur-fade";

export default function Header() {
  return (
    <BlurFade delay={0.1} inView>
      <div className="m-2 mt-7 sm:m-10">
        <div className="flex flex-row justify-center items-center gap-6 sm:gap-20">
          {/* Text Section */}
          <div className="flex flex-col">
            <h1 className="text-3xl sm:text-5xl font-bold whitespace-nowrap">
              Hi, I&apos;m Jatin Dua
            </h1>
            <h3 className="text-sm sm:text-xl mt-2 sm:mt-4">
              Developer | Engineer
            </h3>
          </div>

          {/* Profile Image Container */}
          <div className="relative w-28 sm:w-28 aspect-square rounded-full overflow-hidden shadow-md">
            <Image
              src="/profilepic.jpg"
              alt="Picture of the author"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 7rem, 10rem"
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </BlurFade>
  );
}
