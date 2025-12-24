import React from 'react';
import { motion } from 'framer-motion';

const IntroLoader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050814] text-gold"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, pointerEvents: "none" }}
      transition={{ duration: 0.8, delay: 2.5, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
    >
      <div className="relative overflow-hidden">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-serif italic mb-2 text-center"
        >
          Vigilia
        </motion.h1>
      </div>

      <div className="relative overflow-hidden">
        <motion.p
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-sm tracking-[0.4em] uppercase text-slate-400"
        >
          24 Dicembre 2025
        </motion.p>
      </div>

      {/* Progress Line */}
      <div className="mt-8 h-[1px] w-32 bg-slate-800 overflow-hidden relative">
        <motion.div
          className="absolute inset-0 bg-gold"
          initial={{ x: '-100%' }}
          animate={{ x: '0%' }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </div>
      
      {/* Light flash on finish */}
      <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: [0, 1, 0] }}
         transition={{ duration: 0.5, delay: 2 }}
         className="absolute inset-0 bg-white pointer-events-none mix-blend-overlay"
      />
    </motion.div>
  );
};

export default IntroLoader;