import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO } from '../data';
import { Photo } from '../types';
import Lightbox from './Lightbox';
import { Sparkles, LayoutGrid, Calendar } from 'lucide-react';

export default function PortfolioPreview() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxPhoto, setLightboxPhoto] = useState<Photo | null>(null);

  const categories = [
    { label: 'All Work', id: 'all' },
    { label: 'Weddings', id: 'wedding' },
    { label: 'Pre-Wedding', id: 'pre-wedding' },
    { label: 'Bridal Portraits', id: 'bride' },
    { label: 'Engagement', id: 'engagement' },
    { label: 'Receptions', id: 'reception' },
    { label: 'House Warming', id: 'house-warming' },
    { label: 'Baby Shower', id: 'baby-shower' },
    { label: 'Birthdays', id: 'birthday' },
    { label: 'Corporate', id: 'corporate' },
  ];

  // Filter photos
  const filteredPhotos = selectedCategory === 'all'
    ? PORTFOLIO
    : PORTFOLIO.filter(photo => photo.category === selectedCategory);

  const openLightbox = (photo: Photo) => {
    setLightboxPhoto(photo);
  };

  const closeLightbox = () => {
    setLightboxPhoto(null);
  };

  const handleNext = () => {
    if (!lightboxPhoto) return;
    const currentIndex = filteredPhotos.findIndex(p => p.id === lightboxPhoto.id);
    const nextIndex = (currentIndex + 1) % filteredPhotos.length;
    setLightboxPhoto(filteredPhotos[nextIndex]);
  };

  const handlePrev = () => {
    if (!lightboxPhoto) return;
    const currentIndex = filteredPhotos.findIndex(p => p.id === lightboxPhoto.id);
    const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setLightboxPhoto(filteredPhotos[prevIndex]);
  };

  return (
    <section id="portfolio-preview-section" className="py-24 bg-white text-neutral-900 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-gold mb-2 font-sans">
            Captured True Love Stories
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-neutral-900 mb-4 tracking-tight leading-tight">
            Our Fine-Art Masterpiece <span className="italic text-gold">Gallery</span>
          </h2>
          <p className="font-sans text-neutral-600 text-sm md:text-base leading-relaxed">
            Filter through our curated visual archive. Every single image represents a genuine family, a real traditional ritual, and a customized color-graded masterpiece.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`cat-filter-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-sm text-[10px] uppercase tracking-widest font-sans font-bold transition-all duration-300 border cursor-pointer ${
                  isActive
                    ? 'bg-brand-gradient text-white border-transparent shadow-md font-bold'
                    : 'bg-neutral-50 text-neutral-600 border-neutral-200 hover:bg-neutral-100 hover:border-neutral-300'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo) => (
              <motion.button
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={photo.id}
                id={`photo-thumb-${photo.id}`}
                onClick={() => openLightbox(photo)}
                className="group relative h-96 w-full rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer border border-neutral-100 text-left"
              >
                {/* Image */}
                <img
                  src={photo.url}
                  alt={photo.alt}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark Vignette Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Info Text */}
                <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] uppercase tracking-widest font-sans text-gold font-bold mb-1 block">
                    {photo.category.replace('-', ' ')}
                  </span>
                  <h3 className="font-serif text-lg md:text-xl font-medium tracking-tight mb-2 group-hover:text-gold transition-colors">
                    {photo.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-neutral-300 font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                    <span>{photo.location}</span>
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredPhotos.length === 0 && (
          <div className="text-center py-16 bg-neutral-50 rounded-sm border border-dashed border-neutral-200">
            <LayoutGrid className="w-12 h-12 text-neutral-300 mx-auto mb-4" />
            <p className="font-serif text-lg text-neutral-600">No samples available in this filter yet.</p>
            <p className="font-sans text-xs text-neutral-400 mt-1">Please book your date to help us compile one!</p>
          </div>
        )}

        {/* Explore More Button for SPA navigation */}
        <div className="text-center mt-12">
          <a
            id="portfolio-cta-viewall"
            href="#contact"
            className="inline-flex items-center gap-2 h-12 px-8 rounded-sm bg-brand-gradient hover:bg-brand-gradient-hover text-white font-sans text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-lg cursor-pointer"
          >
            Explore Complete Gallery <Sparkles className="w-4 h-4" />
          </a>
        </div>

        {/* Lightbox Trigger */}
        <Lightbox
          photo={lightboxPhoto}
          onClose={closeLightbox}
          onNext={handleNext}
          onPrev={handlePrev}
        />

      </div>
    </section>
  );
}
