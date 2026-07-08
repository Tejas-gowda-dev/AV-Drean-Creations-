import { useState } from 'react';
import { PORTFOLIO } from '../data';
import { Photo } from '../types';
import Lightbox from '../components/Lightbox';
import SEOHelper from '../components/SEOHelper';
import { Heart, Calendar, CheckCircle2, MapPin, Sparkles } from 'lucide-react';

export default function PreWeddingPage() {
  const [lightboxPhoto, setLightboxPhoto] = useState<Photo | null>(null);

  const preWeddingPhotos = PORTFOLIO.filter(p => p.category === 'pre-wedding' || p.category === 'engagement');

  const handleNext = () => {
    if (!lightboxPhoto) return;
    const idx = preWeddingPhotos.findIndex(p => p.id === lightboxPhoto.id);
    const nextIdx = (idx + 1) % preWeddingPhotos.length;
    setLightboxPhoto(preWeddingPhotos[nextIdx]);
  };

  const handlePrev = () => {
    if (!lightboxPhoto) return;
    const idx = preWeddingPhotos.findIndex(p => p.id === lightboxPhoto.id);
    const prevIdx = (idx - 1 + preWeddingPhotos.length) % preWeddingPhotos.length;
    setLightboxPhoto(preWeddingPhotos[prevIdx]);
  };

  const preWeddingLocations = [
    { name: 'Mysore Palace Grounds', desc: 'Heritage structures, royal pillars, neoclassical architecture, and majestic arches.', dist: 'Mysore' },
    { name: 'Nandi Hills Sunrise', desc: 'Beautiful misty pathways, early morning orange flares, and winding cliff curves.', dist: 'Bangalore Outskirts' },
    { name: 'Elements Studio', desc: 'Curated premium photography sets with custom neon lights, vintage backdrops, and artificial water canals.', dist: 'Bangalore' },
    { name: 'Karanji Lake & Backwaters', desc: 'Serene sunset silhouettes, calm water bodies, wooden boats, and lush bamboo forests.', dist: 'Mysore' }
  ];

  return (
    <div id="pre-wedding-page-container" className="pt-24 bg-white text-neutral-900">
      <SEOHelper
        title="Pre Wedding Photography in Bangalore | AV Dream Creations"
        description="Capture your authentic couple narrative with our creative pre-wedding photography across Bangalore, Mysore, and scenic spots in Karnataka. Fine-art shoots tailored for you."
      />

      {/* Hero Banner */}
      <div className="relative py-28 bg-neutral-950 text-white overflow-hidden text-center">
        <img
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1920&auto=format&fit=crop"
          alt="Pre-wedding creative photography session"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105 transition-transform duration-700 hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/40"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-gold">
            <Heart className="w-4.5 h-4.5 text-gold fill-gold" /> Cinematic Couple Narrative Sessions
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-light tracking-tight">
            Creative Pre Wedding Photography in <span className="italic text-gold">Bangalore</span>
          </h1>
          <p className="font-sans text-neutral-300 max-w-2xl mx-auto text-xs md:text-sm leading-relaxed">
            Your love story is original, emotional, and deeply personal. We design immersive, cinematic couple portraits that showcase your genuine friendship, effortless glances, and warm anticipation.
          </p>
        </div>
      </div>

      {/* Conceptual Shoot planning section */}
      <section className="py-16 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <h2 className="font-serif text-2xl md:text-3xl font-light text-neutral-900">
                Storyboards Customized For You
              </h2>
              <p className="font-sans text-neutral-600 text-xs md:text-sm leading-relaxed">
                We don’t believe in cookie-cutter pre-wedding photos where every couple does the exact same poses at the exact same location. We sit down with you to sketch your journey, hobbies, or aesthetic tastes first.
              </p>
              <p className="font-sans text-neutral-600 text-xs md:text-sm leading-relaxed">
                Whether you dream of a retro vintage style in a heritage Mysore mansion, a cozy early morning casual picnic on Nandi Hills, or a dramatic sunset silhouette by a lake, we translate your ideas into premium digital frames.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-light text-neutral-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-gold" /> Premium Pre-Wedding Locations:
              </h3>
              <div className="grid grid-cols-1 gap-3.5">
                {preWeddingLocations.map((loc, i) => (
                  <div key={i} className="bg-white p-4 rounded-sm border border-neutral-200/60 shadow-sm">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif text-sm font-semibold text-neutral-900">{loc.name}</h4>
                      <span className="text-[10px] font-sans font-bold uppercase text-gold bg-gold/10 px-2.5 py-0.5 rounded-sm flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {loc.dist}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-500 font-sans mt-1.5 leading-relaxed">{loc.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prewedding Photo Showcase */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-gold mb-1 font-sans">
              The Portrait Collections
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-light text-neutral-900">
              Creative Couple Portraits & <span className="italic text-gold">Whispers</span>
            </h2>
            <p className="font-sans text-neutral-500 text-xs md:text-sm mt-2">
              Explore how we translate raw couple chemistry into visual masterpieces.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {preWeddingPhotos.map((photo) => (
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

      {/* Subpage CTA */}
      <section className="py-16 bg-neutral-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="font-serif text-2xl md:text-4xl font-light text-white">
            Plan Your Dream Pre-Wedding Narrative
          </h2>
          <p className="font-sans text-neutral-400 text-xs md:text-sm max-w-lg mx-auto leading-relaxed">
            Every pre-wedding shoot package includes professional posing guidance, style/costume mood boards, cinematic color grading, and custom invitation teaser editing.
          </p>
          <a
            id="prewedding-page-cta"
            href="#/contact"
            className="inline-flex items-center gap-2 h-14 px-8 rounded-sm bg-brand-gradient hover:bg-brand-gradient-hover text-white font-bold font-sans text-xs uppercase tracking-widest transition-all cursor-pointer shadow-lg"
          >
            Schedule Shoot Consultation <Calendar className="w-4 h-4" />
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
