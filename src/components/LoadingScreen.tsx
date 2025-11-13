// components/LoadingScreen.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phrases = [
  "Your System Architect",
  "Your Experience Designer",
  "Your Digital Visionary",
  "Metaseti Digital Indonesia"
];

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    if (!hasVisited) {
      setShowLoading(true);
      sessionStorage.setItem('hasVisited', 'true');
    } else {
      setIsLoading(false);
      return;
    }

    // Cycle through phrases
    const phraseInterval = setInterval(() => {
      setCurrentPhraseIndex((prev) => {
        if (prev < phrases.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 1500); // Change phrase every 1.5 seconds

    // End loading after all phrases
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, phrases.length * 1500 + 1000); // Total time + 1 second buffer

    return () => {
      clearInterval(phraseInterval);
      clearTimeout(loadingTimeout);
    };
  }, []);

  if (!showLoading) {
    return null;
  }

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center px-6"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentPhraseIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-6xl font-light text-white"
              >
                {phrases[currentPhraseIndex]}
              </motion.h1>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}