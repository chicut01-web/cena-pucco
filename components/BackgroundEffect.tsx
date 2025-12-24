import React from 'react';

const BackgroundEffect: React.FC = () => {
  // Generate falling snow/gold dust particles
  const particles = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    duration: 15 + Math.random() * 20, // Slower fall for elegance
    delay: -Math.random() * 20,
    size: Math.random() * 3 + 1,
    opacity: Math.random() * 0.4 + 0.1,
    isGold: Math.random() > 0.8 // 20% chance of being gold
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#050814]">
        {/* Deep Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050814] via-[#0B1026] to-[#02040a]"></div>

        {/* ABSTRACT PLATE / CHARGER PLATE EFFECT (Kept as requested) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] sm:w-[80vh] sm:h-[80vh] opacity-20">
            {/* Outer Rim */}
            <div className="absolute inset-0 rounded-full border border-gold/20 animate-[spin_120s_linear_infinite]"></div>
            {/* Middle Rim */}
            <div className="absolute inset-[5%] rounded-full border border-dashed border-gold/30 animate-[spin_80s_linear_infinite_reverse] opacity-50"></div>
            {/* Inner Rim */}
            <div className="absolute inset-[15%] rounded-full border border-gold/10 animate-[spin_60s_linear_infinite]"></div>
            {/* Center Glow */}
            <div className="absolute inset-[20%] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.08)_0%,transparent_70%)] blur-3xl"></div>
        </div>
        
        {/* FALLING SNOW / MAGIC DUST */}
        {particles.map((p) => (
            <div
                key={p.id}
                className={`absolute rounded-full shadow-[0_0_4px_${p.isGold ? '#D4AF37' : 'white'}]`}
                style={{
                    backgroundColor: p.isGold ? '#D4AF37' : 'white',
                    left: p.left,
                    top: '-10px', // Start above screen
                    width: `${p.size}px`,
                    height: `${p.size}px`,
                    opacity: p.opacity,
                    animation: `fall ${p.duration}s linear infinite, sway ${p.duration * 0.5}s ease-in-out infinite alternate`,
                    animationDelay: `${p.delay}s`
                }}
            />
        ))}
        
        {/* Vignette Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-70"></div>
        
        <style>{`
            @keyframes fall {
                0% { transform: translateY(-10vh); }
                100% { transform: translateY(110vh); }
            }
            @keyframes sway {
                0% { margin-left: -15px; }
                100% { margin-left: 15px; }
            }
        `}</style>
    </div>
  );
};

export default BackgroundEffect;