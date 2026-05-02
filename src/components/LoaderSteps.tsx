"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const STEPS = [
  "Scanning layout structure...",
  "Analyzing visual hierarchy...",
  "Evaluating contrast & accessibility...",
  "Generating intelligent redesign...",
  "Finalizing UX score..."
];

export default function LoaderSteps() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < STEPS.length - 1) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 850);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center space-y-12">

      <div className="relative flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-40 h-40 rounded-full bg-accent-blue blur-2xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-accent-blue to-accent-purple shadow-[0_0_40px_rgba(129,140,248,0.8)] border-4 border-white/20 flex items-center justify-center"
        >
          <SparkleIcon />
        </motion.div>
      </div>

      <div className="flex flex-col items-center space-y-4">
        {STEPS.map((step, index) => {
          const isActive = index === currentStep;
          const isPast = index < currentStep;

          return (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: isActive ? 1 : isPast ? 0.3 : 0.1,
                y: 0,
                scale: isActive ? 1.05 : 1,
              }}
              className={`flex items-center gap-3 text-lg font-medium transition-all duration-300 ${
                isActive ? "text-accent-blue" : "text-white"
              }`}
            >
              {isPast ? (
                <div className="w-5 h-5 rounded-full bg-accent-purple/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-accent-purple" />
                </div>
              ) : isActive ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 rounded-full border-2 border-accent-blue border-t-transparent"
                />
              ) : (
                <div className="w-5 h-5 rounded-full border border-white/20" />
              )}
              {step}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function SparkleIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}
