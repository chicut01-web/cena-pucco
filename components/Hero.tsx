import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <header ref={ref} className="relative w-full min-h-[60vh] flex flex-col items-center justify-center text-center overflow-hidden pt-24 pb-10">
      
      {/* --- HANGING DECORATIONS ANIMATION --- */}
      <div className="absolute top-0 inset-x-0 h-full overflow-hidden pointer-events-none z-0">
         {/* Left Ornament */}
         <div className="absolute -top-10 left-[15%] w-[1px] h-[35vh] bg-gradient-to-b from-transparent via-gold/30 to-gold/60 origin-top animate-swing-slow opacity-80">
             <div className="absolute bottom-0 -left-[5px] w-[11px] h-[11px] rounded-full bg-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.8)] ring-1 ring-white/30"></div>
         </div>
         
         {/* Right Ornament */}
         <div className="absolute -top-16 right-[15%] w-[1px] h-[45vh] bg-gradient-to-b from-transparent via-gold/30 to-gold/60 origin-top animate-swing-slower opacity-80 delay-1000">
             <div className="absolute bottom-0 -left-[6px] w-[13px] h-[13px] rounded-full bg-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.8)] ring-1 ring-white/30"></div>
         </div>

         {/* Center-Right Small */}
         <div className="absolute -top-5 right-[35%] w-[1px] h-[25vh] bg-gradient-to-b from-transparent via-gold/20 to-gold/40 origin-top animate-swing-slow opacity-50 delay-500">
             <div className="absolute bottom-0 -left-[3px] w-[7px] h-[7px] rounded-full bg-gold shadow-[0_0_10px_gold]"></div>
         </div>
      </div>

      {/* Glow behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-gold/5 rounded-full blur-[90px] pointer-events-none"></div>

      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="z-10 relative"
      >
        <motion.div 
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 2.8 }}
            className="inline-block mb-8"
        >
             <div className="relative">
                 <span className="py-1.5 px-5 rounded-full border border-gold/30 bg-[#0B1026]/40 backdrop-blur-md text-gold text-[11px] tracking-[0.3em] uppercase shadow-[0_0_20px_rgba(212,175,55,0.15)]">
                    24.12.2025
                 </span>
                 {/* Sparkles on the badge */}
                 <span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full blur-[1px] animate-pulse"></span>
                 <span className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-gold rounded-full blur-[1px] animate-pulse delay-75"></span>
             </div>
        </motion.div>
       
        <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
            className="text-5xl md:text-8xl font-serif text-white mb-4 drop-shadow-2xl leading-tight"
        >
          Cena della<br />
          <span className="relative inline-block mt-2">
            <span className="absolute -inset-1 blur-2xl bg-gold/10 rounded-full"></span>
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF8DC] to-[#D4AF37] font-bold italic animate-gradient-x bg-[length:200%_auto]">
              Vigilia
            </span>
          </span>
        </motion.h1>
        
        <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 3.5 }}
            className="h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto my-8"
        />
        
        <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3.8 }}
            className="text-slate-300 font-light text-lg max-w-xs mx-auto leading-relaxed tracking-wide"
        >
          Un viaggio culinario <br/> tra tradizione e mare.
        </motion.p>
      </motion.div>
      
      <style>{`
        @keyframes gradient-x {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
            animation: gradient-x 3s ease infinite;
        }
        @keyframes swing-slow {
            0% { transform: rotate(2deg); }
            100% { transform: rotate(-2deg); }
        }
        .animate-swing-slow {
            animation: swing-slow 4s ease-in-out infinite alternate;
        }
        @keyframes swing-slower {
            0% { transform: rotate(1.5deg); }
            100% { transform: rotate(-1.5deg); }
        }
        .animate-swing-slower {
            animation: swing-slower 6s ease-in-out infinite alternate;
        }
      `}</style>
    </header>
  );
};

export default Hero;