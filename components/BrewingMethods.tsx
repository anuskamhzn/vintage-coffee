'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const brewingMethods = [
  {
    id: 1,
    title: "French Press",
    icon: "🪵",
    time: "4 minutes",
    difficulty: "Easy",
    description: "Full-immersion brewing that gives a rich, full-bodied cup with natural oils.",
    steps: [
      "Add coarse ground coffee (1 tbsp per 4 oz water)",
      "Pour hot water just off the boil",
      "Stir gently and let steep for 4 minutes",
      "Slowly press the plunger down",
      "Pour immediately and enjoy"
    ],
    tip: "Use coarse grounds only — fine grounds will make your coffee muddy.",
    color: "#4a2f1f"
  },
  {
    id: 2,
    title: "Pour Over",
    icon: "☕",
    time: "3–4 minutes",
    difficulty: "Medium",
    description: "A clean, precise method that highlights the delicate flavors of your beans.",
    steps: [
      "Rinse the filter with hot water",
      "Add medium-fine coffee (1:16 ratio)",
      "Bloom with a small pour (30 seconds)",
      "Pour slowly in circles until finished",
      "Serve right away"
    ],
    tip: "The secret is patience — pour slowly and evenly for perfect extraction.",
    color: "#6b3d2e"
  },
  {
    id: 3,
    title: "Espresso",
    icon: "⚙️",
    time: "25–30 seconds",
    difficulty: "Advanced",
    description: "High-pressure brewing that creates a concentrated shot with rich crema.",
    steps: [
      "Grind beans very finely",
      "Tamp evenly in the portafilter",
      "Lock into the machine",
      "Pull the shot for 25–30 seconds",
      "Look for golden crema on top"
    ],
    tip: "Freshness matters most. Use beans roasted within the last month.",
    color: "#3c2a1f"
  }
];

function CoffeeBrewAnimation({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative w-full max-w-[240px] mx-auto h-[260px] mt-6">
      <svg width="240" height="260" viewBox="0 0 240 260" fill="none" xmlns="http://www.w3.org/2000/svg">
        
        {/* Cup */}
        <motion.path
          d="M50 70 Q50 190 120 190 Q190 190 190 70"
          stroke="#3c2a1f"
          strokeWidth="22"
          fill="#f9f1e1"
          initial={{ pathLength: 1 }}
        />

        {/* Inner cup */}
        <path d="M62 75 Q62 180 118 180 Q175 180 178 75" fill="#e8d9c0" opacity="0.6" />

        {/* Handle */}
        <path d="M190 95 Q215 95 215 135 Q215 170 190 170" stroke="#3c2a1f" strokeWidth="18" fill="none" />

        {/* Coffee Grounds Falling */}
        {isActive && (
          <>
            <motion.circle cx="95" cy="55" r="5" fill="#2c2118"
              animate={{ y: [55, 135], opacity: [1, 0] }}
              transition={{ duration: 1.1, repeat: Infinity, repeatDelay: 0.4 }} />
            <motion.circle cx="120" cy="48" r="6" fill="#2c2118"
              animate={{ y: [48, 148], opacity: [1, 0] }}
              transition={{ duration: 1.3, delay: 0.3, repeat: Infinity, repeatDelay: 0.5 }} />
            <motion.circle cx="145" cy="60" r="4" fill="#2c2118"
              animate={{ y: [60, 140], opacity: [1, 0] }}
              transition={{ duration: 0.9, delay: 0.6, repeat: Infinity }} />
          </>
        )}

        {/* Pouring Water */}
        {isActive && (
          <motion.line
            x1="125" y1="35" x2="125" y2="95"
            stroke="#a3d4ff"
            strokeWidth="9"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.6 }}
          />
        )}

        {/* Rising Coffee Liquid */}
        <motion.rect
          x="60"
          y="185"
          width="120"
          height="0"
          rx="8"
          fill="#3c2a1f"
          initial={{ height: 0, y: 185 }}
          animate={isActive ? { height: 105, y: 80 } : { height: 0, y: 185 }}
          transition={{ duration: 2.8, delay: 1.8, ease: "easeOut" }}
        />

        {/* Steam */}
        {isActive && (
          <>
            <motion.path d="M75 65 Q70 35 90 30" stroke="#e8d9c0" strokeWidth="7" strokeLinecap="round"
              animate={{ y: [-10, -75], opacity: [0.8, 0] }}
              transition={{ duration: 3, repeat: Infinity }} />
            <motion.path d="M115 62 Q110 28 135 33" stroke="#e8d9c0" strokeWidth="6" strokeLinecap="round"
              animate={{ y: [-15, -80], opacity: [0.7, 0] }}
              transition={{ duration: 3.4, delay: 0.4, repeat: Infinity }} />
            <motion.path d="M155 68 Q160 40 175 45" stroke="#e8d9c0" strokeWidth="5" strokeLinecap="round"
              animate={{ y: [-8, -65], opacity: [0.6, 0] }}
              transition={{ duration: 2.7, delay: 0.9, repeat: Infinity }} />
          </>
        )}
      </svg>
    </div>
  );
}

export default function BrewingMethods() {
  const [openMethod, setOpenMethod] = useState<number | null>(null);

  const toggleMethod = (id: number) => {
    setOpenMethod(openMethod === id ? null : id);
  };

  return (
    <section className="relative py-24 bg-[#f5e8d3] border-t border-[#8b5a2b]/30">
      <div className="absolute inset-0 bg-[url('/textures/old-parchment.jpg')] bg-cover opacity-30 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 border-t-2 border-b-2 border-[#4a2f1f] px-12 py-3 mb-6">
            <span className="text-[#8b5a2b]">📖</span>
            <p className="font-serif text-sm tracking-[4px] text-[#5c4633]">CHAPTER IV • RECIPES</p>
            <span className="text-[#8b5a2b]">📖</span>
          </div>
          
          <h2 
            className="font-serif text-5xl md:text-6xl text-[#3c2a1f] tracking-tighter"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Brewing at Home
          </h2>
          <p className="mt-4 text-[#6b553f] max-w-md mx-auto text-lg">
            Watch the simple magic happen
          </p>
        </div>

        <div className="space-y-8">
          {brewingMethods.map((method, index) => {
            const isOpen = openMethod === method.id;

            return (
              <motion.div
                key={method.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#f9f1e1] border-2 border-[#3c2a1f] shadow-md overflow-hidden"
              >
                {/* Header */}
                <div
                  onClick={() => toggleMethod(method.id)}
                  className="flex items-center justify-between p-8 cursor-pointer hover:bg-[#f5e8d3] transition-colors group"
                >
                  <div className="flex items-center gap-6">
                    <div className="text-5xl transition-transform group-hover:scale-110" style={{ color: method.color }}>
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="font-serif text-3xl text-[#3c2a1f]" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {method.title}
                      </h3>
                      <p className="text-[#8b5a2b] text-sm tracking-widest mt-1">
                        {method.time} • {method.difficulty}
                      </p>
                    </div>
                  </div>

                  <div className="text-[#3c2a1f]">
                    {isOpen ? <ChevronUp size={28} /> : <ChevronDown size={28} />}
                  </div>
                </div>

                {/* Content + Animation */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="overflow-hidden border-t border-[#8b5a2b]/30"
                    >
                      <div className="p-8 pt-2">
                        <p className="text-[#4a3a2b] leading-relaxed text-lg mb-8">
                          {method.description}
                        </p>

                        {/* Simple Coffee Animation */}
                        <CoffeeBrewAnimation isActive={isOpen} />

                        {/* Steps */}
                        <div className="mt-10">
                          <h4 className="font-serif text-xl text-[#3c2a1f] mb-4 border-b border-[#8b5a2b]/40 pb-2">
                            How to Brew
                          </h4>
                          <ol className="space-y-4 pl-2">
                            {method.steps.map((step, i) => (
                              <li key={i} className="flex gap-4 text-[#4a3a2b]">
                                <span className="font-serif text-[#8b5a2b] shrink-0 w-6">{i + 1}.</span>
                                <span>{step}</span>
                              </li>
                            ))}
                          </ol>
                        </div>

                        {/* Tip Box */}
                        <div className="mt-10 bg-[#f5e8d3] border-l-4 border-[#8b5a2b] p-6 italic text-[#4a3a2b]">
                          <span className="font-medium text-[#6b553f]">Old Café Tip:</span> {method.tip}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}