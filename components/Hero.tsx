'use client';

import { motion } from 'framer-motion';
import { Coffee } from 'lucide-react';
import { ChevronDown } from 'lucide-react';   // ← Added this

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f5e8d3] 
                    bg-[url('/textures/old-parchment.jpg')] bg-cover bg-center">
      
      {/* Subtle vignette & paper edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4a2f1f]/10 to-[#4a2f1f]/20 pointer-events-none" />
      <div className="absolute inset-0 border-[20px] border-[#8b5a2b]/20 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        
        {/* Decorative top divider */}
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "180px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mx-auto h-px bg-gradient-to-r from-transparent via-[#4a2f1f] to-transparent mb-8"
        />

        {/* Main Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 40, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="font-serif text-[4.8rem] md:text-[6.5rem] leading-none tracking-tight text-[#3c2a1f] mb-4"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          From Bean<br />to Brew
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="font-serif text-xl md:text-2xl text-[#5c4633] tracking-wide mb-12 max-w-lg mx-auto"
        >
          A gentle journey through time and taste
        </motion.p>

        {/* Vintage Coffee Cup Animation */}
        <motion.div 
          initial={{ y: -120, rotate: -12, opacity: 0 }}
          animate={{ 
            y: 0, 
            rotate: 0, 
            opacity: 1 
          }}
          transition={{ 
            duration: 1.4, 
            type: "spring", 
            bounce: 0.35,
            delay: 0.3 
          }}
          className="relative mx-auto w-64 h-64 md:w-80 md:h-80 mb-12"
        >
          {/* Cup body */}
          <motion.div 
            animate={{ 
              rotate: [0, 3, -2, 0] 
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-52 border-[14px] border-[#3c2a1f] rounded-b-[90px] rounded-t-[20px] bg-gradient-to-br from-[#d4b99f] to-[#c29a6f]"
          >
            {/* Inner coffee liquid */}
            <motion.div 
              initial={{ height: "20%" }}
              animate={{ height: "68%" }}
              transition={{ duration: 2.2, delay: 1.2 }}
              className="absolute bottom-0 left-1 right-1 bg-[#3c2a1f] rounded-b-[70px]"
            />
          </motion.div>

          {/* Handle */}
          <div className="absolute left-[72%] top-[42%] w-10 h-20 border-[14px] border-[#3c2a1f] border-l-0 rounded-r-full" />

          {/* Steam */}
          <motion.div 
            animate={{ 
              y: [-20, -80],
              opacity: [0.6, 0.9, 0]
            }}
            transition={{ 
              duration: 3.5, 
              repeat: Infinity,
              ease: "easeOut"
            }}
            className="absolute -top-8 left-1/2 text-4xl"
          >
            ☁️
          </motion.div>
          <motion.div 
            animate={{ 
              y: [-30, -95],
              opacity: [0.5, 0.8, 0]
            }}
            transition={{ 
              duration: 4.2, 
              repeat: Infinity,
              delay: 0.8,
              ease: "easeOut"
            }}
            className="absolute -top-6 left-[42%] text-3xl"
          >
            ☁️
          </motion.div>
        </motion.div>

        {/* Replaced Button with Text + Down Arrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex flex-col items-center cursor-pointer group"
          onClick={() => document.getElementById('history')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="font-serif text-lg md:text-xl tracking-widest text-[#4a2f1f] mb-3 group-hover:text-[#3c2a1f] transition-colors">
            Begin the Journey
          </span>
          
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            <ChevronDown 
              className="w-8 h-8 text-[#4a2f1f] group-hover:text-[#3c2a1f] transition-colors" 
              strokeWidth={2.5}
            />
          </motion.div>
        </motion.div>

        {/* Decorative bottom divider */}
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "180px" }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 1.6 }}
          className="mx-auto h-px bg-gradient-to-r from-transparent via-[#4a2f1f] to-transparent mt-20"
        />
      </div>

      {/* Floating vintage coffee beans */}
      <motion.div 
        animate={{ 
          y: [0, -25, 0],
          rotate: [0, 8, -5, 0]
        }}
        transition={{ duration: 18, repeat: Infinity }}
        className="absolute bottom-12 left-12 text-4xl opacity-30 hidden lg:block"
      >
        ☕
      </motion.div>
      <motion.div 
        animate={{ 
          y: [0, -18, 0],
          rotate: [0, -10, 6, 0]
        }}
        transition={{ duration: 22, repeat: Infinity, delay: 4 }}
        className="absolute top-32 right-16 text-5xl opacity-20 hidden lg:block"
      >
        🫘
      </motion.div>
    </div>
  );
}