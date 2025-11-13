// app/about/page.tsx
"use client";

import { ArrowLeft, Target, Eye, Heart, Users, Shield, Zap } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function AboutPage() {
  const router = useRouter();
  
  const handleBackHome = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    router.push('/');
  };

  const handleNavigateToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Store the target section in sessionStorage
    sessionStorage.setItem('scrollToSection', sectionId);
    
    // Navigate to home
    router.push('/');
  };

  const coreValues = [
    {
      icon: Target,
      title: "Excellence",
      description: "We pursue excellence in every project, delivering solutions that exceed expectations and set new standards in the industry."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative approaches to solve complex challenges and drive digital transformation."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We operate with transparency and honesty, building trust through ethical practices and reliable partnerships."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork, working closely with clients to co-create solutions that truly address their needs."
    },
    {
      icon: Heart,
      title: "Customer-Centric",
      description: "Our clients' success is our success. We prioritize understanding and fulfilling their unique business objectives."
    },
    {
      icon: Eye,
      title: "Continuous Learning",
      description: "We invest in growth and development, staying ahead of industry trends to deliver forward-thinking solutions."
    }
  ];

  const team = [
    {
      name: "Strategic Leadership",
      description: "Visionary leaders with decades of combined experience in technology and business strategy."
    },
    {
      name: "Engineering Team",
      description: "Expert developers and engineers specialized in AI, IoT, and full-stack development."
    },
    {
      name: "Creative Division",
      description: "Brand strategists and designers crafting compelling visual identities and user experiences."
    },
    {
      name: "Client Success",
      description: "Dedicated professionals ensuring seamless project delivery and long-term partnership value."
    }
  ];

  const commitments = [
    "Deliver measurable results that drive real business growth",
    "Maintain transparent communication throughout every project",
    "Provide responsive support within 24 hours",
    "Utilize the latest technologies and industry best practices",
    "Ensure scalable solutions that grow with your business",
    "Protect your data with enterprise-grade security measures"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-950 to-neutral-900">
      {/* Header */}
      <div className="border-b border-white/10 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <button 
            onClick={handleBackHome}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </button>
          <h1 className="text-xl font-light text-white">About Us</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Hero Section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">
              About Metaseti Digital Indonesia
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 text-white">
              Engineered Solutions.<br />Secured Advantage.
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              We are a digital solutions company committed to accelerating Indonesia's digital transformation 
              through innovative technology, strategic creativity, and unwavering dedication to client success.
            </p>
          </motion.div>
        </div>

        {/* Vision & Mission */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-neutral-900 border border-white/10 rounded-lg p-12"
          >
            <Eye className="h-12 w-12 text-white mb-6" />
            <h3 className="text-3xl font-light text-white mb-6">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              To be Indonesia's leading catalyst for digital innovation, empowering businesses to achieve 
              sustainable growth and competitive advantage through cutting-edge technology solutions that 
              transform industries and shape the future of commerce.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-neutral-900 border border-white/10 rounded-lg p-12"
          >
            <Target className="h-12 w-12 text-white mb-6" />
            <h3 className="text-3xl font-light text-white mb-6">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              To engineer precision-driven digital solutions that combine strategic AI integration, 
              custom development excellence, and impactful branding to deliver measurable results. 
              We partner with businesses to build scalable systems that drive performance, efficiency, 
              and lasting market impact.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-3">
              What Drives Us
            </p>
            <h3 className="text-4xl font-light text-white mb-4">Our Core Values</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The principles that guide every decision we make and every solution we deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-neutral-900 border border-white/10 rounded-lg p-8 hover:bg-neutral-800 transition-colors"
              >
                <value.icon className="h-10 w-10 text-white mb-4" />
                <h4 className="text-xl font-light text-white mb-3">{value.title}</h4>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Structure */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-3">
              Our People
            </p>
            <h3 className="text-4xl font-light text-white mb-4">Expert Team Structure</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A diverse team of specialists working in harmony to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {team.map((division, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-neutral-900 border border-white/10 rounded-lg p-8"
              >
                <h4 className="text-2xl font-light text-white mb-3">{division.name}</h4>
                <p className="text-gray-400 leading-relaxed">{division.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Commitments */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-3">
              Our Promise
            </p>
            <h3 className="text-4xl font-light text-white mb-4">Our Commitment to You</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              These are the guarantees we stand behind in every client partnership.
            </p>
          </div>

          <div className="bg-neutral-900 border border-white/10 rounded-lg p-12">
            <div className="grid md:grid-cols-2 gap-6">
              {commitments.map((commitment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-white flex items-center justify-center mt-1">
                    <div className="h-2 w-2 rounded-full bg-black" />
                  </div>
                  <p className="text-gray-300 leading-relaxed">{commitment}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-neutral-900 border border-white/10 rounded-lg p-12 text-center">
          <h3 className="text-3xl font-light text-white mb-6">Why Choose Metaseti Digital?</h3>
          <p className="text-gray-400 leading-relaxed max-w-3xl mx-auto mb-8">
            We don't just build digital solutions—we engineer competitive advantages. Our unique combination 
            of technical expertise, strategic thinking, and client-focused approach ensures that every project 
            delivers measurable impact and sustainable growth. From AI-powered automation to compelling brand 
            experiences, we transform your digital ambitions into reality.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={handleNavigateToSection('services')}
              className="px-8 py-3 bg-white text-black hover:bg-gray-200 transition-colors rounded"
            >
              Explore Our Services
            </button>
            <button 
              onClick={handleNavigateToSection('projects')}
              className="px-8 py-3 border border-white/20 text-white hover:bg-white hover:text-black transition-colors rounded"
            >
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}