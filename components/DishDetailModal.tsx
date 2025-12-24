import React from 'react';
import { Dish } from '../types';
import { motion } from 'framer-motion';
import { X, ChefHat, Leaf, Share2 } from 'lucide-react';

interface DishDetailModalProps {
  dish: Dish;
  onClose: () => void;
}

const DishDetailModal: React.FC<DishDetailModalProps> = ({ dish, onClose }) => {
  
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: dish.name,
          text: `Non vedo l'ora di assaggiare: ${dish.name}! #Vigilia2025`,
          url: window.location.href
        });
      } catch (err) {}
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center sm:px-4">
      
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
      />

      {/* Modal Content */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-lg bg-[#0B1026] text-white rounded-t-[30px] sm:rounded-[30px] overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
      >
        
        {/* Close Button */}
        <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-black/30 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors"
        >
            <X size={24} />
        </button>

        {/* Image Header */}
        <div className="relative h-64 sm:h-72 shrink-0">
             <img 
                src={dish.image} 
                alt={dish.name} 
                className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0B1026] via-transparent to-transparent"></div>
        </div>

        {/* Content Scrollable Area */}
        <div className="flex-1 overflow-y-auto p-6 pt-2 pb-8 custom-scrollbar">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gold border border-gold/30 px-2 py-1 rounded-full bg-gold/5">
                        {dish.category}
                    </span>
                    <button onClick={handleShare} className="text-slate-400 hover:text-gold">
                        <Share2 size={20} />
                    </button>
                </div>

                <h2 className="text-3xl font-serif text-white mb-4 leading-tight">
                    {dish.name}
                </h2>

                <p className="text-slate-300 font-light text-lg mb-8 leading-relaxed">
                    {dish.description}
                </p>

                {/* Ingredients */}
                {dish.ingredients && (
                    <div className="mb-8">
                        <h3 className="flex items-center gap-2 text-gold font-serif text-lg mb-3">
                            <Leaf size={18} /> Ingredienti Principali
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {dish.ingredients.map((ing, i) => (
                                <span key={i} className="text-sm text-slate-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                                    {ing}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Chef Note */}
                {dish.curiosity && (
                    <div className="mb-4">
                        <h3 className="flex items-center gap-2 text-slate-400 font-serif italic text-md mb-2">
                            <ChefHat size={16} /> Curiosità dello Chef
                        </h3>
                        <p className="text-slate-400 text-sm italic leading-relaxed">
                            "{dish.curiosity}"
                        </p>
                    </div>
                )}
            </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default DishDetailModal;