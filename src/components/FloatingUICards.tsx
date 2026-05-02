"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export default function FloatingUICards() {
  return (
    <div className="relative w-full h-full flex items-center justify-center lg:justify-end">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent-purple/30 rounded-full blur-[100px] -z-10" />

      <motion.div
        animate={{ 
          y: [0, -10, 0],
          rotate: [-6, -4, -6] 
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="card-hero absolute left-0 lg:left-10 top-20 w-[280px] bg-[#09090b]/90 backdrop-blur-xl border border-white/5 p-5 z-10"
      >
        <div className="flex justify-between items-center mb-4">
          <div className="w-20 h-4 bg-white/10 rounded" />
          <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
            <AlertCircle className="w-4 h-4 text-red-500" />
          </div>
        </div>
        <div className="space-y-3">
          <div className="w-full h-12 bg-white/5 rounded-md border border-red-500/30" />
          <div className="flex gap-2">
            <div className="w-1/2 h-8 bg-white/5 rounded-md" />
            <div className="w-1/2 h-8 bg-white/5 rounded-md" />
          </div>
          <div className="w-3/4 h-3 bg-white/10 rounded mt-4" />
          <div className="w-1/2 h-3 bg-white/10 rounded" />
        </div>
        <div className="mt-6 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
          <p className="text-xs text-red-400 font-medium flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" /> Contrast issue detected
          </p>
        </div>
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, 10, 0],
          rotate: [4, 6, 4] 
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="card-hero-after absolute right-0 top-10 w-[320px] bg-[#111827]/80 backdrop-blur-2xl border border-white/10 p-6 z-20 shadow-2xl"
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <div className="w-24 h-5 bg-white/80 rounded mb-2" />
            <div className="w-16 h-3 bg-white/40 rounded" />
          </div>
          <div className="flex items-center gap-1.5 bg-accent-blue/10 px-2 py-1 rounded border border-accent-blue/20">
            <SparkleIcon />
            <span className="text-[10px] text-accent-blue font-bold tracking-wider uppercase">Optimized</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="w-full h-12 bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 rounded-lg border border-white/10 flex items-center px-4">
             <div className="w-full h-3 bg-white/60 rounded" />
          </div>
          <div className="w-full h-12 bg-white/5 rounded-lg border border-white/10 flex items-center px-4">
             <div className="w-2/3 h-3 bg-white/40 rounded" />
          </div>

          <div className="pt-2">
            <button className="w-full py-3 bg-white text-black font-semibold rounded-lg text-sm shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              Confirm Action
            </button>
          </div>
        </div>

        <div className="absolute -bottom-4 -right-4 bg-[#09090b] border border-white/10 p-3 rounded-xl shadow-xl flex items-center gap-3">
           <div className="w-10 h-10 rounded-full border-[3px] border-accent-blue flex items-center justify-center">
             <span className="text-white font-bold text-xs">98</span>
           </div>
           <div>
             <div className="text-xs text-gray-400 font-medium">UX Score</div>
             <div className="text-sm text-white font-bold">Excellent</div>
           </div>
        </div>
      </motion.div>

    </div>
  );
}

function SparkleIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-blue">
      <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}
