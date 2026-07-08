import { useState } from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO } from '../data';
import { Photo } from '../types';
import Lightbox from '../components/Lightbox';
import SEOHelper from '../components/SEOHelper';
import { Camera, Heart, CheckCircle2, Calendar, Sparkles } from 'lucide-react';

export default function WeddingPage() {
  const [lightboxPhoto, setLightboxPhoto] = useState<Photo | null>(null);

  const weddingPhotos = PORTFOLIO.filter(p => p.category === 'wedding' || p.category === 'reception' || p.category === 'bride');

  const handleNext = () => {
    if (!lightboxPhoto) return;
    const idx = weddingPhotos.findIndex(p => p.id === lightboxPhoto.id);
    const nextIdx = (idx + 1) % weddingPhotos.length;
    setLightboxPhoto(weddingPhotos[nextIdx]);
  };

  const handlePrev = () => {
    if (!lightboxPhoto) return;
    const idx = weddingPhotos.findIndex(p => p.id === lightboxPhoto.id);
    const prevIdx = (idx - 1 + weddingPhotos.length) % weddingPhotos.length;
    setLightboxPhoto(weddingPhotos[prevIdx]);
  };

  const weddingSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'serviceType': 'Wedding Photography',
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'AV Dream Creations'
    },
    'areaServed': ['Bangalore', 'Mysore', 'Mandya', 'Tumkur'],
    'description': 'Premium wedding photography and cinematic films capturing sacred rituals and emotional narratives.'
  };

  return (
    <div id="wedding-page-container" className="pt-24 bg-white text-neutral-900">
      <SEOHelper
        title="Wedding Photography in Bangalore | AV Dream Creations"
        description="Premium wedding photography, candid shoots, traditional Kannada rituals, grand receptions, and cinematic films by AV Dream Creations Bangalore. Capture your sacred vows eternally."
        schema={weddingSchema}
      />

      {/* Subpage Header Banner */}
      <div className="relative py-28 bg-neutral-950 text-white overflow-hidden text-center">
        <img
          src="https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=1920&auto=format&fit=crop"
          alt="Wedding photography banner"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105 transition-transform duration-700 hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/40"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-gold">
            <Heart className="w-4.5 h-4.5 text-gold fill-gold" /> Preservation of Auspicious Vows
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-light tracking-tight">
            Wedding Photography in <span className="italic text-gold">Bangalore</span>
          </h1>
          <p className="font-sans text-neutral-300 max-w-2xl mx-auto text-xs md:text-sm leading-relaxed">
            Every ritual is a sacred bond. We photograph your Kannada wedding, South Indian Muhurtham, and Grand Reception with deep reverence, capturing the authentic warmth, raw laughter, and quiet emotional sighs.
          </p>
        </div>
      </div>

      {/* Narrative Section */}
      <section className="py-16 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-neutral-900">
                Emotional & Authentic Storytelling
              </h2>
              <p className="font-sans text-neutral-600 text-xs md:text-sm leading-relaxed">
                We believe your wedding photography shouldn’t feel like a forced commercial assignment. Instead of directing stiff poses that hide your natural sparkle, our creators blend invisibly into the family.
              </p>
              <p className="font-sans text-neutral-600 text-xs md:text-sm leading-relaxed">
                Whether it is the exchange of the sacred Mangalsutra, the vibrant fun of your Haldi ceremony, or the emotional steps of Saptapadi vows, we preserve the true mood, the golden ambient lighting, and the genuine skin tones.
              </p>
            </div>
            <div className="bg-white p-6 rounded-sm border border-neutral-200/60 shadow-sm space-y-4">
              <h3 className="font-serif text-lg font-light text-neutral-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-gold" /> Included in Every Wedding Shoot:
              </h3>
              <ul className="space-y-2.5 text-xs text-neutral-600 font-sans">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gold" /> High-End Full-Frame Sony & Canon Cinema Cameras</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gold" /> Multi-Angle Coverage (Candid + Traditional specialists)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gold" /> Fine-Art Color Retouching (No unedited delivery gaps)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gold" /> Lay-Flat, Premium Acrylic Cover Coffee Table Albums</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gold" /> Fast Highlight Reels edited for social sharing in 3 Days</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Specific Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-gold mb-1 font-sans">
              The Wedding Portfolio
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-light text-neutral-900">
              Vows Rendered in <span className="italic text-gold">Fine-Art</span> Detail
            </h2>
            <p className="font-sans text-neutral-500 text-xs md:text-sm mt-2">
              Browse authentic wedding couples, beautiful bridal details, and majestic reception entries from our physical Bangalore collections.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {weddingPhotos.map((photo) => (
              <button
                key={photo.id}
                onClick={() => setLightboxPhoto(photo)}
                className="group relative h-96 w-full rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer border border-neutral-100 text-left"
              >
                <img
                  src={photo.url}
                  alt={photo.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] uppercase tracking-widest font-sans text-gold font-bold block mb-1">{photo.category}</span>
                  <h3 className="font-serif text-lg font-medium">{photo.title}</h3>
                  <p className="text-xs text-neutral-300 font-mono mt-1 opacity-0 group-hover:opacity-100 transition-opacity">{photo.location}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA block */}
      <section className="py-16 bg-neutral-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="font-serif text-2xl md:text-4xl font-medium text-white">
            Secure Your Complete Wedding Production
          </h2>
          <p className="font-sans text-neutral-400 text-xs md:text-sm max-w-lg mx-auto leading-relaxed">
            Whether you want a simple intimate family pooja or a grand palace-tier production, we formulate the perfect visual layout for you. Get custom quotes in 30 minutes.
          </p>
          <a
            id="wedding-page-cta"
            href="#/contact"
            className="inline-flex items-center gap-2 h-14 px-8 rounded-sm bg-brand-gradient hover:bg-brand-gradient-hover text-white font-bold font-sans text-xs uppercase tracking-widest transition-all cursor-pointer shadow-lg"
          >
            Request Customized Proposal <Calendar className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        photo={lightboxPhoto}
        onClose={() => setLightboxPhoto(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
}
