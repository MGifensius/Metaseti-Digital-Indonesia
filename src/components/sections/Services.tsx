// components/sections/Services.tsx
"use client";

import { useState } from "react";
import MotionWrapper from "../MotionWrapper";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    number: "01",
    title: "Strategic AI Integration",
    description:
      "We bring intelligence into your workflow. By combining automation, data and machine learning, we help you streamline operations, make better decision, and enhance product value through real-time insights.",
    tags: ["AI Chatbots & Assistants","Predictive Analytics & Insights","AI Product Enhancement","Automation & Workflow Optimization"],
    image: "/Artificial-Intelligence.png"
  },
  {
    number: "02",
    title: "Custom Development",
    description:
      "We build tailored digital products that connect design, performance, and innovation. From website and mobile apps to full-scale system, every project is made to scale with your business.",
    tags: ["Web, App & System Development","Custom Web Applications","IoT & Smart System Implementation","Maintenance & Optimization"],
    image: "/Custom-Development.png"
  },
  {
    number: "03",
    title: "Branding & Performance Marketing",
    description:
      "We craft identities and campaigns that resonate. From brand strategy to digital marketing and content, we help your brand connect with the right audience and leave a lasting impression.",
    tags: ["Brand Strategy & Visual Identity", "UI/UX & Creative Direction", "Digital Campaigns & Social Media","Content Creation & Storytelling"],
    image: "/Branding-Marketing.png"
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="services"
      className="relative px-6 pt-20 pb-32 md:pb-40 scroll-mt-20 overflow-hidden"
    >
      {/* Black gradient background - same as Hero */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-neutral-950 to-neutral-900" />
      
      <div className="mx-auto max-w-7xl relative z-10">
        <MotionWrapper className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-wider text-gray-500 mb-3">
                What We Do
              </p>
              <h2 className="text-4xl font-light md:text-5xl lg:text-6xl text-white">
                Engineered Outcomes
              </h2>
            </div>
            <p className="text-gray-400 max-w-md">
              We craft solutions that deliver measurable impact and sustainable
              advantage.
            </p>
          </div>
        </MotionWrapper>

        {/* Desktop: Horizontal Service Cards */}
        <div className="hidden lg:block relative border border-white/10 h-[500px] overflow-hidden">
          <div className="absolute inset-0 flex">
            {services.map((service, index) => {
              const isActive = activeIndex === index;
              
              return (
                <motion.div
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  initial={false}
                  animate={{
                    flexGrow: isActive ? 2 : 0.5,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                  className="relative overflow-hidden cursor-pointer border-r border-white/10 last:border-r-0"
                  style={{ flexBasis: 0 }}
                >
                  {/* Background Image with Overlay */}
                  <motion.div
                    animate={{
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    {/* Dark gradient overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-neutral-950/80 to-neutral-900/60" />
                  </motion.div>

                  {/* Number - Absolute positioned */}
                  <div className="absolute top-12 left-12 z-10">
                    <span
                      className={`text-8xl font-light transition-colors duration-500 ${
                        isActive ? "text-white" : "text-gray-600"
                      }`}
                    >
                      {service.number}
                    </span>
                  </div>

                  {/* Details - Fixed position */}
                  <div className="absolute bottom-12 left-12 z-10" style={{ width: '550px' }}>
                    <motion.div
                      animate={{
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut"
                      }}
                      style={{
                        pointerEvents: isActive ? 'auto' : 'none',
                      }}
                    >
                      <h3 className="text-4xl font-light mb-4 text-white">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 text-xs border border-white/20 rounded-full text-gray-300 bg-black/90 backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile/Tablet: Vertical Accordion */}
        <div className="lg:hidden space-y-0 border border-white/10">
          {services.map((service, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className="border-b border-white/10 last:border-b-0 cursor-pointer relative overflow-hidden"
              >
                {/* Background Image for Mobile */}
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                    {/* Mobile dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-neutral-950/85 to-black/90" />
                  </motion.div>
                )}

                <motion.div
                  initial={false}
                  animate={{
                    height: isActive ? "auto" : "120px",
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                  className="overflow-hidden relative"
                >
                  <div className="p-6 md:p-8 relative z-10">
                    {/* Number */}
                    <span
                      className={`text-5xl md:text-6xl font-light transition-colors duration-500 block mb-4 ${
                        isActive ? "text-white" : "text-gray-600"
                      }`}
                    >
                      {service.number}
                    </span>

                    {/* Details */}
                    <motion.div
                      animate={{
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.3,
                        delay: isActive ? 0.2 : 0,
                      }}
                    >
                      <h3 className="text-xl md:text-2xl font-light mb-3 text-white">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed text-sm md:text-base">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 text-xs border border-white/20 rounded-full text-gray-300 bg-black/90 backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}