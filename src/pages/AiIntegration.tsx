

import RelatedServices from "../components/RelatedServices";
import AnimatedMesh from "../components/AnimatedMesh";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import Contact from "../components/Contact";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

// AI Assistant Component - DEMO STAYS IN ENGLISH
function AIAssistantDemo() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm the Metaseti AI Assistant. I can help you learn about our services, pricing, and how we can help your business. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Services related
    if (lowerMessage.includes("service") || lowerMessage.includes("what do you do")) {
      return "Metaseti Digital offers three core services: 1) AI Integration - implementing intelligent automation and AI solutions, 2) Custom Development - building web/mobile apps and ERP systems, and 3) Digital Marketing - creating brand identities and digital campaigns. Which service interests you?";
    }
    
    if (lowerMessage.includes("ai") && (lowerMessage.includes("integration") || lowerMessage.includes("artificial"))) {
      return "Our AI Integration service includes AI chatbots & assistants, predictive analytics, AI product enhancement, and workflow automation. We help businesses streamline operations and make data-driven decisions. Would you like to know more about implementation?";
    }
    
    if (lowerMessage.includes("custom development") || lowerMessage.includes("web") || lowerMessage.includes("app")) {
      return "We build custom web applications, mobile apps, ERP systems, and IoT solutions. All our developments are scalable, secure, and tailored to your specific business needs. We use modern tech stacks like React, Next.js, and cloud infrastructure.";
    }
    
    if (lowerMessage.includes("branding") || lowerMessage.includes("marketing")) {
      return "Our Branding & Marketing service covers brand strategy, visual identity design, UI/UX, digital campaigns, SEO/SEM, and content creation. We help you build a strong brand presence and drive measurable growth.";
    }

    // Pricing related
    if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("budget")) {
      return "Our pricing is customized based on project scope and requirements. We offer flexible engagement models. For AI Integration projects, we start from $5,000. Custom Development ranges from $8,000-$50,000+ depending on complexity. Branding packages start at $3,000. Would you like to schedule a consultation to discuss your specific needs?";
    }

    // Contact related
    if (lowerMessage.includes("contact") || lowerMessage.includes("reach") || lowerMessage.includes("email") || lowerMessage.includes("phone")) {
      return "You can reach us at: Email: metaseti.digital@gmail.com, Phone: +62 813-8507-3901, Instagram: @metasetidigital. We're based in Jakarta, Indonesia. Our team typically responds within 24 hours!";
    }

    // Process related
    if (lowerMessage.includes("process") || lowerMessage.includes("how long") || lowerMessage.includes("timeline")) {
      return "Our typical process involves: 1) Discovery & Analysis (1-2 weeks), 2) Strategy & Design (2-3 weeks), 3) Development/Implementation (4-12 weeks depending on scope), and 4) Testing & Deployment (1-2 weeks). We follow agile methodology with regular updates.";
    }

    // Location related
    if (lowerMessage.includes("location") || lowerMessage.includes("where") || lowerMessage.includes("jakarta")) {
      return "We're based in Jakarta, Indonesia, but we serve clients globally. We work with businesses across Southeast Asia, and can accommodate remote collaboration for international projects.";
    }

    // General greetings
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
      return "Hello! How can I help you today? Feel free to ask about our services, pricing, process, or anything else about Metaseti Digital.";
    }

    if (lowerMessage.includes("thank")) {
      return "You're welcome! Is there anything else you'd like to know about Metaseti Digital?";
    }

    // Default response
    return "I'm here to help you learn about Metaseti Digital! You can ask me about our services (AI Integration, Custom Development, Branding & Marketing), pricing, process, or how to get started. What would you like to know?";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse = getAIResponse(input);
      setMessages((prev) => [...prev, { role: "assistant", content: aiResponse }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-3 md:space-y-4 mb-4 md:mb-6 h-64 md:h-80 lg:h-96 overflow-y-auto pr-2 md:pr-4">
          <AnimatePresence>
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-2 md:gap-3 ${msg.role === "user" ? "justify-end" : ""}`}
              >
                {msg.role === "assistant" && (
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gray-100 flex-shrink-0 flex items-center justify-center text-xs">
                    AI
                  </div>
                )}
                <div
                  className={` p-3 md:p-4 max-w-[85%] md:max-w-md ${
                    msg.role === "user"
                      ? "bg-white text-black"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  <p className="text-xs md:text-sm leading-relaxed">{msg.content}</p>
                </div>
                {msg.role === "user" && (
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white flex-shrink-0 flex items-center justify-center text-xs text-black">
                    U
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
          
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex gap-2 md:gap-3"
            >
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gray-100 flex-shrink-0 flex items-center justify-center text-xs">
                AI
              </div>
              <div className="bg-gray-100  p-3 md:p-4">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                </div>
              </div>
            </motion.div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask me anything about Metaseti..."
            className="flex-1 bg-gray-100 border border-gray-200 px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-black placeholder-gray-500 focus:outline-none focus:border-gray-300 transition-all"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="w-full sm:w-auto px-6 py-2 md:py-3 bg-black text-white text-sm hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

// AI Booking Component - Chat Interface
function AIBookingDemo() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm your booking assistant. I can help you schedule an appointment. What date would you like to book?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [bookings, setBookings] = useState([
    { id: 1, name: "John Doe", date: "2025-02-15", time: "09:00", email: "john@example.com", status: "Confirmed" },
    { id: 2, name: "Jane Smith", date: "2025-02-18", time: "14:00", email: "jane@example.com", status: "Confirmed" },
  ]);
  const [bookingState, setBookingState] = useState({
    step: "initial", // initial, date, time, name, email, confirm
    date: "",
    time: "",
    name: "",
    email: "",
  });

  const getAIResponse = (userMessage: string): string => {
    const lower = userMessage.toLowerCase();
    
    if (bookingState.step === "initial") {
      // Extract date mentions
      if (lower.includes("tomorrow") || lower.includes("monday") || lower.includes("tuesday") || 
          lower.includes("wednesday") || lower.includes("thursday") || lower.includes("friday") ||
          /\d{4}-\d{2}-\d{2}/.test(userMessage) || /\d{1,2}\/\d{1,2}/.test(userMessage)) {
        setBookingState({ ...bookingState, step: "time", date: userMessage });
        return `Great! I've noted your preferred date. What time works best for you? We have slots available from 9:00 AM to 5:00 PM.`;
      }
      return `Please provide a date for your appointment. You can say something like "February 20th" or "next Monday".`;
    }
    
    if (bookingState.step === "time") {
      // Extract time mentions
      if (/\d{1,2}:\d{2}/.test(userMessage) || lower.includes("am") || lower.includes("pm") || 
          lower.includes("morning") || lower.includes("afternoon")) {
        setBookingState({ ...bookingState, step: "name", time: userMessage });
        return `Perfect! What's your full name?`;
      }
      return `Please specify a time, for example "2:00 PM" or "14:00".`;
    }
    
    if (bookingState.step === "name") {
      setBookingState({ ...bookingState, step: "email", name: userMessage });
      return `Thanks ${userMessage}! And what's your email address?`;
    }
    
    if (bookingState.step === "email") {
      if (userMessage.includes("@")) {
        setBookingState({ ...bookingState, step: "confirm", email: userMessage });
        const newBooking = {
          id: bookings.length + 1,
          name: bookingState.name,
          date: bookingState.date,
          time: bookingState.time,
          email: userMessage,
          status: "Confirmed" as const,
        };
        setBookings([...bookings, newBooking]);
        
        // Reset for next booking
        setTimeout(() => {
          setBookingState({ step: "initial", date: "", time: "", name: "", email: "" });
        }, 1000);
        
        return `✓ Perfect! Your appointment is confirmed:\n\nName: ${bookingState.name}\nDate: ${bookingState.date}\nTime: ${bookingState.time}\nEmail: ${userMessage}\n\nYou'll receive a confirmation email shortly. Is there anything else I can help you with?`;
      }
      return `Please provide a valid email address.`;
    }
    
    return `I'm here to help you book an appointment. Just tell me what date you'd like!`;
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { role: "user" as const, content: input };
    setMessages([...messages, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const aiResponse = getAIResponse(input);
      setMessages((prev) => [...prev, { role: "assistant" as const, content: aiResponse }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chat Interface */}
        <div className="border border-gray-200">
          <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
            <h3 className="text-sm font-medium text-black">AI Booking Assistant</h3>
          </div>
          <div className="h-80 md:h-96 overflow-y-auto p-4 space-y-3 bg-white">
            <AnimatePresence>
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-6 h-6 rounded-full bg-gray-900 flex-shrink-0 flex items-center justify-center text-xs text-white">
                      AI
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] px-3 py-2 text-xs md:text-sm whitespace-pre-line ${
                      msg.role === "user"
                        ? "bg-gray-900 text-white"
                        : "bg-gray-100 text-gray-900 border border-gray-200"
                    }`}
                  >
                    {msg.content}
                  </div>
                  {msg.role === "user" && (
                    <div className="w-6 h-6 rounded-full bg-gray-700 flex-shrink-0 flex items-center justify-center text-xs text-white">
                      U
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
            
            {isTyping && (
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-gray-900 flex-shrink-0 flex items-center justify-center text-xs text-white">
                  AI
                </div>
                <div className="bg-gray-100 px-3 py-2 border border-gray-200">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="border-t border-gray-200 p-3 flex gap-2 bg-gray-50">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your message..."
              className="flex-1 bg-white border border-gray-200 px-3 py-2 text-sm text-black placeholder-gray-500 focus:outline-none focus:border-gray-400"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="px-4 py-2 bg-gray-900 text-white text-sm hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Send
            </button>
          </div>
        </div>

        {/* Bookings Database */}
        <div className="border border-gray-200">
          <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
            <h3 className="text-sm font-medium text-black">Confirmed Bookings</h3>
          </div>
          <div className="overflow-auto max-h-[32rem] md:max-h-[36rem]">
            <table className="w-full">
              <thead className="bg-gray-100 sticky top-0">
                <tr>
                  <th className="px-3 py-2 text-left text-xs text-gray-700 uppercase">ID</th>
                  <th className="px-3 py-2 text-left text-xs text-gray-700 uppercase">Name</th>
                  <th className="px-3 py-2 text-left text-xs text-gray-700 uppercase">Date</th>
                  <th className="px-3 py-2 text-left text-xs text-gray-700 uppercase">Time</th>
                  <th className="px-3 py-2 text-left text-xs text-gray-700 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {bookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-3 py-3 text-xs text-gray-700">#{booking.id}</td>
                    <td className="px-3 py-3 text-xs text-black">{booking.name}</td>
                    <td className="px-3 py-3 text-xs text-gray-700">{booking.date}</td>
                    <td className="px-3 py-3 text-xs text-gray-700">{booking.time}</td>
                    <td className="px-3 py-3">
                      <span className="px-2 py-1 text-xs bg-gray-900 text-white">
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AIIntegration() {
  const { t, language } = useLanguage();
  const [activeDemo, setActiveDemo] = useState<"assistant" | "booking">("assistant");

  const capabilities = [
    {
      title: t('aiService.capability1.title'),
      description: t('aiService.capability1.desc'),
      icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
    },
    {
      title: t('aiService.capability2.title'),
      description: t('aiService.capability2.desc'),
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    },
    {
      title: t('aiService.capability3.title'),
      description: t('aiService.capability3.desc'),
      icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
    },
    {
      title: t('aiService.capability4.title'),
      description: t('aiService.capability4.desc'),
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
      title: t('aiService.capability5.title'),
      description: t('aiService.capability5.desc'),
      icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    },
    {
      title: t('aiService.capability6.title'),
      description: t('aiService.capability6.desc'),
      icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
    },
  ];

  const benefits = [
    t('aiService.benefit1'),
    t('aiService.benefit2'),
    t('aiService.benefit3'),
    t('aiService.benefit4'),
    t('aiService.benefit5'),
    t('aiService.benefit6'),
  ];

  const portfolioImages = [
    "/ai-integration/ai-portfolio-1.png",
    "/ai-integration/ai-portfolio-2.png",
    "/ai-integration/ai-portfolio-3.png",
    "/ai-integration/ai-portfolio-4.png",
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
            {t('aiService.subtitle')}
          </p>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-black mb-8 leading-tight">
            {t('aiService.title')}
          </h1>
          
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-8">
            {t('aiService.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
            <a
              href="#demo"
              className="px-6 md:px-8 py-2.5 md:py-3 bg-white text-black text-sm font-medium hover:bg-gray-200 transition-all rounded-md text-center"
            >
              {t('aiService.demo')}
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
            {t('aiService.capabilities')}
          </h2>
          <p className="text-gray-700 mb-12 max-w-2xl">
            {t('aiService.capabilitiesDesc')}
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
              {t('aiService.benefits')}
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
      <section id="demo" className="relative py-[79px] px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-black mb-12">
            {t('aiService.demo')}
          </h2>

          {/* Demo Tabs - STAYS IN ENGLISH */}
          <div className="flex justify-center gap-4 mb-8 border-b border-gray-200 overflow-x-auto">
            <button
              onClick={() => setActiveDemo("assistant")}
              className={`pb-4 px-4 md:px-6 text-sm font-medium transition-colors relative whitespace-nowrap ${
                activeDemo === "assistant" ? "text-black" : "text-gray-600"
              }`}
            >
              AI Assistant
              {activeDemo === "assistant" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-black"
                />
              )}
            </button>
            <button
              onClick={() => setActiveDemo("booking")}
              className={`pb-4 px-4 md:px-6 text-sm font-medium transition-colors relative whitespace-nowrap ${
                activeDemo === "booking" ? "text-black" : "text-gray-600"
              }`}
            >
              AI Booking System
              {activeDemo === "booking" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-black"
                />
              )}
            </button>
          </div>

          {/* Demo Content - STAYS IN ENGLISH */}
          <div className="border border-gray-200 bg-gray-1000 overflow-hidden">
            {activeDemo === "assistant" ? <AIAssistantDemo /> : <AIBookingDemo />}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="relative py-[79px] px-6 bg-white">
        <AnimatedMesh />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-black mb-4">
              {t('aiService.portfolio')}
            </h2>
            <p className="text-gray-700 max-w-2xl">
              {t('aiService.portfolioDesc')}
            </p>
          </div>
          
          {/* 2 Column Mixed Size Layout - matching Custom Development */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:items-start">
            {/* Left Column */}
            <div className="flex flex-col gap-8 h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
                className="relative flex-1 min-h-0 overflow-hidden bg-gray-50 rounded-md"
              >
                {portfolioImages[0]?.includes('portfolio-1') ? (
                  <img loading="lazy" src={portfolioImages[0]} alt="AI Integration Project 1" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 border border-gray-200 rounded-md flex items-center justify-center">
                        <svg className="w-12 h-12 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      </div>
                      <p className="text-sm text-gray-600">Project 1</p>
                    </div>
                  </div>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative flex-1 min-h-0 overflow-hidden bg-gray-50 rounded-md"
              >
                {portfolioImages[1]?.includes('portfolio-2') ? (
                  <img loading="lazy" src={portfolioImages[1]} alt="AI Integration Project 2" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 border border-gray-200 rounded-md flex items-center justify-center">
                        <svg className="w-10 h-10 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      </div>
                      <p className="text-xs text-gray-600">Project 2</p>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-8 h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative flex-1 min-h-0 overflow-hidden bg-gray-50 rounded-md"
              >
                {portfolioImages[2]?.includes('portfolio-3') ? (
                  <img loading="lazy" src={portfolioImages[2]} alt="AI Integration Project 3" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 border border-gray-200 rounded-md flex items-center justify-center">
                        <svg className="w-10 h-10 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      </div>
                      <p className="text-xs text-gray-600">Project 3</p>
                    </div>
                  </div>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative flex-1 min-h-0 overflow-hidden bg-gray-50 rounded-md"
              >
                {portfolioImages[3]?.includes('portfolio-4') ? (
                  <img loading="lazy" src={portfolioImages[3]} alt="AI Integration Project 4" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 border border-gray-200 rounded-md flex items-center justify-center">
                        <svg className="w-10 h-10 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      </div>
                      <p className="text-xs text-gray-600">Project 4</p>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices currentHref="/services/ai-integration" />

      <Contact />

      <Footer />
    </main>
    </PageTransition>
  );
}
