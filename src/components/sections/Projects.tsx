// components/sections/Projects.tsx
"use client";

import { useState } from "react";
import MotionWrapper from "../MotionWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    number: "01",
    title: "AI Chatbots Booking System",
    category: "AI Integration",
    description: "Intelligent chatbot system for seamless appointment scheduling with natural language processing and automated booking management.",
    features: [
      "Natural Language Processing",
      "Automated Scheduling",
      "Calendar Integration",
      "SMS Notifications",
      "Multi-language Support"
    ],
    slug: "ai-chatbot-booking"
  },
  {
    number: "02",
    title: "IoT Smart System",
    category: "IoT Development",
    description: "Intelligent IoT platform connecting devices with cloud infrastructure for seamless automation and real-time monitoring.",
    features: [
      "Device Integration",
      "Real-time Monitoring",
      "Automation Rules",
      "Cloud Platform",
      "Mobile Control"
    ],
    slug: "iot-smart-system"
  },
  {
    number: "03",
    title: "AI Analytics Dashboard",
    category: "AI & Data Analytics",
    description: "Machine learning powered insights platform for enterprise decision making with predictive analytics and data visualization.",
    features: [
      "Predictive Analytics",
      "Data Visualization",
      "Real-time Processing",
      "Custom Reports",
      "API Integration"
    ],
    slug: "ai-analytics-dashboard"
  },
  {
    number: "04",
    title: "Brand Transformation",
    category: "Branding & Marketing",
    description: "Complete brand overhaul showcasing strategic rebranding process resulting in enhanced market visibility and engagement.",
    features: [
      "Brand Strategy",
      "Visual Identity",
      "Marketing Campaigns",
      "Content Creation",
      "Social Media Growth"
    ],
    slug: "brand-transformation"
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="projects" className="relative bg-neutral-900 px-6 py-32 md:py-40 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <MotionWrapper className="mb-16">
          <div>
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-3">
              Our Work
            </p>
            <h2 className="text-4xl font-light md:text-5xl lg:text-6xl text-white">
              Experience the Demo
            </h2>
          </div>
        </MotionWrapper>

        {/* Projects Accordion */}
        <div className="space-y-0">
          {projects.map((project, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
                className="border-b border-white/10 last:border-b-0"
              >
                <div
                  onClick={() => setActiveIndex(index)}
                  className="cursor-pointer py-8 md:py-12"
                >
                  <div className="flex items-center justify-between gap-8">
                    {/* Left: Number and Title */}
                    <div className="flex items-center gap-6 md:gap-12 flex-1">
                      <span className="text-2xl md:text-3xl font-light text-gray-500">
                        ({project.number})
                      </span>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-white">
                        {project.title}
                      </h3>
                    </div>

                    {/* Right: Arrow Button */}
                    <motion.button
                      animate={{ rotate: isActive ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 h-12 w-12 md:h-16 md:w-16 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
                    >
                      <ArrowUpRight className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </motion.button>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-8 max-w-3xl">
                          {/* Details */}
                          <div className="space-y-6">
                            <div>
                              <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                                {project.category}
                              </p>
                              <p className="text-gray-400 text-lg leading-relaxed">
                                {project.description}
                              </p>
                            </div>

                            {/* Features List */}
                            <div className="grid md:grid-cols-2 gap-3">
                              {project.features.map((feature, featureIndex) => (
                                <motion.div
                                  key={featureIndex}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.1 + featureIndex * 0.05 }}
                                  className="flex items-center gap-3"
                                >
                                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-white flex items-center justify-center">
                                    <Check className="h-3 w-3 text-black" />
                                  </div>
                                  <span className="text-gray-300 font-light">
                                    {feature}
                                  </span>
                                </motion.div>
                              ))}
                            </div>

                            {/* View Live Demo Button */}
                            <Link 
                              href={`/projects/${project.slug}`}
                              className="inline-block mt-6 px-8 py-3 text-sm border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
                            >
                              View Live Demo
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}