'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const historyEvents = [
  {
    year: "850",
    title: "The Legend Begins",
    place: "Ethiopia",
    description: "A young goat herder named Kaldi noticed his goats becoming energetic after eating bright red berries. The journey of coffee had begun.",
    icon: "🐐",
  },
  {
    year: "1000",
    title: "From Berries to Drink",
    place: "Arabian Peninsula",
    description: "Monks in Yemen roasted the beans and brewed the first coffee drink to stay awake during long prayers.",
    icon: "☕",
  },
  {
    year: "1450",
    title: "Coffee Houses Bloom",
    place: "Constantinople",
    description: "The world's first coffee houses opened in the Ottoman Empire. People gathered to discuss ideas, poetry, and politics.",
    icon: "🏛️",
  },
  {
    year: "1600",
    title: "Europe Awakens",
    place: "Venice & London",
    description: "Coffee reached Europe through traders. London’s coffee houses became known as 'Penny Universities' — a place where ideas flowed as freely as the brew.",
    icon: "📜",
  },
  {
    year: "1700",
    title: "The New World",
    place: "Caribbean & Americas",
    description: "Coffee plantations spread across the Americas. The drink that once fueled scholars now powered revolutions.",
    icon: "🌍",
  },
  {
    year: "Today",
    title: "A Global Ritual",
    place: "Every Corner of the World",
    description: "From tiny village cafés to grand espresso bars, coffee continues to bring people together, one warm cup at a time.",
    icon: "❤️",
  },
];

export default function History() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="history" className="relative py-24 bg-[#f5e8d3] overflow-hidden">
      {/* Old paper background with subtle texture */}
      <div className="absolute inset-0 bg-[url('/textures/old-parchment.jpg')] bg-cover opacity-40" />
      
      <div className="relative max-w-5xl mx-auto px-6">
        {/* Section Header - Vintage style */}
        <div className="text-center mb-16">
          <div className="inline-block border-t-2 border-b-2 border-[#4a2f1f] px-8 py-2 mb-4">
            <p className="font-serif text-sm tracking-[4px] text-[#5c4633]">CHAPTER I</p>
          </div>
          <h2 
            className="font-serif text-5xl md:text-6xl text-[#3c2a1f] tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The History of Coffee
          </h2>
          <div className="w-24 h-px bg-[#8b5a2b] mx-auto mt-6" />
        </div>

        {/* Timeline Container */}
        <div ref={ref} className="relative max-w-3xl mx-auto">
          
          {/* Vertical Ink Line */}
          <div className="absolute left-8 md:left-1/2 top-8 bottom-8 w-0.5 bg-[#8b5a2b]/30" />
          
          {/* Animated Drawing Line */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-8 md:left-1/2 top-8 w-0.5 bg-[#3c2a1f] origin-top"
          />

          {historyEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-16 md:mb-20 items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-5 h-5 -translate-x-1/2 bg-[#f5e8d3] border-4 border-[#3c2a1f] rounded-full z-10" />

              {/* Content Card - Old paper card style */}
              <div className={`w-full md:w-5/12 bg-[#f9f1e1] border border-[#8b5a2b]/40 p-8 shadow-md 
                              relative before:absolute before:inset-0 before:bg-[radial-gradient(#d4b99f_0.8px,transparent_1px)] 
                              before:bg-[length:4px_4px] before:opacity-30`}>
                
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{event.icon}</span>
                  <div>
                    <span className="font-serif text-4xl text-[#3c2a1f] tracking-tighter">{event.year}</span>
                  </div>
                </div>

                <h3 className="font-serif text-2xl text-[#3c2a1f] mb-2 leading-tight">
                  {event.title}
                </h3>
                <p className="text-[#6b553f] italic mb-4 text-sm tracking-wide">{event.place}</p>
                
                <p className="text-[#4a3a2b] leading-relaxed text-[15.5px]">
                  {event.description}
                </p>

                {/* Decorative bottom line */}
                <div className="h-px w-12 bg-[#8b5a2b]/60 mt-6" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative bottom divider */}
      <div className="mt-20 flex justify-center">
        <div className="w-64 h-px bg-gradient-to-r from-transparent via-[#8b5a2b] to-transparent" />
      </div>
    </section>
  );
}