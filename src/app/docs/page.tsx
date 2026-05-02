export default function DocsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24 min-h-screen">
      <h1 className="font-heading text-4xl md:text-5xl font-extrabold mb-8">Documentation</h1>

      <div className="prose prose-invert prose-lg max-w-none">
        <p className="text-gray-400 text-xl mb-12 leading-relaxed">
          UI Autopsy is powered by advanced multimodal Large Language Models (LLMs). This document explains the high-level logic behind our scoring and redesign engines.
        </p>

        <div className="space-y-12">
          <section className="glass-card p-8">
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-4">How the AI Analyzes UIs</h2>
            <p className="text-gray-300 mb-4">
              When you upload an image, our vision models analyze the screen across four core dimensions:
            </p>
            <ul className="list-disc pl-5 text-gray-400 space-y-2 mb-6">
              <li><strong className="text-white">Visual Hierarchy:</strong> Does the eye naturally follow the most important information?</li>
              <li><strong className="text-white">Clarity:</strong> Are the Call to Actions (CTAs) obvious? Is the copy legible?</li>
              <li><strong className="text-white">Accessibility:</strong> Are contrast ratios sufficient? Are touch targets large enough?</li>
              <li><strong className="text-white">Consistency:</strong> Do similar elements behave and look the same?</li>
            </ul>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-4">Heatmap Generation</h2>
            <p className="text-gray-300">
              The attention heatmap simulates where a user's eyes will land in the first 3 seconds of viewing the interface.
              Red zones indicate high cognitive load or primary focus areas, while yellow zones indicate secondary scanning paths.
              If a primary CTA is not in a red zone, it is flagged as a critical UX issue.
            </p>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-4">UX Scoring Logic</h2>
            <p className="text-gray-300">
              The overall UX Score (0-100) is a weighted average of the four core categories.
              Scores below 70 indicate significant usability blockers, while scores above 90 represent production-ready, highly optimized interfaces.
            </p>
          </section>

          <section className="glass-card p-8 border border-[accent-blue]/30 shadow-[0_0_30px_rgba(129,140,248,71,87,0.05)]">
            <h2 className="text-2xl font-bold text-[accent-blue] mb-4 border-b border-white/10 pb-4">Redesign Engine</h2>
            <p className="text-gray-300">
              Instead of generating generic templates, our engine restructures your exact content. It mathematically realigns elements to a grid, increases whitespace (padding/margins), and boosts CTA contrast to solve the specific issues detected in the analysis phase.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
