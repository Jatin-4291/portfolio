import React from "react";
import { BlurFade } from "../ui/blur-fade";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import Image from "next/image";

export default function ProblemSolving() {
  return (
    <section className="flex justify-center py-2 sm:py-10">
      <BlurFade delay={0.1} inView>
        <div className="max-w-2xl sm:max-w-2xl mx-auto text-center px-4">
          {/* Heading + Subtitle */}
          <div className="flex flex-col justify-center space-y-4 mb-10">
            <h3 className="text-6xl font-bold">Code. Solve. Repeat.</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              I love solving challenging problems and improving my DSA &
              competitive programming skills. Here’s where I practice, compete,
              and grow my logic-building abilities.
            </p>
          </div>

          {/* Practice Platform Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* LeetCode Card */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">LeetCode-Contest</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Image
                  src="https://leetcard.jacoblin.cool/jatin_4292?theme=dark&ext=contest"
                  alt="LeetCode Stats"
                  width={350}
                  height={200}
                  className="rounded-xl border-2"
                  unoptimized
                />
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button variant="default" asChild>
                  <a
                    href="https://leetcode.com/jatin_4292"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Profile
                  </a>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">LeetCode-Practice</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Image
                  src="https://leetcard.jacoblin.cool/jatin_4291?theme=dark&ext=contest"
                  alt="LeetCode Stats"
                  width={350}
                  height={200}
                  className="rounded-xl border-2"
                  unoptimized
                />
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button variant="default" asChild>
                  <a
                    href="https://leetcode.com/jatin_4291"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Profile
                  </a>
                </Button>
              </CardFooter>
            </Card>

            {/* CodeChef Card */}
            {/* <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">CodeChef</CardTitle>
                <CardDescription>
                  Regular contest participant, focusing on improving
                  problem-solving speed.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Image
                  src="/codechef-logo.png" // You can use a local logo or stat card API
                  alt="CodeChef Logo"
                  width={120}
                  height={120}
                />
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button variant="default" asChild>
                  <a
                    href="https://www.codechef.com/users/your-username"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Profile
                  </a>
                </Button>
              </CardFooter>
            </Card> */}

            {/* Any Other Platform (Optional) */}
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
