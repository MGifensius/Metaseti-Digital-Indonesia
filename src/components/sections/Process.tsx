// components/sections/Process.tsx
"use client";

import MotionWrapper from "../MotionWrapper";

const processSteps = [
  { 
    number: "01",
    title: "Discovery", 
    description: "We dive deep to understand your goals, challenges, and opportunities through comprehensive research and analysis." 
  },
  { 
    number: "02",
    title: "Engineer", 
    description: "Our team architects and builds tailored solutions that drive your vision forward with precision and innovation." 
  },
  { 
    number: "03",
    title: "Deploy", 
    description: "We execute a seamless launch, ensuring your new systems integrate perfectly with your existing infrastructure." 
  },
  { 
    number: "04",
    title: "Optimize", 
    description: "We provide ongoing support and refinement to protect and enhance your competitive advantage over time." 
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-black px-6 py-32 md:py-40 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <MotionWrapper className="mb-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-3">
              Our Process
            </p>
            <h2 className="text-4xl font-light mb-6 md:text-5xl lg:text-6xl">
              How We Work
            </h2>
            <p className="text-gray-400 text-lg">
              A systematic approach to delivering excellence at every stage of your project.
            </p>
          </div>
        </MotionWrapper>

        {/* Process Steps */}
        <div className="grid gap-0 md:grid-cols-2">
          {processSteps.map((step, index) => (
            <MotionWrapper key={index} staggerDelay={index * 0.1}>
              <div className="group border-t border-white/10 p-8 md:p-12 hover:bg-white/5 transition-colors">
                {/* Number */}
                <div className="text-sm text-gray-500 mb-6 font-mono">
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="text-3xl font-light mb-4 group-hover:text-white transition-colors md:text-4xl">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>

                {/* Decorative line */}
                <div className="mt-8 h-px w-16 bg-white/20 group-hover:w-24 group-hover:bg-white transition-all duration-500" />
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}