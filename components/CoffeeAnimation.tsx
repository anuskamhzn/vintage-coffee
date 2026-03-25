'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function CoffeeAnimation() {
  const [isBrewing, setIsBrewing] = useState(false);

  const startBrewing = () => {
    setIsBrewing(true);
    // Reset after one cycle
    setTimeout(() => setIsBrewing(false), 6500);
  };

  return (
    <div className="flex flex-col items-center py-12 bg-[#f9f1e1] border-2 border-[#3c2a1f] rounded shadow-inner">
      <h3 className="font-serif text-2xl text-[#3c2a1f] mb-8 tracking-tight">
        Watch the Brew
      </h3>

      {/* SVG Container */}
      <div className="relative w-64 h-72">
        <svg width="260" height="300" viewBox="0 0 260 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          
          {/* Cup Body */}
          <motion.path
            d="M60 80 Q60 220 130 220 Q200 220 200 80"
            stroke="#3c2a1f"
            strokeWidth="18"
            fill="#f5e8d3"
          />

          {/* Cup Inner Shadow */}
          <path d="M70 85 Q70 210 125 210 Q180 210 190 85" fill="#d4b99f" opacity="0.4" />

          {/* Handle */}
          <path d="M200 110 Q230 110 230 150 Q230 190 200 190" stroke="#3c2a1f" strokeWidth="16" fill="none" />

          {/* Coffee Liquid - rises when brewing */}
          <motion.rect
            x="68"
            y="210"
            width="124"
            height="0"
            fill="#3c2a1f"
            initial={{ height: 0, y: 210 }}
            animate={isBrewing ? { height: 125, y: 85 } : { height: 0, y: 210 }}
            transition={{ duration: 2.8, delay: 2.2, ease: "easeInOut" }}
          />

          {/* Coffee Grounds falling */}
          {isBrewing && (
            <>
              <motion.circle cx="110" cy="60" r="6" fill="#2c1f18" 
                animate={{ y: [60, 140], opacity: [1, 0] }} 
                transition={{ duration: 1.2, delay: 0.6 }} />
              <motion.circle cx="135" cy="55" r="5" fill="#2c1f18" 
                animate={{ y: [55, 155], opacity: [1, 0] }} 
                transition={{ duration: 1.4, delay: 0.9 }} />
              <motion.circle cx="155" cy="68" r="4" fill="#2c1f18" 
                animate={{ y: [68, 145], opacity: [1, 0] }} 
                transition={{ duration: 1.1, delay: 0.7 }} />
            </>
          )}

          {/* Pouring Water Stream */}
          {isBrewing && (
            <motion.line
              x1="130" y1="40"
              x2="130" y2="95"
              stroke="#a8d4ff"
              strokeWidth="8"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.8, delay: 1.2 }}
            />
          )}

          {/* Steam Wisps */}
          <motion.g>
            <motion.path
              d="M90 65 Q85 40 105 35"
              stroke="#e5d9c8"
              strokeWidth="6"
              strokeLinecap="round"
              opacity="0.7"
              animate={isBrewing ? { y: [-10, -65], opacity: [0.7, 0] } : {}}
              transition={{ duration: 3.2, repeat: isBrewing ? Infinity : 0, repeatDelay: 0.4 }}
            />
            <motion.path
              d="M130 60 Q125 30 150 38"
              stroke="#e5d9c8"
              strokeWidth="5"
              strokeLinecap="round"
              opacity="0.6"
              animate={isBrewing ? { y: [-15, -70], opacity: [0.6, 0] } : {}}
              transition={{ duration: 3.8, repeat: isBrewing ? Infinity : 0, delay: 0.6 }}
            />
            <motion.path
              d="M165 68 Q170 45 185 52"
              stroke="#e5d9c8"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.5"
              animate={isBrewing ? { y: [-8, -55], opacity: [0.5, 0] } : {}}
              transition={{ duration: 2.9, repeat: isBrewing ? Infinity : 0, delay: 1.1 }}
            />
          </motion.g>
        </svg>
      </div>

      {/* Brew Button - Vintage style */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        onClick={startBrewing}
        disabled={isBrewing}
        className="mt-10 px-10 py-4 border-2 border-[#3c2a1f] font-serif text-lg tracking-wider text-[#3c2a1f] hover:bg-[#3c2a1f] hover:text-[#f5e8d3] transition-all disabled:opacity-50"
      >
        {isBrewing ? "Brewing..." : "Start the Brew"}
      </motion.button>

      <p className="mt-6 text-sm text-[#6b553f] font-serif italic">
        Simple pour-over style animation
      </p>
    </div>
  );
}