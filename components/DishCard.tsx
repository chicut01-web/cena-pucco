import React from 'react';
import { Dish } from '../types';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

interface DishCardProps {
  dish: Dish;
  index: number;
  onClick: (dish: Dish) => void;
}

const DishCard: React.FC<DishCardProps> = ({ dish, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1, type: "spring", bounce: 0.3 }}
      className="relative w-full mb-12 group cursor-pointer"
      onClick={() => onClick(dish)}
    >
        {/* Connecting Line (for vertical flow visual) */}
        <div className="absolute left-1/2 -top-12 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/10 to-transparent -z-10 group-last:hidden"></div>

      <div className="relative overflow-hidden rounded-2xl bg-[#111827]/60 backdrop-blur-md border border-white/5 shadow-2xl transform transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-gold/10">
        
        {/* Image Area with Zoom Effect */}
        <div className="relative h-64 w-full overflow-hidden">
          <motion.img
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover opacity-90 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
            loading="lazy"
          />
          
          {/* Elegant Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1026] via-[#0B1026]/40 to-transparent" />
          
          {/* Top shine effect */}
          <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />

          {/* Click hint */}
          <div className="absolute bottom-3 right-3 bg-black/40 backdrop-blur-sm p-2 rounded-full text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
             <ArrowRight size={16} />
          </div>
        </div>

        {/* Floating Content */}
        <div className="relative px-6 pb-8 pt-2 -mt-12 text-center">
            <div className="inline-block p-4 rounded-xl bg-[#0B1026]/90 backdrop-blur-xl border border-gold/20 shadow-xl mb-4 transform transition-transform group-hover:-translate-y-2 duration-500">
                <h3 className="text-2xl font-serif text-white font-medium leading-none tracking-wide">
                    {dish.name}
                </h3>
            </div>

            {dish.category === 'Primo' && (
                <div className="absolute top-0 right-6 -mt-16 text-gold drop-shadow-[0_0_10px_rgba(212,175,55,0.8)] animate-pulse">
                    <Sparkles size={24} fill="currentColor" />
                </div>
            )}
            
            <p className="text-slate-300 text-sm font-light leading-relaxed max-w-[90%] mx-auto">
                {dish.description}
            </p>
            
            <p className="mt-4 text-xs text-gold/60 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Scopri di più
            </p>
        </div>
      </div>
      
      <style>{`
        @keyframes shine {
            100% { left: 125%; }
        }
        .animate-shine {
            animation: shine 1s;
        }
      `}</style>
    </motion.div>
  );
};

export default DishCard;