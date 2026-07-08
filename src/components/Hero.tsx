import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigate: (route: string) => void;
}

const BACKGROUND_IMAGES = [
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1920&auto=format&fit=crop"
];

export default function Hero({ onNavigate }: HeroProps) {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 5000); // changes every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero-section"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-neutral-950"
    >
      {/* Background Image with beautiful cinematic dark overlay and motion transition */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentIdx}
            src={BACKGROUND_IMAGES[currentIdx]}
            alt="Wedding photography bangalore"
            referrerPolicy="no-referrer"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 0.65, scale: 1.02 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-neutral-950/60 z-10"></div>
        
        {/* Fine-art geometric frame overlay */}
        <div className="absolute inset-8 border border-white/5 pointer-events-none hidden md:block rounded-2xl z-10"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center text-white space-y-6 md:space-y-8">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-light tracking-tight leading-[1.1] text-white">
            Your Wedding Story <br className="hidden md:inline" />
            Deserves <span className="font-normal italic text-gold">Timeless Memories</span>
          </h1>
          <p className="font-sans text-neutral-300 max-w-2xl mx-auto text-xs sm:text-sm md:text-base tracking-widest leading-relaxed">
            CAPTURING THE SOUL OF YOUR CELEBRATION ACROSS BANGALORE & KARNATAKA WITH AN EMOTIONAL LENS.
          </p>
        </motion.div>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
        >
          <button
            id="hero-cta-quote"
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto bg-brand-gradient hover:bg-brand-gradient-hover text-white font-bold text-xs uppercase tracking-widest px-8 py-5 transition-all duration-300 shadow-lg cursor-pointer h-14 flex items-center justify-center gap-2 rounded-sm"
          >
            Get Free Quote <ArrowRight className="w-4 h-4" />
          </button>
          
          <button
            id="hero-cta-portfolio"
            onClick={() => onNavigate('films')}
            className="w-full sm:w-auto border border-white/40 backdrop-blur-md hover:bg-white/10 text-white font-bold text-xs uppercase tracking-widest px-8 py-5 transition-all duration-300 cursor-pointer h-14 flex items-center justify-center gap-2 rounded-sm"
          >
            <Calendar className="w-4 h-4" /> Watch Film
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-neutral-400"
        >
          <span className="h-8 w-[1px] bg-gradient-to-b from-white to-transparent animate-pulse"></span>
        </motion.div>

      </div>
    </section>
  );
}
