

import RelatedServices from "../components/RelatedServices";
import AnimatedMesh from "../components/AnimatedMesh";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import Contact from "../components/Contact";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

// Social Media Campaign Demo - STAYS IN ENGLISH
function SocialMediaDemo() {
  const [selectedCampaign, setSelectedCampaign] = useState<"facebook" | "instagram" | "linkedin">("instagram");

  const campaigns = {
    instagram: {
      platform: "Instagram",
      campaignName: "Summer Product Launch",
      duration: "30 Days",
      budget: "$5,000",
      metrics: {
        impressions: "245,000",
        reach: "185,000",
        engagement: "8.5%",
        clicks: "12,400",
        conversions: "890",
        ctr: "5.06%",
        cpc: "$0.40",
        roas: "4.2x"
      },
      demographics: {
        age: "25-34 (45%), 18-24 (32%)",
        gender: "Female 58%, Male 42%",
        topLocations: "Jakarta, Surabaya, Bandung"
      },
      topPosts: [
        { type: "Reel", engagement: "12.5K", reach: "45K" },
        { type: "Carousel", engagement: "8.2K", reach: "32K" },
        { type: "Story", engagement: "5.8K", reach: "28K" }
      ]
    },
    facebook: {
      platform: "Facebook",
      campaignName: "Brand Awareness Campaign",
      duration: "45 Days",
      budget: "$7,500",
      metrics: {
        impressions: "380,000",
        reach: "295,000",
        engagement: "6.2%",
        clicks: "18,500",
        conversions: "1,240",
        ctr: "4.87%",
        cpc: "$0.41",
        roas: "3.8x"
      },
      demographics: {
        age: "35-44 (38%), 25-34 (35%)",
        gender: "Male 52%, Female 48%",
        topLocations: "Jakarta, Tangerang, Bekasi"
      },
      topPosts: [
        { type: "Video Ad", engagement: "15.2K", reach: "58K" },
        { type: "Carousel Ad", engagement: "9.8K", reach: "38K" },
        { type: "Image Ad", engagement: "6.5K", reach: "25K" }
      ]
    },
    linkedin: {
      platform: "LinkedIn",
      campaignName: "B2B Lead Generation",
      duration: "60 Days",
      budget: "$10,000",
      metrics: {
        impressions: "125,000",
        reach: "85,000",
        engagement: "4.8%",
        clicks: "6,200",
        conversions: "520",
        ctr: "4.96%",
        cpc: "$1.61",
        roas: "5.5x"
      },
      demographics: {
        age: "35-44 (42%), 45-54 (28%)",
        seniority: "Manager (35%), Director (25%), VP (15%)",
        industries: "Technology, Finance, Consulting"
      },
      topPosts: [
        { type: "Thought Leadership", engagement: "2.8K", reach: "18K" },
        { type: "Case Study", engagement: "2.1K", reach: "14K" },
        { type: "Company Update", engagement: "1.5K", reach: "9K" }
      ]
    }
  };

  const campaign = campaigns[selectedCampaign];

  return (
    <div className="bg-white p-8 ">
      {/* Platform Selector */}
      <div className="flex gap-4 mb-8 border-b pb-4">
        <button
          onClick={() => setSelectedCampaign("instagram")}
          className={`px-6 py-2  font-medium transition-all ${
            selectedCampaign === "instagram" 
              ? "bg-black text-white" 
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Instagram
        </button>
        <button
          onClick={() => setSelectedCampaign("facebook")}
          className={`px-6 py-2  font-medium transition-all ${
            selectedCampaign === "facebook" 
              ? "bg-black text-white" 
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Facebook
        </button>
        <button
          onClick={() => setSelectedCampaign("linkedin")}
          className={`px-6 py-2  font-medium transition-all ${
            selectedCampaign === "linkedin" 
              ? "bg-black text-white" 
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          LinkedIn
        </button>
      </div>

      {/* Campaign Info */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="text-2xl font-medium text-black mb-2">{campaign.campaignName}</h3>
          <div className="space-y-2 text-gray-700">
            <p><span className="font-medium">Platform:</span> {campaign.platform}</p>
            <p><span className="font-medium">Duration:</span> {campaign.duration}</p>
            <p><span className="font-medium">Budget:</span> {campaign.budget}</p>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4  border border-gray-200">
            <p className="text-sm text-gray-600">Conversions</p>
            <p className="text-2xl font-medium text-black">{campaign.metrics.conversions}</p>
          </div>
          <div className="bg-gray-50 p-4  border border-gray-200">
            <p className="text-sm text-gray-600">ROAS</p>
            <p className="text-2xl font-medium text-black">{campaign.metrics.roas}</p>
          </div>
          <div className="bg-gray-50 p-4  border border-gray-200">
            <p className="text-sm text-gray-600">Engagement</p>
            <p className="text-2xl font-medium text-black">{campaign.metrics.engagement}</p>
          </div>
          <div className="bg-gray-50 p-4  border border-gray-200">
            <p className="text-sm text-gray-600">CTR</p>
            <p className="text-2xl font-medium text-black">{campaign.metrics.ctr}</p>
          </div>
        </div>
      </div>

      {/* Detailed Metrics */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 p-6  border border-gray-200">
          <h4 className="font-medium text-black mb-4">Performance</h4>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Impressions:</span>
              <span className="font-medium text-black">{campaign.metrics.impressions}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Reach:</span>
              <span className="font-medium text-black">{campaign.metrics.reach}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Clicks:</span>
              <span className="font-medium text-black">{campaign.metrics.clicks}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">CPC:</span>
              <span className="font-medium text-black">{campaign.metrics.cpc}</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6  border border-gray-200">
          <h4 className="font-medium text-black mb-4">Demographics</h4>
          <div className="space-y-3 text-sm">
            {'age' in campaign.demographics && (
              <div>
                <p className="text-gray-600 mb-1">Age:</p>
                <p className="font-medium text-black">{campaign.demographics.age}</p>
              </div>
            )}
            {'gender' in campaign.demographics && (
              <div>
                <p className="text-gray-600 mb-1">Gender:</p>
                <p className="font-medium text-black">{campaign.demographics.gender}</p>
              </div>
            )}
            {'seniority' in campaign.demographics && (
              <div>
                <p className="text-gray-600 mb-1">Seniority:</p>
                <p className="font-medium text-black">{campaign.demographics.seniority}</p>
              </div>
            )}
            {'industries' in campaign.demographics && (
              <div>
                <p className="text-gray-600 mb-1">Industries:</p>
                <p className="font-medium text-black">{campaign.demographics.industries}</p>
              </div>
            )}
            {'topLocations' in campaign.demographics && (
              <div>
                <p className="text-gray-600 mb-1">Top Locations:</p>
                <p className="font-medium text-black">{campaign.demographics.topLocations}</p>
              </div>
            )}
          </div>
        </div>

        <div className="bg-gray-50 p-6  border border-gray-200">
          <h4 className="font-medium text-black mb-4">Top Performing Posts</h4>
          <div className="space-y-3">
            {campaign.topPosts.map((post, index) => (
              <div key={index} className="border-l-4 border-black pl-3">
                <p className="font-medium text-black text-sm">{post.type}</p>
                <p className="text-xs text-gray-600">Engagement: {post.engagement} • Reach: {post.reach}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Banner */}
      <div className="bg-gray-50 border border-gray-200  p-6">
        <div className="flex items-center gap-3">
          <div className="bg-gray-500 rounded-full p-2">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <p className="font-medium text-black">Campaign Success</p>
            <p className="text-sm text-gray-700">
              Exceeded engagement targets by 42% and achieved {campaign.metrics.roas} return on ad spend
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// SEO/SEM Demo Component - Enhanced with Line Graphs
function SEOSEMDemo() {
  const [showAfter, setShowAfter] = useState(false);
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  // Before campaign data (6 months)
  const beforeData = {
    traffic: [2400, 2600, 2300, 2500, 2700, 2800],
    rankings: [45, 42, 44, 40, 38, 36],
    conversions: [28, 32, 30, 35, 38, 40],
    leads: [12, 15, 14, 16, 18, 20],
  };

  // After campaign data (6 months)
  const afterData = {
    traffic: [2800, 4200, 6500, 9200, 13500, 18700],
    rankings: [36, 28, 18, 12, 7, 3],
    conversions: [40, 85, 145, 220, 310, 425],
    leads: [20, 42, 68, 105, 148, 203],
  };

  const months = ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6"];

  const getMaxValue = (data: number[]) => Math.max(...data);

  const LineGraph = ({ 
    data, 
    label, 
    color, 
    unit = "" 
  }: { 
    data: number[]; 
    label: string; 
    color: string; 
    unit?: string;
  }) => {
    const maxValue = getMaxValue(data);
    const points = data.map((value, i) => ({
      x: (i / (data.length - 1)) * 100,
      y: 100 - (value / maxValue) * 100,
      value,
    }));

    const pathData = points
      .map((point, i) => `${i === 0 ? "M" : "L"} ${point.x} ${point.y}`)
      .join(" ");

    return (
      <div className="border border-gray-200 p-6 bg-white/30">
        <h3 className="text-sm text-gray-700 mb-4">{label}</h3>
        <div className="relative h-48">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Grid lines */}
            {[0, 25, 50, 75, 100].map((y) => (
              <line
                key={y}
                x1="0"
                y1={y}
                x2="100"
                y2={y}
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="0.5"
              />
            ))}

            {/* Area under curve */}
            <path
              d={`${pathData} L 100 100 L 0 100 Z`}
              fill={`url(#gradient-${label})`}
              opacity="0.2"
            />

            {/* Line */}
            <path
              d={pathData}
              fill="none"
              stroke={color}
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />

            {/* Points */}
            {points.map((point, i) => (
              <circle
                key={i}
                cx={point.x}
                cy={point.y}
                r="2"
                fill={color}
                className="cursor-pointer"
                onMouseEnter={() => setHoveredPoint(i)}
                onMouseLeave={() => setHoveredPoint(null)}
              />
            ))}

            {/* Gradient definition */}
            <defs>
              <linearGradient id={`gradient-${label}`} x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor={color} />
                <stop offset="100%" stopColor={color} stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Hover tooltip */}
          {hoveredPoint !== null && (
            <div className="absolute top-0 left-0 bg-white/90 border border-gray-300 px-3 py-2 text-xs pointer-events-none">
              <p className="text-black">{months[hoveredPoint]}</p>
              <p className="text-gray-700">
                {data[hoveredPoint].toLocaleString()}{unit}
              </p>
            </div>
          )}
        </div>

        {/* Legend */}
        <div className="flex justify-between mt-4 text-xs">
          {months.map((month, i) => (
            <span key={i} className="text-gray-600">{month.split(" ")[1]}</span>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-3 gap-4">
          <div>
            <p className="text-xs text-gray-600">Start</p>
            <p className="text-lg text-black">{data[0].toLocaleString()}{unit}</p>
          </div>
          <div>
            <p className="text-xs text-gray-600">Current</p>
            <p className="text-lg text-black">{data[data.length - 1].toLocaleString()}{unit}</p>
          </div>
          <div>
            <p className="text-xs text-gray-600">Growth</p>
            <p className="text-lg text-gray-500">
              +{(((data[data.length - 1] - data[0]) / data[0]) * 100).toFixed(0)}%
            </p>
          </div>
        </div>
      </div>
    );
  };

  const currentData = showAfter ? afterData : beforeData;

  return (
    <div className="p-8">
      {/* Toggle Control */}
      <div className="mb-8 flex justify-center">
        <div className="inline-flex border border-gray-200 p-1 bg-gray-1000 ">
          <button
            onClick={() => setShowAfter(false)}
            className={`px-8 py-3 text-sm font-medium transition-all  ${
              !showAfter ? "bg-white text-black" : "text-gray-700 hover:text-black"
            }`}
          >
            Before Campaign
          </button>
          <button
            onClick={() => setShowAfter(true)}
            className={`px-8 py-3 text-sm font-medium transition-all  ${
              showAfter ? "bg-white text-black" : "text-gray-700 hover:text-black"
            }`}
          >
            After Campaign
          </button>
        </div>
      </div>

      {/* Performance Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="border border-gray-200 p-4 bg-white/30">
          <p className="text-xs text-gray-600 mb-1">Organic Traffic</p>
          <p className="text-2xl font-medium text-black">
            {currentData.traffic[currentData.traffic.length - 1].toLocaleString()}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {showAfter ? "+568% increase" : "Baseline"}
          </p>
        </div>

        <div className="border border-gray-200 p-4 bg-white/30">
          <p className="text-xs text-gray-600 mb-1">Avg. Ranking</p>
          <p className="text-2xl font-medium text-black">
            #{currentData.rankings[currentData.rankings.length - 1]}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {showAfter ? "Top 3 position" : "Page 4"}
          </p>
        </div>

        <div className="border border-gray-200 p-4 bg-white/30">
          <p className="text-xs text-gray-600 mb-1">Conversions</p>
          <p className="text-2xl font-medium text-black">
            {currentData.conversions[currentData.conversions.length - 1]}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {showAfter ? "+962% increase" : "Baseline"}
          </p>
        </div>

        <div className="border border-gray-200 p-4 bg-white/30">
          <p className="text-xs text-gray-600 mb-1">Qualified Leads</p>
          <p className="text-2xl font-medium text-black">
            {currentData.leads[currentData.leads.length - 1]}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {showAfter ? "+915% increase" : "Baseline"}
          </p>
        </div>
      </div>

      {/* Line Graphs */}
      <motion.div
        key={showAfter ? "after" : "before"}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <LineGraph 
            data={currentData.traffic} 
            label="Organic Traffic" 
            color="#3B82F6"
          />
          <LineGraph 
            data={currentData.rankings} 
            label="Average Keyword Ranking" 
            color="#8B5CF6"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <LineGraph 
            data={currentData.conversions} 
            label="Monthly Conversions" 
            color="#10B981"
          />
          <LineGraph 
            data={currentData.leads} 
            label="Qualified Leads" 
            color="#EC4899"
          />
        </div>
      </motion.div>

      {/* Campaign Details */}
      <div className="mt-8 border border-gray-200 p-6 bg-white/30">
        <h3 className="text-sm text-gray-700 mb-4 uppercase tracking-wider">Campaign Strategy</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <p className="text-xs text-gray-600 mb-2">SEO Optimization</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• On-page optimization</li>
              <li>• Technical SEO audit</li>
              <li>• Content strategy</li>
              <li>• Link building</li>
            </ul>
          </div>
          <div>
            <p className="text-xs text-gray-600 mb-2">SEM Campaigns</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Google Ads optimization</li>
              <li>• Keyword targeting</li>
              <li>• A/B testing</li>
              <li>• Budget allocation</li>
            </ul>
          </div>
          <div>
            <p className="text-xs text-gray-600 mb-2">Results Achieved</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• {showAfter ? "568%" : "0%"} traffic increase</li>
              <li>• {showAfter ? "92%" : "0%"} ranking improvement</li>
              <li>• {showAfter ? "962%" : "0%"} conversion boost</li>
              <li>• {showAfter ? "$285K" : "$0"} additional revenue</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ROI Calculator */}
      {showAfter && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-8 border border-gray-200 p-8 bg-gradient-to-br from-gray-100 to-gray-50"
        >
          <div className="text-center">
            <p className="text-xs uppercase tracking-wider text-gray-700 mb-3">
              6-Month Campaign ROI
            </p>
            <p className="text-6xl font-medium text-black mb-2">452%</p>
            <p className="text-sm text-gray-700 mb-6">
              Every $1 invested returned $4.52 in revenue
            </p>
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/30 p-4 ">
                <p className="text-xs text-gray-600">Investment</p>
                <p className="text-xl text-black">$45K</p>
              </div>
              <div className="bg-white/30 p-4 ">
                <p className="text-xs text-gray-600">Revenue Generated</p>
                <p className="text-xl text-black">$285K</p>
              </div>
              <div className="bg-white/30 p-4 ">
                <p className="text-xs text-gray-600">Net Profit</p>
                <p className="text-xl text-gray-500">$240K</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default function BrandingMarketing() {
  const { t, language } = useLanguage();
  const [activeDemo, setActiveDemo] = useState<"social" | "seo">("social");

  const capabilities = [
    {
      title: t('brandService.capability1.title'),
      description: t('brandService.capability1.desc'),
      icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    },
    {
      title: t('brandService.capability2.title'),
      description: t('brandService.capability2.desc'),
      icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
    },
    {
      title: t('brandService.capability3.title'),
      description: t('brandService.capability3.desc'),
      icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
    },
  ];

  const benefits = [
    t('brandService.benefit1'),
    t('brandService.benefit2'),
    t('brandService.benefit3'),
    t('brandService.benefit4'),
    t('brandService.benefit5'),
    t('brandService.benefit6'),
  ];


  return (
    <PageTransition>
      <main className="bg-white">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            loading="lazy"
                    src="/hero-bg.jpg" 
            alt="" 
            className="w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-600 mb-4">
            {t('brandService.subtitle')}
          </p>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-black mb-8 leading-tight">
            {t('brandService.title')}
          </h1>
          
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-8">
            {t('brandService.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
            <a
              href="#demo"
              className="px-6 md:px-8 py-2.5 md:py-3 bg-white text-black text-sm font-medium hover:bg-gray-200 transition-all rounded-md text-center"
            >
              {t('brandService.demo')}
            </a>
            <a
              href="#contact"
              className="px-6 md:px-8 py-2.5 md:py-3 border border-gray-300 text-black text-sm font-medium hover:bg-gray-100 transition-all rounded-md text-center"
            >
              {t('contact.title')}
            </a>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="relative py-[79px] px-6 bg-white border-t border-white/5">
        <AnimatedMesh />
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-black mb-4">
            {t('brandService.capabilities')}
          </h2>
          <p className="text-gray-700 mb-12 max-w-2xl">
            {t('brandService.capabilitiesDesc')}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="mb-4">
                  <svg 
                    className="w-10 h-10 text-black/80 group-hover:text-black transition-colors" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={1}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={capability.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-black mb-3">
                  {capability.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="relative py-[79px] px-6 bg-white">
        <AnimatedMesh />
        <div className="max-w-6xl mx-auto relative z-10">
          {/* 3D Elevated Container */}
          <div className="container-3d p-8 md:p-12 lg:p-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-black mb-12">
              {t('brandService.benefits')}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-3d p-6 h-full flex items-start"
                >
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-black mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">{benefit}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section id="demo" className="py-[79px] px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-black mb-12">
            {t('brandService.demo')}
          </h2>

          {/* Demo Tabs - STAYS IN ENGLISH */}
          <div className="flex justify-center gap-4 mb-8 border-b border-gray-200 overflow-x-auto">
            <button
              onClick={() => setActiveDemo("social")}
              className={`pb-4 px-4 md:px-6 text-sm font-medium transition-colors relative whitespace-nowrap ${
                activeDemo === "social" ? "text-black" : "text-gray-600"
              }`}
            >
              Social Media Campaigns
              {activeDemo === "social" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-black"
                />
              )}
            </button>
            <button
              onClick={() => setActiveDemo("seo")}
              className={`pb-4 px-4 md:px-6 text-sm font-medium transition-colors relative whitespace-nowrap ${
                activeDemo === "seo" ? "text-black" : "text-gray-600"
              }`}
            >
              SEO Performance
              {activeDemo === "seo" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-black"
                />
              )}
            </button>
          </div>

          {/* Demo Content */}
          <div className="border border-gray-200 bg-gray-1000 overflow-hidden">
            {activeDemo === "social" ? <SocialMediaDemo /> : <SEOSEMDemo />}
          </div>
        </div>
      </section>

      <RelatedServices currentHref="/services/branding-marketing" />
      
      <Contact />

      <Footer />
    </main>
    </PageTransition>
  );
}
