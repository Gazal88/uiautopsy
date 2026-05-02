"use client";

import { motion } from "framer-motion";

export default function HeatmapOverlay() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 z-10 heatmap"
    >

      <div className="absolute top-[20%] left-[60%] w-32 h-32 bg-red-500/40 rounded-full blur-3xl mix-blend-screen" />
      <div className="absolute top-[70%] left-[20%] w-40 h-40 bg-orange-500/30 rounded-full blur-3xl mix-blend-screen" />
      <div className="absolute top-[40%] left-[80%] w-24 h-24 bg-yellow-500/40 rounded-full blur-2xl mix-blend-screen" />
    </motion.div>
  );
}
