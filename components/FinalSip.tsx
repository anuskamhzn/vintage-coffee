'use client';

import { motion } from 'framer-motion';

export default function FinalSip() {
  return (
    <section className="relative py-28 bg-[#f5e8d3] border-t-2 border-[#3c2a1f]">
      <div className="absolute inset-0 bg-[url('/textures/old-parchment.jpg')] bg-cover opacity-40" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        
        {/* Decorative Top Divider */}
        <div className="mx-auto w-32 h-px bg-[#8b5a2b] mb-12" />

        {/* Big Coffee Cup Illustration */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mx-auto mb-10 text-[180px] leading-none"
        >
          ☕
        </motion.div>

        <h2 
          className="font-serif text-5xl md:text-6xl text-[#3c2a1f] tracking-tighter mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          The Last Sip
        </h2>

        <p className="text-[#6b553f] text-xl max-w-md mx-auto leading-relaxed mb-12">
          Thank you for joining this gentle journey through the world of coffee. 
          May every cup you brew bring warmth, comfort, and a little bit of history.
        </p>

        {/* Inspirational Quote */}
        <div className="max-w-lg mx-auto mb-16">
          <p className="font-serif italic text-2xl leading-tight text-[#4a3a2b]">
            “A cup of coffee shared with a friend is happiness tasted and time well spent.”
          </p>
          <p className="text-[#8b5a2b] text-sm mt-6 tracking-widest">— Anonymous, Old Café Wisdom</p>
        </div>

        {/* Final Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-12 py-4 border-2 border-[#3c2a1f] text-[#3c2a1f] font-serif text-lg hover:bg-[#3c2a1f] hover:text-[#f5e8d3] transition-all"
          >
            Begin the Journey Again
          </motion.button>

          {/* <motion.a
            href="https://en.wikipedia.org/wiki/Coffee"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-12 py-4 border-2 border-[#8b5a2b] text-[#8b5a2b] font-serif text-lg hover:bg-[#8b5a2b] hover:text-[#f5e8d3] transition-all"
          >
            Learn More About Coffee
          </motion.a> */}
        </div>

        {/* Decorative Bottom Elements */}
        <div className="mt-20 flex justify-center gap-8 text-4xl opacity-40">
          <motion.span animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 6, repeat: Infinity }}>
            🫘
          </motion.span>
          <motion.span animate={{ rotate: [0, -12, 12, 0] }} transition={{ duration: 8, repeat: Infinity, delay: 2 }}>
            ☕
          </motion.span>
          <motion.span animate={{ rotate: [0, 15, -8, 0] }} transition={{ duration: 7, repeat: Infinity, delay: 4 }}>
            🫘
          </motion.span>
        </div>

        <p className="mt-16 text-xs tracking-widest text-[#8b5a2b]">
          BREWED WITH LOVE • KATHMANDU, 2026
        </p>
      </div>
    </section>
  );
}