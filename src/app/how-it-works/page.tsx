import { UploadCloud, Cpu, LayoutTemplate } from "lucide-react";

export default function HowItWorksPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 min-h-screen">
      <div className="text-center mb-20">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold mb-6">
          How it Works
        </h1>
        <p className="text-gray-400 text-lg">
          Three simple steps to transform your product interface using advanced computer vision and LLM reasoning.
        </p>
      </div>

      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-8 md:before:mx-auto md:before:translate-x-0 before:w-0.5 before:bg-white/10 before:z-0">

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="hidden md:block w-1/2 text-right">
            <h3 className="text-2xl font-bold text-white mb-3">1. Upload UI Screenshot</h3>
            <p className="text-gray-400">Drag and drop any interface screenshot. PNG, JPG, and WebP are fully supported. No code integration required.</p>
          </div>
          <div className="w-16 h-16 shrink-0 rounded-2xl bg-[#09090b] border-2 border-white/10 flex items-center justify-center relative shadow-xl ml-0 md:mx-auto">
            <div className="absolute -inset-2 bg-indigo-500/20 blur-xl rounded-full -z-10"></div>
            <UploadCloud className="w-6 h-6 text-white" />
          </div>
          <div className="md:hidden">
            <h3 className="text-2xl font-bold text-white mb-3">1. Upload UI Screenshot</h3>
            <p className="text-gray-400">Drag and drop any interface screenshot. PNG, JPG, and WebP are fully supported. No code integration required.</p>
          </div>
          <div className="hidden md:block w-1/2"></div>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="hidden md:block w-1/2"></div>
          <div className="w-16 h-16 shrink-0 rounded-2xl bg-[#09090b] border-2 border-indigo-500 flex items-center justify-center relative shadow-[0_0_30px_rgba(99,102,241,0.3)] ml-0 md:mx-auto">
            <Cpu className="w-6 h-6 text-indigo-500" />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-white mb-3">2. AI Vision Analysis</h3>
            <p className="text-gray-400">Our custom vision model scans visual hierarchy, contrast ratios, and layout patterns, generating an attention heatmap instantly.</p>
          </div>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="hidden md:block w-1/2 text-right">
            <h3 className="text-2xl font-bold text-white mb-3">3. Get Redesign & UX Report</h3>
            <p className="text-gray-400">Receive a 0-100 UX score, a breakdown of critical issues, and a structured layout redesign ready for engineering.</p>
          </div>
          <div className="w-16 h-16 shrink-0 rounded-2xl bg-[#09090b] border-2 border-white/10 flex items-center justify-center relative shadow-xl ml-0 md:mx-auto">
            <div className="absolute -inset-2 bg-[accent-purple]/20 blur-xl rounded-full -z-10"></div>
            <LayoutTemplate className="w-6 h-6 text-white" />
          </div>
          <div className="md:hidden">
            <h3 className="text-2xl font-bold text-white mb-3">3. Get Redesign & UX Report</h3>
            <p className="text-gray-400">Receive a 0-100 UX score, a breakdown of critical issues, and a structured layout redesign ready for engineering.</p>
          </div>
          <div className="hidden md:block w-1/2"></div>
        </div>

      </div>
    </div>
  );
}
