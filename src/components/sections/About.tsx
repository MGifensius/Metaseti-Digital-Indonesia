// components/sections/About.tsx
"use client";

import MotionWrapper from "../MotionWrapper";
import Link from "next/link";

const stats = [
  { value: "∞", label: "Innovation Mindset" },
  { value: "3", label: "Service Pillars" },
  { value: "<24h", label: "Response Time" },
  { value: "100%", label: "Commitment to Quality" },
];

export default function About() {
  return (
    <section id="about" className="bg-neutral-900 px-6 py-32 md:py-40 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Column - Content */}
          <div>
            <MotionWrapper>
              <p className="text-sm uppercase tracking-wider text-gray-500 mb-3">
                About Us
              </p>
              <h2 className="text-4xl font-light mb-8 md:text-5xl lg:text-6xl text-white">
                Building the Future of Digital Excellence
              </h2>
            </MotionWrapper>

            <MotionWrapper staggerDelay={0.1}>
              <div className="space-y-6 text-gray-400 leading-relaxed">
                <p className="text-lg">
                  Rooted in a commitment to accelerate Indonesia's digital transformation, Metaseti 
                  Digital Indonesia engineers modern solutions that drive precision, performance, and measurable growth.
                </p>
                <p>
                  Our team blends strategic creativity with advanced technology, crafting digital products and brand 
                  experiences that deliver real competitive advantage. With a focus on scalability and lasting impact, 
                  we empower businesses to innovate, evolve, and lead in the digital era.
                </p>
                <p>
                  From custom development to AI integration and brand marketing, we transform ambition into tangible results 
                  that shape the future.
                </p>
              </div>
            </MotionWrapper>

            <MotionWrapper staggerDelay={0.2}>
              <Link 
                href="/about"
                className="inline-block mt-10 px-8 py-3 text-sm border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
              >
                Learn More About Us
              </Link>
            </MotionWrapper>
          </div>

          {/* Right Column - Stats */}
          <div className="flex items-center">
            <div className="grid grid-cols-2 gap-8 w-full">
              {stats.map((stat, index) => (
                <MotionWrapper key={index} staggerDelay={0.1 + index * 0.05}>
                  <div className="border-l-2 border-white/20 pl-6 py-4">
                    <div className="text-5xl font-light mb-2 md:text-6xl text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                </MotionWrapper>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}