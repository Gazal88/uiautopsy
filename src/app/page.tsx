"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import UploadBox from "@/components/UploadBox";
import LoaderSteps from "@/components/LoaderSteps";
import ResultsDashboard, { AnalysisData } from "@/components/ResultsDashboard";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [appState, setAppState] = useState<"idle" | "loading" | "results">("idle");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [analysisData, setAnalysisData] = useState<AnalysisData | null>(null);

  const handleUpload = async (file: File) => {

    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);

    setAppState("loading");

    try {
      const formData = new FormData();
      formData.append("image", file);

      const res = await fetch("/api/analyze", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        let errorMessage = "Failed to analyze image";
        try {
          const errorData = await res.json();
          if (errorData.error) errorMessage = errorData.error;
        } catch (e) {}
        throw new Error(errorMessage);
      }

      const data = await res.json();
      setAnalysisData(data);
      setAppState("results");

    } catch (error) {
      console.error("Error analyzing image:", error);
      alert("Analysis failed. Check console for details.");
      setAppState("idle");
      setImagePreview(null);
    }
  };

  const handleReset = () => {
    setAppState("idle");
    setImagePreview(null);
    setAnalysisData(null);
  };

  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col items-center pb-20">

      <div className="flex-1 w-full max-w-7xl mx-auto px-6 pt-12 lg:pt-20 z-10 flex flex-col items-center">
        <AnimatePresence mode="wait">
          {appState === "idle" && (
            <motion.div 
              key="hero"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full flex flex-col items-center"
            >
              <HeroSection onUploadClick={() => document.getElementById("main-upload")?.click()} />

              <div className="mt-24 w-full max-w-3xl mx-auto" id="upload-section">
                <UploadBox onUpload={handleUpload} id="main-upload" />
              </div>
            </motion.div>
          )}

          {appState === "loading" && (
            <motion.div
              key="loading"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="w-full flex justify-center items-center py-32"
            >
              <LoaderSteps />
            </motion.div>
          )}

          {appState === "results" && imagePreview && analysisData && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <ResultsDashboard originalImage={imagePreview} analysisData={analysisData} onReset={handleReset} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
