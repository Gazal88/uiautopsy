"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.18-.35 6.52-1.54 6.52-7.1a5.3 5.3 0 0 0-1.5-3.8 5.1 5.1 0 0 0-.15-3.8s-1.14-.36-3.8 1.45a13.3 13.3 0 0 0-7 0C8.14 2.45 7 2.8 7 2.8a5.1 5.1 0 0 0-.15 3.8A5.3 5.3 0 0 0 5.3 10.4c0 5.55 3.33 6.74 6.5 7.1A4.8 4.8 0 0 0 10.8 20.5v4.5" />
    <path d="M9 22c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={{ 
      backdropFilter: "blur(12px)", 
      background: "rgba(9, 9, 11, 0.7)", 
      borderBottom: "1px solid rgba(240, 224, 224, 0.06)" 
    }}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <Link href="/" className="font-heading font-bold text-2xl tracking-tight text-white flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center glow-accent group-hover:scale-105 transition-transform">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12h4l3-9 5 18 3-9h5" />
            </svg>
          </div>
          UI Autopsy
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/examples" className={`transition-colors hover:text-accent-blue ${pathname === '/examples' ? 'text-white' : 'text-gray-300'}`}>
            Examples
          </Link>
          <Link href="/how-it-works" className={`transition-colors hover:text-accent-blue ${pathname === '/how-it-works' ? 'text-white' : 'text-gray-300'}`}>
            How it Works
          </Link>
          <Link href="/docs" className={`transition-colors hover:text-accent-blue ${pathname === '/docs' ? 'text-white' : 'text-gray-300'}`}>
            Docs
          </Link>
          <a href="https://github.com/Gazal88/uiautopsy" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors flex items-center gap-1.5">
            <GithubIcon className="w-4 h-4" /> GitHub
          </a>
        </div>

        <div className="hidden md:block">
          <Link href="/#upload-section" className="primary inline-flex items-center justify-center px-6 py-2.5 !text-sm">
            Analyze UI
          </Link>
        </div>

        <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/5 bg-[#0f0e13]/95 backdrop-blur-xl"
          >
            <div className="flex flex-col px-6 py-6 gap-6">
              <Link href="/examples" className="text-gray-300 hover:text-white font-medium text-lg">Examples</Link>
              <Link href="/how-it-works" className="text-gray-300 hover:text-white font-medium text-lg">How it Works</Link>
              <Link href="/docs" className="text-gray-300 hover:text-white font-medium text-lg">Docs</Link>
              <a href="https://github.com/Gazal88" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white font-medium text-lg flex items-center gap-2">
                <GithubIcon className="w-5 h-5" /> GitHub
              </a>
              <div className="pt-4 border-t border-white/5">
                <Link href="/#upload-section" className="primary flex items-center justify-center w-full !py-3">
                  Analyze UI
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
