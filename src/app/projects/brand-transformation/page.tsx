// app/projects/brand-transformation/page.tsx
"use client";

import { useState } from "react";
import { ArrowLeft, Palette, Type, Image as ImageIcon, Sparkles, Code, Target, CheckCircle, Timer } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function BrandTransformation() {
  const router = useRouter();
  
  const handleBackToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    sessionStorage.setItem('scrollToSection', 'projects');
    router.push('/');
  };

  const [activeTab, setActiveTab] = useState<"before" | "after">("after");

  const brandElements = {
    before: {
      colors: ["#8B4513", "#D2691E", "#F4A460"],
      font: "Arial",
      tagline: "Your Business Partner",
      description: "Generic corporate styling with outdated color palette and typography"
    },
    after: {
      colors: ["#000000", "#FFFFFF", "#FF6B35"],
      font: "Poppins",
      tagline: "Impact Engineered. Advantage Secured.",
      description: "Modern, bold design with strategic color choices and contemporary typography"
    }
  };

  const metrics = [
    { label: "Brand Awareness", before: 23, after: 78, unit: "%" },
    { label: "Social Engagement", before: 1200, after: 4800, unit: "" },
    { label: "Website Traffic", before: 5000, after: 18500, unit: " visits/mo" },
    { label: "Lead Generation", before: 45, after: 156, unit: " leads/mo" },
  ];

  const current = brandElements[activeTab];

  const projectDetails = [
    {
      icon: Target,
      title: "Task",
      description: "Execute a complete brand transformation from traditional corporate identity to a modern, digital-first brand that resonates with contemporary audiences and reflects innovation and professionalism."
    },
    {
      icon: Code,
      title: "Technologies Used",
      items: ["Adobe Creative Suite", "Figma for Design", "Brand Strategy Frameworks", "Market Research Tools", "Social Media Analytics", "Website Design Platform"]
    },
    {
      icon: CheckCircle,
      title: "What We Did",
      items: ["Comprehensive brand audit", "Market research & competitor analysis", "New visual identity design", "Brand guidelines creation", "Website redesign", "Marketing collateral update", "Social media strategy"]
    },
    {
      icon: Timer,
      title: "Timeline",
      phases: [
        { phase: "Research & Strategy", duration: "3 weeks" },
        { phase: "Design Development", duration: "4 weeks" },
        { phase: "Implementation", duration: "3 weeks" },
        { phase: "Launch & Monitoring", duration: "2 weeks" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-950 to-neutral-900">
      {/* Header */}
      <div className="border-b border-white/10 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <button 
            onClick={handleBackToProjects}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Projects</span>
          </button>
          <h1 className="text-xl font-light text-white">Brand Transformation</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Project Overview */}
        <div className="mb-16">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-3">
            Case Study
          </p>
          <h2 className="text-4xl font-light mb-6 text-white">
            Complete Brand Transformation
          </h2>
          <p className="text-gray-400 leading-relaxed max-w-3xl">
            A strategic rebranding project that modernized a traditional business identity, 
            resulting in a 300% increase in market visibility and significantly improved brand perception.
          </p>
        </div>

        {/* Project Details Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projectDetails.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-neutral-900 border border-white/10 rounded-lg p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <detail.icon className="h-6 w-6 text-white" />
                <h3 className="text-xl font-light text-white">{detail.title}</h3>
              </div>
              
              {detail.description && (
                <p className="text-gray-400 leading-relaxed">{detail.description}</p>
              )}
              
              {detail.items && (
                <ul className="space-y-3">
                  {detail.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-white mt-2" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              {detail.phases && (
                <div className="space-y-4">
                  {detail.phases.map((phase, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-gray-300">{phase.phase}</span>
                      <span className="text-gray-500 text-sm">{phase.duration}</span>
                    </div>
                  ))}
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-light">Total Duration</span>
                      <span className="text-white">12 weeks</span>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Before/After Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-light text-white mb-8">Brand Evolution</h3>
          
          {/* Before/After Toggle */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setActiveTab("before")}
              className={`px-8 py-3 rounded-lg transition-colors ${
                activeTab === "before"
                  ? "bg-white text-black"
                  : "bg-neutral-900 text-white border border-white/10 hover:bg-neutral-800"
              }`}
            >
              Before
            </button>
            <button
              onClick={() => setActiveTab("after")}
              className={`px-8 py-3 rounded-lg transition-colors ${
                activeTab === "after"
                  ? "bg-white text-black"
                  : "bg-neutral-900 text-white border border-white/10 hover:bg-neutral-800"
              }`}
            >
              After
            </button>
          </div>

          {/* Brand Identity Preview */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-neutral-900 border border-white/10 rounded-lg p-12"
          >
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left: Visual Elements */}
              <div>
                <h4 className="text-xl font-light text-white mb-8">Brand Identity</h4>
                
                {/* Colors */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Palette className="h-5 w-5 text-gray-400" />
                    <p className="text-gray-400 text-sm">Color Palette</p>
                  </div>
                  <div className="flex gap-4">
                    {current.colors.map((color, index) => (
                      <div key={index} className="text-center">
                        <div
                          className="h-20 w-20 rounded-lg mb-2 border border-white/10"
                          style={{ backgroundColor: color }}
                        />
                        <p className="text-xs text-gray-500">{color}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Typography */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Type className="h-5 w-5 text-gray-400" />
                    <p className="text-gray-400 text-sm">Typography</p>
                  </div>
                  <div className="bg-neutral-800 rounded-lg p-6">
                    <p className="text-4xl text-white mb-2" style={{ fontFamily: current.font }}>
                      Aa Bb Cc
                    </p>
                    <p className="text-sm text-gray-400">{current.font}</p>
                  </div>
                </div>

                {/* Logo Area */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <ImageIcon className="h-5 w-5 text-gray-400" />
                    <p className="text-gray-400 text-sm">Logo Concept</p>
                  </div>
                  <div className="bg-neutral-800 rounded-lg p-12 flex items-center justify-center">
                    <p className="text-6xl font-light text-white" style={{ fontFamily: current.font }}>
                      BRAND
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Description & Applications */}
              <div>
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="h-5 w-5 text-gray-400" />
                    <p className="text-gray-400 text-sm">Brand Essence</p>
                  </div>
                  <div className="bg-neutral-800 rounded-lg p-8">
                    <p className="text-2xl font-light text-white mb-4" style={{ fontFamily: current.font }}>
                      "{current.tagline}"
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      {current.description}
                    </p>
                  </div>
                </div>

                {/* Application Examples */}
                <div>
                  <p className="text-gray-400 text-sm mb-4">Brand Applications</p>
                  <div className="space-y-4">
                    <div className="bg-neutral-800 rounded-lg p-6">
                      <p className="text-white font-light mb-2">Business Card</p>
                      <div className="h-32 rounded border border-white/10" 
                           style={{ 
                             background: `linear-gradient(135deg, ${current.colors[0]} 0%, ${current.colors[1]} 100%)` 
                           }}>
                      </div>
                    </div>
                    <div className="bg-neutral-800 rounded-lg p-6">
                      <p className="text-white font-light mb-2">Website Header</p>
                      <div className="h-24 rounded border border-white/10 flex items-center justify-center"
                           style={{ 
                             background: `linear-gradient(90deg, ${current.colors[0]} 0%, ${current.colors[2]} 100%)` 
                           }}>
                        <p className="text-white text-xl font-light" style={{ fontFamily: current.font }}>
                          {current.tagline.split('.')[0]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Impact Metrics */}
        <div>
          <h3 className="text-2xl font-light text-white mb-8">Transformation Impact</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-neutral-900 border border-white/10 rounded-lg p-6"
              >
                <p className="text-gray-400 text-sm mb-4">{metric.label}</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Before</p>
                    <p className="text-xl text-gray-600">
                      {metric.before.toLocaleString()}{metric.unit}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">After</p>
                    <p className="text-3xl font-light text-white">
                      {metric.after.toLocaleString()}{metric.unit}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-white/10">
                    <p className="text-sm text-green-400">
                      +{Math.round(((metric.after - metric.before) / metric.before) * 100)}% increase
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}