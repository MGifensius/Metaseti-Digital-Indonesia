// app/projects/ai-analytics-dashboard/page.tsx
"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, TrendingUp, TrendingDown, DollarSign, Users, ShoppingCart, Activity, Code, Target, CheckCircle, Timer } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function AIAnalyticsDashboard() {
  const router = useRouter();
  
  const handleBackToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    sessionStorage.setItem('scrollToSection', 'projects');
    router.push('/');
  };  
  
  const [timeRange, setTimeRange] = useState("7d");
  const [metrics, setMetrics] = useState({
    revenue: 124500,
    users: 8420,
    orders: 342,
    conversion: 3.2,
  });

  const [revenueData, setRevenueData] = useState([
    { date: "Mon", value: 4200 },
    { date: "Tue", value: 5800 },
    { date: "Wed", value: 4500 },
    { date: "Thu", value: 6200 },
    { date: "Fri", value: 7100 },
    { date: "Sat", value: 8300 },
    { date: "Sun", value: 6900 },
  ]);

  const [userGrowthData] = useState([
    { month: "Jan", users: 5200 },
    { month: "Feb", users: 5800 },
    { month: "Mar", users: 6400 },
    { month: "Apr", users: 7100 },
    { month: "May", users: 7600 },
    { month: "Jun", users: 8420 },
  ]);

  const [categoryData] = useState([
    { category: "Electronics", value: 35, color: "#3B82F6" },
    { category: "Fashion", value: 28, color: "#8B5CF6" },
    { category: "Home & Garden", value: 20, color: "#EC4899" },
    { category: "Sports", value: 17, color: "#10B981" },
  ]);

  const [predictions, setPredictions] = useState([
    { metric: "Revenue", current: "$124.5K", predicted: "$142.8K", change: "+14.7%", trend: "up" },
    { metric: "Users", current: "8,420", predicted: "9,680", change: "+15.0%", trend: "up" },
    { metric: "Orders", current: "342", predicted: "318", change: "-7.0%", trend: "down" },
  ]);

  const maxRevenueValue = Math.max(...revenueData.map(d => d.value));
  const maxUserValue = Math.max(...userGrowthData.map(d => d.users));
  const totalCategoryValue = categoryData.reduce((sum, item) => sum + item.value, 0);

  const refreshData = () => {
    setMetrics({
      revenue: metrics.revenue + Math.floor(Math.random() * 10000) - 5000,
      users: metrics.users + Math.floor(Math.random() * 200) - 100,
      orders: metrics.orders + Math.floor(Math.random() * 20) - 10,
      conversion: Number((metrics.conversion + (Math.random() * 0.4 - 0.2)).toFixed(1)),
    });

    setRevenueData(revenueData.map(item => ({
      ...item,
      value: item.value + Math.floor(Math.random() * 1000) - 500
    })));
  };

  const projectDetails = [
    {
      icon: Target,
      title: "Task",
      description: "Develop an AI-powered analytics platform that processes large datasets in real-time, generates predictive insights, and visualizes complex business metrics through interactive dashboards for data-driven decision making."
    },
    {
      icon: Code,
      title: "Technologies Used",
      items: ["React & Next.js", "TypeScript", "Machine Learning (Python)", "Data Visualization Libraries", "Real-time Data Processing", "Predictive Analytics Engine"]
    },
    {
      icon: CheckCircle,
      title: "What We Did",
      items: ["Real-time data pipeline", "Interactive chart visualizations", "AI prediction algorithms", "Custom metrics dashboard", "Performance optimization", "Responsive data tables"]
    },
    {
      icon: Timer,
      title: "Timeline",
      phases: [
        { phase: "Data Architecture", duration: "2 weeks" },
        { phase: "ML Model Development", duration: "4 weeks" },
        { phase: "Dashboard Implementation", duration: "3 weeks" },
        { phase: "Testing & Optimization", duration: "2 weeks" }
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
          <h1 className="text-xl font-light text-white">AI Analytics Dashboard</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Project Overview */}
        <div className="mb-16">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-3">
            Project Overview
          </p>
          <h2 className="text-4xl font-light mb-6 text-white">
            AI-Powered Analytics Platform
          </h2>
          <p className="text-gray-400 leading-relaxed max-w-3xl">
            A comprehensive business intelligence platform that leverages machine learning to analyze data patterns, 
            predict future trends, and provide actionable insights through intuitive visualizations.
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
                      <span className="text-white">11 weeks</span>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Live Demo Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-light text-white mb-4">Live Demo</h3>
          <p className="text-gray-400 mb-6">
            Explore the interactive analytics dashboard below. View real-time metrics, charts, and AI predictions.
          </p>

          {/* Controls */}
          <div className="flex gap-4">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="bg-neutral-900 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/30"
            >
              <option value="24h">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
              <option value="90d">Last 90 Days</option>
            </select>
            <button
              onClick={refreshData}
              className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Refresh Data
            </button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-neutral-900 border border-white/10 rounded-lg p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <DollarSign className="h-8 w-8 text-green-400" />
              <span className="text-xs text-green-400 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +12.5%
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-1">Total Revenue</p>
            <p className="text-3xl font-light text-white">
              ${(metrics.revenue / 1000).toFixed(1)}K
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-neutral-900 border border-white/10 rounded-lg p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <Users className="h-8 w-8 text-blue-400" />
              <span className="text-xs text-blue-400 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +8.3%
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-1">Active Users</p>
            <p className="text-3xl font-light text-white">
              {metrics.users.toLocaleString()}
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-neutral-900 border border-white/10 rounded-lg p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <ShoppingCart className="h-8 w-8 text-purple-400" />
              <span className="text-xs text-purple-400 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +5.7%
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-1">Total Orders</p>
            <p className="text-3xl font-light text-white">{metrics.orders}</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-neutral-900 border border-white/10 rounded-lg p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <Activity className="h-8 w-8 text-orange-400" />
              <span className="text-xs text-orange-400 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +0.4%
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-1">Conversion Rate</p>
            <p className="text-3xl font-light text-white">{metrics.conversion}%</p>
          </motion.div>
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Revenue Bar Chart */}
          <div className="bg-neutral-900 border border-white/10 rounded-lg p-8">
            <h3 className="text-xl font-light text-white mb-6">Weekly Revenue Trend</h3>
            <div className="h-64 flex items-end justify-between gap-4">
              {revenueData.map((item, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${(item.value / maxRevenueValue) * 100}%` }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="w-full bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-lg relative group"
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black px-2 py-1 rounded text-xs text-white whitespace-nowrap">
                      ${(item.value / 1000).toFixed(1)}K
                    </div>
                  </motion.div>
                  <span className="text-xs text-gray-500">{item.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* User Growth Line Chart */}
          <div className="bg-neutral-900 border border-white/10 rounded-lg p-8">
            <h3 className="text-xl font-light text-white mb-6">User Growth (6 Months)</h3>
            <div className="h-64 relative">
              <svg className="w-full h-full" viewBox="0 0 400 200">
                {/* Grid lines */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <line
                    key={i}
                    x1="0"
                    y1={i * 50}
                    x2="400"
                    y2={i * 50}
                    stroke="#374151"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                ))}
                
                {/* Line chart */}
                <motion.polyline
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2 }}
                  points={userGrowthData.map((item, i) => 
                    `${(i * 400) / (userGrowthData.length - 1)},${200 - (item.users / maxUserValue) * 180}`
                  ).join(' ')}
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="3"
                />
                
                {/* Data points */}
                {userGrowthData.map((item, i) => (
                  <motion.circle
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    cx={(i * 400) / (userGrowthData.length - 1)}
                    cy={200 - (item.users / maxUserValue) * 180}
                    r="5"
                    fill="#10B981"
                    className="cursor-pointer"
                  >
                    <title>{item.users.toLocaleString()} users</title>
                  </motion.circle>
                ))}
              </svg>
              
              {/* X-axis labels */}
              <div className="flex justify-between mt-2">
                {userGrowthData.map((item, i) => (
                  <span key={i} className="text-xs text-gray-500">{item.month}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Category Distribution & Predictions */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Donut Chart */}
          <div className="bg-neutral-900 border border-white/10 rounded-lg p-8">
            <h3 className="text-xl font-light text-white mb-6">Sales by Category</h3>
            <div className="flex items-center justify-center mb-6">
              <svg width="200" height="200" viewBox="0 0 200 200">
                {categoryData.map((item, index) => {
                  const previousTotal = categoryData.slice(0, index).reduce((sum, d) => sum + d.value, 0);
                  const startAngle = (previousTotal / totalCategoryValue) * 360;
                  const endAngle = startAngle + (item.value / totalCategoryValue) * 360;
                  
                  const startRad = (startAngle - 90) * (Math.PI / 180);
                  const endRad = (endAngle - 90) * (Math.PI / 180);
                  
                  const x1 = 100 + 70 * Math.cos(startRad);
                  const y1 = 100 + 70 * Math.sin(startRad);
                  const x2 = 100 + 70 * Math.cos(endRad);
                  const y2 = 100 + 70 * Math.sin(endRad);
                  
                  const largeArc = item.value / totalCategoryValue > 0.5 ? 1 : 0;
                  
                  return (
                    <motion.path
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 }}
                      d={`M 100 100 L ${x1} ${y1} A 70 70 0 ${largeArc} 1 ${x2} ${y2} Z`}
                      fill={item.color}
                      className="cursor-pointer hover:opacity-80 transition-opacity"
                    >
                      <title>{item.category}: {item.value}%</title>
                    </motion.path>
                  );
                })}
                {/* Center white circle for donut effect */}
                <circle cx="100" cy="100" r="50" fill="#171717" />
              </svg>
            </div>
            
            {/* Legend */}
            <div className="space-y-3">
              {categoryData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-gray-300 text-sm">{item.category}</span>
                  </div>
                  <span className="text-white font-light">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* AI Predictions */}
          <div className="bg-neutral-900 border border-white/10 rounded-lg p-8">
            <h3 className="text-xl font-light text-white mb-6">AI Predictions (Next 7 Days)</h3>
            <div className="space-y-4">
              {predictions.map((prediction, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-neutral-800 rounded-lg p-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-light mb-1">{prediction.metric}</h4>
                      <p className="text-gray-400 text-sm">Current: {prediction.current}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-light text-white mb-1">{prediction.predicted}</p>
                      <span className={`text-sm flex items-center gap-1 justify-end ${
                        prediction.trend === "up" ? "text-green-400" : "text-red-400"
                      }`}>
                        {prediction.trend === "up" ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                        {prediction.change}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}