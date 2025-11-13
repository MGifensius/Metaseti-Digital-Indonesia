"use client";

import MotionWrapper from "../MotionWrapper";
import { ArrowDown } from "lucide-react";
import Button from "../Button";

export default function Hero() {
  return (
    <section className="relative flex h-screen flex-col items-center justify-center px-6 text-center overflow-hidden">
      <div className="mb-8">
        <MotionWrapper staggerDelay={0}>
          <h1 className="mb-6 text-5xl font-semibold tracking-tight md:text-7xl lg:text-8xl text-white">
            Impact Engineered.
          </h1>
        </MotionWrapper>
        <MotionWrapper staggerDelay={0.2}>
          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl lg:text-8xl text-white">
            Advantage Secured.
          </h1>
        </MotionWrapper>
      </div>

      <MotionWrapper className="mt-6" staggerDelay={0.4}>
        <p className="max-w-2xl text-lg text-gray-400 md:text-xl">
          From Strategic Design to Measureable Outcomes, our solutions
          are built for definitive success.
        </p>
      </MotionWrapper>

      <MotionWrapper className="mt-12 flex flex-col sm:flex-row gap-4" staggerDelay={0.6}>
        <Button href="#services" variant="primary">
          Explore Services
        </Button>
        <Button href="#projects" variant="secondary">
          View Projects
        </Button>
      </MotionWrapper>  

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-neutral-950 to-neutral-900" />
    </section>
  );
}