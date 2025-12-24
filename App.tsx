import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import DishCard from './components/DishCard';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import IntroLoader from './components/IntroLoader';
import BackgroundEffect from './components/BackgroundEffect';
import DishDetailModal from './components/DishDetailModal';
import { MENU_ITEMS, CATEGORIES } from './constants';
import { DishCategory, Dish } from './types';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<DishCategory | 'All'>('All');
  const [loading, setLoading] = useState(true);
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  // Prevent scrolling during loading or when modal is open
  useEffect(() => {
    if (loading || selectedDish) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [loading, selectedDish]);

  return (
    <>
      <AnimatePresence>
        {loading && <IntroLoader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      
      <AnimatePresence>
        {selectedDish && (
            <DishDetailModal 
                dish={selectedDish} 
                onClose={() => setSelectedDish(null)} 
            />
        )}
      </AnimatePresence>

      <div className="min-h-screen font-sans selection:bg-gold selection:text-midnight overflow-x-hidden">
        
        {/* The new "Magical" Background */}
        <BackgroundEffect />
        
        <div className="max-w-md mx-auto relative z-10 w-full min-h-screen flex flex-col">
          <Hero />

          {/* Menu Content */}
          <main className="flex-grow px-5 pb-32">
            {CATEGORIES.map((category) => {
              if (activeCategory !== 'All' && activeCategory !== category.id) return null;

              const categoryItems = MENU_ITEMS.filter(item => item.category === category.id);
              if (categoryItems.length === 0) return null;

              return (
                <div key={category.id} className="mb-2">
                   <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="flex flex-col items-center gap-2 mb-8 mt-4"
                   >
                      <span className="text-[10px] uppercase tracking-[0.3em] text-gold/60">Portata</span>
                      <h2 className="text-3xl font-serif text-white text-center">
                        {category.label}
                      </h2>
                      <div className="w-12 h-0.5 bg-gold/30 rounded-full mt-2"></div>
                   </motion.div>

                  <div>
                    {categoryItems.map((dish, index) => (
                      <DishCard 
                        key={dish.id} 
                        dish={dish as any} 
                        index={index} 
                        onClick={setSelectedDish}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </main>

          <Footer />
          
          {/* Fixed Bottom Navigation */}
          <Navbar activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        </div>
      </div>
    </>
  );
};

export default App;