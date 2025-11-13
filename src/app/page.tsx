// app/page.tsx
"use client";

import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Process from "@/components/sections/Process";
import Portfolio from "@/components/sections/Portfolio"; 
import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  useEffect(() => {
    // Only scroll to top if there's no hash in the URL
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    // ALWAYS force scroll to top first, no matter what
    window.history.scrollRestoration = 'manual';
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    // Check if there's a target section to scroll to
    const targetSection = sessionStorage.getItem('scrollToSection');
    
    if (targetSection) {
      // Clear the storage
      sessionStorage.removeItem('scrollToSection');
      
      // Wait to show hero, then scroll to target section
      setTimeout(() => {
        const element = document.getElementById(targetSection);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 800); // Show hero for 800ms before scrolling
    }
  }, []);

  return (
    <>
      <LoadingScreen />
      <main className="min-h-screen bg-black text-white">
        <Navigation />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Portfolio />
        <Process />
        <CTA />
        <Footer />
      </main>
    </>
  );
}