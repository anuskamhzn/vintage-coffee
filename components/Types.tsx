'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const coffeeTypes = [
  {
    id: 1,
    name: "Espresso",
    icon: "☕",
    color: "#3c2a1f",
    shortDesc: "The pure, intense foundation of coffee.",
    description: "A concentrated shot of coffee brewed by forcing hot water through finely ground beans under high pressure. Rich crema on top is the sign of a perfect espresso.",
    facts: "• Invented in Italy in the early 1900s\n• Takes only 25–30 seconds to extract\n• Forms the base for lattes, cappuccinos, and more",
    origin: "Italy",
    strength: "Very Strong",
  },
  {
    id: 2,
    name: "Latte",
    icon: "🥛",
    color: "#8b5a2b",
    shortDesc: "Smooth, milky comfort in a cup.",
    description: "Espresso combined with plenty of steamed milk and topped with a light layer of foam. The most popular coffee drink worldwide for its gentle balance.",
    facts: "• Italian word for 'milk'\n• Usually served in a tall glass\n• The milk softens the espresso's bitterness beautifully",
    origin: "Italy",
    strength: "Medium",
  },
  {
    id: 3,
    name: "Cappuccino",
    icon: "☁️",
    color: "#4a2f1f",
    shortDesc: "Balanced with a thick foam crown.",
    description: "Equal parts espresso, steamed milk, and milk foam. Traditionally enjoyed in the morning. The thick foam holds the heat and creates a luxurious drinking experience.",
    facts: "• Named after the brown robes of Capuchin monks\n• Classic ratio is 1:1:1\n• Often dusted with cocoa powder",
    origin: "Italy",
    strength: "Medium",
  },
  {
    id: 4,
    name: "Americano",
    icon: "💧",
    color: "#5c4633",
    shortDesc: "Bold and straightforward.",
    description: "Espresso diluted with hot water. Created for American soldiers stationed in Italy during WWII who found traditional espresso too strong.",
    facts: "• Simple yet satisfying\n• Can be made with one or two shots\n• Hot water is usually added after the espresso",
    origin: "Italy / America",
    strength: "Medium",
  },
  {
    id: 5,
    name: "Mocha",
    icon: "🍫",
    color: "#6b3d2e",
    shortDesc: "Coffee meets chocolate.",
    description: "Espresso mixed with steamed milk and chocolate syrup or powder. A delightful treat that bridges the gap between coffee and dessert.",
    facts: "• Named after the port city of Mocha in Yemen\n• Chocolate has been added to coffee since the 1600s\n• Often topped with whipped cream",
    origin: "Yemen / Europe",
    strength: "Medium",
  },
  {
    id: 6,
    name: "Macchiato",
    icon: "✨",
    color: "#3c2a1f",
    shortDesc: "Espresso 'marked' with milk.",
    description: "A shot of espresso 'stained' or marked with a small amount of foamed milk. Strong espresso flavor with just a touch of creaminess.",
    facts: "• Italian for 'stained' or 'spotted'\n• Traditional version is just espresso with a dollop of foam\n• Much stronger than a latte",
    origin: "Italy",
    strength: "Strong",
  },
];

export default function Types() {
  const [selectedCoffee, setSelectedCoffee] = useState<any>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedCoffee) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCoffee]);

  return (
    <section className="relative py-24 bg-[#f5e8d3] border-t border-[#8b5a2b]/30">
      <div className="absolute inset-0 bg-[url('/textures/old-parchment.jpg')] bg-cover opacity-30 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 border-t-2 border-b-2 border-[#4a2f1f] px-10 py-2 mb-6">
            <span className="text-[#8b5a2b]">☕</span>
            <p className="font-serif text-sm tracking-[3px] text-[#5c4633]">CHAPTER II</p>
            <span className="text-[#8b5a2b]">☕</span>
          </div>
          
          <h2 
            className="font-serif text-5xl md:text-6xl text-[#3c2a1f] tracking-tighter"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Six Classic Brews
          </h2>
          <p className="mt-4 text-[#6b553f] max-w-md mx-auto text-lg">
            Click any cup to learn its story
          </p>
        </div>

        {/* Grid of Clickable Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coffeeTypes.map((coffee, index) => (
            <motion.div
              key={coffee.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              whileHover={{ y: -12 }}
              onClick={() => setSelectedCoffee(coffee)}
              className="group cursor-pointer bg-[#f9f1e1] border border-[#8b5a2b]/50 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-500 active:scale-[0.985]"
            >
              <div className="h-2 bg-[#3c2a1f]" />

              <div className="p-8 pb-10">
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="w-16 h-16 flex items-center justify-center text-5xl transition-transform duration-500 group-hover:scale-125"
                    style={{ color: coffee.color }}
                  >
                    {coffee.icon}
                  </div>
                  <div>
                    <h3 
                      className="font-serif text-3xl text-[#3c2a1f] tracking-tight"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {coffee.name}
                    </h3>
                    <div className="h-px w-12 bg-[#8b5a2b]/70 mt-1" />
                  </div>
                </div>

                <p className="text-[#4a3a2b] leading-relaxed text-[15.2px] mb-6">
                  {coffee.shortDesc}
                </p>

                <div className="text-xs uppercase tracking-widest text-[#8b5a2b]/70 font-serif border-t border-[#8b5a2b]/30 pt-4">
                  Click to discover →
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Vintage Overlay Modal */}
      <AnimatePresence>
        {selectedCoffee && (
          <div 
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedCoffee(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4 }}
              className="bg-[#f9f1e1] border-4 border-[#3c2a1f] max-w-lg w-full max-h-[90vh] overflow-auto shadow-2xl relative"
              onClick={e => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-[#f9f1e1] border-b-2 border-[#3c2a1f] p-6 flex items-center justify-between z-10">
                <div className="flex items-center gap-4">
                  <span className="text-6xl" style={{ color: selectedCoffee.color }}>
                    {selectedCoffee.icon}
                  </span>
                  <div>
                    <h3 className="font-serif text-4xl text-[#3c2a1f]" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {selectedCoffee.name}
                    </h3>
                    <p className="text-[#8b5a2b] text-sm tracking-widest">{selectedCoffee.origin}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedCoffee(null)}
                  className="text-[#3c2a1f] hover:text-red-800 transition-colors p-1"
                >
                  <X size={28} />
                </button>
              </div>

              <div className="p-8 space-y-8">
                <p className="text-[#4a3a2b] leading-relaxed text-lg">
                  {selectedCoffee.description}
                </p>

                <div>
                  <h4 className="font-serif text-xl text-[#3c2a1f] mb-3 border-b border-[#8b5a2b]/40 pb-1">Did You Know?</h4>
                  <div className="whitespace-pre-line text-[#4a3a2b] leading-relaxed">
                    {selectedCoffee.facts}
                  </div>
                </div>

                <div className="bg-[#f5e8d3] p-5 border-l-4 border-[#8b5a2b]">
                  <p className="text-sm uppercase tracking-widest text-[#6b553f]">Strength</p>
                  <p className="text-2xl font-serif text-[#3c2a1f]">{selectedCoffee.strength}</p>
                </div>
              </div>

              <div className="p-6 border-t border-[#8b5a2b]/40 text-center">
                <p className="text-xs font-serif tracking-[2px] text-[#8b5a2b]">— BREWED WITH HISTORY —</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}