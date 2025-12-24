import React, { useState } from 'react';
import { DishCategory } from '../types';
import { Share2, UtensilsCrossed, Fish, Wheat, ScrollText, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  activeCategory: DishCategory | 'All';
  setActiveCategory: (category: DishCategory | 'All') => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeCategory, setActiveCategory }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: 'Menu Vigilia di Natale 2025',
      text: 'Scopri il menu della nostra cena della Vigilia!',
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // Share canceled
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const navItems = [
    { id: 'All', label: 'Menu', icon: ScrollText },
    { id: 'Antipasti', label: 'Antipasti', icon: Fish },
    { id: 'Primo', label: 'Primo', icon: Wheat },
    { id: 'Secondi', label: 'Secondi', icon: UtensilsCrossed },
  ];

  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto relative flex items-center gap-1 p-1.5 rounded-full bg-[#0B1026]/80 backdrop-blur-2xl border border-white/10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.6)] overflow-hidden">
        
        {/* Glass reflection top edge */}
        <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"></div>

        {/* Category Links */}
        {navItems.map((item) => {
          const isActive = activeCategory === item.id;
          const Icon = item.icon;
          
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveCategory(item.id as any)}
              className="relative z-10 flex items-center justify-center px-4 py-3 rounded-full transition-colors duration-300 group outline-none"
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              {isActive && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] via-[#F3E5AB] to-[#C5A028] rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              <div className="relative flex items-center gap-2 z-20">
                  <Icon 
                    size={20} 
                    strokeWidth={isActive ? 2.5 : 1.5}
                    className={`transition-colors duration-300 ${isActive ? 'text-[#0B1026]' : 'text-slate-400 group-hover:text-slate-200'}`}
                  />
                  
                  <AnimatePresence>
                    {isActive && (
                        <motion.span
                            initial={{ width: 0, opacity: 0, marginLeft: 0 }}
                            animate={{ width: "auto", opacity: 1, marginLeft: 6 }}
                            exit={{ width: 0, opacity: 0, marginLeft: 0 }}
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            className="text-xs font-bold uppercase tracking-wider whitespace-nowrap overflow-hidden text-[#0B1026]"
                        >
                            {item.label}
                        </motion.span>
                    )}
                  </AnimatePresence>
              </div>
            </button>
          );
        })}

        {/* Separator */}
        <div className="w-px h-6 bg-white/10 mx-1 shrink-0"></div>

        {/* Share Button (Circular, detached visual style) */}
        <motion.button
          type="button"
          onClick={handleShare}
          whileTap={{ scale: 0.9 }}
          className="relative flex items-center justify-center w-11 h-11 rounded-full text-gold hover:bg-white/5 transition-colors shrink-0"
          aria-label="Condividi"
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          <AnimatePresence mode='wait'>
             {copied ? (
                 <motion.div
                    key="check"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                 >
                     <Check size={20} />
                 </motion.div>
             ) : (
                 <motion.div
                    key="share"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                 >
                     <Share2 size={20} />
                 </motion.div>
             )}
          </AnimatePresence>
        </motion.button>
      </nav>
    </div>
  );
};

export default Navbar;