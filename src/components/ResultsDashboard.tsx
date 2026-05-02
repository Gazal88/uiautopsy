"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Maximize2, LayoutTemplate, Layers, MousePointerClick } from "lucide-react";
import HeatmapOverlay from "./HeatmapOverlay";
import { useState } from "react";

export interface AnalysisData {
  uxScore: number;
  issues: { title: string; description: string; type: "fixed" | "info" }[];
  categories: {
    visualHierarchy: number;
    clarity: number;
    accessibility: number;
    consistency: number;
  };
  heatmapFocus: string[];
  redesignLayout: string;
}

interface ResultsDashboardProps {
  originalImage: string;
  analysisData: AnalysisData;
  onReset: () => void;
}

export default function ResultsDashboard({ originalImage, analysisData, onReset }: ResultsDashboardProps) {
  const [showHeatmap, setShowHeatmap] = useState(false);

  return (
    <div className="w-full flex flex-col gap-8 pb-20">

      <div className="flex items-center justify-between">
        <button 
          onClick={onReset}
          className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Analyze another UI
        </button>
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full p-1 backdrop-blur-md">
          <button 
            onClick={() => setShowHeatmap(false)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${!showHeatmap ? "bg-white/10 text-white shadow-lg" : "text-gray-400 hover:text-white"}`}
          >
            Visual UI
          </button>
          <button 
            onClick={() => setShowHeatmap(true)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${showHeatmap ? "bg-accent-purple/20 text-accent-purple shadow-lg" : "text-gray-400 hover:text-white"}`}
          >
            Attention Heatmap
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-gray-500" />
            <h3 className="font-heading font-bold text-xl">Original Design</h3>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#09090b] shadow-2xl aspect-[4/3] group">
            <img src={originalImage} alt="Original UI" className="w-full h-full object-cover object-top opacity-80" />

            {showHeatmap && <HeatmapOverlay />}

            <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none" />
            <button className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/80 rounded-lg backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-accent-blue shadow-[0_0_10px_#818cf8]" />
            <h3 className="font-heading font-bold text-xl">Optimized Redesign Concept</h3>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-accent-blue/30 bg-[#09090b] shadow-[0_0_40px_rgba(129,140,248,0.1)] aspect-[4/3] group flex flex-col">

            <div className="absolute inset-0 bg-gradient-to-br from-[#09090b] to-[#09090b]" />

            <div className="relative z-10 flex-1 p-8 flex flex-col">
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
                <LayoutTemplate className="w-6 h-6 text-accent-blue" />
                <h4 className="font-heading text-lg font-bold">Suggested Layout</h4>
              </div>

              <p className="text-gray-300 text-base leading-relaxed mb-8 flex-1">
                {analysisData.redesignLayout}
              </p>

              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <h5 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-purple" /> 
                  Heatmap Focus Shift
                </h5>
                <ul className="text-sm text-gray-400 space-y-2">
                  {analysisData.heatmapFocus.map((focus, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-accent-purple mt-0.5">•</span> {focus}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8 flex flex-col justify-center items-center text-center relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent-blue/20 blur-[50px] rounded-full" />
          <h4 className="text-gray-400 font-medium mb-2 uppercase tracking-widest text-sm">Overall UX Score</h4>
          <div className="score-text">{analysisData.uxScore}</div>

          <div className="w-full mt-6 space-y-3">
            <ScoreBar label="Visual Hierarchy" value={analysisData.categories.visualHierarchy} />
            <ScoreBar label="Clarity" value={analysisData.categories.clarity} />
            <ScoreBar label="Accessibility" value={analysisData.categories.accessibility} />
            <ScoreBar label="Consistency" value={analysisData.categories.consistency} />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-8 lg:col-span-2 flex flex-col"
        >
          <h4 className="font-heading font-bold text-xl mb-6 flex items-center gap-2">
            <Layers className="w-5 h-5 text-accent-purple" /> Key Improvements
          </h4>

          <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar flex-1 max-h-[300px]">
            {analysisData.issues.map((issue, idx) => (
              <IssueItem 
                key={idx}
                title={issue.title}
                desc={issue.description}
                type={issue.type}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}

function ScoreBar({ label, value }: { label: string, value: number }) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex justify-between text-xs font-medium">
        <span className="text-gray-400">{label}</span>
        <span className="text-white">{value}%</span>
      </div>
      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-full bg-gradient-to-r from-accent-blue to-accent-purple" 
        />
      </div>
    </div>
  );
}

function IssueItem({ title, desc, type }: { title: string, desc: string, type: "fixed" | "info" }) {
  return (
    <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
      <div className="mt-1">
        {type === "fixed" ? (
          <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
        ) : (
          <div className="w-6 h-6 rounded-full bg-accent-blue/20 flex items-center justify-center border border-accent-blue/30">
            <MousePointerClick className="w-3 h-3 text-accent-blue" />
          </div>
        )}
      </div>
      <div>
        <h5 className="font-bold text-white mb-1">{title}</h5>
        <p className="text-sm text-gray-400">{desc}</p>
      </div>
    </div>
  );
}
