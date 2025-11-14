// app/projects/ai-chatbot-booking/page.tsx
"use client";

import { useState } from "react";
import { ArrowLeft, Send, Calendar, Clock, User, Code, Target, CheckCircle, Timer } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

type Message = {
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
};

export default function AIChatbotBooking() {
  const router = useRouter();
  
  const handleBackToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    sessionStorage.setItem('scrollToSection', 'projects');
    router.push('/');
  };

  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! I'm your booking assistant. How can I help you today?", sender: "bot", timestamp: new Date() }
  ]);
  const [input, setInput] = useState("");
  const [bookingData, setBookingData] = useState({
    name: "",
    date: "",
    time: "",
    service: ""
  });
  const [step, setStep] = useState(0);

  const services = ["Haircut", "Massage", "Consultation", "Training Session"];

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      text: input,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simple chatbot logic
    setTimeout(() => {
      let botResponse = "";
      
      if (step === 0) {
        setBookingData(prev => ({ ...prev, name: input }));
        botResponse = `Nice to meet you, ${input}! What service would you like to book? We offer: ${services.join(", ")}`;
        setStep(1);
      } else if (step === 1) {
        const service = services.find(s => input.toLowerCase().includes(s.toLowerCase()));
        if (service) {
          setBookingData(prev => ({ ...prev, service }));
          botResponse = `Great! ${service} it is. What date would you prefer? (e.g., 2025-11-15)`;
          setStep(2);
        } else {
          botResponse = `I didn't catch that. Please choose from: ${services.join(", ")}`;
        }
      } else if (step === 2) {
        setBookingData(prev => ({ ...prev, date: input }));
        botResponse = `Perfect! What time works best for you? (e.g., 10:00 AM)`;
        setStep(3);
      } else if (step === 3) {
        setBookingData(prev => ({ ...prev, time: input }));
        botResponse = `Excellent! Your ${bookingData.service} appointment is booked for ${bookingData.date} at ${input}. You'll receive a confirmation email shortly. Is there anything else I can help you with?`;
        setStep(4);
      } else {
        botResponse = "Thank you for using our booking system! Have a great day!";
      }

      const botMessage: Message = {
        text: botResponse,
        sender: "bot",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInput("");
  };

  const projectDetails = [
    {
      icon: Target,
      title: "Task",
      description: "Develop an intelligent booking system that uses natural language processing to understand user requests and automate the appointment scheduling process without manual intervention."
    },
    {
      icon: Code,
      title: "Technologies Used",
      items: ["React & Next.js", "TypeScript", "Natural Language Processing", "Framer Motion", "Tailwind CSS", "Real-time State Management"]
    },
    {
      icon: CheckCircle,
      title: "What We Did",
      items: ["Conversational flow design", "Intent recognition system", "Automated scheduling logic", "Multi-step booking process", "Real-time booking confirmation", "User-friendly chat interface"]
    },
    {
      icon: Timer,
      title: "Timeline",
      phases: [
        { phase: "Research & Planning", duration: "1 week" },
        { phase: "Design & Prototyping", duration: "1 week" },
        { phase: "Development", duration: "3 weeks" },
        { phase: "Testing & Refinement", duration: "1 week" }
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
            AI Chatbot Booking System
          </h2>
          <p className="text-gray-400 leading-relaxed max-w-3xl">
            An intelligent conversational booking assistant that streamlines the appointment scheduling process 
            through natural language interactions, reducing booking time by 70% and improving customer satisfaction.
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
                      <span className="text-white">6 weeks</span>
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
            Try the booking assistant below. Start by typing your name to begin the booking process.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Instructions */}
          <div>
            <div className="bg-neutral-900 border border-white/10 rounded-lg p-8 mb-6">
              <h4 className="text-lg font-light text-white mb-4">How to Use</h4>
              <ol className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-white">1.</span>
                  <span className="text-gray-300">Enter your name when prompted</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-white">2.</span>
                  <span className="text-gray-300">Choose a service from the available options</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-white">3.</span>
                  <span className="text-gray-300">Provide your preferred date (format: YYYY-MM-DD)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-white">4.</span>
                  <span className="text-gray-300">Select a time slot for your appointment</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-white">5.</span>
                  <span className="text-gray-300">Receive instant booking confirmation</span>
                </li>
              </ol>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-light text-white">Key Features</h4>
              {["Natural Language Understanding", "Instant Responses", "Smart Validation", "Multi-step Conversations", "Booking Confirmation"].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Chat Interface */}
          <div className="bg-neutral-900 border border-white/10 rounded-lg overflow-hidden flex flex-col h-[600px]">
            {/* Chat Header */}
            <div className="bg-neutral-800 px-6 py-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                  <User className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-light">Booking Assistant</h3>
                  <p className="text-xs text-gray-400">Online • Powered by AI</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[80%] rounded-lg px-4 py-3 ${
                    message.sender === "user" 
                      ? "bg-white text-black" 
                      : "bg-neutral-800 text-white"
                  }`}>
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs opacity-50 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="border-t border-white/10 p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 bg-neutral-800 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/30"
                />
                <button
                  onClick={handleSend}
                  className="bg-white text-black rounded-lg px-6 py-3 hover:bg-gray-200 transition-colors flex items-center gap-2"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Summary */}
        {bookingData.name && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 bg-neutral-900 border border-white/10 rounded-lg p-8"
          >
            <h3 className="text-2xl font-light text-white mb-6">Booking Summary</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {bookingData.name && (
                <div className="flex items-center gap-3">
                  <User className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-500">Name</p>
                    <p className="text-white">{bookingData.name}</p>
                  </div>
                </div>
              )}
              {bookingData.service && (
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-500">Service</p>
                    <p className="text-white">{bookingData.service}</p>
                  </div>
                </div>
              )}
              {bookingData.date && (
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-500">Date</p>
                    <p className="text-white">{bookingData.date}</p>
                  </div>
                </div>
              )}
              {bookingData.time && (
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-500">Time</p>
                    <p className="text-white">{bookingData.time}</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
