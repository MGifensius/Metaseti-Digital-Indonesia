// app/projects/iot-smart-system/page.tsx
"use client";

import { useState } from "react";
import { ArrowLeft, Power, Thermometer, Droplets, Wind, Lightbulb, Lock, Camera, Code, Target, CheckCircle, Timer } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

type Device = {
  id: string;
  name: string;
  type: string;
  status: boolean;
  value?: number;
  unit?: string;
  icon: any;
};

export default function IoTSmartSystem() {
  const router = useRouter();
  
  const handleBackToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Store the target section in sessionStorage
    sessionStorage.setItem('scrollToSection', 'projects');
    
    // Navigate to home
    router.push('/');
  };

  const [devices, setDevices] = useState<Device[]>([
    { id: "1", name: "Living Room Light", type: "light", status: false, icon: Lightbulb },
    { id: "2", name: "Thermostat", type: "temperature", status: true, value: 22, unit: "°C", icon: Thermometer },
    { id: "3", name: "Humidifier", type: "humidity", status: false, value: 45, unit: "%", icon: Droplets },
    { id: "4", name: "Air Purifier", type: "air", status: true, icon: Wind },
    { id: "5", name: "Front Door Lock", type: "lock", status: true, icon: Lock },
    { id: "6", name: "Security Camera", type: "camera", status: true, icon: Camera },
  ]);

  const [automationRules, setAutomationRules] = useState([
    { condition: "Temperature > 25°C", action: "Turn on Air Purifier", active: true },
    { condition: "7:00 PM", action: "Turn on Living Room Light", active: true },
    { condition: "Humidity < 40%", action: "Turn on Humidifier", active: false },
  ]);

  const toggleDevice = (id: string) => {
    setDevices(devices.map(device => 
      device.id === id ? { ...device, status: !device.status } : device
    ));
  };

  const adjustValue = (id: string, increment: boolean) => {
    setDevices(devices.map(device => 
      device.id === id && device.value !== undefined
        ? { ...device, value: device.value + (increment ? 1 : -1) }
        : device
    ));
  };

  const toggleAutomation = (index: number) => {
    setAutomationRules(automationRules.map((rule, i) => 
      i === index ? { ...rule, active: !rule.active } : rule
    ));
  };

  const projectDetails = [
    {
      icon: Target,
      title: "Task",
      description: "Create a comprehensive IoT platform that connects smart home devices, enables real-time monitoring, and provides intelligent automation capabilities for seamless home management."
    },
    {
      icon: Code,
      title: "Technologies Used",
      items: ["React & Next.js", "TypeScript", "IoT Protocols (MQTT)", "Real-time WebSocket", "Cloud Platform Integration", "Device API Management"]
    },
    {
      icon: CheckCircle,
      title: "What We Did",
      items: ["Device integration framework", "Real-time monitoring system", "Automation rule engine", "User-friendly dashboard", "Responsive control interface", "Status tracking & analytics"]
    },
    {
      icon: Timer,
      title: "Timeline",
      phases: [
        { phase: "Architecture & Planning", duration: "2 weeks" },
        { phase: "Device Integration", duration: "3 weeks" },
        { phase: "Dashboard Development", duration: "3 weeks" },
        { phase: "Testing & Deployment", duration: "2 weeks" }
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
          <h1 className="text-xl font-light text-white">IoT Smart System</h1>
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
            IoT Smart Home System
          </h2>
          <p className="text-gray-400 leading-relaxed max-w-3xl">
            A unified platform connecting multiple IoT devices for intelligent home automation, 
            enabling users to monitor, control, and automate their smart home ecosystem from a single dashboard.
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
                      <span className="text-white">10 weeks</span>
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
          <p className="text-gray-400 mb-8">
            Interact with the smart home dashboard below. Toggle devices, adjust settings, and manage automation rules.
          </p>
        </div>

        {/* System Status */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-neutral-900 border border-white/10 rounded-lg p-6">
            <p className="text-gray-400 text-sm mb-2">Total Devices</p>
            <p className="text-4xl font-light text-white">{devices.length}</p>
          </div>
          <div className="bg-neutral-900 border border-white/10 rounded-lg p-6">
            <p className="text-gray-400 text-sm mb-2">Active Devices</p>
            <p className="text-4xl font-light text-white">{devices.filter(d => d.status).length}</p>
          </div>
          <div className="bg-neutral-900 border border-white/10 rounded-lg p-6">
            <p className="text-gray-400 text-sm mb-2">Active Automations</p>
            <p className="text-4xl font-light text-white">{automationRules.filter(r => r.active).length}</p>
          </div>
        </div>

        {/* Devices Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-light text-white mb-6">Device Control</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {devices.map((device) => (
              <motion.div
                key={device.id}
                whileHover={{ scale: 1.02 }}
                className="bg-neutral-900 border border-white/10 rounded-lg p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`h-12 w-12 rounded-lg flex items-center justify-center ${
                      device.status ? "bg-white/10" : "bg-neutral-800"
                    }`}>
                      <device.icon className={`h-6 w-6 ${device.status ? "text-white" : "text-gray-600"}`} />
                    </div>
                    <div>
                      <h4 className="text-white font-light">{device.name}</h4>
                      <p className="text-xs text-gray-500 capitalize">{device.type}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleDevice(device.id)}
                    className={`h-8 w-14 rounded-full transition-colors ${
                      device.status ? "bg-white" : "bg-neutral-700"
                    }`}
                  >
                    <div className={`h-6 w-6 rounded-full bg-black transition-transform ${
                      device.status ? "translate-x-7" : "translate-x-1"
                    }`} />
                  </button>
                </div>

                {device.value !== undefined && (
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-light text-white">
                      {device.value}{device.unit}
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => adjustValue(device.id, false)}
                        disabled={!device.status}
                        className="h-8 w-8 rounded bg-neutral-800 hover:bg-neutral-700 disabled:opacity-50 text-white"
                      >
                        -
                      </button>
                      <button
                        onClick={() => adjustValue(device.id, true)}
                        disabled={!device.status}
                        className="h-8 w-8 rounded bg-neutral-800 hover:bg-neutral-700 disabled:opacity-50 text-white"
                      >
                        +
                      </button>
                    </div>
                  </div>
                )}

                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-xs text-gray-500">
                    Status: <span className={device.status ? "text-green-400" : "text-gray-400"}>
                      {device.status ? "Online" : "Offline"}
                    </span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Automation Rules */}
        <div>
          <h3 className="text-2xl font-light text-white mb-6">Automation Rules</h3>
          <div className="space-y-4">
            {automationRules.map((rule, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.01 }}
                className="bg-neutral-900 border border-white/10 rounded-lg p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`h-3 w-3 rounded-full ${rule.active ? "bg-green-400" : "bg-gray-600"}`} />
                      <h4 className="text-white font-light">{rule.condition}</h4>
                    </div>
                    <p className="text-gray-400 text-sm ml-6">→ {rule.action}</p>
                  </div>
                  <button
                    onClick={() => toggleAutomation(index)}
                    className={`px-6 py-2 rounded text-sm transition-colors ${
                      rule.active 
                        ? "bg-white text-black hover:bg-gray-200" 
                        : "bg-neutral-800 text-white hover:bg-neutral-700"
                    }`}
                  >
                    {rule.active ? "Active" : "Inactive"}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}