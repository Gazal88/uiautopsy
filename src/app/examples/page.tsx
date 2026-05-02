export default function ExamplesPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 min-h-screen">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold mb-6">
          See the AI in Action
        </h1>
        <p className="text-gray-400 text-lg">
          Explore real-world UI transformations. See how UI Autopsy identifies usability flaws and generates production-ready structural improvements instantly.
        </p>
      </div>

      <div className="space-y-24">

        <div className="glass-card p-8 md:p-12">
          <div className="mb-8 border-b border-white/5 pb-6">
            <h2 className="text-2xl font-heading font-bold text-white mb-2">Example 1: SaaS Dashboard</h2>
            <p className="text-gray-400">Issue: Poor contrast and cluttered visual hierarchy.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Original</h3>
              <div className="aspect-[4/3] bg-[#09090b] rounded-xl border border-white/10 overflow-hidden flex items-center justify-center opacity-60 grayscale hover:grayscale-0 transition-all">
                <span className="text-gray-500">Messy Dashboard View</span>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[accent-blue] uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[accent-blue]"></span> Optimized
              </h3>
              <div className="aspect-[4/3] bg-[#09090b] rounded-xl border border-[accent-blue]/30 shadow-[0_0_30px_rgba(255,71,87,0.1)] overflow-hidden flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[accent-blue]/5 to-transparent"></div>
                <span className="text-white font-medium z-10">Clean, structured layout applied</span>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-8 md:p-12">
          <div className="mb-8 border-b border-white/5 pb-6">
            <h2 className="text-2xl font-heading font-bold text-white mb-2">Example 2: E-commerce Checkout</h2>
            <p className="text-gray-400">Issue: CTA button hidden below the fold; confusing form fields.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Original</h3>
              <div className="aspect-[4/3] bg-[#09090b] rounded-xl border border-white/10 overflow-hidden flex items-center justify-center opacity-60 grayscale hover:grayscale-0 transition-all">
                <span className="text-gray-500">Confusing Checkout Form</span>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[accent-blue] uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[accent-blue]"></span> Optimized
              </h3>
              <div className="aspect-[4/3] bg-[#09090b] rounded-xl border border-[accent-blue]/30 shadow-[0_0_30px_rgba(255,71,87,0.1)] overflow-hidden flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[accent-blue]/5 to-transparent"></div>
                <span className="text-white font-medium z-10">Isolated CTA & streamlined inputs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
