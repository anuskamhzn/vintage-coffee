'use client';

import { useState } from 'react';
import { motion , AnimatePresence} from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "History", href: "#history" },
    { name: "Types", href: "#types" },
    { name: "Fun Facts", href: "#funfacts" },
    { name: "Brewing", href: "#brewing" },
    { name: "Quiz", href: "#quiz" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#f5e8d3] border-b-2 border-[#3c2a1f] shadow-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo - Vintage Style */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="text-4xl group-hover:rotate-12 transition-transform">☕</div>
            <div>
              <span className="font-serif text-3xl tracking-tight text-[#3c2a1f]" style={{ fontFamily: "'Playfair Display', serif" }}>
                The World of Coffee
              </span>
              <p className="text-[10px] text-[#8b5a2b] tracking-[2px] -mt-1">EST. 850</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 font-serif text-[#4a3a2b]">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:text-[#3c2a1f] transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 after:bg-[#8b5a2b] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#3c2a1f] p-2"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-[#8b5a2b]/30 bg-[#f9f1e1]"
          >
            <div className="px-6 py-8 flex flex-col gap-6 text-lg font-serif text-[#3c2a1f]">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#8b5a2b] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}