'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative bg-[#3c2a1f] text-[#f5e8d3] pt-16 pb-10 overflow-hidden">
      {/* Parallax Coffee Beans Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <motion.div
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute top-10 left-10 text-6xl"
        >
          🫘
        </motion.div>
        <motion.div
          animate={{ 
            x: [0, -40, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 32, repeat: Infinity, delay: 8 }}
          className="absolute bottom-20 right-16 text-7xl"
        >
          ☕
        </motion.div>
        <motion.div
          animate={{ 
            x: [0, 25, 0],
            y: [0, -15, 0]
          }}
          transition={{ duration: 28, repeat: Infinity, delay: 15 }}
          className="absolute top-32 right-32 text-5xl"
        >
          🫘
        </motion.div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Left Column - About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">☕</span>
              <span className="font-serif text-3xl">The World of Coffee</span>
            </div>
            <p className="text-[#d4b99f] leading-relaxed max-w-xs">
              A digital love letter to the world's most beloved beverage. 
              Brewed with care in the spirit of old cafés and leather-bound books.
            </p>
          </div>

          {/* Middle Column - Quick Links */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-[#d4b99f]">Explore</h4>
            <div className="flex flex-col gap-3 text-[#c8a47f]">
              <a href="#history" className="hover:text-[#f5e8d3] transition-colors">History of Coffee</a>
              <a href="#types" className="hover:text-[#f5e8d3] transition-colors">Types of Coffee</a>
              <a href="#funfacts" className="hover:text-[#f5e8d3] transition-colors">Fun Facts</a>
              <a href="#brewing" className="hover:text-[#f5e8d3] transition-colors">Brewing Methods</a>
              <a href="#quiz" className="hover:text-[#f5e8d3] transition-colors">Take the Quiz</a>
            </div>
          </div>

          {/* Right Column - Contact & Social */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-[#d4b99f]">Stay Connected</h4>
            
            <div className="flex gap-6 text-3xl mb-8">
              <a href="#" className="hover:text-[#d4b99f] transition-colors">𝕏</a>
              <a href="#" className="hover:text-[#d4b99f] transition-colors">📸</a>
              <a href="#" className="hover:text-[#d4b99f] transition-colors">📘</a>
            </div>

            <p className="text-sm text-[#a88b6a]">
              Made with ☕ and nostalgia<br />
              Kathmandu, Nepal • 2026
            </p>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-[#8b5a2b] to-transparent" />

        {/* Bottom Copyright */}
        <div className="text-center text-xs tracking-widest text-[#a88b6a]">
          © The World of Coffee • A cozy digital museum • All rights reserved
        </div>
      </div>
    </footer>
  );
}