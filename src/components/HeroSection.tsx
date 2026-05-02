"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import FloatingUICards from "./FloatingUICards";

interface HeroSectionProps {
  onUploadClick: () => void;
}

export default function HeroSection({ onUploadClick }: HeroSectionProps) {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
      <div className="flex-1 flex flex-col items-start max-w-2xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-accent-blue mb-6 backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4" />
          <span>Next-Gen UX Intelligence</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-heading text-5xl sm:text-6xl lg:text-[76px] font-extrabold leading-[1.05] tracking-tight mb-6"
        >
          Diagnose UI. <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-[#a78bfa] to-accent-purple">
            Predict UX.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg sm:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed"
        >
          Upload any interface screenshot. Our AI instantly exposes usability flaws, generates a UX score, and builds a production-ready redesign in seconds.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <button onClick={onUploadClick} className="primary flex items-center justify-center gap-2 text-lg px-8 py-4">
            Start Analysis <ArrowRight className="w-5 h-5" />
          </button>
          <button className="flex items-center justify-center gap-2 text-lg px-8 py-4 rounded-xl font-semibold bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-white backdrop-blur-sm">
            View Demo
          </button>
        </motion.div>
      </div>

      <div className="flex-1 w-full relative h-[500px] lg:h-[600px] perspective-1000">
        <FloatingUICards />
      </div>
    </div>
  );
}
