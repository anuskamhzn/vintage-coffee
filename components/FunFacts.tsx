'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const funFacts = [
  {
    front: "Did you know?",
    back: "Coffee was once banned in Mecca in 1511 because leaders thought it made people too alert and talkative.",
    icon: "🕌",
  },
  {
    front: "The World’s Most Expensive Coffee",
    back: "Kopi Luwak coffee can cost up to $600 per pound. It’s made from beans eaten and digested by the Asian palm civet.",
    icon: "🐾",
  },
  {
    front: "Coffee & Productivity",
    back: "The average office worker drinks 3 cups of coffee per day. Americans consume 400 million cups daily.",
    icon: "📊",
  },
  {
    front: "Finland Leads the World",
    back: "People in Finland drink the most coffee per person — about 12 kg (26 lbs) of coffee beans every year.",
    icon: "❄️",
  },
  {
    front: "Coffee Cherries",
    back: "Coffee beans are actually seeds of a bright red fruit called a coffee cherry. Each cherry usually contains two beans.",
    icon: "🍒",
  },
  {
    front: "First Coffee House",
    back: "The world’s first coffee house opened in Constantinople (now Istanbul) in 1475. It was called Kiva Han.",
    icon: "🏛️",
  },
  {
    front: "Decaf Discovery",
    back: "Decaffeinated coffee was invented by accident in 1903 when a shipment of beans got soaked in seawater during a storm.",
    icon: "🌊",
  },
  {
    front: " Beethoven’s Ritual",
    back: "Ludwig van Beethoven counted exactly 60 coffee beans for each cup he brewed — he was very particular about his coffee.",
    icon: "🎼",
  },
];

export default function FunFacts() {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleFlip = (index: number) => {
    if (flippedCards.includes(index)) {
      setFlippedCards(flippedCards.filter(i => i !== index));
    } else {
      setFlippedCards([...flippedCards, index]);
    }
  };

  return (
    <section className="relative py-24 bg-[#f5e8d3] border-t border-[#8b5a2b]/30">
      <div className="absolute inset-0 bg-[url('/textures/old-parchment.jpg')] bg-cover opacity-30 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Vintage Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 border-t-2 border-b-2 border-[#4a2f1f] px-10 py-2 mb-6">
            <span className="text-[#8b5a2b]">📜</span>
            <p className="font-serif text-sm tracking-[3px] text-[#5c4633]">CHAPTER III</p>
            <span className="text-[#8b5a2b]">📜</span>
          </div>
          
          <h2 
            className="font-serif text-5xl md:text-6xl text-[#3c2a1f] tracking-tighter"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Coffee Curiosities
          </h2>
          <p className="mt-4 text-[#6b553f] max-w-md mx-auto text-lg">
            Flip the old library cards to reveal surprising facts
          </p>
        </div>

        {/* Flip Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {funFacts.map((fact, index) => {
            const isFlipped = flippedCards.includes(index);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                onClick={() => toggleFlip(index)}
                className="cursor-pointer perspective-1000"
              >
                <div 
                  className={`relative w-full h-80 transition-transform duration-700 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Front Side - Vintage Library Card */}
                  <div className="absolute inset-0 backface-hidden bg-[#f9f1e1] border-2 border-[#3c2a1f] shadow-md p-8 flex flex-col items-center justify-center text-center">
                    <div className="text-6xl mb-6">{fact.icon}</div>
                    
                    <div className="font-serif text-2xl leading-tight text-[#3c2a1f] mb-8" 
                         style={{ fontFamily: "'Playfair Display', serif" }}>
                      {fact.front}
                    </div>

                    <div className="text-xs uppercase tracking-widest border border-[#8b5a2b]/60 text-[#8b5a2b] px-6 py-2">
                      Flip to reveal
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#f9f1e1] border-2 border-[#3c2a1f] shadow-md p-8 flex flex-col justify-center">
                    <div className="text-5xl mb-6 text-center">{fact.icon}</div>
                    
                    <p className="text-[#4a3a2b] leading-relaxed text-[15.5px] text-center">
                      {fact.back}
                    </p>

                    <div className="mt-auto pt-6 text-center">
                      <span className="inline-block text-xs font-serif tracking-widest text-[#8b5a2b] border-b border-[#8b5a2b]/40 pb-1">
                        — A TRUE TALE —
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Decorative Bottom Note */}
        <div className="mt-20 text-center">
          <p className="font-serif italic text-[#6b553f] max-w-xs mx-auto">
            “The best stories are told over a cup of coffee.”
          </p>
          <div className="w-20 h-px bg-[#8b5a2b]/60 mx-auto mt-8" />
        </div>
      </div>
    </section>
  );
}